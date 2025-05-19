let arr= [
  { type: 'fruit', name: 'apple' },
  { type: 'veg', name: 'carrot' },
  { type: 'fruit', name: 'banana' },
  { type: 'veg', name: 'broccoli' }
];

function groupBy(arr,k){
  let res={}
  for(let i=0;i<arr.length;i++){
    let key=arr[i][k]
    if(!res[key]){
      res[key]=[arr[i]]
    }else{
      res[key].push(arr[i])
    }
  }
  console.log(res)
}
 groupBy(arr,"type")