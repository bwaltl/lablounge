function() {
    $("body").data.selecteddevice="";
    $("body").data.selectednotificationtype=$(this).attr('href').slice(1);
    $(this).trigger('notificationtypeselected');
}