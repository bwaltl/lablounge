function() {
    var notification =
        {
            source : "",
            devicetypes : $('#deviceTypesDataField').val().split(","),
            response : false,
            type:"notification",
            timestamp : moment()._d,
            data: $('#notificationDataField').val()
        };

    if( $("body").data.userCtx)
    {
        notification.source= $("body").data.userCtx.name;
    }

    //alert(JSON.stringify(notification));

    $db.saveDoc(notification,
        {
            async:false,
            success:function(data){
                alert("Successfully submitted notification");
            },
            error:function(ex){
                alert("Cannot save " + JSON.stringify(notification));
            }
        });
}