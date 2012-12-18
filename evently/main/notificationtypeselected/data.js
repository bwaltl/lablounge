function(viewdata) {
    notifications=[];

    for (var i = 0; i < viewdata.rows.length; i++) {
        var row = viewdata.rows[i];
        notifications.push({data:row.value[0], devicetypes:row.value[1], timestamp: getUIDate(row.key[1])});
    }
    
    return {devicetype: $("body").data.selectednotificationtype,
        notifications:notifications
    };
}