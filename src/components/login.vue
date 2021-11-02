<template>
  <div id="back">
    <div class="wrap">
      <div class="logo"><h1>LOGO</h1></div>
      <div class="join">
        <div class="left">
          <h3 class="h31">일반 로그인</h3>
          <input
            type="text"
            class="userid"
            placeholder="아이디"
            v-model="userid"
          /><br />
          <input
            type="password"
            class="userpw"
            placeholder="비밀번호"
            v-model="userpw"
          /><br />
          <input
            type="button"
            value="로그인"
            class="btn"
            @click="handlelogin"
          />
          <div class="chk">
            <div class="chk_in_left">
              <input
                type="checkbox"
                class="checkbox"
                v-on:change="saveid"
                v-model="saved"
              /><span class="chktext">아이디저장</span>
            </div>
            <ul class="chk_in_right">
              <li @click="$router.push('/find/id')">아이디 찾기</li>
              <li>|</li>
              <li @click="$router.push('/find/pw')">비밀번호 찾기</li>
            </ul>
          </div>
        </div>
        <img src="../assets/naver.png" />
        <div class="right">
          <h3 class="login2 h31">간편 로그인</h3>
          <button class="easylogin">네이버로 로그인</button><br />
          <button class="easylogin">구글로 로그인</button><br />
          <button class="easylogin">카카오톡 로그인</button>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_in">
          <div class="bottom_left">
            <p class="p1">
              아직<br />
              회원이 아니신가요?
            </p>
          </div>
          <div class="bottom_right">
            회원가입은 무료이며 <br />
            다양한 혜택을 받아 보실 수 있습니다.<br />
            <button class="join_btn" @click="$router.push('/join')">
              회원가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userid: "",
      userpw: "",
      saved: false,
    };
  },
  methods: {
    async handlelogin() {
      const url = `/REST/member/login`;
      const headers = { "Content-type": "application/json" };
      const body = {
        id: this.userid,
        password: this.userpw,
      };
      const response = await axios.post(url, body, { headers });
      console.log(response);
      if (response.data.status === 200) {
        sessionStorage.setItem("TOKEN", response.data.token);
   

        if (this.saved === true) {
          this.$cookies.set("cookieid", this.userid);
        } else {
          this.$cookies.remove("cookieid");
        }
        this.$router.push({ path: "/" });
        this.$emit("changeLogged", true);
      } else {
        alert("아이디/암호를 다시확인해주세요");
      }
    },
  },
  created() {
    const cookieget = this.$cookies.get("cookieid");
    if (this.$cookies.isKey("cookieid") === true) {
      this.saved = true;
      this.userid = cookieget;
    }
  },
};
</script>

<style scoped>
@import "../assets/css/login.css";
</style>