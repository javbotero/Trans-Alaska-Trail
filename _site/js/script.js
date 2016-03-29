$(function(){
  imageResize();
  var initial = 25;
  $( window ).scroll(function(){
    if($( window ).width() > 970){
      var scroll = $(window).scrollTop();
      var padding = initial - Math.floor(scroll / 4);
      padding = padding < 0 ? 0 : padding;
      $("#nav a").css("padding-top", padding);
      $("#nav a").css("padding-bottom", padding);
      if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
        imageResize();
      }
    }
  })
});

function imageResize(){
  var $logoEl = $('#logo');
  var imgRatio = 1.75; // hardcoded; could pull this out manually on load if desired
  var imgHeight = $logoEl.css('height').replace(/px/, '');
  var newWidth = imgHeight * imgRatio;
  $logoEl.css('width',  + 'px');
}
