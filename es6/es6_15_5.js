/** 클래스를 활용하여 배열 확장하기 */
class ClassRoom extends Array{
  constructor(name, ...students){ 
    //new classRoom('hong',1,2,3,4,5 )스프레드 연산자(여러개의 함수를 받겠다 펼처서 요소를 전달하는..), 어떤 데이터 형식인지 알수 없고 풀어봐야 안다
      super(...students); // 부모 생성자 호출(Array의 객체 연산자를 호출)
      //super(students) 실행하면 array 0번지 배열이 하나 들어가 있음, push 된 jimmy는 1번지, 데이터가 풀려서 들어간게 아님
      //레스 연산자, 정수하나하나를 풀어서 실행하라(만약 문자형, 객체형)
      this.name = name;
  }
  add(student){ 
      this.push(student); //부모의 배열에 student를 넣겠다는 뜻
  }
}

const myClass = new ClassRoom('1A', 
                                {name : "Tom", mark:6 },
                                {name : "Tim", mark:5 },
                                {name : "Jon", mark:8 },
                                {name : "Jim", mark:10 },
                              );
console.log('---------------------->> myClass');                            
console.log(myClass);

console.log('---------------------->> myClass add ');    
myClass.add({name:"Jimmy", mark:10});
console.log(myClass);
console.log('---------------------->> myClass[4]');  
console.log(myClass[4]);  //인덱스 4번지 출력

console.log('---------------------->> myClass 배열 출력');  
for(const student of myClass){
  console.log(student);
}