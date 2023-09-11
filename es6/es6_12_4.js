/** 객체 리터럴과 스프레드 */
let person = {
  name : 'Alberto', //프로퍼티
  surname : 'Montalesi',
  age : 30,
};

let clone = {...person}; //... 스프레드 연산자, clone과 person은 다른 주소임. person만 적으면 같은 주소, 2개의 객체가 생성 된것, person, clone
console.log(clone);

//person 속성 추가
person.addr = 'gangnam';// person에만 gangnam 프로퍼티 생성

console.log(person);
console.log(clone);