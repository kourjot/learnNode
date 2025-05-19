Array.prototype.polyfillReduce = function(cb,curr) {
    let acc;
    let startIdx;

    if (curr !== undefined) {
        acc =curr;
        startIdx = 0;
    } else {
        acc = this[0];
        startIdx = 1;
    }

    for (let i = startIdx; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }

    return acc
};

const nums = [1, 2, 3, 4];

const result = nums.polyfillReduce((acc, curr) => acc + curr, 0);
console.log(result); 

