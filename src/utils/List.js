export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

ListNode.prototype.hasCycle = function () {
  let fast = this;
  let slow = this;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return fast;
    }
  }
  return false;
};

/**
 * Note: This implementation has a limitation when the cycle originates at the first (0th) element.
 * In such cases, `hasCycle` would return the destination node of the cycle, 
 * while `print` expects the source node of the cycle for accurate representation.
 * UPDATE: When a cycle exists, this works correctly only if the cycle source points to index 1.
 */
ListNode.prototype.print = function () {
  const result = [];
  let currentNode = this;
  const looper = this.hasCycle();
  let loopDestinationIndex = 0;
  let foundLoopDest = false;
  let linkLength = 0;
  while (currentNode) {
    linkLength++;
    result.push(currentNode.val);
    if (looper && currentNode === looper.next) {
      foundLoopDest = true;
    }
    if (!foundLoopDest) {
      loopDestinationIndex++;
    }
    if (currentNode === looper) {
      break;
    }
    currentNode = currentNode.next;
  }
  let linkString = result.join(" --> ");
  if (linkLength >= loopDestinationIndex + 1) {
    linkString += `\n${"        ".repeat(loopDestinationIndex)}<${"─".repeat(
      (linkLength - (loopDestinationIndex + 1)) * 6
    )}┘`;
  }
  console.log(linkString);
  return this;
};

ListNode.prototype.toArray = function () {
  const result = [];
  let currentNode = this;
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
};

/**
 * For loops add the looping node with an array [22,1] where 22 is the value
 * 1 is the looping destination index
 * @param {*} nums
 */
export const buildList = (nums) => {
  const linkMap = {};
  let linkIndex = 0;
  const buildChain = (rest) => {
    if (rest.length === 0) {
      return null;
    }
    const currentValue = rest.shift();

    let currentNode;

    if (Array.isArray(currentValue)) {
      const [value, nextIdx] = currentValue;
      currentNode = new ListNode(value);
      currentNode.next = linkMap[nextIdx];
      return currentNode;
    } else {
      currentNode = new ListNode(currentValue);
      linkMap[linkIndex] = currentNode;
      linkIndex++;
      currentNode.next = buildChain(rest);
      return currentNode;
    }
  };
  return buildChain(nums).print();
};
