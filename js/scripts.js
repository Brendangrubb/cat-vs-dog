$("document").ready(function(){

  $("button#cat-btn").click(function() {
    $("ul#cat-response").prepend("<li>MeowHiss!</li>");

    $("ul#cat-response").children("li").first().click(function() {
      $(this).remove();
    });
  })

  $("button#dog-btn").click(function() {
    $("ul#dog-response").prepend("<li>WoofBark!</li>");

    $("ul#dog-response").children("li").first().click(function() {
      $(this).remove();
    })

  })







})
