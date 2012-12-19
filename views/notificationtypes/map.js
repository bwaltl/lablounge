function(doc) {
    if(doc._id.indexOf("notification_")==0)
    {
        for (var i = 0; i < doc.types.length; i++) {
            emit(doc.types[i], 1);
        }
    }
};