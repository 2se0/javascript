// *있으면  Generator object이다.
const foo = function* () {
  yield 'a';
  yield 'b';
  yield 'c';
};

let str = '';
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"

const foo_gen = foo();

console.log(foo_gen.next()); // next 메소드 = 객체타입으로 반환함. next를 쓰면 무조건 커서가 이동함.
foo_gen.return();
console.log(foo_gen.next()); 
console.log(foo_gen.next()); 
console.log(foo_gen.next()); // undefined, true= 끝내도 됩니다
//console.log(foo_gen.next().value); //커서가 하나씩 하나씩 이동함

while(true){
  const data =  foo_gen.next() //{value:a,done:fales}
  if(!data.done){
    console.log(data.value);
  }else{
    break;
  }
}


/** 제너레이터를 사용하여 배열 반복하기 */
const fruitList2 = ['바나나','사과','오렌지','멜론','복숭아'];

function* loop(arr){
    for(const item of arr){
        yield `I like to eat ${item}`;
    }
}

console.log('--------------------fruitGenerator2');
const fruitGenerator2 = loop(fruitList2);
console.log(fruitGenerator2.next());
console.log(fruitGenerator2.next());
console.log(fruitGenerator2.next());
console.log(fruitGenerator2.next().value);

/** 제너레이터를 사용하여 배열 반복하기 */
const fruitList3 = ['바나나','사과','오렌지','멜론','복숭아'];

function* loop(arr){
      for(const item of arr){
            yield `I like to eat ${item}`;
      }
  }

console.log('--------------------fruitGenerator3');
const fruitGenerator3 = loop(fruitList3);
console.log(fruitGenerator3.next());
console.log(fruitGenerator3.next());
console.log(fruitGenerator3.next());
console.log(fruitGenerator3.next().value);