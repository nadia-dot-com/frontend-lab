import classes from "./UsersFilteringPage.module.scss";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useMemo, useState, useTransition } from "react";
import { merge } from "@/utility/lodash/merge";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { columns, url } from "./date";
import type { ColumnKey, Data, Roles } from "./types";

export function UsersFilteringPage() {
  const [storedRoles, setStoredRoles] = useLocalStorage<Partial<Roles>>(
    "filter",
    {},
  );

  const roles = useMemo(() => {
    return merge(structuredClone(columns), storedRoles);
  }, [storedRoles]);

  const { isLoading, data, error } = useFetch<Data>(url);
  
  const users = data?.users || [];
  
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [isPending, startTransition] = useTransition();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value); 

    startTransition(() => {
      const filtered = users.filter((user) =>
        user.username.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredUsers(filtered);
    });
  }

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  if (error) return <div>{error.message}</div>;

  const columnKeys = Object.keys(columns) as ColumnKey[];

  return (
    <div className={classes.container}>
      {isLoading && <div>Loading...</div>}

      <input
        type="text"
        placeholder="Search by username..."
        value={search}
        onChange={handleSearch}
      />

      <aside className={classes.filter}>
        {columnKeys.map((col) => (
          <label key={col}>
            <input
              value={col}
              type="checkbox"
              checked={roles[col]}
              onChange={(e) =>
                setStoredRoles((prev) => ({
                  ...prev,
                  [col]: e.target.checked,
                }))
              }
            />
            {col}
          </label>
        ))}
      </aside>
      <div className={classes.tableContainer}>
        <table className={classes.headers}>
          <thead>
            <tr>
              {columnKeys.map((col) => roles[col] && <th key={col}>{col}</th>)}
            </tr>
          </thead>
        </table>
        <div className={classes.tableWrapper}>
          <table className={classes.users}>
            <tbody className={isPending ? classes.loading : ""}>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  {columnKeys.map(
                    (col) => roles[col] && <td key={col}>{user[col]}</td>,
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
