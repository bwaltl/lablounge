function(viewdata) {

    rows = [];
    
    for (var i = viewdata.rows.length-1; i >=0; i--) {
        var row = viewdata.rows[i];
        rows.push({key:getChartDate(row.key[1]), value:row.value});
    }

    $("body").data.chartData = rows;

    return {source: $("body").data.selecteddevice};
}