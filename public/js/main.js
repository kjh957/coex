$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
},
function(){
    $("ul", $(this)).stop().slideUp();
});


var now = 0;
var end = $(".slider").length - 1
var dir = 1;
var delay = 3000;
var speed = 500;
var interval = setInterval(ani, delay);
init();

function init(){
  $(".banner_wrap").height($(".slider").height());
  $(".banner").height($(".slider").height());
  $(".slider").hide(0);
  $(".banner_wrap").css({"left":0});
  $(".slider").eq(now).css({"left":0}).show(0);
  if(now == 0){
    $(".slider").eq(end).css({"left":"-100%"}).show(0);
    $(".slider").eq(now+1).css({"left":"100%"}).show(0);
  }
  else if(now == end){
    $(".slider").eq(now-1).css({"left":"-100%"}).show(0);
    $(".slider").eq(0).css({"left":"100%"}).show(0);
  }
  else{
    $(".slider").eq(now-1).css({"left":"-100%"}).show(0);
    $(".slider").eq(now+1).css({"left":"100%"}).show(0);
  }
}

function ani(){
  init();
  $(".banner_wrap").stop().animate({"left":(dir*100)+"%"}, speed, function(){
    if(dir == -1){
      if(now == end) now = 0;
      else now++;
    }
    else{
      if(now == 0) now = end;
      else now--;
    }
  })
}