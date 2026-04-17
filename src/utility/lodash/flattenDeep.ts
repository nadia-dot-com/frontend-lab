export function flattenDepth<T>(arr: (T[] | T)[], depth: number = Infinity): T[] {
  if (!Array.isArray(arr)) return [];
  if (depth === 0) return [...arr] as T[];

  const newArr = arr.reduce((acc: T[], item) => {
    return acc.concat(
      Array.isArray(item) ? flattenDepth(item, depth - 1) : item,
    );
  }, []);

  return newArr;
}

// console.log(flattenDepth([1, [2, [3, [4]], 5]], 1));
//[1, 2, [3, [4]], 5]
// console.log(flattenDepth([1, [2, [3, [4]], 5]], 2));
//[1, 2, 3, [4], 5]