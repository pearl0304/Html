$(document).ready(function(){
    function navslide(){
        $(".menu li").eq(1).mouseover(function(){
            $(".submenuwrap").stop().fadeIn(100);
        });
        $(".submenuwrap").mouseleave(function(){
            $(this).stop().fadeOut(100)
        });
    };
    












    navslide();

}