function balance()
{
  var params = createParams("chrome","getbalance",false);
  var success = function(res) {
    var info = JSON.parse(res);
    var result = chrome.i18n.getMessage("AccountBalance") + ": " + info.result.toFixed(2) 
    $("#balance").html(result);
  }
  var failure = function(res)
  {
    $("#balance").html(chrome.i18n.getMessage("serverError") +"<input type='button', value='option', onclick='create_tab(\"options.html\")'/>");
  }
  var res = send(params,success,failure);
}
