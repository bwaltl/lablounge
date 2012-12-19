function(doc) {
    if(doc._id.indexOf("notification_")==0)
    {
        var types = doc.types;
        for (var i = 0; i < types.length; i++) {
            emit([types[i],doc.timestamp], [doc.data,doc.types]);
        }
    }
};