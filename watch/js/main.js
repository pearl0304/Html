$(document).ready(function() {

    var themeList = ["spring","summer","fall","winter"];
    var sectionOffset = Array();
    var scr = $(window).scrollTop();

    function measure() {
        for(i=0; i<4; i++){
           sectionOffset[i] = $("section").eq(i).offset().top;
        }
    }

    function setTheme() {
      scr=$(this).scrollTop();

        $(".gnb li").removeClass();
        for(i=0; i<4; i++){
            if(scr >= sectionOffset[i] && scr < sectionOffset[i+1]){
                $(".gnb li").eq(i).addClass(themeList[i]);
            } else if(scr >= sectionOffset[3]){
                $(".gnb li").eq(3).addClass(themeList[3]);
            }
        }
    }
    
    measure();
    setTheme();

    $(window).on("scroll", function() {
        // scr = $(this).scrollTop();
        // setTheme();
    });

    $(window).on("resize", function() {
        // scr = $(this).scrollTop();
        measure();
        setTheme();
    })


    //li을 클릭했을 때, 해당되는 섹션으로 스크롤 이동시키기 

    $(".gnb li a").on("click",function(e){
      e.preventDefault();
      var i = $(this).parent().index();

      $("html, body").stop().animate({
        "scrollTop" : sectionOffset[i]
      },function(){
        setTheme();
      });

    })
    var a = 0;
    $(window).on("scroll",function(){


}); // open 
