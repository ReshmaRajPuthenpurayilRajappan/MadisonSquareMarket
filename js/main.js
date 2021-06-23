$(document).ready(() => {
  $("#cart").mouseover(() => {
    $("#cartMenu").show();
  });

  $("#cart")
    .children()
    .mouseleave(() => {
      $("#cartMenu").hide();
    });

  $("#account").mouseover(() => {
    $("#accountMenu").show();
  });

  $("#account")
    .children()
    .mouseleave(() => {
      $("#accountMenu").hide();
    });

  $("#help").mouseover(() => {
    $("#helpMenu").show();
  });

  $("#help")
    .children()
    .mouseleave(() => {
      $("#helpMenu").hide();
    });
});
