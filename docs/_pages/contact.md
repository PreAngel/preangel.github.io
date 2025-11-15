---
title: Contact
permalink: /contact.html
---

<!-- markdownlint-disable MD033 -->

<div id="happyverse-widget-embed"></div>
<script>
  !function(window) {
    const happyverseUrl = "https://app.happyverse.ai/huan";
    const targetElement = document.getElementById("happyverse-widget-embed");
    const parentURL = window.location.href;
    if (!targetElement) {
      console.error("Happyverse widget container not found");
      return;
    }
    const aspectRatio = 960 / 640;
targetElement.style.cssText = "width: 100%; max-width: 960px; min-width: 120px; aspect-ratio: 1.5; border-radius: 16px; overflow: hidden; border: 0px solid #000000; box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25); margin: 20px auto; display: block;";
  // Query params: &vof=cover
    const iframe = document.createElement("iframe");
    iframe.src = happyverseUrl + "?parent_url=" + parentURL + "&&vof=cover";
    iframe.allow = "microphone; camera; fullscreen; autoplay; display-capture";
    iframe.style.cssText = "width: 100%; height: 100%; border: none; margin: 0; padding: 0; display: block; object-fit: cover;";
    iframe.title = "Happyverse AI Confidant";
    iframe.allowFullscreen = true;
    const loadingDiv = document.createElement("div");
    loadingDiv.style.cssText = "position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);color: #666;font-size: 16px;z-index: 1;";
    loadingDiv.textContent = "Loading Happyverse...";
    targetElement.style.position = "relative";
    targetElement.appendChild(loadingDiv);
    targetElement.appendChild(iframe);
    iframe.addEventListener("load", function() {
      if (loadingDiv.parentNode) {
        loadingDiv.parentNode.removeChild(loadingDiv);
      }
    });
  }(globalThis);
</script>

<form action="https://formspree.io/{{site.email}}" method="POST">
<p class="mb-4">Please send your message to {{site.name}}. We will reply as soon as possible!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>
<input class="btn btn-success" type="submit" value="Send">
</form>
