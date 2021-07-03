$("#snow" ).fallingSnow({
    stopOnClick :true,
    stopElement: $('#snow'),
    speedAdjust: 3,
    thicknessAdjust: 1.5,
    drift: 100,
    opacity:true,

});


$navOffset=$('#navigation').offset().top;
$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navOffset){
        $('#navigation').addClass('navFixed');
    }else{
        $('#navigation').removeClass('navFixed');
    }
    
    
    if($scrolling > 300){
       $('.top_to').fadeIn(); 
    }else{
         $('.top_to').fadeOut(); 
    }
});

$('.top_to').click(function(){
    $('html,body').animate({
        scrollTop:0,
    },500);
});



$('.all_customers').slick({

        slidesToShow: 2,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
        speed: 800,
        autoplay:true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        dots:false,
        arrows:false,
        arrows:false,
      }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        dots:false,
        arrows:false,
          
      }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        dots:false,
        arrows:false,
      }
    }
  
  ]
});



$('.discount_slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
        speed: 800,
        autoplay:true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        dots:false,
        arrows:false,
        arrows:false,
      }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        dots:false,
        arrows:false,
          
      }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        dots:false,
        arrows:false,
      }
    }
  
  ]
});



 $('.displayed').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots:false,
      fade: true,
      asNavFor: '.for_dis_slide'
});
$('.for_dis_slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.displayed',
      centerPadding:0,
      dots: false,
    arrows:true,
    prevArrow:'<i class="fa fa-angle-left dis_left"></i>',
    nextArrow:' <i class="fa fa-angle-right dis_right"></i>',
      centerMode: true,
      focusOnSelect: true
});


$(document).ready(function(){
  $('.venobox').venobox(); 
});


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});





var s3 = $("#ranged-value").freshslider({
        range: true,
        step:1,
        value:[4, 50],
        onchange:function(low, high){
            console.log(low, high);
        }
    });









