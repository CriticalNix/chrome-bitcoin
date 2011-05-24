//Validate a bitcoin address. Do callback if result is valid.
function validateAddress(addr,callback){
  var params = createParams("chrome", "validateaddress", [addr]);
  function success(res)
  {
    var info = JSON.parse(res);
    if (info.result.isvalid) {
      callback.execute();
    }
    else {
      invalidAddress(res);
    }
  }
  function invalidAddress()
  {
    alert(chrome.i18n.getMessage("InvalidBitcoinAddress"));
  }
  function failure(res)
  {
    alert(chrome.i18n.getMessage("ErrorValidatingAddress"));
  }
  var res = send(params,success,failure);
}
