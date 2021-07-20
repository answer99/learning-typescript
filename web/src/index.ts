import { User } from "./models/User";

const user = new User({ name: 'new record', age: 0 });


// It's a pain for user to use User class, need delegation
user.attributes.get('id');
user.attributes.get('name');
user.attributes.get('age');
user.sync.save( {name: 'test' });
// *********