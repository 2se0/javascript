/** 프로토타입 상속 */
function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function(){
  console.log("Hello, my name is " + this.name);
}

const alberto = new Person("Alberto", 30);//메모리에 객체를 새로 생성
const caroline = new Person("Caroline", 30);

alberto.greet();
caroline.greet();