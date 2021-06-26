import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([100, 3, -5, 10])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);


const charactersCollection = new CharactersCollection('aXbyaa');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
