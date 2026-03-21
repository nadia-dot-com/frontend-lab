import type { Fish } from "@/types/interfaces";
// import * as users from '/'

export function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value]
}

//pair<Key, Value> declaracja genetyków

export function smth(num: number) {
    return num
}

function logLength<T extends {length: number}>(item: T): void {
    console.log(item.length)
};

logLength("hello");
logLength([1, 2])
// logLength(1, 2) nie działą

export interface HasId {
    id: number
}

export function findById<T extends HasId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id )
}

const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Bartek" }
];

export const found = findById(users, 2);

function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isFish(animal: object): animal is Fish {
    return "swim" in animal;
}

const isFish2 = (animal: object): animal is Fish => "swim" in animal;

interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

type PrtialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReacdonlyUser = Readonly<User>;

type Picked = Pick<User, "id" | "name">;
type Omited = Omit<User, "email">;

