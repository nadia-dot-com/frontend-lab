export function pick<T extends object, K extends keyof T>(
  obj: T,
  paths: K | K[],
): Pick<T, K> {
  const isArray = Array.isArray(paths) ? paths : [paths];

  return isArray.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as T);
}

export function pickBy<T extends object>(
  obj: T,
  predicate: (value: T[keyof T]) => boolean,
  //T[keyof T] oznacza "dowolną wartość, która znajduje się wewnątrz obiektu T"
  //Indexed Access Type (typ z dostępem po indeksie)
): Partial<T> {
  const keys = Object.keys(obj) as Array<keyof T>;
  return keys.reduce((acc, key) => {
    if (predicate(obj[key])) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as Partial<T>);
}
