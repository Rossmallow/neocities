---
title: Buttons
date: 2024-10-25T16:13:27-05:00
draft: false
---

## {{< param title >}}

<section id="buttons" class="flexbox-container">
  <section class="flexbox-container">
    <h3>Links to other sites</h3>
    <div class="flexbox-container">
      <!-- Using an object tag, I can default to hotlinking to a site's button allowing the owner to update it, but by including an img tag inside I can fall back on a local image if the hotlink fails -->
      <a class="zoom" href="https://twelvemen.neocities.org/index.html">
        <object data="https://twelvemen.neocities.org/12men.gif" type="image/jpeg" alt="Twelve Men">
          <img src="/buttons/12men.gif" alt="Twelve Men">
        </object>
      </a>
      <a class="zoom" href="https://99gifshop.neocities.org/">
        <object data="https://99gifshop.neocities.org/img/88x31.png" type="image/jpeg" alt="99Gif shop">
          <img src="/buttons/99gifshop.png" alt="99GIF shop">
        </object>
      </a>
      <a class="zoom" href="https://daniele63.com/">
        <object data="https://daniele63.com/images/danieles_button.jpg" type="image/jpeg" alt="Daniele's Website">
          <img src="/buttons/danieles.png" alt="Daniele's Website">
        </object>
      </a>
      <a class="zoom" href="https://neocreatives.neocities.org/">
        <object data="https://neocreatives.neocities.org/button.gif" type="image/jpeg" alt="Neocreatives">
          <img src="/buttons/neocreatives.gif" alt="Neocreatives">
        </object>
      </a>
      <a class="zoom" href="https://dimden.dev/">
        <object data="https://dimden.dev/services/images/88x31.gif" type="image/jpeg" alt="Neocreatives">
          <img src="/buttons/dimden.gif" alt="dimden's hotel">
        </object>
      </a>
    </div>
  </section>
  <section class="flexbox-container">
    <h3>Other buttons</h3>
    <div class="flexbox-container">
      <img src="/buttons/rush.png" alt="Rush">
      <img src="/buttons/tricot.png" alt="tricot">
      <img src="/buttons/twrp.png" alt="TWRP">
      <img src="/buttons/drpepper.png" alt="Dr.Pepper">
      <img src="/buttons/steam.gif" alt="Steam">
      <img src="/buttons/yankovic.png" alt="Yankovic Now!">
    </div>
  </section>
  <section class="flexbox-container">
    <h3>Add my button to your site!</h3>
    <p id="button-message">Click to copy HTML</p>
    <div class="flexbox-container">
      <button id="button-default" class="zoom" type="button">
      </button>
      <button id="button-alt" class="zoom" type="button">
      </button>
    </div>
  </section>
</section>

<script src="/javascript/clipboard.js"></script>
