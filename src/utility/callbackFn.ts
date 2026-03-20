export function processItems<T> (
    items: T[],
    callback: (items: T, index: number) => void,
): void {
    items.forEach((items, index) => callback(items, index))
}

export function callCallback (
    phrase: string,
    callback: (phrase: string) => void,
): void {
    callback(phrase);
}

callCallback("Hello", alert);