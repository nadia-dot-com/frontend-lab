const a = {
  theme: {
    color: "blue",
    fontSize: 14
  }
};

const b = {
  theme: {
    color: "red"
  }
};

export function merge(target: any, source: any) {
  for (let key in source) {
    if (typeof source[key] === "object") {
      merge(target[key], source[key]);
    } else {
      if (target[key] === undefined) {
        target[key] = source[key];
      } else {
        target[key] = { ...target[key], ...source[key] };
      }
    }
  }

  return target;
}
