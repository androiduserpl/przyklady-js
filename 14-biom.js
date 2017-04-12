'use strict';




function Person(name, weight, height){
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.bmi = function(){
        return this.weight / Math.pow(this.height, 2);
    }
}

/*
var = new Person(imie, waga, wzrost);

*/
var zygmunt = new Person('zygmunt', 70, 1.80);
console.log(zygmunt.name + "Twoje BMI to " + zygmunt.bmi());