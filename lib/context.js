chrome.extension.onRequest.addListener(sendBTC_callback);

var selectionMenuItem = chrome.contextMenus.create({
  "title": chrome.i18n.getMessage("SendBitcoins"),
  "contexts": ["selection"],
  "onclick": textOnClick
});

var selectionMenuItem = chrome.contextMenus.create({
  "title": chrome.i18n.getMessage("SendBitcoins"),
  "contexts": ["image"],
  "onclick": imageOnClick
});

var createAddressMenuItem = chrome.contextMenus.create({
  "title": chrome.i18n.getMessage("createAddress"),
  "contexts": ["EDITABLE"],
  "onclick": textOnClick
});
