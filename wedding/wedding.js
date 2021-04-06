$(".menu li").mouseover(function(){
    $(".submenuwarp").stop().slideDown();
});

$(".submenuwarp").mouseleave(function(){
    $(".submenuwarp").stop().slideUp();
});

$(".prv").addClass("off");

$(".nxt").click(function(){
    if(!$("#imgs li").last().is(":visible")){
        $("#imgs li:visible").hide().next("li").fadeIn("slow");
        $(".prv").removeClass("off")
    }
    if($("#imgs li").last().is(":visible")){
        $(".nxt").addClass("off")
    }
})
$(".prv").click(function(){
    if(!$("#imgs li").first().is(":visible")){
        $("#imgs li:visible").hide().prev("li").fadeIn("slow");
        $(".nxt").removeClass("off")
    }
    if($("#imgs li").first().is(":visible")){
        $(".prv").addClass("off")
    }
})

$(".imgbox").click(function(){
    $(".modal").fadeIn(500)
});

$(".modal").click(function(){
    $(".modal").fadeOut(500)
});
