/* 07-3 */
/** 중첩 템플릿 */
const people = [{name : '홍길동',
                age : 27, },
                {name : '홍홍',
                age : 27, },
                {name : '홍길순',
                age : 31, },
                ]; 
                /* 
                  대괄호 배열(동일한(문자는 문자, 숫자는 숫자,) 데이터 타입을 물리적으로 연속된 저장소에 저장한다), 
                  중괄호 객체 = 객체타입 배열 / 0번째는 홍길동, 1번째 홍홍, 
                  피플로, 레퍼런스하면 객체 3개 생성(0~3번지), 
                */
//동적html(다이나믹html)
const markup = `
<ul>
    ${people.map(person => `<li> ${person.name} </li>`)}
</ul>
`;
console.log(markup);