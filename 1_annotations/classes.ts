class Vehicle {
              // short cut for this.color = color
  constructor(public color: string){}
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)


class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  // override
  drive(): void {
    console.log('hogehoge');
  }

  startDrivingProcess(){
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'red')
car.startDrivingProcess()