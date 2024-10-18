let response = await fetch("/imgur_api.json");
const imgur = await response.json();
const client_id = imgur.client_id;
const album_id = document.getElementById('album_id').textContent;
//console.log("client_id: " + client_id + " album_id: " + album_id)

const request = new Request("https://api.imgur.com/3/album/" + album_id, {
  method: "GET",
  headers: {
    "Authorization": "Client-ID " + client_id
  }
});

response = await fetch(request)
response = await response.json()
const images = response.data.images
//console.log(images)
//console.log(images[0].link)
