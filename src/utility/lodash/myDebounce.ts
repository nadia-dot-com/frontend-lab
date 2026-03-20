export function myDebounce(func: (args: any) => void, delay: number) {
  let timerId: any;


  return function (args: any) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(args);
    }, delay);
  };
}
