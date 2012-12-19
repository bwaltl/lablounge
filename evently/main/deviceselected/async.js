function(callback) {
    var selecteddevice = $("body").data.selecteddevice;

    doView ("dataentries", {limit:$maxChartData, startkey:[selecteddevice],endkey:[selecteddevice,{}]}, callback);
}