function greet(name,cb){
    console.log("hello"+name)
    cb()
}
function sayHello(){
    console.log("Byy")
}

greet("jot",sayHello)