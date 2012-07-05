$().ready()
// Saves options to localStorage.
function save_options() {
  var server = ("#server").val();
  localStorage["server"] = server;
  var user = ("#user").val();
  localStorage["user"] = user;
  var pass = ("#pass").val();
  localStorage["pass"] = pass;  
  
  // Update status to let user know options were saved.
  var status = $("#status");
  status.html(chrome.i18n.getMessage("OptionsSaved"));
    
  setTimeout(function() {
    status.html("");
  }, 750);
}

// Restores options to saved value from localStorage.
function restore_options() {
  var server = localStorage["server"];
  var user = localStorage["user"];
  var pass = localStorage["pass"];
  if (server === undefined)
      server = "127.0.0.1:8332";
  if (user === undefined)
      user = "";
  if (pass === undefined)
      pass = "";
  document.getElementById("server").value = server;
  document.getElementById("user").value = user;
  document.getElementById("pass").value = pass;
}
