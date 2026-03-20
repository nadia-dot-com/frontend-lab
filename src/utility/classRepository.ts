import type { User } from "../types/interfaces";
import type { HasId } from "./typesFn";

export class Repository<T extends HasId> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return [...this.items]
    }
}

interface Product extends HasId {
    id: number;
    name: string;
    price: number;
}

const userRepo = new Repository<User>();
const productRepo = new Repository<Product>();

