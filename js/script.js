$(function(){
  imageResize();
  var initial = 25;
  $( window ).scroll(function(){
    var scroll = $(window).scrollTop();
    var padding = initial - Math.floor(scroll / 4);
    padding = padding < 0 ? 0 : padding;
    $("#nav a").css("padding-top", padding);
    $("#nav a").css("padding-bottom", padding);
    imageResize();
  })
});

function imageResize(){
  var $logoEl = $('#logo');
  var imgRatio = 1.75; // hardcoded; could pull this out manually on load if desired
  var imgHeight = $logoEl.css('height').replace(/px/, '');
  $logoEl.css('width', imgHeight * imgRatio + 'px');
}
