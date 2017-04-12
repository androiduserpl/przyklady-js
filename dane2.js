'use strict';

var jasonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"},
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jasonPracownicy.pracownicy);

jasonPracownicy.pracownicy.forEach(function(element, index){
                         
                         console.log(index + " - " +  element.firstName );
                         });
//
//
//var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//
//
//function myArray(num) {
//    if (num % 2 === 0) {
//        return true;
//    } else {
//        return false;
//    }
//    console.log("e")
//}


var tablica = []

for (var j = 0; j<=150; j++) {
    var rand = Math.floor(Math.random() * 100);
    tablica.push(rand);
}

//var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*
for (var i = 0; i<myArray.length; i++) {
    if (myArray[i]%2==0){
        console.log(myArray[i] + ' jest parzysta');
    } else {console.log(myArray[i] + ' jest nieparzysta');
           }
    if (i == 100) break;
}
*/

