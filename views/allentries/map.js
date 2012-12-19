function(doc) {
    if(doc._id.indexOf("data_")==0 || doc._id.indexOf("notification_")==0)
    {
        emit(doc._id, doc);
    }
};