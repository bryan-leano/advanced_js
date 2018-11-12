// function constructor

/*var john = {
  name: 'John',
  yearofBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearofBirth, job) {
  this.name = name;
  this.yearofBirth = yearofBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2018 - yearofBirth);
  }
};

Person.prototype.calculateAge = function() {
  console.log(2018 - yearofBirth);
};

Person.prototype.lastName = 'Smith'

var john = new Person('John', 1990, 'job');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/

// Object.create

/*var personProto = {
  calculateAge: function() {
    console.log(2018 - yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John',
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1990 },
  job: { value: 'deaigner' }
});*/

// Primitives vs objects

var a = 23;
var b = a;
a = 46;

console.log(a, b);

var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age, obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
}

function change(a, b) {
  a = 30;
  b.city = 'San Francisco'
};

change(age, obj);

console.log(age, obj.city);
