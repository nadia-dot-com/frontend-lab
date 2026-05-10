export function isValid(s: string): boolean {
    const str = s.trim();
    const stock = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stock.push(str[i]);
        } else {
            if (!stock.length) return false;
            let last = stock.pop();
            if (str[i] === ')' && !(last === '(')) return false;
            if (str[i] === ']' && !(last === '[')) return false;
            if (str[i] === '}' && !(last === '{')) return false;
        }
    }
    return stock.length ? false : true;
};