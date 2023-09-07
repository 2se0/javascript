/** ES5 function default value = 함수에서 파라미터에 값을 넣어주는 것 */
function getLocation(city, country, continent){
  if(typeof country === 'undefined'){// 앞에 var가 생략, 언디파인드
      country = 'Italy';
  }
  if(typeof continent === 'undefined'){
      continent = 'Europe';
  }
  console.log(continent, country, city);
}

getLocation('Milano');
getLocation('Paris', 'France');
console.log("\n"); //한줄 띄움 효과

/** ES6 function default value */
function getLocation2(city, country = 'Italy', continent = 'Europe'){ 
  console.log(continent, country, city);
}

getLocation2('Milano');
getLocation2('Paris', 'France');