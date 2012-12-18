function(doc) {
    if (doc.type=="notification") {
        for (var devicetype in doc.devicetypes) {
            emit(doc.devicetypes[devicetype], 1);
        }
    }
};