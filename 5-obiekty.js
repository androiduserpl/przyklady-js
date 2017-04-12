'use strict';

var student = {
    imie: "Kaja",
    wzrost: 152,
    plec: "inna",
    wyswietlDane: function() { console.log(this.imie) }
}

student.wyswietlDane();
console.log(student.plec);


var student = {
    imie: "Kaja",
    wzrost: 152,
    plec: "inna",
    wyswietlDane: function() { 
        console.log("Student ma na imie " + this.imie + " i ma " + this.wzrost + "cm wzrostu. A jego płeć jest " + this.plec) 
    }
}

student.wyswietlDane();
console.log(student.plec);