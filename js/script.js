$(function(){
  imageResize();
  var initial = 25;
  $( window ).scroll(function(){
    if($( window ).width() > 970){
      var scroll = $(window).scrollTop();
      var padding = initial - Math.floor(scroll / 4);
      padding = padding < 10 ? 10 : padding;
      $("#nav a").css("padding-top", padding);
      $("#nav a").css("padding-bottom", padding);
      imageResize();
    }
  })
});

function imageResize(){
  var $logoEl = $('#logo');
  var imgRatio = 2.25; // hardcoded; could pull this out manually on load if desired
  var imgHeight = $logoEl.height(); //('height').replace(/px/, '');
  var newWidth = imgHeight * imgRatio;
  $logoEl.css('width', newWidth + 'px');
}
