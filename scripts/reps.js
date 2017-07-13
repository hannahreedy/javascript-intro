// comments
// declare a variable
var name = 'Hannah';
// var says this is a variable with the name 'name' and a value of 'Hannah'

typeof name
// what am I?

//3 new variables;
// petName, carMake, faveFood

var petName = 'Jimi';
var carMake = 'Honda';
var faveFood = 'pizza';

// log all 3 using console.log()

console.log(petName);
console.log(carMake);
console.log(faveFood);


//numerics
var pi = 3.14;
var age = 24;
var faveNumber = 13;

typeof pi;
typeof age;
typeof faveNumber;


// boolean

var isHangry = false;
var isOverTwentyOne = true;
var isCool = true;

typeof isHangry;


// arrays of things
var friends = ['Jackie', 'Genna', 'Danielle', 'Devin', 'Jeff'];
var pets = ['Jimi', 'Jack', 'Charles', 'Me']

Array.isArray(friends);
// us this because typeof array === 'object'


// loop through all items in an array

friends.forEach(function(friend) {
  console.log(friend);
});
pets.forEach(function(pet) {
  console.log(pet);
});


//create elements

var list = document.createElement('ul');
var p = document.createElement('p');
var article = document.createElement('aritcle');
var item = document.createElement('li');

console.log(list);
console.log(p);
console.log(article);
console.log(item);

// finally... IF/FALSE

if (isOverTwentyOne) {
  console.log('gimme booze');
} else {
  console.log('womp womp');
}

if (20 > 21) {
  console.log('u can haz beer');
} else {
  console.log('no beer 4 u');
}
