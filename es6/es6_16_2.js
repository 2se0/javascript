function execute(콜밸, 시간){
  console.log('1');
  setTimeout(()=>{
    console.log('2');
  },3000) //setTimeout(콜백함수, 시간(seconds));
  console.log('3'); // 먼저 실행, setTimeout에 시간을 주기때문에 
}

execute(()=> {
  console.log('2');
}, 2000)