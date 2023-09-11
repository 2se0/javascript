/** 심벌의 고유성 */
const me = Symbol("Alberto");
console.log(me); 

/** 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까? */
// new연산자로 객체생성이 불가하다
const clone = Symbol("Alberto");
console.log(clone);

//심벌 비교
console.log(me == clone);   //false
console.log(me === clone);  //false

const Symobj = Object(me)
console.log(Symobj); // 주소값이 나옴

//첫글자가 대문자면 클래스이다.(자바스크립트 엔진이 미리 만들어 놓은 빌트인클래스)
//생성자가 있어야 하고 각가의 이름을 가진 함수, 메소드가 필요




