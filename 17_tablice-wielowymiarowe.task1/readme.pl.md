Zadanie 
---
Utwórzcie tablicę dwuwymiarową odpowiednio składającą się z:
- tablicy z imionami: Maria, Jan, Piotr
- tablicy z wartościami liczbowymi: 1,2,3,4,5,6

Wyświetlcie:
- trzeci element z pierwszego wiersza
- piąty element z pierwszego wiersza
- długość drugiego elementu z pierwszego wymiaru
- w pętli wypiszcie długości kolejnych wierszy
- z wykorzystaniem pętli wyświetlcie kolejne wartości z tablicy

let myArr = [["Maria", "Jan", "Piotr"], [1,2,3,4,5,6]];

console.log(myArr[0][2]);
console.log(myArr[0][4]);
console.log(myArr[1].length);

for (let i = 0; i < myArr.length; i++){
    console.log(myArr[i].length);
}

for (let i=0; i < myArray.length; i++){
    console.log(myArr[i]);
}