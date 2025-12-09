// Polymorphism, the 2nd pillar of OOP

class Person {
  getSleep() {
    console.log(`I sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student and I sleep 7 hours`);
  }
}

class NextDeveloper extends Person {
  getSleep() {
    console.log(`I am a next level developer , I sleep for 6 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextDeveloper();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  // Area: pi*r*r

  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  // Area = height * weight

  height: number;
  weight: number;

  constructor(height: number, weight: number) {
    super();
    this.height = height;
    this.weight = weight;
  }
  getArea() {
    return this.height * this.weight;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(15);
const shape3 = new Rectangle(10, 30);

getArea(shape2);
