//Function constructor

var john = {
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

var john = new Person('John', 1990, 'job');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();