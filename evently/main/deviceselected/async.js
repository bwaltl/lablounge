function(callback) {
    var selecteddevice = $("body").data.selecteddevice;

    doView ("dataentries", {descending:true, limit:$maxChartData, startkey:[selecteddevice,{}],endkey:[selecteddevice]}, callback);
}