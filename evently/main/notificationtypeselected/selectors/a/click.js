function() {
    var notificationTypes =$(this).attr('alt').split(",");
    var notificationData = $("body").data.selecteddevice=$(this).attr('href').slice(1);

    $('#notificationDataField').val(notificationData);
    $('#deviceTypesDataField').val(notificationTypes);
}