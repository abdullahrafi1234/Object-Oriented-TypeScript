class Person {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // common
  getSleep(numOfHours: number) {
    console.log(`${this.name} ghumay ${numOfHours} ghonta`);
  }
}

// class Student {
//   name: string; // common
//   age: number; // common
//   address: string; // common

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   // common
//   getSleep(numOfHours: number) {
//     console.log(`${this.name} ghumay ${numOfHours} ghonta`);
//   }
// }
class Student extends Person {}

const student1 = new Student("Mr. Rafi", 25, "BD");

student1.getSleep(15);

class Teacher extends Person {
  //   name: string;
  //   age: number;
  //   address: string;
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    // this.name = name;
    // this.age = age;
    // this.address = address;
    this.designation = designation;
  }

  //   getSleep(numOfHours: number) {
  //     console.log(`${this.name} ghumay ${numOfHours} ghonta`);
  //   }

  takeClass(numOfClass: number) {
    console.log(`${this.name} ${numOfClass} ghonta class ney`);
  }
}

const teacher1 = new Teacher("Mr. Mahmud", 40, "MDPUR", "Senior Teacher");

teacher1.takeClass(4);
teacher1.getSleep(9);
