export function isPalindrome(x: number): boolean {
    const numReverse = Number([...String(x)]
        .reverse()
        .join(''));

    if (x === numReverse) {
        return true;
    }

    return false;
};