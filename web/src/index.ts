import { User } from "./models/User";
const user = new User({ name: 'John', age: 33 });


user.set({ name: 'Bill' });
console.log(user.get('name'));
console.log(user.get('age'));
