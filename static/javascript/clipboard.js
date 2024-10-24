// Below is from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
//    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard
//    https://stackoverflow.com/a/36349056
function copyToClipboard() {
  const button_html = '<div>\n\t<a href="https://rossmallow.neocities.org/"><img src="https://rossmallow.neocities.org/images/button.gif" alt="rossmallow.neocities.org" title="Rossmallow"></a>\n</div>';
  navigator.clipboard.writeText(button_html);
  message.textContent= "HTML copied!";
}

const button = document.getElementById("site-button");
const message = document.getElementById("button-message");
button.addEventListener("click", copyToClipboard);
