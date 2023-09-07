/** var - function scope variable */

for(var i=0; i<10; i++){//0~9까지 하나하나 증가하겠다. 총 10회 반복 /var는 전역함수
  var leak = "I am available outside of the loop";
}
console.log(i);
console.log(leak);

var fscope = "I am available inside this function"; //전역변수
var gname = '';
function myfunction(name){ //펑션안에서만 사용 - 로컬변수
  gname = name //전역변수로 사용하려면
  console.log(name);
  console.log(fscope);
}
console.log(fscope);    //에러 발생, 함수 스코프 영역을 벗어남(전역변수로하면  에러X)
//console.log(name);  //에러 발생, 로컬함수라 외부에서 실행X
console.log(gname); // 전역변수로 바꾼후
myfunction('홍길동')