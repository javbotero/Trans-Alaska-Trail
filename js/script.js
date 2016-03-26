$(function(){
  var initial = parseInt($("#nav a").css("padding-top"));
  $( window ).scroll(function(){
    var scroll = $(window).scrollTop();
    var padding = initial - Math.floor(scroll / 2);
    padding = padding < 0 ? 0 : padding;
    $("#nav a").css("padding-top", padding);
    $("#nav a").css("padding-bottom", padding);
  })
});
