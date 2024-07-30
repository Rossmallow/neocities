// Below is from https://stackabuse.com/character-counter-for-text-areas-with-vanilla-javascript/
//    https://codepen.io/stamd/pen/BaJJrdq
let name_input = document.getElementById("name");
let contact_input = document.getElementById("contact");
let msg_input = document.getElementById("message");
let count_span = document.getElementById("counter");
const max_name_chars = 20;
const max_contact_chars = 30;
const max_msg_chars = 2000 - max_name_chars - max_contact_chars; // Discord's character limit is 2,000 characters

name_input.setAttribute("maxlength", max_name_chars);
contact_input.setAttribute("maxlength", max_contact_chars);
msg_input.setAttribute("maxlength", max_msg_chars);

const countCharacters = () => {
  let chars = msg_input.value.length;
  let counter = max_msg_chars - chars;
  count_span.textContent = counter + "/" + max_msg_chars;
  
  if (counter <= 20) {
    count_span.style.color = "red";
  } else if (counter <= 50) {
    count_span.style.color = "orange";
  } else {
    count_span.style.color = "black";
  }
};

msg_input.addEventListener("input", countCharacters);


// Below is from https://goblin-heart.net/sadgrl/learn/articles/create-webform-discord
//    https://codepen.io/sadness97/pen/YzEgxox?editors=1010
document.getElementById('send').onclick = function() {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/1267673255397949471/Blj_yxH4ydEmS9Gbmo3MQBiujHJm9KPCeNrsR38vHlMADTl_EO4pI6yJDFUjLocfjZTR");
  request.setRequestHeader('Content-type', 'application/json');
  // var datetime = new Date().toLocaleString("en-US");
  var name = document.getElementById("name").value;
  var contact = document.getElementById("contact").value;
  var message = document.getElementById("message").value;

  var discord_msg = { // add up to 2,000 characters (Discord's character limit)
    username: name + " - " + contact,
    content: message
  }
  request.send(JSON.stringify(discord_msg));

  // Must fix the below to only display on sucessful submission
  // alert('Thanks, your message has been sent.'); // Gives feedback that message has been sent

  // clears the form fields after submission
  name_input.value = '';
  contact_input.value = '';
  msg_input.value = '';
}
