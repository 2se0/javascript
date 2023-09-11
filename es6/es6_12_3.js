/** 함수와 스프레드 연산자 */
//기존 방식
function doSuff(x, y, z){
  console.log(x + y + z);
}
var args = [0, 1, 2];


//apply 객체가 파라미터 객체로 넘어올때 하나하나로 자동으로 호출할떄부터 맵핑할떄 사용하는 함수
doSuff.apply(null, args);  //함수 호출, 인수 전달 : //3(0+1+2) 

//스프레드 문법
doSuff(...args);   //3(0+1+2), ...의 역할 정확하게 알기, 함수를 호출할때 아그스라는 배열를 찾아서 그안에 있는 요소를 하나하나 씩 넣어서 맵핑해주는 것
console.log(args);  


////////////////////////////////////

/** 함수와 스프레드 연산자 */
const name = ['Alberto','Montalesi'];
function greet(first, last){
    console.log(`Hello~ ${first} ${last}`);
}

greet(...name);  //Hello~ Alberto Montalesi
//greet.apply(this,name)

//지정된 인수보다 더 많은 값을 제공하면 어떻게 될까?
const name2 = ['Jon','Paul','Jones']; // 회원가입할때 항목에 여러가지 체크할때 값이 배열형태로 넘어감
function greet(first, second){
    console.log(`Hello~ ${first} ${second}`);//2번 jones은 제외 됨
}

greet(...name2);  //Hello~ Jon Paul