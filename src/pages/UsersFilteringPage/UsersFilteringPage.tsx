import { useFetch } from "@/hooks/useFetch";
import classes from "./UsersFilteringPage.module.scss";
import { useState, useTransition } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const columns = {
  username: true,
  name: true,
  email: true,
  phone: true,
};

type ColumnKey = keyof typeof columns;

export function UsersFilteringPage() {
  const [roles, setRoles] = useState(columns);
  const { isLoading, data: users, error } = useFetch<User>(url);
  const [isPending, startTransition] = useTransition();

  if (error) return <div>{error.message}</div>;

  const columnKeys = Object.keys(columns) as ColumnKey[];

  return (
    <div className={classes.container}>
      {isLoading && <div>Loading...</div>}

      <aside className={classes.filter}>
        {columnKeys.map((col) => (
          <label key={col}>
            <input
              value={col}
              type="checkbox"
              checked={roles[col]}
              onChange={(e) => {
                const checked = e.target.checked;
                startTransition(() => {
                  setRoles((prev) => ({
                    ...prev,
                    [col]: checked,
                  }));
                });
              }}
            />
            {col}
          </label>
        ))}
      </aside>
      <table className={isPending ? classes.loading : ""}>
        <thead>
          <tr>
            {columnKeys.map((col) => roles[col] && <th key={col}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {columnKeys.map(
                (col) => roles[col] && <td key={user[col]}>{user[col]}</td>,
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
