function showNotification(msg,style){
    $("#notification").show();
    $("#notificationText").text(msg);
    $("#notification").removeClass("success error");
    $("#notification").addClass(style); 
    setTimeout(hideNotification,3000);
}
function hideNotification(){
    $("#notification").hide();
}