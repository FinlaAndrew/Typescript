class Animal {
    protected name: string;
    protected age: number;
    protected sound: string;
  
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
    makeSound(): void {
        console.log(`${this.name} makes ${this.sound} sound`);
      }
      
}
class Mammal extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    feedMilk(): void {
      console.log(`${this.name} feeds its young with milk`);
    }
  }
  class Bird extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    fly(): void {
      console.log(`${this.name} its flying`);
    }
  }
  class Fish extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    feedMilk(): void {
      console.log(`${this.name} is swimming`);
    }
  }