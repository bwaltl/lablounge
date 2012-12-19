$dbname = "lablounge";
$appname = "labLounge";
$db = $.couch.db($dbname);

$("body").data = {
    "selecteddevice": "",
    "selectednotificationtype": ""
};


function doView(view, json, callback) {
    $.log("dbViewWithKey ");
    $.log(json);

    $db.view(($appname + "/" + view),
            XXmerge(json, {
                async: false,
                success: function (data) {
                    callback(data);
                },
                error: function (ex) {
                    alert("Cannot find the document: " + ex);
                }
            })
    );
}

function XXmerge(o, ob) {
    for (var z in ob) {
        if (ob.hasOwnProperty(z)) {
            o[z] = ob[z];
        }
    }

    return o;
}

function getChartDate(date) {

    return moment(date,"YYYY-MM-DD'T'hh:mm:ss").format();
}

function getUIDate(date) {
    return moment(date, "YYYY-MM-DD'T'hh:mm:ss").format('L');
}