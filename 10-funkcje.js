'use strict';

/*
function multiply(parametr1, parametr2, parametr3){
    var result;
    
    result = parametr1 * parametr2 * parametr3;
    
    return result;
}

console.log("Wynik: " + multiply(3, 9, 10));

var funkcja = function () {
    return "wynik :)";
};

console.log(funkcja);
console.log(funkcja());
*/


///// zadanie

//function kolo(Math.sqrt, Math.PI, 3, 2){
//    var result;
//    
//    result = parametr1 * parametr2 * parametr3;
//    
//    return result;
//}
//
//console.log("Pole koła to " + kolo(Math.sqrt, Math.PI, 10));
//
//var funkcja = function () {
//    return "wynik :)";
//};
//
//console.log(funkcja);
//console.log(funkcja());


function poleKolaObwodKola(promien) {
    var poleKola;
    var obwodKola;
    
    poleKola = Math.PI * Math.pow(promien, 2);
    obwodKola = 2 * Math.PI * promien;
    
    return "Dla koła o promieniu " + promien + ", pole wynosi: " + poleKola + " oraz obwód wynosi: " + obwodKola;
    console.log("Pole koła: " + poleKola);
}

console.log(poleKolaObwodKola(3));
console.log(poleKolaObwodKola(2));
console.log(poleKolaObwodKola(5));
console.log(poleKolaObwodKola(10));

