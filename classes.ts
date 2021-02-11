class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vrummmm!!!");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const audi = new Vehicle("purple");
const bmw = new Car(4, "black");
bmw.startDrivingProcess();
console.log(bmw.color, bmw.wheels);
