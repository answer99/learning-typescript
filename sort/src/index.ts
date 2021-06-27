import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([100, 3, -5, 10])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);


const charactersCollection = new CharactersCollection('aXbyaa');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-10);
linkedList.add(5);
linkedList.add(10);
const sorter1 = new Sorter(linkedList);
sorter1.sort();
console.log(linkedList.print());