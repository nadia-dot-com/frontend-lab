type Throttle = {
  func: () => void;
  wait: number;
  options: {
    leading: boolean;
    trailing: boolean;
  };
};

export function throttle({ func, wait, options }: Throttle) {
  let timerId: number;

  return function () {
    clearInterval(timerId);
    timerId = setInterval(() => func(), wait);
  };
}
