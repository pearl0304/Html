$(".orinalwrap").mouseover(function(){
    $(".orinal_btn").stop().fadeIn(200);
});
$(".orinalwrap").mouseleave(function(){
    $(".orinal_btn").stop().fadeOut(200);
});

var orinalcurrIndex=0;
var orinalimgLeft;

$(".orinal_prv").addClass("off");
$(".orinal_nxt").click(function(){
    if(orinalcurrIndex>-3){
        orinalcurrIndex--;
        orinalimgLeft=orinalcurrIndex*1510;
        $(".orinalimgs").css("margin-left",orinalimgLeft);
    }
    if(orinalcurrIndex==-3){
        $(".orinal_prv").removeClass("off");
        $(".orinal_nxt").addClass("off");

    }
});

$(".orinal_prv").click(function(){
    if(orinalcurrIndex<0){
        orinalcurrIndex++;
        orinalimgLeft=orinalcurrIndex*1510;
        $(".orinalimgs").css("margin-left",orinalimgLeft);
        $(".orinal_nxt").removeClass("off")
    }
    if(orinalcurrIndex==0){
        $(".orinal_prv").addClass("off");
    }
});