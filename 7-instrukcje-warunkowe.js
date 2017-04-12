'use strict';


var wzrostMateusz = 170;
var wzrostKaji = 180;



// zawsze musi być true w poniższym inaczje nic nie wyjdzie


/*if ( wzrostKaji == wzrostMateusz ) {
    console.log("Kaja jest niższa :)");
}*/


if ( wzrostKaji > wzrostMateusz ) {
    console.log("Kaja jest wyższa :)");
}
else {
    console.log("Kaja jest niższa")
}




// warunek else if else if
if ( wzrostKaji > wzrostMateusz ) {
    console.log("Kaja jest wyższa :)");
}

else if ( wzrostKaji == wzrostMateusz ) {
    console.log("Kaja jest tak wysoka jak Mateusz :)");
}

else {
    console.log("Kaja jest niższa")
}


//warunek switch


var kolor = 'czerwony'

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
        
    case 'zielony':
        console.log('Kolor zielony')
        break;
        
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
}