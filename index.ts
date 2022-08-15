class Engine {
  drive() {
    console.log("Engine is working");
  }
}
console.log("huck");

class Wheel {
  drive() {
    console.log("Wheels is circle");
  }
}

class Freshener {}

class Flat {
  freshener: Freshener;
  constructor(freshener) {
    this.freshener = freshener;
  }
}

class Car {
  engine: Engine;
  wheels: Wheel[];
  freshener: Freshener;
  constructor(freshener) {
    //агрегация
    this.freshener = freshener;
    //композиция
    this.engine = new Engine();
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
  }
  drive() {
    this.engine.drive();
    for (let i = 0; i < this.wheels.length; i++) {
      this.wheels[i].drive();
    }
  }
}

const bmv = new Car();
bmv.drive();
