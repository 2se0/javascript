/** let - block scope variable */
let x = "global";// 함수가 아니여도 모든 블레이스로 블럭으로 체크 됨
if(x === "global"){
    let x = "block";
    console.log(x);  //block-scope
}
console.log(x);  //global-scope


/** var - function scope variable */
var y = "global";// 전역변수로 설정하고 값은 하나로만 인식 됨
if(y === "global"){//펑션아니니깐 전역 변수 인식
    var y = "block-scope";
    console.log(y); //block-scope
}
console.log(y); //block-scope