class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function makeArray(l: ListNode) {
  let arr1: number[] = [];

  if (l !== null) {
    arr1 = [...arr1, l.val];
    if (l.next !== null) {
      arr1 = [...arr1, ...makeArray(l.next)];
    }
  }
  return arr1;
}

function makeLinkedList(arr: string[]) {
  if (!arr.length) return null;

  let head = new ListNode(0);
  let current = head;
  for (let i = 0; i < arr.length; i++) {
    let newNode = new ListNode(Number(arr[i]));
    current.next = newNode;

    current = newNode;
  }

  return head.next;
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 === null || l2 === null) return null;
  let arr1 = makeArray(l1);
  let arr2 = makeArray(l2);
  const sum = BigInt(arr1.reverse().join("")) + BigInt(arr2.reverse().join(""));

  const sumArr = String(sum).split("").reverse();

  const newNode = makeLinkedList(sumArr);

  return newNode;
}
