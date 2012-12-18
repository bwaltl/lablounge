function(data) {
    if(data.rows.length==0)
        newtext="Create a ";
    else
        newtext="or create a ";

    return {types: data.rows, newtext:newtext};
}