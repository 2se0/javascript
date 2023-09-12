//주어진 seconds(초)가 지나면 callback 함수를 호출함
//단, seconds가 0보다 작으면 에러 출력
//콘솔로그에 '타이머 종료!'를 출력

/* function e(){
  setTimeout(()=>{
    console.log('타이머 종료!');
  },3000) //setTimeout(콜백함수, 시간(seconds));
}
 */
function ex(callback, seconds){
  //1. 시간체크 --> if
  if(!seconds || seconds < 0){
    throw new Error('seconds가 0보다 작음') //에러객체 만들때는 throw사용
  }
  //2. setTimeOut 호출
  setTimeout(callback, seconds *1000)
}

//ex(콜솔로그에 '타이머종료!!'를 출력함수생성, 3)
try{
ex(()=>{
  console.log('타이머 종료!!');
}, -1)
}catch(error) {
  console.log('에러발생 : seconds 값이 0보다 작음');
}