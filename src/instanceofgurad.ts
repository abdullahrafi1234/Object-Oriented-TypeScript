// OOP ==> instance of type guard / type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta ghumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} hours Pore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ti class ney`);
  }
}

// function guard
const isStudent = (user: Person) => {
  return user instanceof Student; // true | false
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};
// const getUserInfo = (user: Person) => {
//   if (user instanceof Student) {
//     user.doStudy(10);
//   } else if (user instanceof Teacher) {
//     user.takeClass(5);
//   } else {
//     user.getSleep(15);
//   }
// };

// kono class theke banano object k instance bole
// garir design diye onk gula gari toiri

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");
const person1 = new Person("Mr. Person");

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
