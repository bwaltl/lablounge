function(viewdata) {

    rows = [];
    
    for (var i = 0; i < viewdata.rows.length; i++) {
        var row = viewdata.rows[i];
        rows.push({key:getChartDate(row.key[1]), value:row.value});
    }

    return {source: $("body").data.selecteddevice, entries: rows};
}