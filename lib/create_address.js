function createAddress(account)
{
  var params = createParams("chrome","getnewaddress",[]);
  var success = function(res)
  {
    var info = JSON.parse(res);
    var content = info.result;
  }
  var failure = function(res)
  {
    var content = "failure";
  }
  var res = send(params,success,failure);
}
