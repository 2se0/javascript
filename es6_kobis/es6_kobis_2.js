import { Url } from "./es6_kobis_api.js";

function execKobis(date){
    const kobis = //페치 json으로 받아온 유알엘 함수는 여기 안에서만 사용가능
      fetch(`${Url}${date}`)// = (`${Url}`+date)
      .then((response) => response.json())//fetch실행결과
      .then((kobis)=>{
      let a = kobis.boxOfficeResult //출력할때
      let b = kobis.boxOfficeResult.dailyBoxOfficeList;
      const movieList =`
        <ul>
          <li>박스오피스 타입 - ${a.boxofficeType}</li>
          <li>박스오피스 일자 - ${a.showRange}</li>
        </ul>
        <table border=1>
          <tr>
            <td>순위</td>
            <td>제목</td>
            <td>개봉일</td>
            <td>누적관객수</td>
            <td>누적매출액</td>
          </tr>
            ${b.map(movie => 
          `<tr>
            <td>${movie.rank}</td>
            <td>${movie.movieNm}</td>
            <td>${movie.openDt}</td> 
            <td>${movie.audiAcc}</td>
            <td>${movie.salesAcc}</td>
          </tr>
          `).join('\n')}
        </table >
      `
    //document.getElementById('kobisContent') 구버전es5, 코틀린..
    //$("#kobisContent").append(movieList) 제이쿼리
    document.querySelector('#kobisContent').innerHTML = movieList;
}) 

}//execKobis
  
/*   
//DOM 객체 생성 후 execKobis 함수 호출/ 스크립트 헤드쪽 호출
  document.addEventListener("DOMContentLoaded" , () =>{
    execKobis('20230907')
    //검색버튼 실행  알려주고 작업실행할땐 이벤트핸들러
    search.addEventListener('click', () => { //search.addEventListener('',function(){});
      let date = document.querySelector('#searchData').value
      execKobis('date')
      //alert('date')
    })

   */

  document.querySelector('#search').addEventListener('click', e => {
    let searchdate = document.querySelector('#searchData').value
    execKobis(searchdate)
  })

  document.addEventListener("DOMContentLoaded" , () =>{
    execKobis('20230907')
  });


  