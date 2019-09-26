$(document).ready(function(){
   var width=$(window).width();
    /*----on window scrolling----*/
    var scrollbutton=$(".scroll-up");
    $(window).scroll(function(){
       if($(this).scrollTop()>=500){
           scrollbutton.show();
       }
        else{
            scrollbutton.hide();
        }
    });
    scrollbutton.click(function(){
       $("html,body").animate({scrollTop:0},1500); 
    });
    /*--------navbar button click-------*/
    var headerheghit=$("nav").outerHeight();
    
     $(".slid-section").click(function(e){
         var linkhref=$(this).attr("href");
         $("html,body").animate({scrollTop:$(linkhref).offset().top-headerheghit},1000);
         e.preventDefault();
     });
        $(window).on('load',function(e){
              $("html,body").animate({scrollTop:0},1000);
        });
       
       if(width>=759){
          $(".collaps").show();
       }
    else{
        $(".collaps").removeData(".collaps");
    }
});