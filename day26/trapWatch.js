var trap = function(height) {
    let arr=height
    let n = height.length;
    if(n === 0) return 0;

    let left = new Array(n);
    let right = new Array(n);

    left[0] =arr[0];
    for(let i = 1; i < n; i++) {
        left[i] = Math.max(arr[i], left[i - 1]);
    }

    right[n - 1] = height[n - 1];
    for(let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(arr[i], right[i + 1]);
    }

    let total = 0;
    for(let i = 0; i < n; i++) {
        total += Math.min(left[i], right[i]) - arr[i];
    }

    return total;
};