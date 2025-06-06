// 1 2 3 4 
// 2     3
// 3     2
// 4 3 2 1


let n=25


function printSquare(n){
for(let i=0;i<n;i++){
    let bag=""
    for(let j=0;j<n;j++){
        if(j==0){
            bag+=i+1+" "
            if(i<9){
                bag+=' '
            }
        }else if(j==n-1){
            bag+=n-i+" "
            if(i<=9){
                bag+=" "
            }
        }else if((i==0)&&(j<n)){
            bag+=j+1+" "
        }else if((i==n-1)&&(j<n)){
            bag+=n-j+" "
        }else{
            bag+="  "
            if(j>=9){
                bag+=" "
            }
        }
    }
    console.log(bag)
}
}
printSquare(n)
