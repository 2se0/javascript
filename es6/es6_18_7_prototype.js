// 객체(오브젝트)의 타입 비교 : Object.prototype.__proto__
const obj1 = new Object();
const obj2 = new Object();
console.log(obj1.__proto__ == obj2.__proto__);// 서로 메모리 구조가 같나요? //true가 나옴

const array1 = ['hong','kim','park'] //Array > Object
console.log(array1.values()); //values, overriding은 상속관계가 있어야한다. MDN의 API를 통해 상속 구조 이해하기

//클래스 정의 => 여러개의 객체를 생성하는 틀
class person{
  constructor(name, age){
    this.name = name;
    this.age = age
  }//기능은 없고 데이터만 만들어짐(틀)
/* 
  eat(){ //메모리에 반복 저장된다. 100개면 100개 다 생성되기때문에 프로토타입에 생성 후 공유해서 사용(person.prototype.eat = '밥을 먹어요')
    console.log('밥을 먹어요');
  }
*/
}
class Actor extends person{ //person이 부모, Actor는 자식
  constructor(name, age, moviename){
    //자식(Actor) 생성 전에 먼저 부모(person)를 생성이 되어야 하므로 부모의 생서자를 반드시 맨천음 호출해야 한다.
    super(name, age); //자식이 부모의 생성작를 호출할때 사용
    this.Actor = moviename
  }
}
//eat()함수를 프로토타입으로 정의함, 퍼슨 클래스에만 저장됨
person.prototype.eat = function(){
  console.log(`${this.name}와(과) 밥을 먹어요`);//this 지금 부른 아이
}

//act() 함수를 프로토타입으로 정의함
Actor.prototype.act = function(){
  console.log(`${this.name} 배우가 연기를 해요~`);
}

const lee = new Actor('se',20,'도깨비') //new 데이터를 올리는 작업
const song = new person('jea', 30); 
const kim = new person('young',40); 

console.log(lee.age);
console.log(song.name);
console.log(kim.name);
//console.log(lee.eat());
//console.log(song.eat());
//console.log(kim.eat());
lee.act();//err, person으로 정의는 됐지만 호출은 안됨
//song.act();
//kim.act();

/* 
        object
          ^
          |
eat()-> person(name,age)
          ^
          |
act()-> actor(name)

lee(x100 주소)->lee.eat();,lee.act();(x100주소)->name ,Actor /act()->name:lee,age:30 person /eat() -> object
*/

