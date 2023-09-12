import { Url } from "./es6_kobis_api.js";

function execKobis(date){
    const kobis = //페치 json으로 받아온 유알엘 함수는 여기 안에서만 사용가능
      /* Kobis API를 연동하여 DHTML 생성 */
      fetch(`${Url}${date}`)// = (`${Url}`+date)
      .then((response) => response.json())//fetch실행결과
      .then((kobis)=>{//function b(kobis)
      //.catch(()=>{console.log('fetch 실패!!');})

      //dom객체 생성 후 exeKobis 함수 호출
      /* document.addEventListener("DOMContentLoaded",()=>{
        execKobis('20230907')
      }) */

      
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
            <td class ="movieName id="${movie.movieCd}">${movie.movieNm}</td>
            <td>${movie.openDt}</td> 
            <td>${movie.audiAcc}</td>
            <td>${movie.salesAcc}</td>
          </tr>
          `).join('\n')}
        </table >
      `
      //여러개의 엘리먼트의 공통적인 이벤트를 줄땐 class 사용
    //document.getElementById('kobisContent') 구버전es5, 코틀린..
    //$("#kobisContent").append(movieList) 제이쿼리
    document.querySelector('#kobisContent').innerHTML = movieList;

    //영화제목 포함 td를 클릭하면 영화코드 alert 출력
    //1. movieName 클래스를 가지고 있는 태그요소 가져오기 --> document.querySeletorAll(클래스명)
    const mlist = document.querySelectorAll(".movieName")
    //alert(mlist.length)
    //2. for를 이용하여 요소 반환 후 이벤트 적용
    for(let i=0; i< mlist.length; i++){
      //mlist[i].addEventListener// 주소값이라 적용안됨
      const item = mlist.item(i);
      item.addEventListener('click',()=>{
        alert(item.getAttribute('id'))
        //상세정보를 가지고 있는 API를 호출
        //kobisContent(item.getAttribute('id'))
      })
    } 
})
/* kobis API를 연동하여 영화상세 정보 출력*/
function kobisContent(movieCd){
  fetch(`${Url}${date}`)// = (`${Url}`+date)
  .then((response) => response.json())//fetch실행결과
  .then(a)//function b(kobis)
  //.catch(()=>{console.log('fetch 실패!!');})
} 
function showMoviesContent(mcontent){
  //alert(JSON.stringify(mcontent))
  alert
}


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


  