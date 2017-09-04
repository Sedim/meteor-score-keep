import {Meteor} from 'meteor/meteor';
import {Players} from '../imports/api/players';

Meteor.startup(() => {

  class Person {
    constructor(name = 'Annon', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi My name is ${this.name}`;
    }
    getPersonDescription() {
      return `This is ${this.name} and I am ${this.age} years old.`
    }
  }

  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }
    getGreeting() {
      if (this.title) {
        return `Hi My name is ${this.name} and I am a ${this.title}`;
      } else {
        return super.getGreeting();
      }
    }
    get hasjob() {
      return !!this.title;
    }
  }

  class Programmer extends Person {
    constructor(name, age, language = 'assembly') {
      super(name, age);
      this.language = language;
    }
    getGreeting() {
      if (this.language) {
        return `Hi My name is ${this.name}. and I am an ${this.language} programmer.`;
      }
    }
  }

  let me = new Employee('Sedim', 22, 'db admin');
  // console.log (me.name, me.age);
  console.log(me.getGreeting());
  console.log (me.hasjob);

  let person = new Employee('Andrew')
  console.log(person.getPersonDescription());
  console.log(person.getGreeting());
  // console.log (person.hasjob());

  let worker = new Programmer('Estelle', 22, 'C++');
  console.log(worker.getGreeting());

});
