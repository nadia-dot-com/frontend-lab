type Item = {
  id: number;
  name: string;
};

export function groupBy<T, K extends keyof T>(
  items: T[],
  key: K,
): Map<T[K], T[]> {
  let groupedItems = new Map<T[K], T[]>();

  items.forEach((item) => {
    if (item && typeof item === "object") {
      if (key in item) {
        if (groupedItems.has(item[key])) {
          const group = groupedItems.get(item[key]) || [];
          group.push(item);
          groupedItems.set(item[key], group);
        } else {
          groupedItems.set(item[key], [item]);
        }
      }
    }
  });

  return groupedItems;
}

const items: Item[] = [
  { id: 6, name: "Anna" },
  { id: 1, name: "Sam" },
  { id: 1, name: "Nastia" },
  { id: 1, name: "Nadia" },
  { id: 4, name: "anton" },
];

export const filteredItems = groupBy(items, "id");
console.log(filteredItems);
