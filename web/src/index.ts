import { User } from "./models/User";

const user = new User({ id: 1, name: "name", age: 0 });

user.on('change', () => {
  console.log("User was changed, update HTML DOM!");
})

user.on('save', () => {
  console.log(user);
})

user.save();
