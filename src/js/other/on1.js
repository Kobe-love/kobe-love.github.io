// class Point{
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//   }

//   toString(){
//     return "(" + this.x + ',' + this.y + ")"
//   }
// }


// let num = new Number();
// console.log("便利性")
// for(var pro in num){
//   console.log("num." + pro + "=" + num[pro])
// }



function Person(){
  this.name = "KXY";
}

Person.prototype = {
  constructor: Person,
  job: "student",
}

var kxy = new Person();

Object.defineProperty(kxy, "sex", {
  value: "female",
  enumerable:false
})


// for(var pro in kxy){
//   console.log("kxy." + pro + "=" +kxy[pro])
// }


console.log(JSON.stringify(kxy))