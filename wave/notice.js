var noticenow=0;
var noticeimgs=4;
var noticeprevindex;

noticestart();


function noticestart(){
    $(".news p").eq(0).css("top","0px");
    $(".news p").eq(1).css("top","50px");
    $(".news p").eq(2).css("top","150px");
    $(".news p").eq(3).css("top","200px");
    $(".news p").eq(4).css("top","250px");
    noticeplay=setInterval(function(){noticeslide();},3000);
}

function noticeslide(){
if(noticenow==5){noticenow=0;}else{noticenow++;}
if(noticenow==1){
    $(".news p").eq(0).css("display","block");
    $(".news p").eq(1).css("display","block");
    $(".news p").eq(2).css("display","none");
    $(".news p").eq(3).css("display","none");
    $(".news p").eq(4).css("display","none");

    $(".news p").eq(1).animate({"top":"0px"});
    $(".news p").eq(2).animate({"top":"50px"});
    $(".news p").eq(3).animate({"top":"150px"});
    $(".news p").eq(4).animate({"top":"200px"});
    $(".news p").eq(0).animate({"top":"-50px"});
}
else if (noticenow==2){
    $(".news p").eq(1).css("display","block");
    $(".news p").eq(2).css("display","block");
    $(".news p").eq(3).css("display","none");
    $(".news p").eq(4).css("display","none");
    $(".news p").eq(0).css("display","none");

    $(".news p").eq(2).animate({"top":"0px"});
    $(".news p").eq(3).animate({"top":"50px"});
    $(".news p").eq(4).animate({"top":"150px"});
    $(".news p").eq(0).animate({"top":"200px"});
    $(".news p").eq(1).animate({"top":"-50px"});

}else if (noticenow==3){
    $(".news p").eq(2).css("display","block");
    $(".news p").eq(3).css("display","block");
    $(".news p").eq(4).css("display","none");
    $(".news p").eq(0).css("display","none");
    $(".news p").eq(1).css("display","none");

    $(".news p").eq(3).animate({"top":"0px"});
    $(".news p").eq(4).animate({"top":"50px"});
    $(".news p").eq(0).animate({"top":"150px"});
    $(".news p").eq(1).animate({"top":"200px"});
    $(".news p").eq(2).animate({"top":"-50px"});
    
}
else if(noticenow==4){
    $(".news p").eq(3).css("display","block");
    $(".news p").eq(4).css("display","block");
    $(".news p").eq(0).css("display","none");
    $(".news p").eq(1).css("display","none");
    $(".news p").eq(2).css("display","none");

    $(".news p").eq(4).animate({"top":"0px"});
    $(".news p").eq(0).animate({"top":"50px"});
    $(".news p").eq(1).animate({"top":"150px"});
    $(".news p").eq(2).animate({"top":"200px"});
    $(".news p").eq(3).animate({"top":"-50px"});

}
else if(noticenow==0){
    $(".news p").eq(4).css("display","block");
    $(".news p").eq(0).css("display","block");
    $(".news p").eq(1).css("display","none");
    $(".news p").eq(2).css("display","none");
    $(".news p").eq(3).css("display","none");

    $(".news p").eq(0).animate({"top":"0px"});
    $(".news p").eq(1).animate({"top":"50px"});
    $(".news p").eq(2).animate({"top":"150px"});
    $(".news p").eq(3).animate({"top":"200px"});
    $(".news p").eq(4).animate({"top":"-50px"});

}

}

$(".notice_nxt .nbt").click(function(){
    if(noticeimgs!=noticenow){noticenow++}
    clearInterval(noticeplay);
    noticecurr_slide(noticenow);
    noticeprevindex=noticenow;
})

function noticecurr_slide(e){
    if(e==1){
        $(".news p").eq(0).css("display","block");
        $(".news p").eq(1).css("display","block");
        $(".news p").eq(2).css("display","none");
        $(".news p").eq(3).css("display","none");
        $(".news p").eq(4).css("display","none");
    
        $(".news p").eq(1).animate({"top":"0px"});
        $(".news p").eq(2).animate({"top":"50px"});
        $(".news p").eq(3).animate({"top":"150px"});
        $(".news p").eq(4).animate({"top":"200px"});
        $(".news p").eq(0).animate({"top":"-50px"});
        noticeprevindex=1;
    }
    else if (e==2){
        $(".news p").eq(1).css("display","block");
        $(".news p").eq(2).css("display","block");
        $(".news p").eq(3).css("display","none");
        $(".news p").eq(4).css("display","none");
        $(".news p").eq(0).css("display","none");
    
        $(".news p").eq(2).animate({"top":"0px"});
        $(".news p").eq(3).animate({"top":"50px"});
        $(".news p").eq(4).animate({"top":"150px"});
        $(".news p").eq(0).animate({"top":"200px"});
        $(".news p").eq(1).animate({"top":"-50px"});
        noticeprevindex=2;
    }
    else if (e==3){
        $(".news p").eq(2).css("display","block");
        $(".news p").eq(3).css("display","block");
        $(".news p").eq(4).css("display","none");
        $(".news p").eq(0).css("display","none");
        $(".news p").eq(1).css("display","none");
    
        $(".news p").eq(3).animate({"top":"0px"});
        $(".news p").eq(4).animate({"top":"50px"});
        $(".news p").eq(0).animate({"top":"150px"});
        $(".news p").eq(1).animate({"top":"200px"});
        $(".news p").eq(2).animate({"top":"-50px"});
        noticeprevindex=3;
        
    }
    else if(e==4){
        $(".news p").eq(3).css("display","block");
        $(".news p").eq(4).css("display","block");
        $(".news p").eq(0).css("display","none");
        $(".news p").eq(1).css("display","none");
        $(".news p").eq(2).css("display","none");
    
        $(".news p").eq(4).animate({"top":"0px"});
        $(".news p").eq(0).animate({"top":"50px"});
        $(".news p").eq(1).animate({"top":"150px"});
        $(".news p").eq(2).animate({"top":"200px"});
        $(".news p").eq(3).animate({"top":"-50px"});
        noticeprevindex=4;
    
    }
    else if(e==0){
        $(".news p").eq(4).css("display","block");
        $(".news p").eq(0).css("display","block");
        $(".news p").eq(1).css("display","none");
        $(".news p").eq(2).css("display","none");
        $(".news p").eq(3).css("display","none");
    
        $(".news p").eq(0).animate({"top":"0px"});
        $(".news p").eq(1).animate({"top":"50px"});
        $(".news p").eq(2).animate({"top":"150px"});
        $(".news p").eq(3).animate({"top":"200px"});
        $(".news p").eq(4).animate({"top":"-50px"});
        noticeprevindex=0;
    
    }


}


