let myArr = [["Maria", "Jan", "Piotr"], [1,2,3,4,5,6]];

console.log(myArr[0][2]);
console.log(myArr[0][4]);
console.log(myArr[1].length);

for (let i = 0; i < myArr.length; i++){
    console.log(myArr[i].length);
}

for(let i=0; i < myArr.length; i++){
    for(let j=0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]);
    };
};