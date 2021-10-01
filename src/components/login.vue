<template>
  <div id="back">
    <div class="wrap">
      <div class="logo"><h1>LOGO</h1></div>
      <div class="join">
        <div class="left">
          <h3>일반 로그인</h3>
          <input type="text" class="userid" placeholder="아이디" /><br />
          <input type="password" class="userpw" placeholder="비밀번호" /><br />
          <input type="button" value="로그인" class="btn" />
          <div class="chk">
            <div class="chk_in_left">
              <input type="checkbox" class="checkbox" /><span class="chktext"
                >아이디저장</span
              >
            </div>
            <ul class="chk_in_right">
              <li>아이디 찾기</li>
              <li>|</li>
              <li>비밀번호 찾기</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <h3>간편 로그인</h3>
          <button class="easylogin">네이버로 로그인</button><br />
          <button class="easylogin">구글로 로그인</button><br />
          <button class="easylogin">카카오톡 로그인</button>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_in">
          <div class="bottom_left">
            <p>
              아직<br />
              회원이 아니신가요?
            </p>
          </div>
          <div class="bottom_right">
            회원가입은 무료이며 <br />
            다양한 혜택을 받아 보실 수 있습니다.<br />
            <button class="join_btn">회원가입하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../assets/css/login.css";
</style>