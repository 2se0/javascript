/** 배열의 복사 - 기존 배열의 참조 */

const veggie1 = ['tomato','cucumber','beans'];
const newVeggie1 = veggie1; //객체의 주소 복사

//veggie 복사본을 생성한 것처럼 보이지만, 다음을 확인
veggie1.push('peas'); 

//객체 하나를 이용해서 코딩하는 건지, 복사해서 코딩해야하는지를 정확히 알아야함

console.log(veggie1);
console.log(newVeggie1);//주소를 카피


/////////////////////////////////////

/** ES5 및 이전 버전에서의 배열 복사 */
const veggie = ['tomato','cucumber','beans'];
const newVeggie = [].concat(veggie); //  [] 빈 배열 생성, concat 기존 배열의 값을 새 배열에 잇기 (결합)
veggie.push('peas');
console.log(veggie);     //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie);  //[ 'tomato', 'cucumber', 'beans' ]

/** ES6 스프레드 문법으로 배열 복사 */
const veggie2 = ['tomato','cucumber','beans'];
const newVeggie2 = [...veggie2]; //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie2.push('peas');
console.log('---------------------------------------------->');
console.log(veggie2);     //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie2);  //[ 'tomato', 'cucumber', 'beans' ]