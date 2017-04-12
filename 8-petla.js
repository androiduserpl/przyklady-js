'use strict';

/*

for ( var i=10 ; i>0 ; i--) {
    console.log(i);
}

var it;
while ( it != 6 ) {
    console.log(it);
    it = Math.floor((Math.random() * 10)  + 1 );
    it++;
}



// do while

var i;
do  {
    //losowanie od 1 do 10
    i = Math.floor((Math.random() * 10)  + 1 );
    console.log(i);
} while (i != 6);
*/



// brake
//
//var a = 0 ;
//while ( a < 10 ) {
//    console.log(++a);
//    
//    if ( a == 5 ) {
//        break;
//    }
//}
//
//
//for ( var b = 0 ; b < 10 ; ++b) {
//    if ( b == 5 ) {
//        continue;
//    } else {
//        console.log(b)
//    }
//    
//    console.log("--")
//}
/////////
//
//
//var i = 0;
//while (true) {
//    /* pętla while wykonywała by się w nieskończoność (ponieważ warunek tej pętli był by
//    zawsze prawdziwy), gdyby nie znajdująca się wewnątrz instrukcja break (dzięki czemu
//    pętla będzie wykonywana dopóki wartość zmiennej i nie osiągnie co najmniej wartości 9) */
//    console.log("napis [i = " + i + "] <br />");
//    if (i++ >= 9) break;
//}

for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) continue;
    /* jeśli wartość zmiennej i nie jest podzielna przez dwa to przejdź do kolejnej iteracji
    jeśli jest podzielna przez dwa to wypisz tą iterację */
    console.log(i + " ");
}

var wart1 = 12; // zmienna globalna
var wart2 = 51; // zmienna globalna
function dodaj() { //deklaracja funkcji o nazwie dodaj
    // instrukcje wewnątrz funkcji
    // odwołanie do zmiennych globalnych
    console.log("Wynikiem dodawania " + wart1 + " oraz " + wart2 + " jest ");
    console.log(wart1 + wart2);
    console.log("koniec.");
}
dodaj();



var wart1 = 4; // zmienna globalna
function dodaj2() { //deklaracja funkcji o nazwie dodaj
// instrukcje wewnątrz funkcji
var wart2 = 5; // deklaracja zmienna lokalne
var suma;
suma = wart1 + wart2; // przypisanie wartości zmiennej lokalnej
return suma;
}
console.log ( dodaj2() );



////


var imiona = [ 'Marcin', 'Ania', 'Agnieszka' ]; //stwórz tablicę
imiona.pop(); // usuwa ostatni element i zwraca jego wartość
console.log( imiona ); // wypisze się "Marcin, Ania"
imiona.pop();
console.log( imiona );
imiona.pop();
console.log( imiona );

////



//var imiona = [ 'Marcin', 'Ania', 'Agnieszka', 'Koza', 'Kasia' ]; //stwórz tablicę
//for ( var i=0; i < imiona.length; i++ ) {
//console.log( 'Imię numer ' + i + ': ' + imiona[ i ] );
//}

imiona.forEach( function( el, i ) {
console.log( 'Imię numer ' + i + ': ' + el );
} )