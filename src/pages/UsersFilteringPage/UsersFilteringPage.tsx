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
    <div className="flex-center-col gap-5 w-full">
      {isLoading && <div>Loading...</div>}

      <input
        type="text"
        placeholder="Search by username..."
        value={search}
        onChange={handleSearch}
      />

      <aside className="flex justify-between w-full px-3 py-4 bg-slate-200 ">
        {columnKeys.map((col) => (
          <label key={col}>
            <input
              type="checkbox"
              checked={!!roles[col]}
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

      {/* KLUCZOWA ZMIANA: Jedna tabela w jednym kontenerze */}
      <div className="w-full h-[900px] overflow-y-auto my-5">
        <table className="w-full border-collapse border-none text-4">
          <thead className="sticky top-0 bg-slate-200 z-10">
            <tr>
              {columnKeys.map(
                (col) =>
                  roles[col] && (
                    <th key={col} className="w-1/4 p-3 font-semibold text-left">
                      {col}
                    </th>
                  ),
              )}
            </tr>
          </thead>
          <tbody className={isPending ? "opacity-50" : ""}>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                {columnKeys.map(
                  (col) =>
                    roles[col] && (
                      <td
                        key={col}
                        className="w-1/4 py-3 px-4 border border-slate-200"
                      >
                        {user[col as keyof typeof user]}
                      </td>
                    ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
