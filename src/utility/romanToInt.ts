const romanNums: Record<string, number> = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

export function romanToInt(s: string): number {
    return [...s].reduce((sum, l, index, array) => {
        let num = romanNums[l];
        let next = romanNums[array[index + 1]];
        return next && num < next ? sum - num : sum + num;
    }, 0);
}
