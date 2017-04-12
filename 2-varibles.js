'use strict'

var imie;
var imieDamskie = "Kaja";
var wiek = 37;

var kolor = "czerwony";

imie = "Sergio";

imie = imieDamskie;

/*console.log(imie);
console.log(kolor);
console.log(wiek);*/

function wyswietlZmienna() {
    var imie = 180; //zmienna lokalna - przez var
    console.log(imie);
}

wyswietlZmienna();

console.log(imie)