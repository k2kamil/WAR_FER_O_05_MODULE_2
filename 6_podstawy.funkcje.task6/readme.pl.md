

function createArray(rows){
   let table = [];
    
   for (let i = 1; i <= rows; i++){
        table.push(i);
   }
   
   return table    
}

console.log(createArray(5));

//Nie modyfikujcie niżej kodu
module.exports = {createArray};
