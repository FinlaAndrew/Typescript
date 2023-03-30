class Car {
    make: string;
    model: string;
    year: number;
    currentSpeed: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.currentSpeed = 0;
    }
  
    accelerate(speed: number): void {
      this.currentSpeed += speed;
      console.log(`Accelerating to ${this.currentSpeed} mph...`);
    }
  
    decelerate(speed: number): void {
      this.currentSpeed -= speed;
      console.log(`Decelerating to ${this.currentSpeed} mph...`);
    }
  
    stop(): void {
      this.currentSpeed = 0;
      console.log('Stopping the car...');
    }
  }
  
  const car = new Car('Toyota', 'Corolla', 2022);
  console.log(car); 
  car.accelerate(40); 
  car.decelerate(100); 
  car.stop(); 
  