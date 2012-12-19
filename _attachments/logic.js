$dbname = "lablounge";
$appname = "labLounge";
$db = $.couch.db($dbname);
$db.changes().onChange(onDBChange);

$("body").data = {
    "selecteddevice": "",
    "selectednotificationtype": ""
};


function onDBChange(data) {
    changedDocs = data.results;
    
    lastInsertedNotificationId = "";
   
    if ($("body").data.lastInsertedNotificationId) {
        lastInsertedNotificationId = $("body").data.lastInsertedNotificationId;
    }
    $.log(lastInsertedNotificationId);
    for (var i = 0; i < changedDocs.length; i++) {
        id = changedDocs[i].id.toString();
        $.log(id.indexOf("notification_") == 0 && lastInsertedNotificationId != id);
        if ($("body").data.selecteddevice != "" && id.indexOf("data_") == 0) {
            $.log("Change: " + id);
            doView("allentries", { key: id }, function (data) {
                $("body").data.chartData.push({
                    key: getChartDate(data.rows[0].value.timestamp),
                    value: data.rows[0].value.data
                });
                loadChart();
            });
            
        }
        else if (id.indexOf("notification_") == 0) {
            $.log("Change: " + id);
            $('#notificationChangedAlert').show();

        }
    }
    
}

function doView(view, json, callback) {
    $.log("View: " + view);

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
    return moment(date).format();
}

function getUIDate(date) {
    return moment(date).format("MM/DD/YYYY hh:mm:ss");
}

function getCouchDBTimestamp() {
    return moment().format("YYYY-MM-DDThh:mm:ss");
}

function getIdTimestamp() {
    return moment().format("YYYYMMDDThhmmss");
}