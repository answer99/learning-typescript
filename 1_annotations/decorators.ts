class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string, desc: PropertyDescriptor): void {
  console.log('Target:', target);
  console.log('Key', key);
  console.log('desc', desc)
}

// @testDecorator equals callning testDecorator(Boat.prototype, 'pol')