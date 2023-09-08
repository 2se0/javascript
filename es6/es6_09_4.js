/** 디스트럭처링을 이용하여 변수 교체하기 */
let hungry = "yes";
let full = "no";
//식후에는 배고프지 않고 배가 부를 것이다. 값을 교체하자.

[hungry, full] = [full, hungry];// 값을 교체 할때 변수선언을 수정 안하고 설정하는 법

console.log(hungry, full);