        var lastAddress = "";
        var lastAmount = "0";
        
               
               // This is very similar to handleSelection, but it requires different enough
        // output that it's easier to just make a new function for checking the address
        // from the content script.
        function checkAddr(reqData, callback){
            var returnData = '{"addrList": [';
            var i = 0, counter = 0;
            var reqI;
            for (i = 0; i < reqData.length; ++i) {
                address = reqData[i].address.replace(" ", "");
                reqI = reqData[i].i;
                //alert(address);
                var req = new XMLHttpRequest();
                var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "validateaddress", "params": ["' + address + '"] }';
                var server = localStorage["server"];
                var user = localStorage["user"];
                var pass = localStorage["pass"];
                var url = "http://" + user + ":" + pass + "@" + server;
                req.open("POST", url, false);
                req.onreadystatechange = function(aEvt){
                    if (req.readyState == 4) {
                        if (req.status == 200) {
                            var info = JSON.parse(req.responseText);
                            if (info.result.isvalid) {
                                if (counter > 0) 
                                    returnData = returnData + ',';
                                returnData = returnData + '{"address": "' + address + '", "i": ' + reqI + '}';
                                ++counter;
                                if (counter == reqData.length) // Wait till they're all done before sending results
                                {
                                    returnData = returnData + ']}';
                                    callback(returnData);
                                }
                            }
                        }
                    }
                };
                req.setRequestHeader("Content-type", "text/plain");
                req.send(params);
            }
        }
          
        function sendBTC_callback(request, sender, callback){
            if (request.action == 'sendCoins') {
                sendCoins(request.amount, request.address, callback);
            }
            if (request.action == 'getVars') {
                if (lastAmount == "") 
                    lastAmount = "0";
                var varData = '{"address": "' + lastAddress + '", "amount": ' + lastAmount + '}';
                callback(varData);
            }
            if (request.action == 'checkAddr') {
                checkAddr(request.addrList, callback);
            }
            if (request.action == 'sendBoxBTC') {
                lastAddress = request.address;
                chrome.tabs.executeScript(null, {
                    "file": "lib/send_bitcoins.js"
                });
            }
        }
        
        chrome.extension.onRequest.addListener(sendBTC_callback);
		
		handleOmnibox();
