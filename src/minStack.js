class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value)
        const minValue = Math.min(value, this.minStack[this.minStack.length - 1])
        this.minStack.push(minValue)
    }
    pop() {
        this.minStack.pop()
        return this.stack.pop()
    }

    top() {
        this.stack[this.stack.length - 1]
    }
    getMin() {
        this.minStack[this.minStack.length - 1]
    }
}