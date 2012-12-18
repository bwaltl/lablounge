function(callback) {
    var selecteddevice = $("body").data.selecteddevice;

    doView ("dataentries", {startkey:[selecteddevice],endkey:[selecteddevice,{}]}, callback);
}