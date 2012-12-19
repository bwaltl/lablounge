function(callback) {
    var selectednotificationtype = $("body").data.selectednotificationtype;
    $.log("selected");
    doView ("notifications", 
        {descending:true,
            limit: 5, 
            endkey:[selectednotificationtype],
            startkey:[selectednotificationtype,{}]}, 
        callback);

}