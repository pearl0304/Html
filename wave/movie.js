$(".moviewrap").mouseover(function(){
    $(".movie_btn").stop().fadeIn(200);
});
$(".moviewrap").mouseleave(function(){
    $(".movie_btn").stop().fadeOut(200);
});

var moviecurrIndex=0;
var movieimgLeft;

$(".movie_prv").addClass("off");
$(".movie_nxt").click(function(){
    if(moviecurrIndex>-3){
        moviecurrIndex--;
        movieimgLeft=moviecurrIndex*1510;
        $(".movieimgs").css("margin-left",movieimgLeft);
    }
    if(moviecurrIndex==-3){
        $(".movie_prv").removeClass("off");
        $(".movie_nxt").addClass("off");

    }
});

$(".movie_prv").click(function(){
    if(moviecurrIndex<0){
        moviecurrIndex++;
        movieimgLeft=moviecurrIndex*1510;
        $(".movieimgs").css("margin-left",movieimgLeft);
        $(".movie_nxt").removeClass("off")
    }
    if(moviecurrIndex==0){
        $(".movie_prv").addClass("off");

    }
});