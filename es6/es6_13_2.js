/** 객체에 함수 추가하기 */
//ES5
const person = {
  name : "hong",
  greet : function(){
      console.log("Hello~~");
  }
};

person.greet();

//ES6
const person2 = {
  name : "홍길동",
  greet(){      
      console.log("Hello2~~");
  },
  greet2 : () =>      
      console.log("Hello2~~ Arrow function~~")
};

person2.greet();