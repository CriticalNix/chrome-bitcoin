function handleSelection(addr, amount)
{
  address = addr.replace(" ", "");
  lastAddress = address;
  lastAmount = amount;
  validateAddress(address,this);
  this.execute = function()
  {
    alert('validated');
    tab = chrome.tabs.create({'url': chrome.extension.getURL("send_coins.html")},       function(address,tab) {
      chrome.tabs.execute(null,{file: "lib/send_form.js"});
     });
}
