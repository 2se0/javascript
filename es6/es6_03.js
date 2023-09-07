/** const - block scope variable */
const z = "I am a constant"; //const는 위에서 설정한 값을 재설정X, 상수가 된다
//z = "I can't be reassign"; // 값을 바꾸라고 해서 에러뜸 , 중간에 값이 바껴야 하면 let으로 선언해야함
console.log(z);

/** const - 객체 정의 */
const person = { //person  객체(name,age-레퍼런스)는 메모리 힙에 선언/ 힙에 있는 주소를 찾아간다. 단어는(주소x100) 콜스택에 선언됨(레퍼런스 함수)
    name : "홍길동",
    age : 30
};

person.age = 35; //바꾸겠다
console.log(person.age);