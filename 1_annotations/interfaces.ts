interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

// Fixing long annotations with interface
// const printVehicle = (vehicle: {name: string; year: number; broken: boolean }): void => {
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.summary()}`)
}

printVehicle(oldCivic)


// refactor from above interface

interface Reportable {
  summary(): string;
}

// pros: more reusable
// this function can be used with any type of object that satisfies the reportable interface
const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.summary()}`)
}

printSummary(oldCivic)

const drinkA = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

printSummary(drinkA)


/**
 * General Strategy for Resuable Code in TypeScripe
 * 1. Create functions that accept arguments that are typed with interface
 * 2. Objects/classes can decide to implement a given interface to work with a function
 */
