function(doc) {
    if (doc.type=="data") {
        emit([doc.source,doc.timestamp], [doc.data]);
    }
};