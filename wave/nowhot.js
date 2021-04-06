$(".wrap").mouseover(function(){
    $(".btn").stop().fadeIn(200);
});
$(".wrap").mouseleave(function(){
    $(".btn").stop().fadeOut(200);
});

var currIndex=0;
var imgLeft;

$(".prv").addClass("off");
$(".nxt").click(function(){
    if(currIndex>-3){
        currIndex--;
        imgLeft=currIndex*1510;
        $(".imgsm").css("margin-left",imgLeft);
    }
    if(currIndex==-3){
        $(".prv").removeClass("off");
        $(".nxt").addClass("off");

    }
});

$(".prv").click(function(){
    if(currIndex<0){
        currIndex++;
        imgLeft=currIndex*1510;
        $(".imgsm").css("margin-left",imgLeft);
        $(".nxt").removeClass("off")
    }
    if(currIndex==0){
        $(".prv").addClass("off");
        // $(".prv").css("display","none")
    }
});