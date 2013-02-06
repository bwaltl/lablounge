function(callback) {
    var selecteddevice = $("body").data.selecteddevice;
    $("body").data.liveupdate=true;
    doView ("dataentries", {descending:true, limit:$maxChartData, startkey:[selecteddevice,{}],endkey:[selecteddevice]}, callback);
}