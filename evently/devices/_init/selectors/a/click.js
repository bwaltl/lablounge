function() {
    $("body").data.selecteddevice=$(this).attr('href').slice(1);
    $("body").data.selectednotificationtype="";
    $(this).trigger('deviceselected');
}