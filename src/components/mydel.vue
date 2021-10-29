<template>
    <div>
        <div class="wrap1">
            <p class="title">회원탈퇴</p>
            <div class="hr"></div>
            <span class="bold">회원 탈퇴 안내</span>
            <div class="delbox">
                <br>
                [회원탈퇴 약관]<br>
            <br>
회원탈퇴 신청 전 안내 사항을 확인 해 주세요.<br>
회원탈퇴를 신청하시면 현재 로그인 된 아이디는 사용하실 수 없습니다.<br>
회원탈퇴를 하더라도, 서비스 약관 및 개인정보 취급방침 동의하에 따라 일정 기간동안 회원 개인정보를 보관합니다.<br>
<br>
- 주문 정보<br>
- 상품 구입 및 대금 결제에 관한 기록<br>
- 상품 배송에 관한 기록<br>
- 소비자 불만 또는 처리 과정에 관한 기록<br>
- 게시판 작성 및 사용후기에 관한 기록<br>
<br>
※ 상세한 내용은 사이트 내 개인정보 취급방침을 참고 해 주세요.<br>
<br>
            </div>
            <input type="checkbox"> 회원 탈퇴 안내에 동의합니다
    <br>
            <span class="bold2">개인정보처리방침</span>
                        <div class="delbox">
          
            <br>
DS TRAVEL(이하 “회사”)는 「개인정보보호법」 등 관련법령에 따라 정보주체의 개인정보 및 권익을 보호하고, 개인정보와 관련한 정보주체의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.<br>
<br>
제 1 조 개인정보 처리 항목<br>
<br>
회사는 서비스를 위한 목적에 필요한 범위에서 최소한의 개인정보를 다음과 같이 처리합니다.<br>
서비스 회원가입 및 관리<br>
<br>
필수항목 : 이름, 생년월일, 아이디, 비밀번호, 성별, 이메일<br>
선택항목 : 주소, 연락처, 프로필사진, 체형정보, 취향정보<br>
    <br>
민원사무 처리  <br>
<br>
이름, 아이디, 주소, 연락처 등 상담을 위해 필요한 회원의 등록정보  <br>
<br>

재화 또는 서비스 제공  <br>
<br>
이름, 아이디, 이메일, 주소, 연락처 등 서비스 수령을 위한 정보  <br>
<br>

마케팅 및 광고에의 활용  <br>
<br>
이름, 연락처, 생년월일, 서비스 이용정보, 회원이 사이트 내에 게시·등록한 콘텐츠 등  <br>
<br>
            </div>
            <input type="checkbox"> 개인정보처리방침에 동의합니다
                   <div class="btn_box">
          <button class="chbtn">탈퇴하기</button>
          </div>
       </div>
    </div>
</template>

<script>
    export default {
          data() {
    return {
 
      email: "선택항목",
    };
  },
        
    }
</script>

<style scoped>
.bold{
font-weight: bold;
   display: block;
padding-top:30px;
}
.bold2{
    font-weight: bold;
    padding-top:30px;
    display: block;
}
.chbtn{
      padding: 20px 0;
  width: 280px;
  margin: 0 5px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  background: #2752be;
  color: white;
  font-weight: bold;
  margin-bottom: 100px;
}
.btn_box{
    text-align: center;
    margin-top:50px;
}
.delbox{
    border:1px solid #ddd;
    height: 200px;
    overflow-y: scroll;
}

.title{
    font-size:27px;
}





.wrap1{
    padding:60px 100px;
   
 
}
.hr{
    border-bottom: 1px solid #ddd;
    margin:20px 0px;
}

/* 아이디
        이름
        닉네임
        이메일 */

</style>