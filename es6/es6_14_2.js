/** 객체 속성에 대한 식별자 */
const office = {
  "Tom" : "CEO", // office.프로퍼티를 해야 접근이 가능함
  "Mark" : "CTO",
  "Mark" : "CIO",
};
for(person in office){ 
  console.log(person);//오피스에 있는 퍼슨이라는 값을들고 오기
}

const office2 = {
  [Symbol("Tom")] : "CEO", //symbol 전체 프로젝트나 엔진이 살아 있는 상태에서는 삭제가 되지 않기 떄문에 전역에서 공유객체로 사용. 스코프가 넓어지는 개념
  [Symbol("Mark")] : "CTO", // 첫글자가 대문자면 클래스라서 메모리힙에 객체로 만들어진다.그리고 또 별도로 만들어진다.
  [Symbol("Mark")] : "CIO",
};
const symList = Object.getOwnPropertySymbols(office2)
console.log(symList.length);
for(person in symList){ //퍼슨2가 가지고 있는 배열객체 중에 처음/ in은 숫자, of는 내용을 가지고 옴
  console.log(person); // 문자가 아니라 배열이라 출력이 안됨. 메소드(Object.getOwnPropertySymbols(office2))를 이용해서 리턴을 받아야함
}

