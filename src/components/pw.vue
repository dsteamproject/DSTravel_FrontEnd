<template>
  <div>
    <div class="app">
      <dl>
        <dt>등록된 회원정보로 찾기</dt>
        <dd>
          <span class="O1">.</span>회원정보에 등록된 아이디, 이름, 이메일이
          일치하면 가입하셨던 메일로 임시 비밀번호를 발송해드립니다
        </dd>
        <label>아이디</label
        ><input
          type="text"
          class="userpw"
          v-model="userid"
          ref="username"
        /><br />
        <label>이름</label
        ><input
          type="text"
          class="userpw"
          v-model="username"
          ref="username"
        /><br />
        <label>이메일</label
        ><input
          type="text"
          class="usermail"
          v-model="usermail"
          ref="usermail"
        />@ <input type="text" class="userpw" v-model="email" ref="email" />
      </dl>
    </div>
    <div class="center">
      <button class="yesbtn" @click="handlepw">임시 비밀번호 발송</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.$emit("searchon", true);
  },
  data() {
    return {
      userid: "",
      userpw: "",
      usermail: "",
      email: "",
    };
  },
  methods: {
    async handlepw() {
      const url = `/REST/member/check/findPw/sendEmail`;
      const headers = { "Content-type": "application/json" };
      const body = {
        id: this.userid,
        name: this.username,
        email: this.usermail + "@" + this.email,
      };
      const response = await axios.post(url, body, { headers });
      console.log(response);
      if (response.data.status === 200) {
        alert(
          "임시 비밀번호 발송이 완료되었습니다\n 발송된 비밀번호로 로그인후 비밀번호를 변경해주세요"
        );
      }
    },
  },
};
</script>

<style scoped>
.yesbtn {
  padding: 20px 0;
  width: 280px;
  margin: 0 5px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  background: #2752be;
  color: white;
  font-weight: bold;
  margin-bottom: 50px;
}
.center {
  width: 100%;
  text-align: center;
}
label {
  width: 150px;
  display: inline-block;
  padding: 15px 0px;
}
.userpw {
  width: 187px;
  height: 38px;
  padding: 0px 10px 0px 20px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  line-height: 36px\9;
  font-family: inherit;
  font-size: 16px;
  margin-top: 5px;
  outline: none;
}
.usermail {
  margin-right: 5px;
  width: 250px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: #fff;
  height: 38px;
  padding: 0px 10px 0px 20px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  line-height: 36px\9;
  font-family: inherit;
  font-size: 16px;
  margin-top: 5px;
  outline: none;
}
.app {
  margin: 75px 50px;
}
dd {
  text-indent: 40px;
  list-style: disc;
  font-size: 14px;
  margin-bottom: 30px;
}
dt {
  font-size: 22px;
  margin-left: 20px;
  font-weight: 500;
}
.O1 {
  font-size: 30px;
  vertical-align: 4px;
  margin-right: 5px;
}
</style>