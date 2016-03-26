$(function(){
  var initial = parseInt($("#nav a").css("padding-top"));
  $( window ).scroll(function(){
    var scroll = $(window).scrollTop();
    var padding = initial - Math.floor(scroll / 2);
    if(padding >= 0){
      $("#nav a").css("padding-top", padding);
      $("#nav a").css("padding-bottom", padding);
    }
  })
});
