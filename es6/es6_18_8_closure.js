function outer(num){
  const a = 1;
  function inner(){
    console.log(num-a);
  }
  inner(); //아웃터 내부의 데이터를 처리할때 사용
}
outer(1000); //결과값 : 입력값 -1