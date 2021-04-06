var imgs=5;
var now=0;
var play;
var mode=true;
var previndex;
var sp=screen.width/2-432;
start();


$(".btn_play").click(function(){
    clearInterval(play)
    $(this).css("display","none");
    $(".btn_stop").css("display","block");
    mode=false;
});

$(".btn_stop").click(function(){
    play=setInterval(function(){slide();},2000)
    $(this).css("display","none");
    $(".btn_play").css("display","block");
    mode=true;
});

$(".btn_dot .dot").click(function(){
    now=$(this).index();
    clearInterval(play);
    curr_slide(now);
    if(mode==true){
        play=setInterval(function(){slide();},2000)
    }
    previndex=now;
})

$(".btn_prev .bt").click(function(){
    if(now==0){
        now=5;
    }else{
        now--;
    }
    clearInterval(play);
    curr_slide(now);
    
    if(mode==true){
        play=setInterval(function(){slide();},2000);
    }
    previndex=now;
}) 

$(".btn_next .bt").click(function(){
    if(imgs==now){
        now=0;
    }else{
        now++;
    }
    clearInterval(paly);
    curr_slide(now);
    if(mode==true){
        play=setInterval(function(){slide();},2000);
    }
    previndex=now;
})

function start(){
    $(".btn_play").css("display","block");
    $(".imgs img").eq(0).css({"left":-1568+sp});
    $(".imgs img").eq(1).css({"left":-784+sp});
    $(".imgs img").eq(2).css({"left":0+sp});
    $(".imgs img").eq(3).css({"left":784+sp});
    $(".imgs img").eq(4).css({"left":1584+sp});
    $(".imgs img").eq(5).css({"left":2352+sp});
    $(".btn_dot").children().eq(0).css({"background-color":"#1351f9"});
    previndex=0;
    play=setInterval(function(){slide();},2000);
} 

function slide(){
    if(imgs==now){
        now=0;
    }else{
        now++;
    }
    curr_slide(now);
}

function curr_slide(e){
    if(e==1){
        $(".imgs img").eq(1).css({"left":-1568+sp});
        $(".imgs img").eq(2).css({"left":-784+sp});
        $(".imgs img").eq(3).css({"left":0+sp});
        $(".imgs img").eq(4).css({"left":784+sp});
        $(".imgs img").eq(5).css({"left":1584+sp});
        $(".imgs img").eq(0).css({"left":2352+sp});
        $(".btn_dot").children().eq(previndex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(1).css({"background-color":"#1351f9"});
        previndex=1;

    } 
    else if (e==2){
        $(".imgs img").eq(2).css({"left":-1568+sp});
        $(".imgs img").eq(3).css({"left":-784+sp});
        $(".imgs img").eq(4).css({"left":0+sp});
        $(".imgs img").eq(5).css({"left":784+sp});
        $(".imgs img").eq(0).css({"left":1584+sp});
        $(".imgs img").eq(1).css({"left":2352+sp});
        $(".btn_dot").children().eq(previndex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(2).css({"background-color":"#1351f9"});
        previndex=2;

    } 
    else if (e==3){
        $(".imgs img").eq(3).css({"left":-1568+sp});
        $(".imgs img").eq(4).css({"left":-784+sp});
        $(".imgs img").eq(5).css({"left":0+sp});
        $(".imgs img").eq(0).css({"left":784+sp});
        $(".imgs img").eq(1).css({"left":1584+sp});
        $(".imgs img").eq(2).css({"left":2352+sp});
        $(".btn_dot").children().eq(previndex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(3).css({"background-color":"#1351f9"});
        previndex=3;
        
    }
    else if (e==4){
        $(".imgs img").eq(4).css({"left":-1568+sp});
        $(".imgs img").eq(5).css({"left":-784+sp});
        $(".imgs img").eq(0).css({"left":0+sp});
        $(".imgs img").eq(1).css({"left":784+sp});
        $(".imgs img").eq(2).css({"left":1584+sp});
        $(".imgs img").eq(3).css({"left":2352+sp});
        $(".btn_dot").children().eq(previndex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(4).css({"background-color":"#1351f9"});
        previndex=4;
        
    }
    else if(e==5){
        $(".imgs img").eq(5).css({"left":-1568+sp});
        $(".imgs img").eq(0).css({"left":-784+sp});
        $(".imgs img").eq(1).css({"left":0+sp});
        $(".imgs img").eq(2).css({"left":784+sp});
        $(".imgs img").eq(3).css({"left":1584+sp});
        $(".imgs img").eq(4).css({"left":2352+sp});
        $(".btn_dot").children().eq(previndex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(5).css({"background-color":"#1351f9"});
        previndex=5;
    }
    else if(e==0){
        $(".btn_play").css("display","block");
        $(".imgs img").eq(0).css({"left":-1568+sp});
        $(".imgs img").eq(1).css({"left":-784+sp});
        $(".imgs img").eq(2).css({"left":0+sp});
        $(".imgs img").eq(3).css({"left":784+sp});
        $(".imgs img").eq(4).css({"left":1584+sp});
        $(".imgs img").eq(5).css({"left":2352+sp});
        $(".btn_dot").children().eq(previndex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(0).css({"background-color":"#1351f9"});
        previndex=0;
    }
}