$(".recowrap").mouseover(function(){
    $(".recobtn").stop().fadeIn(200);
});
$(".recowrap").mouseleave(function(){
    $(".recobtn").stop().fadeOut(200);
});

var recocurrIndex=0;
var recoimgLeft;

$(".reco_prv").addClass("off");
$(".reco_nxt").click(function(){
    if(recocurrIndex>-3){
        recocurrIndex--;
        recoimgLeft=recocurrIndex*1520;
        $(".imgsr").css("margin-left",recoimgLeft);
    }
    if(recocurrIndex==-3){
        $(".reco_prv").removeClass("off");
        $(".reco_nxt").addClass("off");

    }
});

$(".reco_prv").click(function(){
    if(recocurrIndex<0){
        recocurrIndex++;
        recoimgLeft=recocurrIndex*1520;
        $(".imgsr").css("margin-left",recoimgLeft);
        $(".reco_nxt").removeClass("off")
    }
    if(recourrIndex==0){
        $(".reco_prv").addClass("off");

    }
});