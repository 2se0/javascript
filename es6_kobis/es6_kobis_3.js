/* kobis 일별 박스오피스 출력 */
function showDailyList(kobis){
  let showKobis = kobis.boxOfficeResult;
  let showKobisRankList = kobis.boxOfficeResult.dailyBoxOfficeList;
  const movieList = `
      <h1>KOBIS 박스오피스 (Fetch)</h1>
      <ul>
          <li>박스오피스 타입 - ${showKobis.boxofficeType}</li>
          <li>박스오피스 일자 - ${showKobis.showRange}</li>
      </ul>
      <table border="1">
          <tr>
              <td>순위</td>
              <td>영화제목</td>
              <td>개봉일</td>
              <td>누적관객수</td>
              <td>누적매출액</td>
          </tr>
          ${showKobisRankList.map(movie =>`   
              <tr>
                  <td>${movie.rank}</td>
                  <td class="movieNm" id="${movie.movieCd}">${movie.movieNm}</td>
                  <td>${movie.openDt}</td>
                  <td>${movie.audiAcc}</td>
                  <td>${movie.salesAcc}</td>
              </tr>
          `).join('\n')}
      </table>
  `;
  document.querySelector('#kobisContent').innerHTML = movieList;
  
  /* 영화 제목 포함 td를 클릭하면 영화코드를 alert */
  
  // 1.movieNm 클래스를 가지고 있는 태그요소 가져오기
  const mlist = document.querySelectorAll('.movieNm');
  //console.log(mlist.length);
  
  // 2.for를 이용하여 요소 반환 후 이벤트 적용
  for(let i=0; i<mlist.length; i++){
      const item = mlist.item(i);
      item.addEventListener('click',()=>{
          // alert(item.getAttribute('id'));
          // 3.상세정보를 가지고있는 API를 호출
          execKobisContent(item.getAttribute('id'));
      })
  }
  /* kobis API를 연동하여 영화상세 정보 출력 */
  function execKobisContent(movieCd){
      fetch(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieCd}`)
      .then((response) => response.json())  
  //  .then((mcontent)=>{ showMovieContent(mcontent); })   
      .then(showMovieContent)        
  }

  function showMovieContent(mContent){
      alert(JSON.stringify(mContent.movieInfoResult.movieInfo.movieNm)); 
  }
}

/* Kobis API를 연동하여 DHTML 생성 */
function fnKobis(search_date){
  fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${search_date}`)
  .then((response) => response.json())
//  .then((kobis) => {showDailyList(kobis);})
  .then(showDailyList)
  .catch(() => {console.log('fetch 실패')})
}

//DOM 객체 생성 후 fnKobis 함수 호출
document.addEventListener('DOMContentLoaded',()=>{
  fnKobis('2023090');
  //검색 버튼 실행
  document.querySelector('#search_btn').addEventListener('click',()=>{
      fnKobis(document.querySelector('#search_data').value);
  })
});