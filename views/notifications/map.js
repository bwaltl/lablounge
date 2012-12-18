function(doc) {
    if (doc.type=="notification") {
        var devicetypes = doc.devicetypes;
        for (var i = 0; i < devicetypes.length; i++) {
            emit([devicetypes[i],doc.timestamp], [doc.data,doc.devicetypes]);
        }
    }
};