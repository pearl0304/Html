$(".movrecwrap").mouseover(function(){
    $(".movrec_btn").stop().fadeIn(200);
});
$(".movrecwrap").mouseleave(function(){
    $(".movrec_btn").stop().fadeOut(200);
});

var movrecurrIndex=0;
var movreimgLeft;

$(".movrec_prv").addClass("off");
$(".movrec_nxt").click(function(){
    if(movrecurrIndex>-3){
        movrecurrIndex--;
        movreimgLeft=movrecurrIndex*1510;
        $(".movrecimgs").css("margin-left",movreimgLeft);
    }
    if(movrecurrIndex==-3){
        $(".movrec_prv").removeClass("off");
        $(".movrec_nxt").addClass("off");

    }
});

$(".movrec_prv").click(function(){
    if(movrecurrIndex<0){
        movrecurrIndex++;
        movreimgLeft=movrecurrIndex*1510;
        $(".movrecimgs").css("margin-left",movreimgLeft);
        $(".movrec_nxt").removeClass("off")
    }
    if(movrecurrIndex==0){
        $(".movrec_prv").addClass("off");
    }
});

