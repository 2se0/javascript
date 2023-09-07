/** TDZ(Temporal Dead Zone) */
name; // var가 없어도 전역변수로 선언됨 es5에서는 

//es6기준에서 var를 잘 안 사용함

console.log(i); // 
var i = "I am a var";
// console.log(i); // I am a var

console.log(j); //
let j = "I am a let"; //ReferenceError: Cannot access 'j' before initialization
// console.log(j);I am a let