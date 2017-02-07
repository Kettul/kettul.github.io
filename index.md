---
layout: full
permalink: /
---

<div class="jumbotron">
  <div class="testimonial container">
    <h3>"Before Kettul, we never knew test-driven development existed. They invest
     time and energy into understanding your business. With Kettul, we've finally
     found reliable development for our Ruby on Rails app. It feels good knowing
     we'll never have to go through the process of finding another development
     team."</h3>
    <div class="testimonial-speaker text-right">
      <small>Michael Sanchez<br />Co-founder, Health Fair Connections</small>
    </div>
  </div>
</div>

<div class="container">

  <div class="row">
    <div class="col-sm-6">
      <h3>What is Kettul?</h3>
      <p>Kettul is a small web shop that serves as a valuable partner
       for your start-up, marketing firm, or small business by allowing you to take
       on bigger projects without hiring more full-time employees.</p>
    </div>
    <div class="col-sm-6">
      <div class="home-client-list client-list">
        <div class="row">
        {% for client in site.data.clients limit:4 %}
          {% cycle "</div><div class='row'>", ""  %}
          <div class="col-xs-12 col-sm-6">
           <img src="{{ client.img | prepend: "/img/" | prepend: site.baseurl }}" class="img-responsive" />
          </div>
        {% endfor %}
      </div>
    </div><!-- end col -->
  </div><!-- end row -->
</div>