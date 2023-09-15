/* 
javaScript : ES6(ECMA Script 6)

1) Basic - let, const 
          function, class, Iterator..

2) Advance(내부구현) - Scope, Histiong, Closer, Prototype.. 

Scope란?
- 식별자(변수, 함수, 클래스..)의 유효한 범위, 영역
- 변수를 참조할 수 있는 유효한 범위, 영역
- 스코프의 정의 : {} 블럭(블레이스)단위로 정의됨
ex)
function { }
class Test { }

- 블럭 : 블럭({}), 함수(function a(){}), 제어문(for{}, if{}) 
  블럭 내부에서 외부의 변수를 참조 가능, 
  블럭 외부에서 내부의 변수를 참조 불가능

  블럭을 이용하여 식별자의 Scope를 정의
  --> 이름 충돌 방지, 메모리 효율성 높임(메모리 절약)
  
  **식별자(변수)는 최대한 필요한 블럭에서 정의해서 사용하도록 한다
  전역변수보단 로컬변수가 접근성 및 메모리 효율성이 좋음(위치적으로 더 가깝고, 메모리는 참조가 빨리끝나고, 가베지컬렉터에서 지우니..)

  ex)scope.js
  const a = 200; //글로벌, 전역변수
  {
    const a = 100; //로컬(멤버) 변수 
    console.log(a); 
    //a는 GC에 대상이 된다.(지워지는 것) 블럭안에서만 사용되는 함수는 실행 후 필요가 없으니 GC가 메모리사용량을 보고 부족 할 시 지움
  } 
  console.log(a);

3)가비지 컬렉터(Gabage Collector)
메모리를 관리해주는 청소기, 모든 언어가 가지고 있지는 않음, 참조되지 않는 스코프를 메모리를 정리함
* C언어는 - 개발자가 메모리 선언, 할당, 데이터처리, 메모리 삭제(반환)까지 다 해야함
* JAVA(객체지향언어), C#, JS, GO - 메모리를 관리해주는 GC(Gabage Collector)를 가짐

4)실행 컨텍스트(Execution Context)
- 실행 순서와 스코프를 기억하고 있음(call steck에 쌓임, 한번에 한가지 일만 처리 할수 있다.)
- 실행 컨텍스트는 스코프 정보를 가지고 있는 렉시컬 환경 오브젝트(Lexical Environment Object)를
  생성하여 관리하며 렉시컬 환경 오브젝트는 각각의 스코프 체이닝으로 연결됨
- 코드 맨 안쪽의 블록이 맨 먼저 생성됨


[스코프란?]
: Scope란 식별자, 변수를 참조할 수 있는 유효한 범위를 의미하며, 블럭의 단위로 정의된다.
블럭 안에서 정의된 식별자는 블럭이 종료되면 gc의 대상이 된다. 스코프 외부에서 스코프 내부의 식별자는 
참조가 불가능 하지만 내부에서 외부 스코프의 식별자는 참조가 가능합니다. 참조가 가능한 이유는 
실행 컨텍스트에 있는 렉시컬 오브 오브젝트가 스코프의 단위로 정보를 기억하고 있으며 맨 안쪽에 생성되는 
스코프부터 체이닝을 연결되어 있기 때문이다.  이렇게 생상된 LEO를 통해 스코프의 참조가 가능해 진다.
그래서, 스코프를 사용할때 메모리 절약관 사용을 고려한다면 실별자 선언과 사용은 필요한 블럭에서 정의하고 
호출되도록 하는 것이 좋다고 생각합니다.

5. 호이스팅(Hoisting)
- 자바스크립트 엔진(인터프린터)이 실행하기 전에 변수, 함수, 클래스등을 최상단으로 끌어 올리는 작업
- ES6 이전에는 변수, 클래스는 호이스팅 작업시 선언과 초기화가 함께 진행되었으나, ES6부터는 선언만 가능
- ES6 기준으로 let, const 키워드가 등장함
- var는 되도록 사용X, let, const를 사용하여 명확한 프로그래밍 가능

6. var 특징
- 다른 언어와 코딩 방식(변수 할당등)의 차이로 디버깅이 어려움
- 코드의 가독성과 유지보수 측면에서 좋지 않음
  a)변수 선언시 키워드가 없어도 사용 가능하므로, 선언인지 재할당인지 구분 어려움
    name = '홍길동'; --> var name = '홍길동'
  b)중복 선언이 가능함
    var person = '홍길동' //변수,키워드가 없어도 출력이 됨, 추후 인터프린터가 person 앞에 var를 붙임
    var person = '홍길순' //err 없음, 가장 가까운 키워드를 출력
    console.log(person);  
  c)변수, 클래스는 블럭 단위 스코프가 안됨
    var fruit = 'apple' //전역
    {
      var fruit = 'orange' //로컬(?)
      console.log(fruit); // orange
    }// var는 블럭 scope 적용안됨
    console.log(fruit); // orange
  d)함수레벨 스코프는 지원됨
  var test = 'test'
  function varTest(){
    var test = 'test2'
    //console.log(test);
  }
  console.log(test); // test

7. 프로토타입(Prototype)
Prototype
- an original or first model of something from which other forms are copied or developed
- someone or something that has the typical qualities of a particular group, kind, etc.
- a first or early example that is used as a model for what comes later

- 자바스크립트에서 객체지향적으로 프로그래밍을 하기위해 프로토타입이 제공되며,
  공통적인 특징, 기능, 상태 등을 저장하여 필요한 객체에게 상속을 통해 적용할 수 있다.
- 최상위 프로토타입(클래스)은 Object로 생성되는 모든 객체는 상속을 받아 구현된다.
  class person <extends(부모만듬) object 생략가능>{

  } 
자바스크립트의 최상위 클래스는 object이다. 
let strArray = []; //let strArray = new Array(); 배열을 만드는 두가지 방법


class Person = {
  constructor(){
    this.name = 'hong';
    this.age = 20;
  }
}

class parent{
    constructor(){this.name='부모';}
}
class person extends parent{
    constructor(){
        super();
        this.name = 'hong';
        this.age = 20;
        }
    }
hong = new person();
console.log(hong.name) //hong

class parent{
    constructor(){this.name='부모';}
}
class person extends parent{
    constructor(){
        super();
        //this.name = 'hong';
        this.age = 20;
        }
    }
hong = new person();
console.log(hong.name)// 부모

객체지향 형태로 바뀌고 있기 때문에 프로토타입이란 이름이 클래스로 되어 있을수 있다.

let hong = new Person();
* 앞에 new가 붙으면 메모리 힙에 저장

8. 클로저(Closure)
- 함수에서 사용되는 중첩 함수 정의로 생성되는 블럭스코프를 통해 내부의 함수 스코프에서 
  외부의 함수 스코프에 접근 가능하도록 허용하는 것을 의미함
    1. 데이터를 중첩된 내부환겨에서 사용하게 되면 외부에서 사용X(데이터 보존성이 높아짐)
    2. outer함수 하나만 알면 내부 함수를 몰라도 된다.
    3. (정보은닉)
  function outer(){
    const a = 1;
    function inner(){
      console.log(a);
    }// 렉시컬 환경에.. 블럭으로 선언 후, 
    inner(); //아웃터 내부의 데이터를 처리할때사용 /콜스택에 제일 마지막에 들어감
  }전역 스코프
  outer(); //콜스택에는 블럭안에 있는 아웃터 내용이 들어감.

<과제>
개념정리
{
- 호이스팅 : 
  변수나 함수의 선언문을 유효범위의 최상단으로 올려 변수나 함수를 선언하기 이전에도 사용할수 있도록 해줌
  * 변수 호이스팅 : 변수가 선언되기 전에 호출하면 에러가 아닌 undefined를 출력함 
                    자바스크립트의 호이스팅의 특성은 유효범위의 최상단으로 올리기떄문에 위의 예제와 동일한 효과가 발생
                    ex)
                    <변수 호이스팅>
                    console.log(test);//결과값 undefined
                    var test = '이세영'
                    console.log(test)//결과값 이세영

                    var text;
                    console.log(test);//결과값 undefined
                    test = '이세영'
                    console.log(test)//결과값 이세영

                    <함수 호이스팅>
                    test();
                    function test() {
                      console.log(hello); // 결과 : undefined
                      var hello = 'test';
                      console.log(hello); // 결과 : test
                    }

                    test(); // 변수사용하면 에러Uncaught TypeError: test is not a function 에러
                    var test = function() {
                      console.log(hello); // 결과 : undefined    
                        var hello = 'test';    
                      console.log(hello); // 결과 : test    
                    }

- 클로저 : 
  클로저는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 말함
  클로저는 함수를 저장한 레코드(record)이며, 스코프(scope)의 인수(Factor)들은
  클로저가 만들어질 때 정의(define)되며, 스코프 내의 영역이 소멸(remove)되었어도
  그에 대한 접근(access)은 독립된 복사본인 클로저를 통해 이루어질 수 있음
  이러한 매커니즘이 크로저라 함

  클로저는 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 
  지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미
  ex)
    function outter(){
      var title = 'test';  
      return function(){        
          console.log(title);
      }
    }
    inner = outter();
    inner(); // test가 출력됨


- 프로토타입 :
  비밀공간. 유전자
}
*/

const a = 200; 
const b = 100;  
{
  //const b = 100;  
  console.log(b);
} 
console.log(a);
////////////

function print (){
  const message = 'hello~ javascript~~'
  console.log(message);
}//호출한 다음에 GC에 대상이 됨
print()
//console.log(message);
///////////

function sum (a,b){
  //console.log(a+b);
}
sum(1,2);
//console.log(a+b);
//////////

for(let i=0; i<10; i++){
  console.log(i);
}
console.log(i);
