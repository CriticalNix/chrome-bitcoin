

function sendCoins(amount, address, callback){
  addr = '"' + address '"'
  amt = '"' + amount + '"'
  if (parseFloat(amount) > 0) {
    var params = createParams("curltest","sendtoaddress",[addr,amt]);
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
