function findNextGreaterOddSum(arr) {
    let n = arr.length;
    let nextGreater = []; 
    for (let i = 0; i < n; i++) {
        nextGreater.push(-1);
    }
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
            nextGreater[stack.pop()] = arr[i]; 
        }
        stack.push(i); 
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (nextGreater[i] > 0 && nextGreater[i] % 2 !== 0) {
            sum += arr[i];
        }
    }

    return sum;
}

