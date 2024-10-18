---
title: Guestbook
date: 2024-07-29T21:35:58-05:00
draft: false
---

<div class="construction"></div>

## {{< param title >}}

### ~~The Guestbook is currently non-functional due to mine being a new account. Please see this [reddit post](https://www.reddit.com/r/neocities/comments/1acx6lu/error_putting_statuscafe_into_my_website/).~~

### Update: It appears that Neocities will no longer lift the strict Content Security Policy on new free accounts per this [comment on a git issue](https://github.com/neocities/neocities/issues/484#issuecomment-1919920344). This will remain broken until I become a monetary supporter of Neocities.

Creating this guestbook with this [tutorial](https://goblin-heart.net/sadgrl/learn/articles/create-webform-discord)

<form>
  <label id="name-label">Name:</label><br>
  <input id="name" type="text" placeholder="Geddy Lee"><br>
  <label>Contact (Website, E-Mail, Instagram, etc.):</label><br>
  <input id="contact" type="text" placeholder="Rush.com"><br>
  <label id="msg-label">Message:</label><br>
  <textarea id="message" rows="4" cols="50" placeholder="Hey Ross, cool website. I dig it!"></textarea>
  <span id="counter">xxxx/xxxx</span><br>
  <button id="send" type="button">Send</button>
  <span id="notifier"></span><br>
</form>

Be the first to submit an entry!

<script src="/guestbook.js"></script>
