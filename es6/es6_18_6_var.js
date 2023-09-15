"user strict"// 엄격 모드

const i = 100;
for(let i = 0; i<5; i++){i+=1;} // i에 정확한 식별자, 키워드를 줘야함 let or const
// TypeError: Assignment to constant variable. const 넣었을때 에러 숫자는 계속 커지니깐. 재할당이 필요하니깐 let
console.log(i);//

const person = '홍길동' //변수,키워드가 없어도 출력이 됨, 추후 인터프린터가 person 앞에 var를 붙임
//var person = '홍길순' //err 없음, 가장 가까운  키워드를 출력
console.log(person); 

var fruit = 'apple' //전역
{
  var fruit = 'orange' //로컬(?)
  console.log(fruit); // orange
}// var는 블럭 scope 적용안됨
console.log(fruit); // orange

var test = 'test'
function varTest(){
  var test = 'test2'
  //console.log(test);
}
console.log(test); // test