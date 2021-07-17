// 1. Basic generic
class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index];
  }
}

// Generic
class ArrayOfAnything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

// 2. Example if generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// generics
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
// or using type inference
printAnything(['a', 'b', 'c']);

// 3. Generic Constraints
class Car {
  print() {
    console.log('I am a car');
  }
}
class House {
  print() {
    console.log('I am a house');
  }
}

// Error on arr[i].pring()
// function printHousesOrCars<T>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].print(); //Property 'print' does not exist on type 'T'.ts(2339)
//   }
// }

// number[] doesnt has a print method, and would lead to an error
// printHousesOrCars([1, 2, 3, 4]);

// Add on a constraint to type T
// tell TypeScript we promise that there will be a print method abailable.
interface Printable {
  print(): void;
}
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars([new Car(), new House()]);
