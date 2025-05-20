let person={
    fullName:function(city,country){
        console.log(this.firstName+" " + this.lastName+ "," + city +","+country)
    }
}
let person1={
    firstName:"jot",
    lastName:"kour"
}
let person2={
    firstName:"vijay",
    lastName:"nimar"
}
person.fullName.call(person1,"Sgrn","India")
person.fullName.call(person2,"Biwani","Hariyana")
person.fullName.apply(person1,["HR13","Hariyana"])

person.fullName.apply(person2,["Biwani","Hariyana"])
person.fullName.call(person2,"Biwani","Hariyana")
person.fullName.call(person2,"Biwani","Hariyana")
let res1=person.fullName.bind(person2,"Biwani","Hariyana")
let res=person.fullName.bind(person1,"srgn","Raj")
res()

res1()