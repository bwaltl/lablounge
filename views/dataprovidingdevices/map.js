function(doc) {
    if (doc.type=="data") {
        emit(doc.source, 1);
    }
};