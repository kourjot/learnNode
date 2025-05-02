// Print all even and odd numbers from the array.
// Example: [3, 6, 7, 10] → Even: 6, 10 | Odd: 3, 7

function findEvenOdd(arr){
    let even=[]
let odd=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even.push(arr[i])
        }
        else if(arr[i]%2!=0){
            odd.push(arr[i])
        }
    }
    console.log(`Even :${even} | Odd:${odd}`)

}


findEvenOdd( [3, 6, 7, 10])
