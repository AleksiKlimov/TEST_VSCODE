class User {
  username: string;
  age: number;
}

class Car {}

interface Repository<T> {
  create: (obj: T) => T;
  get: () => T;
  delete: (obj: T) => T;
  update: (obj: T) => T;
}

class UserRepo implements Repository<User> {
  create(obj: User): void {
    return;
  }
  get(obj: User): void {
    return;
  }
  delete(obj: User): void {
    return;
  }
  update(obj: User): void {
    return;
  }
}

class CarRepo implements Repository<Car> {
  create(obj: Car): void {
    return;
  }
  get(obj: Car): void {
    return;
  }
  delete(obj: Car): void {
    return;
  }
  update(obj: Car): void {
    return;
  }
}
