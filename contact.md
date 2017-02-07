---
layout: page
title: Contact
permalink: /contact/
---

<div class="row">
  <div class="col-md-4">
    email: <a href="mailto:hello@kettul.com">hello@kettul.com</a><br />
    twitter: <a href="https://twitter.com/kettuldev" target="_blank">@kettuldev</a><br />
    facebook: <a href="https://www.facebook.com/kettuldev" target="_blank">kettuldev</a>
    <br />
    <form action="https://getsimpleform.com/messages?form_api_token=2eedfabcc3e8b43d26c493dbae420d7d" class="contactform" method="post">
      <input type='hidden' name='redirect_to' value='http://www.kettul.com/thanks/' />

      <p class="name">
        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>

      <p class="email">
        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
      </p>

      <p class="text">
        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
      </p>

      <div class="submit">
        <input type="submit" value="SEND" id="button-blue"/>
        <div class="ease"></div>
      </div>
    </form>
</div>
</div>
