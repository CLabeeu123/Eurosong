import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//c#
// string firstname = "jason";
// number number1 = 5

//ES5 DECLARATE VARIABLES
//var firstname = "Jason";
//var name = "Verlinden";

//for (var i=0; i<10; i++){
//  console.log(i);
//}

//console.log(i);

//ES6 CONST VS LET
// CONST stays the same
// LET can change
//let Firstname = "Jason";
//console.log(Firstname);
//Firstname = "Josan";
//console.log(Firstname);

//for (let index = 0; index<10; index++){
//  console.log(index);
//}
//console.log(index);


//ES5 CONCATENATION
//var first = "jason";
//var last = "verlinden";
//console.log(first+" "+last);

//ES6 CONCATINATION
//let first = "jason";
//let last = "verlinden";
//let full = `${first} ${last}`;
//console.log(full);

//ES5
//var person = {firstname: "jason", name: "verlinden", sayfull: function(){console.log(this.firstname+" "+ this.name)}};
//console.log(person.firstname);
//console.log(person.name);
//person.sayfull();

//ES6
//let person = {firstname: "jason", name: "verlinden", sayfull(){console.log(`${this.firstname} ${this.name}`)} };
//console.log(person.firstname);
//console.log(person.name);
//person.sayfull();


//THIS
/*
var person ={
  firstname : "Christophe",
  name: "Labeeu",
  sayFull: function(){
    console.log(this.firstname + " "+ this.name);
  }
}

console.log(person.firstname);
console.log(person.name);
person.sayFull();

let fullname = person.sayFull.bind(person);
fullname();



const Person ={
  firstname : "Christophe",
name: "Labeeu",
sayFullNameAfter10Sec: function(){
  window.setTimeout(()=>{console.log(this.firstname + " "+ this.name)}, 2000);
}
}
Person.sayFullNameAfter10Sec();


console.log(square(5))

// ES5 way
var square = function(number) {
  return number * number;
};

// if multiple 
const squareES6 = (number1 , number2) => {
  return number * number;
};

// if 1 parameter you could remove the ()
const squareES6 = number => {
  return number * number;
};

// if no parameters
const squareOf5 = () => {
  return 5 * 5;
};

// If only 1 line 
const square = number => number * number;




const colors = ["red", "green", "blue"];
let items = colors.map(color => `<li>${color}</li>`);

console.log(items);

*/
var user = {
  name: "Labeeu",
  firstname: "Christophe",
  age: 30
};

var name = user.name;
var firstname = user.firstname;
var age = user.age;