function ex(seconds){
  return new Promise((resolve, reject)=>{
    //1. 시간체크 --> if
    if(!seconds || seconds < 0){
      reject(new Error('seconds가 0보다 작음')) //에러객체 만들때는 throw사용
    }
    //2. setTimeOut 호출
    setTimeout(resolve, seconds *1000)
    //setTimeout(()=>{resolve();}, seconds *1000)
  })
}

ex(3)
  //.then(()=>{console.log('타이머 종료!!');}) //함수형식
  .then(()=>console.log('타이머종료!!'))
  .catch(console.error)
  .finally(()=>console.log('프로그램 종료!!'))