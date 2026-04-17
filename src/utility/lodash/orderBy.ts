type Params = "asc" | "desc";

export function orderBy<T extends Record<string, any>, B extends keyof T>(
  arr: T[] | [],
  keys: B[],
  params: Params[],
) {
  if (!Array.isArray(arr) || !Array.isArray(params)) return [];

  const result = [...arr].sort((a, b) => {
    for (let i = 0; i < params.length; i++) {
      const key = keys[i];
      const param = params[i];

      const valA = a[key];
      const valB = b[key];

      if (valA === valB) continue;

      if (typeof valA === "number" && typeof valB === "number") {
        if (param === "asc") {
          return valA - valB;
        } else if (param === "desc") {
          return valB - valA;
        }
      } else {
        if (param === "asc") {
          return valA.localeCompare(valB);
        } else if (param === "desc") {
          return valB.localeCompare(valA);
        }
      }
    }
    return 0;
  });

  return result;
}

//   console.log(orderBy([
//   { 'user': 'fred',   'age': 48 },
//   { 'user': 'barney', 'age': 34 },
//   { 'user': 'fred',   'age': 40 },
//   { 'user': 'barney', 'age': 36 }
// ], ['user', 'age'], ['asc', 'desc']));

// // [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
