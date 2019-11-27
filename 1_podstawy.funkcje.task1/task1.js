function getNumber(number, array) {
    for ( let i = 0; i < array.length; i++) {
        if ( array[i] === number ) {
            return true;
        }
    }
    return false;
}




//Nie modyfikujcie niżej kodu
module.exports = {getNumber};
