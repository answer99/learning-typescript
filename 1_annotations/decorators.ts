@classDecorator
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops, boat was sunk..')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if(speed ==='fase'){
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch(e){
        console.log(errorMessage);
      }
    }
  };
}
