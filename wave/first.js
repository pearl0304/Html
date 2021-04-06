$(".firstwrap").mouseover(function(){
    $(".first_btn").stop().fadeIn(200);
});
$(".firstwrap").mouseleave(function(){
    $(".first_btn").stop().fadeOut(200);
});

var firstcurrIndex=0;
var firstimgLeft;

$(".first_prv").addClass("off");
$(".first_nxt").click(function(){
    if(firstcurrIndex>-3){
        firstcurrIndex--;
        firstimgLeft=firstcurrIndex*1510;
        $(".firstimgs").css("margin-left",firstimgLeft);
    }
    if(firstcurrIndex==-3){
        $(".first_prv").removeClass("off");
        $(".first_nxt").addClass("off");

    }
});

$(".first_prv").click(function(){
    if(firstcurrIndex<0){
        firstcurrIndex++;
        firstimgLeft=firstcurrIndex*1510;
        $(".firstimgs").css("margin-left",firstimgLeft);
        $(".first_nxt").removeClass("off")
    }
    if(firstcurrIndex==0){
        $(".first_prv").addClass("off");
    }
});