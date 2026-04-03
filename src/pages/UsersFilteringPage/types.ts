import type { columns } from "./date";

export type User = {
  id: number;
  firstName: string;
  username: string;
  email: string;
  phone: string;
};

export type Roles = {
  username: boolean;
  name: boolean;
  email: boolean;
  phone: boolean;
};

export type ColumnKey = keyof typeof columns;

export type Data = {
  users: User[];
};