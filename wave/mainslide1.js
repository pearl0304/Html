var mainimgs=5;
var mainnow=0;
var mainplay;
var mainmode=true;
var mainprevindex;
var sp=screen.width/2-432;
mainstart();


$(".btn_play").click(function(){
    clearInterval(mainplay)
    $(this).css("display","none");
    $(".btn_stop").css("display","block");
    mainmode=false;
});

$(".btn_stop").click(function(){
    mainplay=setInterval(function(){mainslide();},2000)
    $(this).css("display","none");
    $(".btn_play").css("display","block");
    mainmode=true;
});

$(".btn_dot .dot").click(function(){
    mainnow=$(this).index();
    clearInterval(mainplay);
    curr_slide(mainnow);
    if(mainmode==true){
        mainplay=setInterval(function(){mainslide();},2000)
    }
    mainprevindex=mainnow;
})

$(".btn_prev .bt").click(function(){
    if(mainnow==0){
        mainnow=5;
    }else{
        mainnow--;
    }
    clearInterval(mainplay);
    maincurr_slide(mainnow);
    
    if(mainmode==true){
        mainplay=setInterval(function(){mainslide();},2000);
    }
    mainprevindex=mainnow;
}) 

$(".btn_next .bt").click(function(){
    if(mainimgs==mainnow){
        mainnow=0;
    }else{
        mainnow++;
    }
    clearInterval(mainplay);
    maincurr_slide(mainnow);
    if(mainmode==true){
        mainplay=setInterval(function(){mainslide();},2000);
    }
    mainprevindex=mainnow;
})

function mainstart(){
    $(".btn_play").css("display","block");
    $(".imgs img").eq(0).css({"left":-1568+sp});
    $(".imgs img").eq(1).css({"left":-784+sp});
    $(".imgs img").eq(2).css({"left":0+sp});
    $(".imgs img").eq(3).css({"left":784+sp});
    $(".imgs img").eq(4).css({"left":1584+sp});
    $(".imgs img").eq(5).css({"left":2352+sp});
    $(".btn_dot").children().eq(0).css({"background-color":"#1351f9"});
    mainprevindex=0;
    mainplay=setInterval(function(){mainslide();},2000);
} 

function mainslide(){
    if(mainimgs==mainnow){
        mainnow=0;
    }else{
        mainnow++;
    }
    maincurr_slide(mainnow);
}

function maincurr_slide(e){
    if(e==1){
        $(".imgs img").eq(1).css({"left":-1568+sp});
        $(".imgs img").eq(2).css({"left":-784+sp});
        $(".imgs img").eq(3).css({"left":0+sp});
        $(".imgs img").eq(4).css({"left":784+sp});
        $(".imgs img").eq(5).css({"left":1584+sp});
        $(".imgs img").eq(0).css({"left":2352+sp});
        $(".btn_dot").children().eq(mainprevindex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(1).css({"background-color":"#1351f9"});
        mainprevindex=1;

    } 
    else if (e==2){
        $(".imgs img").eq(2).css({"left":-1568+sp});
        $(".imgs img").eq(3).css({"left":-784+sp});
        $(".imgs img").eq(4).css({"left":0+sp});
        $(".imgs img").eq(5).css({"left":784+sp});
        $(".imgs img").eq(0).css({"left":1584+sp});
        $(".imgs img").eq(1).css({"left":2352+sp});
        $(".btn_dot").children().eq(mainprevindex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(2).css({"background-color":"#1351f9"});
        mainprevindex=2;

    } 
    else if (e==3){
        $(".imgs img").eq(3).css({"left":-1568+sp});
        $(".imgs img").eq(4).css({"left":-784+sp});
        $(".imgs img").eq(5).css({"left":0+sp});
        $(".imgs img").eq(0).css({"left":784+sp});
        $(".imgs img").eq(1).css({"left":1584+sp});
        $(".imgs img").eq(2).css({"left":2352+sp});
        $(".btn_dot").children().eq(mainprevindex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(3).css({"background-color":"#1351f9"});
        mainprevindex=3;
        
    }
    else if (e==4){
        $(".imgs img").eq(4).css({"left":-1568+sp});
        $(".imgs img").eq(5).css({"left":-784+sp});
        $(".imgs img").eq(0).css({"left":0+sp});
        $(".imgs img").eq(1).css({"left":784+sp});
        $(".imgs img").eq(2).css({"left":1584+sp});
        $(".imgs img").eq(3).css({"left":2352+sp});
        $(".btn_dot").children().eq(mainprevindex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(4).css({"background-color":"#1351f9"});
        mainprevindex=4;
        
    }
    else if(e==5){
        $(".imgs img").eq(5).css({"left":-1568+sp});
        $(".imgs img").eq(0).css({"left":-784+sp});
        $(".imgs img").eq(1).css({"left":0+sp});
        $(".imgs img").eq(2).css({"left":784+sp});
        $(".imgs img").eq(3).css({"left":1584+sp});
        $(".imgs img").eq(4).css({"left":2352+sp});
        $(".btn_dot").children().eq(mainprevindex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(5).css({"background-color":"#1351f9"});
        mainprevindex=5;
    }
    else if(e==0){
        $(".btn_play").css("display","block");
        $(".imgs img").eq(0).css({"left":-1568+sp});
        $(".imgs img").eq(1).css({"left":-784+sp});
        $(".imgs img").eq(2).css({"left":0+sp});
        $(".imgs img").eq(3).css({"left":784+sp});
        $(".imgs img").eq(4).css({"left":1584+sp});
        $(".imgs img").eq(5).css({"left":2352+sp});
        $(".btn_dot").children().eq(mainprevindex).css({"background-color":"#aaa"});
        $(".btn_dot").children().eq(0).css({"background-color":"#1351f9"});
        mainprevindex=0;
    }
}