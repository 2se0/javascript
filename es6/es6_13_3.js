/** 객체에 함수 추가하기 - 화살표 함수 정의 시 반드시 키 정의!! 
const person = {
  name : "hong",
  //() => console.log("Hello~"),  //문법 오류 : 키 정의안되어 있음
};

const person2 = {
  name : "hong",
  greet : () => console.log("Hello~"),
};

person2.greet();*/


/** 객체의 속성을 동적으로 정의하기 */
//ES5
var name = "myname";
var person = {};            //빈객체 생성
person[name] = "Alberto";   //객체 업데이트 person={myname : "Alberto"}
console.log(person.myname);  //Alberto

//ES6
const name2 = "myname";
const person2 = {
    [name2] : "Alberto2",
};
console.log(person2.myname);  //Alberto2