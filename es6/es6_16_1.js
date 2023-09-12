function a() {return 1;}
function b() {return a() + 1;}
function c() {return b() + 1;}

const result = c()
console.log(result);

// 자바스크립트 호출스택 이미지 검색