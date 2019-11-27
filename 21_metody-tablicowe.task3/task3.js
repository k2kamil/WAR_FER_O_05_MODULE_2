
function contains (text, arr) {
    let filteredArr = arr.filter(function(element){
        return (element != text);
    });
    return filteredArr;
}
console.log(contains("ALA", ["ALA", "ALA", "Marek"]));


