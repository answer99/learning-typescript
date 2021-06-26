import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([100, 3, -5, 10])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
