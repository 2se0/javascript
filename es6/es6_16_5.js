function getHTMl(){
  //1초후에 HTML 문자를 리턴하는 프로미스 생성
  return new Promise((resolve)=>{
    setTimeout(()=>{resolve('HTML')},1000)
  })
} 
/* 
getHTMl().then((html)=>{console.log(html);})
getCSS().then((css)=>{console.log(css);})
getJS().then((js)=>{console.log(js);})

 */

/* getHTMl()
.then((html)=>{
  getCSS()
  .then((css)=>{
    getJS()
    .then((js)=>{console.log([html,css,js]);})
  })
})  */

async function getResult(){
  const html = await getHTMl()
  const css = await getCSS()
  const js = await getJS()

  return[html, css, js]

}
getResult().then((result)=>{console.log(result);})

