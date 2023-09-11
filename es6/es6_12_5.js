/** 레스트 매개변수 */
const runners = ['Tom','Paul','Mark','Luke'];
const [first, second, ...losers] = runners; 
//...losers 스프레드(펼 쳐내는거) 아님, 
//...losers 레스 연산자, 압축 해주는기능임. 새로운 배열을 만들어줌
//어디에서 사용되냐에 따라 역할일 다름

console.log(...losers);