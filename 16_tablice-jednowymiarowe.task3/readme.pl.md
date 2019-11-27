Zadanie 
---

- Podepnijcie skrypt do pliku html. 
- Otwórzcie stronę html w nowym oknie przeglądarki
- Napiszcie funkcję **addArrays**, która ma przyjmować dwa argumenty – dwie tablice zawierające liczby całkowite.
- Funkcja ta ma zwracać również tablicę, która będzie wynikiem dodawania każdego elementu o tym samym indeksie.
- Jeżeli, tablice nie są równe, elementy nadmiarowe są przepisywane do nowej tablicy.

Przykład:
```
addArrays([4,0,1,3,4], [1,9,6,7,8,17]) => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]) => [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1]) => [5,4,77,6,3,5]
```

let arr1 = [1, 2, 3, 5];
 let arr2 = [5, 4, 3];
 
 function addArrays (arr1, arr2){
     let arr3 = arr1 + arr2;
     return arr3;
     console.log(arr3);
 }