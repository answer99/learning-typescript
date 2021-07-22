import { AxiosResponse } from 'axios';
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

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');
    if(!id) {
      return;
    }
    this.sync.fetch(id)
      .then((res: AxiosResponse): void => {
        // use this.set to trigger change event
        this.set(res.data);
      })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger('save');
      }).catch(() => {
        this.trigger('error');
      })
  }
}
