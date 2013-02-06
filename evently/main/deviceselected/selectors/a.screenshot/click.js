function() {
    var graphsnapshot = document.getElementById('graphsnapshot');
    
    Dygraph.Export.asPNG(chart,graphsnapshot);
    $("#dialog").dialog("open");
}