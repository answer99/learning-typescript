export class Attributes<T> {
  constructor(private data: T) { }

  // Advanced Generic Constraint
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
