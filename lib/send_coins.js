

function sendCoins(amount, address, callback){
  addr = '"' + address + '"'
  if (parseFloat(amount) > 0) {
    var params = createParams("curltest","sendtoaddress",[addr,amount]);
  }
  else {
    callback("Invalid amount.");
  }
  var success = function(res)
  {
    callback(res);
  }
  var failure = function(res)
  {
    callback(res);
  }
  send(params,success,failure);
}
