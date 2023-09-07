/** 템플릿 리터럴에 함수 전달하기 */
const groceries = {
  meat : "pork chop",
  veggie : "salad",
  fruit : "apple",
  others : ['murshrooms','instant noodles','instant soup'],
};

//groceries의 각  값에 대해 map()을 수행하는 함수
// 다이나믹html은 ${others}을 먼저 적고 ,${others.map(abc =>'<div>${abc}</div>').join('\n')} abc는 안에서만 사용하니깐 아무거나 적어도 상관 무
function groceryList(others){
  return `
      <p>'
          ${others.map(other => `<span>${other}</span>`).join('\n')}
      </p>
  `;
}
console.log('\n');
//p 태그 내  모든 groceries를 출력. 마지막은 **others** 배열의 모든 원소를 포함
const markup = `
  <div>
      <p>${groceries.meat}</p>
      <p>${groceries.veggie}</p>
      <p>${groceries.fruit}</p>
      <p>${groceryList(groceries.others)}</p> 
  </div>
`;

console.log(markup);