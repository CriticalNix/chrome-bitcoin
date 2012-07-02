function balance()
{
  var params = createParams("chrome","getbalance",false);
  var success = function(res) {
    var info = JSON.parse(res);
    var result = chrome.i18n.getMessage("AccountBalance") + ": " + info.result.toFixed(2) 
    $("#test").html(result);
  }
  var failure = function(res)
  {
    $("#test").html(chrome.i18n.getMessage("serverError"));
  }
  var res = send(params,success,failure);
}
