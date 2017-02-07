---
layout: page
title: Clients
permalink: /clients/
---

<div class="client-list">
  <div class="row">
    {% for client in site.data.clients %}
      {% cycle "</div><div class='row'>", "", ""  %}

      <div class="col-xs-12 col-sm-4">
        <a href="{{ client.url }}" target="_blank">
	  <img src="{{ client.img | prepend: "/img/" | prepend: site.baseurl }}" class="img-responsive" />
        </a>
      </div>
    {% endfor %}
  </div>
</div>