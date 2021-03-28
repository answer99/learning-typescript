
// No type inference for arguments!
const add = (a: number, b: number): number => {
  return a + b;
}

// Type inference works out output, but dont use it
// a mistake example like this
const subtract = (a: number, b: number) => {
  a - b;
}

function devide(a: number, b: number): number {
  return a / b;
}

const multiple = function(a: number, b: number): number{
  return a * b; 
}

// a function that is not going to return anything
const logger = (message: string): void => {
  console.log(message);
}

//never going to reach the end of this function
// rarely use
const throwError = (message: string): never => {
  throw new Error(message);
}

const throwError1 = (message: string): string => {
  if(!message) {
    throw new Error(message);
  }
  return message;
}

// Destructuring with Annotations
const todaysweather = {
  date: new Date(),
  weather: 'sunny'
};
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
}
