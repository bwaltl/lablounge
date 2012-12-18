function(viewdata) {
    notifications=[];

    for (var i = 0; i < viewdata.rows.length; i++) {
        var row = viewdata.rows[i];
        notifications.push({data:row.value[0], devicetypes:row.value[1], timestamp: getUIDate(row.key[1])});
    }

    if($("body").data.selectednotificationtype=="")
    {
        title="New notification";
    }
    else
    {
        title=$("body").data.selectednotificationtype
    }

    if(notifications.length==0)
        emptycase = "There are no notifications";
    else
        emptycase="";
    
    return {title:title,
        devicetype: $("body").data.selectednotificationtype,
        notifications:notifications,
        emptycase:emptycase
    };
}