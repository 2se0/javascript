/* 
데이터를 순차적으로 , 내부적으로 사용
자바,서버에서 protocol, interface
iterator라는 프로토콜은 내부 순환 가능한 프로토콜이고
Array, String
스프레드 연산자, for of를 사용할수 있다(v프로토타입에서 iterator가 있으면 사용 가능 )

//iterator라는 protocol, iterable protocol 포함하여 생성된 내장객체는 순환 참조가 가능하다. 
그래서 spread연산자, for..of 사용가능
msdn api에서 prototype을 확인
*/

const strArr = ['바나나','오렌지','복숭아']
for(str of strArr){
  console.log(str);
}

const charArr = 'hello,javascript!!'
for(const char of charArr){
  console.log(char);
}

const tmap = new Map()
tmap.set(0, 'test1')
tmap.set(1, 'test2')
//[Symbol.iterator] 표준을 따랐을때만 사용가능
const tmapArr = tmap[Symbol.iterator]();
console.log(tmap.get(1));
for(const ta of tmapArr){//배열을 만듬
  console.log(ta)
}

const tobj = { //object는 iterable이 아니라서 for of 적용 안됨
  name : '홍길동',
  age : 20,
}

const tArr = tobj[Symbol.iterator]()//프로토콜을 따라 쓸때만 가능함, 

for(const obj of tobj){
  console.log(obj);
}


//Generator 