function generateRandomNumbers (a, b) {
    let array = [];

    for (i = 0; i <= 5; i++){
        let random = Math.floor(Math.random()*(b - a + 1) + a);
        array.push(random);
    }
    return array;
}

let x = generateRandomNumbers(0,5);
let [first, , third] = x;
console.log(first,third);

