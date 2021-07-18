import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  // Hard code dependencies
  // (-) every time we create a user, we are going tot have the same
  //     eventing class
  // But now dont see any chance to repleace/change the eventing class
  //
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) { }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data)
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // post
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
