// OOP - class ==> object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   // class ba object er bitor jokhn kono function thake tokhn take method bole

//   makeSound() {
//     console.log(`${this.name} is making sound ${this.sound}`);
//   }
// }

// Parameter Properties
class Animal {
  // public name: string;
  // public species: string;
  // public sound: string;

  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  // class ba object er bitor jokhn kono function thake tokhn take method bole

  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("Dogesh", "dog", "gheo ghew");

const cat = new Animal("Cat bhai", "cat", "mew mew");

console.log(dog.sound);
// console.log(dog.makeSound());  // eivabe dile undefined ashbe

dog.makeSound();
cat.makeSound();
