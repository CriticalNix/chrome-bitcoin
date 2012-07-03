function handleSelection(addr, amount)
{
  address = addr.replace(" ", "");
  lastAddress = address;
  lastAmount = amount;
  validateAddress(address,this);
  this.execute = function()
  {
    alert('validated');
    chrome.tabs.create({'url': chrome.extension.getURL("send_coins.html")}, function(address) { $("#address").html(address) });
  }
}
