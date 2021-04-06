$(".wrap").mouseover(function(){
    $(".btn").stop().fadeIn(200);
});
$(".wrap").mouseleave(function(){
    $(".btn").stop().fadeOut(200);
});

var nowhotcurrIndex=0;
var nowhotimgLeft;

$(".prv").addClass("off");
$(".nxt").click(function(){
    if(nowhotcurrIndex>-3){
        nowhotcurrIndex--;
        nowhotimgLeft=nowhotcurrIndex*1510;
        $(".imgsm").css("margin-left",nowhotimgLeft);
    }
    if(nowhotcurrIndex==-3){
        $(".prv").removeClass("off");
        $(".nxt").addClass("off");

    }
});

$(".prv").click(function(){
    if(nowhotcurrIndex<0){
        nowhotcurrIndex++;
        nowhotimgLeft=nowhotcurrIndex*1510;
        $(".imgsm").css("margin-left",nowhotimgLeft);
        $(".nxt").removeClass("off")
    }
    if(nowhotcurrIndex==0){
        $(".prv").addClass("off");
        // $(".prv").css("display","none")
    }
});