import { User } from "./models/User";

const user = new User({ name: 'new record', age: 0 });

user.get('name');

user.on('change', () => {
  console.log("Change!")
})
