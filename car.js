var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.currentSpeed = 0;
    }
    Car.prototype.accelerate = function (speed) {
        this.currentSpeed += speed;
        console.log("Accelerating to ".concat(this.currentSpeed, " mph..."));
    };
    Car.prototype.decelerate = function (speed) {
        this.currentSpeed -= speed;
        console.log("Decelerating to ".concat(this.currentSpeed, " mph..."));
    };
    Car.prototype.stop = function () {
        this.currentSpeed = 0;
        console.log('Stopping the car...');
    };
    return Car;
}());
// Example usage:
var car = new Car('Toyota', 'Corolla', 2022);
console.log(car);
car.accelerate(40);
car.decelerate(100);
car.stop();
