
function listAccounts(callback)
{
  var params = createParams("chrome","listaccounts",[]);
  this.result = null;
  var success = function (res)
  {
    var info = JSON.parse(res);
    callback(info.result);
  }
  var failure = function (res)
  {
    console.log("failure");
  }
  send(params,success,failure);
}
