$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', "4thPage", "lastPage"],
    sectionsColor: ['#fabdfd', '#fgjflf', '#fcfdff', '#fcfdff'],
		menu: "#menu",
		css3: true,
    navigation: true,
    navigationPosition: '',
    //navigationTooltips: ['Home page', 'About Me', 'Portfolio', 'Contact'],
		scrollingSpeed: 1000,
  });
});

//removes auto scrolling
$(document).ready (function(){
  $.fn.fullpage.setAutoScrolling(false);
});
