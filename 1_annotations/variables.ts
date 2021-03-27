let apples: number = 5;
let speed: string = 'fast';
let hasNumber: boolean = true;

let nothingMatch: null = null;
let nothing: undefined = undefined;

// built in objects
let today: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x:number; y:number } = {
  x: 10,
  y: 20
};

// Function
const logNumber:(i:number) => void = (i:number) => {
  console.log(i);
}

/**
 * When to use Type inference
 * In general, always!
 */

// When to use annotations
// 1) Function that returns 'any' type
//   ex: JOSN.parse()
const json = '{"x": 10, "y": 20}';
const coordinates: { x:number; y:number } = JSON.parse(json);
coordinates.afasasdff // type error

// 2) When we declare a variable on one line
//  and initalize later
let words = ['red', 'blue', 'green'];
let foundword: boolean;   //initalize later

for(let i = 0; i < words.length; i++){
  if(words[i] === 'green'){
    foundword = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -12, 2];
// let numberAboveZero = false; // does not work for returning false or positive number
let numberAboveZero: boolean | number = false; //return false or positive number

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i]
  }
}