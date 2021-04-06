$(document).ready(function(){
    if($.cookie("nopopup1")!="Y"){
        $("#popup").show();
    }else{
        $("#popup").hide();
    }
});

$(function(){
    $("#close").click(function(){
        $("#popup").hide();
        if(document.mainPopup.popup.checked){
            $.cookie("nopopup1","Y",{expires:1});
        }
        $("#popup").hide();
    });
});