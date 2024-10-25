// Below is from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
//    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard
//    https://stackoverflow.com/a/36349056
function copyToClipboard(button_id) {
  let button_html = "";
  if (button_id == 'default') {
    button_html = '<a href="https://rossmallow.neocities.org/"><img src="https://rossmallow.neocities.org/buttons/button.gif" alt="rossmallow.neocities.org" title="Rossmallow"></a>';
  }
  else if (button_id == 'alternate') {
    button_html = '<a href="https://rossmallow.neocities.org/"><img src="https://rossmallow.neocities.org/buttons/button_alt.gif" alt="rossmallow.neocities.org" title="Rossmallow"></a>';
  }
  navigator.clipboard.writeText(button_html);
  message.textContent = String(button_id).charAt(0).toUpperCase() + String(button_id).slice(1) + " button HTML copied";
}

document.getElementById("button-default").addEventListener("click", function() {
  copyToClipboard('default');
});
document.getElementById("button-alt").addEventListener("click", function() {
  copyToClipboard('alternate');
});
const message = document.getElementById("button-message");