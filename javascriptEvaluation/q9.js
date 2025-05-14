// You are given an array of file names with 
// different extensions. Your task is to write a function 
// **`segregateFiles`** that takes this 
// array as input and segregates the files based on their 
// extensions into an object.

// The function **`segregateFiles`** should use the 
// **`reduce`** method to group the files by their extensions. 
// The resulting object should have keys representing each unique 
// file extension and values as arrays containing the filenames with 
// that extension.

// ### Hint: use `.slice()` method. Refer the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) for details

const files = [
  "document1.pdf",
  "document2.pdf",
  "image1.png",
  "image2.png",
  "text1.txt",
  "text2.txt",
  "photo1.jpg",
  "photo2.jpg",
  "program1.exe",
  "program2.exe",
  "data1.csv",
  "data2.csv",
  "report1.pdf",
  "report2.pdf",
  "image3.png",
  "text3.txt",
  "photo3.jpg",
  "document3.pdf"
];

function segregateFiles(files){
  let res=files.reduce((i,file)=>{
    let ans=file.slice(file.lastIndexOf(".")+1)
    if(!i[ans]){
      i[ans]=[]
    }
    i[ans].push(file)
    return i
  },{})
  return res
}

console.log(segregateFiles(files))