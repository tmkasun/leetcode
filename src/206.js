import { assert, buildList, ListNode } from "./utils/index.js";

const reverseList = function (head) {
    // head.print()
    if (!head) {
        return head
    }
    let next = head.next
    let current = head;
    let newNext = null;
    while (next) {
        current.next = newNext
        newNext = current
        current = next
        next = next.next;
    }
    current.next = newNext
    return current.toArray()
};

assert(reverseList(buildList([1, 2, 3, 4, 5])), [5, 4, 3, 2, 1])