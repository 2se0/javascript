/** set/get 메소드 */
//class
class Person{
  //생성자
  constructor(name, surname){
      this.name = name;
      this.surname = surname;
      this.nickname = "";
  }

  //set method
  set nicknames(value){ //닉네임이라는 필드값
      this.nickname = value;
      console.log(this.nickname); //닉네임은 벨류값
  }


  //get method
  get nicknames(){
      console.log(`Your nickname is ${this.nickname}`);
  } 
}//class Person

const alberto = new Person("Alberto", "Montalesi");
alberto.nicknames = "Albi"; //set
alberto.nicknames; //get

const hong = new personalbar("홍","길동") // 객체 주소만 왔다갔다
hong.nicknames = "honghgon"
hong.nicknames