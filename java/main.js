/* 



function greet() {
    console.log("my name is michael, i am", myage, mylastname )
}
var mylastname = "Onyekwere";
var myage = 17;

greet();



let textscore = "cat"

switch(textscore){
    case "cat":
    console.log("my cat is the best")
    break

    case "dog":
    console.log("my dog is the best")
    break
    case "sheep":
    console.log("my sheep is the best")
    break

    default:
    console.log("baba is the best")
}


let text = 20;
let reply;


if(text >=200){
  reply =  console.log("red")
}else if(text >= 30){
    reply = console.log("blue")
}else{
  reply =  console.log("white")
}


let rock = confirm("ok===true/cancel===false")
console.log(rock);

let myreplica = 100;

while(myreplica <= 200){
  console.log(myreplica);
  myreplica++
}

const myarray = [];

myarray[0] = "dave"
myarray[1] = 10001;
myarray[2] = false;

console.log(myarray);
console.log(myarray.length);
console.log(myarray[1]);
console.log(myarray[2]);

myarray.push('mat');
console.log(myarray);

let vext = myarray.pop();
  console.log(vext);

myarray.unshift('red');
console.log(myarray);

let vex = myarray.shift();
  console.log(vex);

  myarray.splice(1, 2, '42');
  console.log(myarray);
 */



/* const myarray =["a", "b", "c",];
const newerarray = ["d", "e", "f"];
const newarray = myarray.concat(newerarray);
const newarra = myarray.join();

console.log(newarray);



let red = "global: 1"
const blue = "global: 2"
var yellow = "global: 3"

console.log(red)
console.log(blue)
console.log(yellow)

function funct(){
var pink = 10;
var purple = 2;
var orange = 5;

  {
    var white = 11;
    let black = 2;
    const dave = 5;
console.log("Block", white)
console.log("Block", black)
console.log("Block", dave)
  }

  console.log("function:", pink)
  console.log("function:", purple)
  console.log("function:", orange)
}
 
funct()
  */












const banana = {
  juice: 1,
  speen: "hhdchhf",
  fruit: ["array", "frayo", "tryo"],
  
  divine: function() {
    return "kebbi benbin kebbi"
  },
  divi: function() {
    return "kebbi benbin kebbi"
  },

 



};











console.log(banana["juice"])
console.log(banana.fruit["1"])
console.log(banana.divine())
console.log(banana.divi())

    






 
   


let arr = [];

arr[0] = "c"
arr[1] = "a"
arr[2] = "b"

console.log(arr)
console.log(arr.length)
console.log(arr[2])
console.log(arr[1])

let nfh = arr.join();
console.log(nfh);
let nf = arr.sort();
console.log(nf);
let n = arr.reverse();
console.log(n);

const myobj = {
  mineral: 1,
  fanta: 2,
  coke: 3,
  electtelect: 4,

  action: function (){
    return "hello wrld"
  }
  
}

console.log("time for", myobj.action());


console.log()


let vehicle = {
  wheels: 32,

engine: function(){
  return "Vroom"
}


}

const truck = Object.create(vehicle)
console.log(truck.wheels)
console.log(truck.engine())

let car = Object.create(vehicle)
console.log(car.wheels)

let veg = Object.create(vehicle)
console.log(veg.engine())



let boo = {
  nike: "whosssh"

}

console.log(boo.nike);

let nek = {
  beverages: 45,
  iced : 40,

  nmt: function (){
    return "khsvddhxm,"
  }




}


console.log(nek.beverages)

console.log(nek.iced)


let van = Object.create(nek)
console.log(van.nmt())
 
let va = Object.create(nek)
console.log(va.nmt())
 




const kebbi = Object.create(banana)
console.log(kebbi.speen)

const agunb = {
  dj: "bobby",
  djj: "coloso",
  djjj: "coloso",
}

console.log(agunb.dj)
console.log(agunb.djj)