/** 클래스 생성 */
//하나를 만들고 객체에 올릴때마다 다른 걸 올리는걸. 동적으로 바인딩
class Person{ //클래스가 붙으면 new라는 키원드를 넣어야함, 프로퍼티 생략, 클래스 사용시 \
  //앞에글자는 무조건 대문자!, 소문자로 써도 에러는 나진 않지만 지양.
  //프로퍼티
  //var test ="aaa"
  //생성자
  constructor(name, age){
      this.name = name;
      this.age = age;
  }

  //info 함수 : static //스태틱 키워드를 가지고 만들어지는 함수.. 별도의 저장 공간이 있음
  //class를 사용하지 않아도
  static info(){
    console.log('person 클래스의 static 메소드');
  }

  //greet 함수 person의 인스턴스를 만들어야 사용이 가능함
  greet(){
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }

  //farewell 함수
  farewell(){
      console.log("goodbye friend");
  }
}

// Person.greet() 클래스로 코드가 생성되면 u라는 키워드를 통해서만 메모리힙에 올라갈수 있고,  
const alberto = new Person("Alberto", 30); //new라는 키원드를 넣어야함
alberto.greet();
alberto.farewell();
Person.info(); //스태틱이라는 함수가 붙어 있을때만
alberto.info()