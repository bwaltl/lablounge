function(doc) {
    if(doc._id.indexOf("data_")==0)
    {
        emit([doc.source,doc.timestamp], [doc.data]);
    }
};