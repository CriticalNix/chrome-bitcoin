function sendCoins(amount, address, callback){
  if (parseFloat(amount) > 0) {
    var req = new XMLHttpRequest();
    var params = '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["' + address + '",' + amount + '] }';
    var server = localStorage["server"];
    var user = localStorage["user"];
    var pass = localStorage["pass"];
    var url = "http://" + user + ":" + pass + "@" + server;
    req.open("POST", url, true);
    req.onreadystatechange = function(aEvt){
      if (req.readyState == 4) {
        if (req.status == 200) 
          callback(req.responseText);
        else 
          callback(req.responseText);
      }
    };
    req.setRequestHeader("Content-type", "text/plain");
    req.send(params);
  }
  else {
    callback("Invalid amount.");
  }
}
