const a = 1;
{
  const b = 2;
  {
    const c = 3;
    console.log(a); //출력가능 : 스코프 내부에서 외부 참조 가능
  }
}
console.log(c);//에러발생 : 스코프 외부에서 내부 참조 불가능

//스코프 체이닝
//스코프 정보저장 -> object
//렉시컬 환경
//LEO