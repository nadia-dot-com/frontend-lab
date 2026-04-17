type Item = {
  id: number;
  name: string;
};

export function groupBy<T, K extends keyof T>(
  items: T[],
  key: K,
): Map<T[K], T[]> {
  let result = new Map<T[K], T[]>();

  items.forEach((item) => {
    if (item && typeof item === "object") {
      if (key in item) {
        const value = item[key];
        const group = result.get(value) || [];

        if (group) {
          group.push(item);
        } else {
          result.set(value, [item]);
        }
      }
    }
  });

  return result;
}

const items: Item[] = [
  { id: 6, name: "Anna" },
  { id: 1, name: "Sam" },
  { id: 1, name: "Nastia" },
  { id: 1, name: "Nadia" },
  { id: 4, name: "Anton" },
];

export const filteredItems = groupBy(items, "id");
// console.log(filteredItems);
