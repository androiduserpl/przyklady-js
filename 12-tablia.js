'use strict';


var imiona = ["Monika", "Krystian", "łukasz"];

imiona[3] = "Tania";
imiona[2] = "Ela";


imiona.push("Geralt");

imiona.pop();
imiona.pop();

imiona.push("Zjarany-Zbyszek");

imiona.unshift("Robert", "Krzystof");

imiona.shift();

console.log(imiona);
console.log(imiona.length);


for (var i = 0; i < imiona.length ; i++) {
    console.log("Index: " + i + " wartość: " + imiona[i]);
}


imiona.forEach(function (element, index){
    console.log("element nr. " + index + " = " + element);
})


console.log(imiona.join());


imiona.reverse();
console.log(imiona.reverse());


var imionaMeskie = ['Robert', 'Marius',' Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion.sort());

console.log(zbiorImion.indexOf("Mariusz"));

console.log(Array.isArray(zbiorImion));

console.log(zbiorImion.slice(2,5));

console.log(zbiorImion.splice(2,2));
//
//console.log(zbiorImion);
//console.log(zbiorImion.splice(2,2"krzyś"));
//console.log(zbiorImion);
//
//
//console.log(zbiorImion.toString());



