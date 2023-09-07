/** ES5 function syntax */
/* 
블럭={}안 heap에 저장
*/
function greeting1(name){// 매개변수 , 호출한 안에서만 실행
  return "greeting1 : hello~" + name; //return은 호출한 곳에 값을 돌려줌
}

const greeting2 = function(name){
  return "greeting2 : hello~" + name;
}//greeting2를 heap, stack에 저장되는지 명확하게 그려보기

var greeting3 = (name) => {
  return "greeting3 : hello~" + name;
}

var greeting4 = () => {
  return "greeting4 : hello~";
}// 매개변수 없음, 필요있나 없나에 따라

/** 함수의 명시적 호출 */
console.log(greeting1("홍길동"));//바로 실행가능
console.log(greeting2("홍길동"));
console.log(greeting3("홍길동"));
console.log(greeting4());
