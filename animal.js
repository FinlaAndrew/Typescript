var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes ").concat(this.sound, " sound"));
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Mammal.prototype.feedMilk = function () {
        console.log("".concat(this.name, " feeds its young with milk"));
    };
    return Mammal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " its flying"));
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " is swimming"));
    };
    return Fish;
}(Animal));
var cat = new Mammal('Cat', 2, 'Meow');
cat.makeSound();
cat.feedMilk();
var parrot = new Bird('Parrot', 1, 'Squawk');
parrot.makeSound();
parrot.fly();
var goldfish = new Fish('Goldfish', 3, 'Bloop');
goldfish.makeSound();
goldfish.swim();
