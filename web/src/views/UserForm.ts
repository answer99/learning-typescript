import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {

  // basically used to do it back in the day
  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    }
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  // arrow function for binding the value of "this" inside of the function
  // * every time that we define an event handler, we have to use an arrow function to avoid
  //   the error
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  template(): string {
    return `
      <div>
        <h1>User From</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input id="name-input" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }
}
