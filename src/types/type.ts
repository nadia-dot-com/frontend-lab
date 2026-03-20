import { use } from "react";

interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

interface User {
  address: string;
}

type Status = "loading" | "succes";
type Point = [number, number];

interface Person {
  id: number;
  name: string;
  address: {
    street: string;
  };
  say: () => string;
}

let mixed: (string | number)[] = [1, "two", 3];

type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled";

interface Order {
  id: string;
  status: OrderStatus;
  items: string[];
}

function canCancel(order: Order): Order | undefined {
  return order.status === "pending" || order.status === "confirmed"
    ? order
    : undefined;
}

const Kierunek = {
  West: "WEST",
  East: "EAST",
} as const;

type Kierunek = (typeof Kierunek)[keyof typeof Kierunek];

let kierunekPodrórzy: Kierunek = Kierunek.East;

type IsString<T> = T extends string ? true : false;

const routes = {
    home: './',
    admin: "/admin",
    users: "users",
}

interface UserData {
    name: string;
    age: number;
}

const user: UserData = {} as UserData;

user.name = "Max";
user.age = 20;

const keys = Object.keys(user) as Array<keyof typeof user>;

keys.forEach(k => {
    user[k]
});

const elem = document.querySelector("#name") as HTMLInputElement;
const {value} = elem;

const test = {
    name: "Max",
} as const;

type U = typeof test;