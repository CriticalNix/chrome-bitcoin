function sendCoins(amount, address, callback){
  if (parseFloat(amount) > 0) {
    var params = createParams("curltest","sendtoaddress",[address,amount]);
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
