import { User } from "./models/User";
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";

const userCollection = User.buildUserCollection();
userCollection.on('change', () => {
  const root = document.getElementById('root')

  if(root) {
    const userList = new UserList(root, userCollection);
    userList.render();
  } else {
    throw new Error('Root element not found');
  }
})
userCollection.fetch();

