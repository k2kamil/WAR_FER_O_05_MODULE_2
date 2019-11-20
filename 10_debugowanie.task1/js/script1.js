function calculator(num1, num2, operation){
    let result;
    switch(operation){
        case "+": result = num1 + num2;
        case "*": result = num1 * num2;
        case "*": result = Math.pow(num1, num2);
        case "-": result = num1 + num2;
        case "/": result = num1 - num2;
    }

    return result;
}

console.log("2 + 2 = ", calculator(2,2,"+"));
console.log("2 * 2 = ", calculator(2,2,"*"));
console.log("2 - 2 = ", calculator(2,2,"-"));
console.log("2 ^ 2 = ", calculator(2,2,"^"));
console.log("2 / 4 = ", calculator(2,2,"/"));