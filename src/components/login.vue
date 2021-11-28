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
            v-on:keyup.enter="handlelogin"
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
          <a
            href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=WCxe47guG90KEPP6lIWu&redirect_uri=http://localhost:9090/login"
          >
            <button class="easylogin">네이버로 로그인</button>
          </a>

          <br />
          <a
            href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=74537161972-j2r3otdejq6fs24eeo09tlpsm5lho3u0.apps.googleusercontent.com&redirect_uri=http://localhost:9090/login&scope=email%20profile%20openid"
          >
            <button class="easylogin1">구글로 로그인</button>
          </a>
          <br />
          <a
            href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=ce61cbedf2c1d5758c73ec734dc1af08&redirect_uri=http://localhost:9090/login&id=kakao"
            ><button class="easylogin2">카카오톡 로그인</button></a
          >
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
    async loginWithKakao() {
      const params = {
        redirectUri: "http://127.0.0.1:9090/login",
      };
      window.Kakao.Auth.authorize(params);
      console.log(params);
    },
    async handlelogin() {
      if (this.userid === "") {
        alert("아이디를 입력해주세요");
        return;
      }
      if (this.userpw === "") {
        alert("암호를 입력해주세요");
        return;
      }
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
  async created() {
    this.$emit("searchon", true);
    const cookieget = this.$cookies.get("cookieid");
    if (this.$cookies.isKey("cookieid") === true) {
      this.saved = true;
      this.userid = cookieget;
    }
    console.log(this.$route.query.scope);

    // 카카오로그인  // 네이버 state // 카카오 x // 구글 scope]
    if (this.$route.query.scope !== undefined) {
      const url = `/REST/googlelogin?code=${this.$route.query.code}`;
      const headers = { "Content-type": "application/json" };
      const data = {};
      const response = await axios.post(url, data, { headers });
      console.log(response);
      if (response.data.status === 200) {
        sessionStorage.setItem("TOKEN", response.data.token);
        this.$router.push({ path: "/" });
        this.$emit("changeLogged", true);
      }
    } else if (this.$route.query.state === "") {
      const url = `/REST/naverlogin?code=${this.$route.query.code}`;
      const headers = { "Content-type": "application/json" };
      const data = {};
      const response = await axios.post(url, data, { headers });
      console.log(response);
      if (response.data.status === 200) {
        sessionStorage.setItem("TOKEN", response.data.token);
        this.$router.push({ path: "/" });
        this.$emit("changeLogged", true);
      }
    } else {
      const url = `/REST/kakaologin?code=${this.$route.query.code}`;
      const headers = { "Content-type": "application/json" };
      const data = {};
      const response = await axios.post(url, data, { headers });
      console.log(response);
      if (response.data.status === 200) {
        sessionStorage.setItem("TOKEN", response.data.token);
        this.$router.push({ path: "/" });
        this.$emit("changeLogged", true);
      }
    }
  },
};
</script>

<style scoped src="../assets/css/login.css">
</style>