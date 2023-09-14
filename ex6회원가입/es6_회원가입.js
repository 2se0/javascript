
function form_check(e){
  let username = document.querySelector('#username');
  let useremail = document.querySelector('#useremail');
  let useremail2 = document.querySelector('#useremail2');
  let address = document.querySelector('#addressP');
  /*  
  const userid = document.getElementById('userid').value;
  const userps = document.getElementById('userps').value;
  const birthdate = document.getElementById('birthdate').value;
  const usercall = document.getElementById('usercall').value;
  const userps2 = document.querySelector('userps2').value;
  const birthdate = document.querySelector('birthdate').value;
  const zipcode = document.querySelector('address').value;
  const address = document.querySelector('address2').value;
  const detailAddress = document.querySelector('detailAddress').value;
  const useremail1 = document.querySelector('useremail1').value;
  const useremail2 = document.querySelector('useremail2').value;
  const emailDomain = document.querySelector('emailDomain').value;
  const phonenumber = document.querySelector('phonenumber').value;
  const agreement = document.querySelector('agreement').checked;
 */

  function text_color_change(){
    err_text.style.color = 'red'
  }

  if(username.value === ''){
    //alert('이름을 입력해주세요')
    var err_text = document.querySelector('.err_name'); //$('.err_name') 쿼리셀럭터 안에는 제이쿼리 방식으로
    err_text.textContent = '*이름을 입력하세요';
    text_color_change();
    username.focus();
    return false
  }

  if(userid.value == ''){
    var err_text = document.querySelector('.err_id'); //$('.err_name') 쿼리셀럭터 안에는 제이쿼리 방식으로
    err_text.textContent = '*id를 입력하세요';
    text_color_change();
    userid.focus();
    return false
  }
  
  //전화번호 '-'포함체크
  if((mobile.value).include('-')){
    var err_text = document.querySelector('.err_call'); //$('.err_name') 쿼리셀럭터 안에는 제이쿼리 방식으로
    err_text.textContent = '* '-' 없이 입력해 주세요';
    text_color_change();
    usercall.focus();
    return false
  }


  //이메일
  if(useremail2.value == '' || self.value == 'self'){ // (이메일주소 없고, 직접입력)
    alert('이메일 주소를 입력해주세요')
    useremail2.focus();
    return false
  }

  /* */
  
  join_form.submit(); //서버전송

}

function email_check(){
  let useremailsel = document.getElementById('useremailsel')
  let useremail2 = document.getElementById('useremail2')

  if(email_sel.value == 'self'){
    
  }

}
  //주소 https://postcode.map.daum.net/guide
  function searchAdrr(){
    new daum.Postcode({
      oncomplete: function(data) {
        //alert(data.zonecode + data.address)
        document.getElementById('addressP').value = data.zoneconde;
        document.getElementById('address2_1').value = data.address
      }
    }).open()
  }

  document.addEventListener('DOMContentLoaded', () => {
  // 회원가입 버튼 클릭 이벤트 호출
  /* btnJoin.addEventListener('click', () => {
    form_check();
  }) */

  btnJoin.addEventListener('click', form_check);
  useremail.addEventListener('chage', email_check)
  address_but.addEventListener('click', searchAdrr)
})

