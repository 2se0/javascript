const text = "global"
{
  const text = "local"
  {
    //console.log(text);//local 출력
  }
}
console.log(text);//global 출력