(function($){
  $("#sky").css("min-height", $(window).height());
  $("#keySkills").css("min-height", $(window).height());
  $("#personality").css("min-height", $(window).height());
  $("#contactInfo").css("min-height", $(window).height());
})(jQuery);

new WOW().init();

(function($){
  $("#mobile-icon").click(function(){
    // console.log($("nav").css("top"));
    if($("nav").css("top") =="-100px"){
      $(this).animate({top: "60px"}, 300 );
      $("nav").animate({top: "0"},300);
    }else{
      $(this).animate({top: "-50px"}, 300 );
      $("nav").animate({top: "-100px"},300);
    }
  });
}(jQuery));
