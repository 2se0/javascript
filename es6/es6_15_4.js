/** 클래스 상속 */
// 데이터를 여러 규칙에 맞게 // 메모리에(메모리에 올려야 호출이 가능) 올릴땐 new라는 
//상속이 가능하다 extesds를 이용해 상속
class Person{
  //생성자
  constructor(name, age){ // new 연산자가 호출되어 객체로 생성될때 호출되는 함수
      this.name = name;
      this.age = age;
      console.log(`Person name : ${this.name}`);
  }

  greet(){
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
}//class Person

//Adult 클래스 : Person 자식 클래스
class Adult extends Person{ //extends 생기면 Adult, Person이 같이 생성됨 ,person은 부모가 된다
  constructor(name, age, work){// new Adult('홍길동',30,'개발자'), name, age, work는 Adult에서 받음
      super(name, age);  //Person의 생성자 호출, 반드시 필요한건 아님.  
      this.name = name
      this.work = work;
      console.log(`Adult name : ${this.name}`);
  }
}

//constructor는 두개가 생성될수 없음 , 오버로딩 자바스크립트에서는 안됨
let hong = new Person("홍길동",20)//완전 별도로 만들어짐
console.log(hong.name);
console.log(hong.age);

let alberto = new Adult("Alberto", 30, "developer");
console.log(alberto.name);  //
console.log(alberto.age);  //30 메모리에 별도 생성
console.log(alberto.work);  //developer
alberto.greet();

hong = alberto
console.log(hong.name);
console.log(hong.work);

