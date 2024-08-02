// Below is from https://stackabuse.com/character-counter-for-text-areas-with-vanilla-javascript/
//    https://codepen.io/stamd/pen/BaJJrdq
let name_input = document.getElementById("name");
let contact_input = document.getElementById("contact");
let msg_input = document.getElementById("message");
let count_span = document.getElementById("counter");
const max_name_chars = 30;
const max_contact_chars = 30;
const max_msg_chars = 2000; // Discord's character limit is 2000 characters

count_span.textContent = max_msg_chars + "/" + max_msg_chars;

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
let button = document.getElementById("send")
button.onclick = function() {
  let name_label = document.getElementById("name-label");
  let msg_label = document.getElementById("msg-label");

  // var datetime = new Date().toLocaleString("en-US");
  var name = name_input.value;
  var contact = contact_input.value;
  var message = msg_input.value;

  name_label.style.color = "black";
  msg_label.style.color = "black";

  if (name == "" || message == "") {
    if (name == "") {
      name_label.style.color = "red";
    }
    if (message == "") {
      msg_label.style.color = "red";
    }
    alert('Please fill the required fields.');
    return;
  }
  else {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/1267673255397949471/Blj_yxH4ydEmS9Gbmo3MQBiujHJm9KPCeNrsR38vHlMADTl_EO4pI6yJDFUjLocfjZTR");
  request.setRequestHeader('Content-type', 'application/json');

  // When the request has been sent and gotten a response
  request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        if (request.status == 204) {
          // Gives feedback and clears the form fields after sucessful submission
          alert('Submission recieved. Thanks for your message!')
          name_input.value = '';
          contact_input.value = '';
          msg_input.value = '';
          countCharacters()
        }
        else if (request.status == 0) {
          alert('There was a problem submitting your message. Please try again later. ' +
                'If this persists, please contact the webmaster.')
        }
        else {
          alert("Unexpected response: " + request.status);
        }
    }
  }

  var discord_msg = {
    username: name + " - " + contact,
    content: message
  }

  request.send(JSON.stringify(discord_msg));
  }
}
