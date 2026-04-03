export const obj1 = {
  user: {
    name: "Jan",
    address: {
      city: "Warszawa",
    },
  },
  items: [1, 2],
  age: 20,
  profile: {
    place: "yes",
  },
};

export const obj2 = {
  user: {
    age: 30,
    address: {
      street: "Kwiatowa",
    },
  },
  items: [3],
  active: true,
  profile: "no",
};

function isObj(value: any) {
  return typeof value === "object" && !Array.isArray(value) && value != null;
}

export function merge(target: any, source: any) {
  if (!isObj(target) || !isObj(source)) return;

  for (let key in source) {
    if (isObj(source[key]) && isObj(target[key])) {
      merge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// merge(structuredClone(obj1), obj2);
