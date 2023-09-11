/** spread syntax - 배열의 결합 */

const veggie = ['tomato','cucumber','beans'];//주소 값을 가지고 오는게 아님
const meat = ['pork','beef','chicken'];
const menu = [...veggie, "pasta", ...meat];

console.log(menu);