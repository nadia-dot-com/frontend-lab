interface Calculator {
  add(a: number, b: number): number;
  subtract: (a: number, b: number) => number;
  readonly multiply: (a: number, b: number) => number;
}

const calc: Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

interface Dictionary {
  [key: string]: string;
}

const translations: Dictionary = {
  hello: "cześć",
  goodbey: "do widzenia",
};

interface UserData {
  id: number;
  [key: string]: string | number;
}

const userData: UserData = {
  id: 1,
  name: "Anna",
  street: 123,
};

export interface Response<T> {
  data: T;
  status: number;
  message: string;
}

export interface User {
  id: number;
  name: string;
}

const userResponse: Response<User> = {
  data: { id: 1, name: "Ann" },
  status: 200,
  message: "Success",
};

type Result<T> = { success: true; data: T } | { success: false; error: string };

interface Bird {
  fly(): void;
  layEggs(): void;
}

export interface Fish {
  swim(): void;
  layEggs(): void;
}

function move(animal: Bird | Fish) {
    if("fly" in animal) {
        animal.fly();
    } else {
        animal.swim()
    }
};
