'use strict';




function Osoba(imie, waga, wzrost) {
    this.imie = imie;
    this.waga = waga;
    this.wzrost = wzrost;
    this.wyswietlInfo = function (){
    console.log( "Imię: " + this.imie + "\n"
                + "Waga: " + this.waga + "\n"
                + "Wzrost: " + this.wzrost + "\n"); 
    }
}

var zygmunt = new Osoba("Zygmunt", 70, 1.80);

function bmi()

zygmunt.wyswietlInfo();



