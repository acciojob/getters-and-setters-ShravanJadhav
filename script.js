//complete this code
class Person {
	constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }
}

class Student extends Person {
	study() {
    console.log(`${Student.name} is studying`);
  }
}

class Teacher extends Person {
	 teach() {
    console.log(`${Teacher.name} is teaching`);
  }
}

 const person = new Person("Unknown",20);
console.log(person.name); 
console.log(person.age); 
 

const student = new Student();
 
student.study(); 
 

const teacher = new Teacher();
 
teacher.teach(); 
 


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
