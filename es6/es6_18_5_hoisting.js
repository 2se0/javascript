print();
//console.log(b);
console.log(func);//함수지만 변수처럼 선언가능해서.. 초기화X
//console.log(obj);
console.log(a);

function print(){
  console.log('hello~js');
}

let a = 10; //선언만 가능 -> let a (값은 없음,Cannot access 'a' before initialization) 
let obj = {
  name : 'hong'
}
let func = function(){ 
  console.log(test);
}