import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  // Hard code dependencies
  // (-) every time we create a user, we are going tot have the same
  //     eventing class
  // But now dont see any chance to repleace/change the eventing class
  //
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get get() {
    return this.attributes.get;
  }

  get trigger() {
    return this.events.trigger;
  }
}
