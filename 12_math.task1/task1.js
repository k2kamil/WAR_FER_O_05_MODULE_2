
function calculator (num1, num2, operation) {
    let result;
    switch(operation){
        case "^":
            result = Math.pow(num1, num2);
            break;
        case "sq":
            result = Math.pow(num1, 1/num2);
            break;
        case "dec":
            result = Math.round(num1*Math.pow(10, num2))/Math.pow(10, num2);
            break;
    }
    return result;
}

console.log("9 sq 2 =", calculator(9, 2, "sq"));

//Nie modyfikujcie niżej kodu
module.exports = {calculator};
