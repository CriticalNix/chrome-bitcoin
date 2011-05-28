function textOnClick(info, tab){
  handleSelection(info.selectionText, "");
}

 function imageOnClick(info, tab){
            var data = info.srcUrl.split("?", 2)[1];
            if (data === undefined) 
                invalidAddress();
            else {
                var amount = data.split("|", 2)[0];
                if (amount === undefined) 
                    invalidAddress();
                else {
                    var address = data.split("|", 2)[1];
                    if (address === undefined) 
                        invalidAddress();
                    else 
                        handleSelection(address, amount);
                }
            }
        }      


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
