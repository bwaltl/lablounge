function() {
    source = "";
    id= "notification_" + source + getIdTimestamp();
    if( $("body").data.userCtx)
    {
        source= $("body").data.userCtx.name;
    }

    var notification =
        {
            source : source,
            types : $('#deviceTypesDataField').val().split(","),
            response : false,
            timestamp : getCouchDBTimestamp(),
            data: $('#notificationDataField').val(),
            _id: id
        };


    //alert(JSON.stringify(notification));

    $db.saveDoc(notification,
        {
            async:false,
            success:function(data){
                $("body").data.lastInsertedNotificationId = data.id;
                $(this).trigger('notificationtypeselected');
            },
            error:function(ex){
                alert("Cannot save " + JSON.stringify(notification));
            }
        });
}