---
title: Guestbook
date: 2024-07-29T21:35:58-05:00
draft: false
---

<div class="construction"></div>

## {{< param title >}}

Creating this guestbook with this [tutorial](https://goblin-heart.net/sadgrl/learn/articles/create-webform-discord)

<form>
  <label>Name:</label><br>
  <input id="name" type="text" placeholder="Geddy Lee" required><br>
  <label>Contact (E-Mail, Instagram, etc.):</label><br>
  <input id="contact" type="text" placeholder="geddylee@rush.com"><br>
  <label>Message:</label><br>
  <textarea id="message" rows="4" cols="50" placeholder="Hey Ross, cool website. I dig it!" required></textarea>
  <span id="counter">1950/1950</span><br>
  <button id="send" type="submit">Send</button>
</form>

<script src="/guestbook.js"></script>
