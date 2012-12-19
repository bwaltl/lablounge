function(doc) {
    if (doc._id.indexOf("data_")==0)
    {
        emit(doc.source, 1);
    }
};