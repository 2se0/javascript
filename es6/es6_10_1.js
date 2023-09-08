/** 일반적인 for 루프 */

var fruits = ['apple','banana','orange'];
console.log('----------------->> 일반적인 for 루프');
for(var i=0; i<fruits.length; i++){ //  i<fruits.length; = i<3; (배열의 갯수) 
    console.log(fruits[i]);
}

/** for of 루프 */
var fruits2 = ['apple','banana','orange'];
console.log('----------------->> for of 루프');
for(const fruit of fruits2){
    console.log(fruit);
}

/** 객체에 대한 반복 */
const car = {
  maker : "BMW",
  color : "red",
  year : "2010",
};
console.log('----------------->> for of prop');
for(const prop of Object.keys(car)){
  const value = car[prop];
  console.log(prop, value);
}

/** for in */
const car2 = {
  maker : "BMW",
  color : "red",
  year : "2010",
};
console.log('----------------->> for in prop car2');
for(const prop in car2){
  console.log(prop, car2[prop]);
}

/** for of 와 for in 차이 */
let list = [4, 5, 6];

//for in 은 키의 목록(배열은 인덱스값)을 반환한다.
console.log("--------------->> for in");
for(let i in list){
    console.log(i); //"0","1","2"
}

//for of 는 값을 반환한다.
console.log("--------------->> for of");
for(let i of list){
    console.log(i);  //4  5  6
}