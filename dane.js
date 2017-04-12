'use strict';

var jasonOsoby = {
    "osoby": [
        {imie: "Krystian", nazwisko: "Dziopa", wzrost: "180", oczy: "niebieskie", zainteresowania: [ {nazwa: "podroze"}, {nazwa: "gotowanie"}] },
        {imie: "Kasia", nazwisko: "Zając", wzrost: "170", oczy: "zielone"},
        {imie: "Łukasz", nazwisko: "Badocha", wzrost: "170", oczy: "duże"}
    ]
}

console.log(jasonOsoby.osoby);

jasonOsoby.osoby.forEach(function(element, index){
                         
                         console.log(element.imie);
                         });