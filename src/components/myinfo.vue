<template>
  <div>
    <div class="wrap1">
      <p class="title">회원정보 수정</p>
      <div class="hr"></div>
      <div class="wrap_in">
        <label>아이디</label>
        <span v-if="this.list.login !== 'SNS'"> {{ this.list.id }} </span>
        <span v-if="this.list.login === 'SNS'"> {{ this.list.email }} </span>

        <span v-bind:class="idchk">{{ idcheck }}</span
        ><br />
        <label>비밀번호</label
        ><router-link
          v-if="this.list.login !== 'SNS'"
          to="/mypage/mypw"
          @click="handlepw"
          class="gopw"
          >비밀번호 재설정</router-link
        >
        <router-link
          v-if="this.list.login === 'SNS'"
          to=""
          @click="handlepw"
          class="gopw1"
          >SNS계정 변경불가</router-link
        >

        <br />

        <label>이름</label
        ><input
          type="text"
          class="userpw"
          v-model="username"
          ref="username"
        /><br />
        <label>닉네임</label
        ><input
          type="text"
          class="userpw"
          v-model="usernickname"
          ref="usernickname"
        /><br />
        <label class="maillabel">이메일</label
        ><input
          v-if="this.list.login !== 'SNS'"
          type="text"
          class="usermail"
          v-model="usermail"
          ref="usermail"
        />
        <input
          type="text"
          class="usermail1"
          v-model="usermail"
          ref="usermail"
          disabled
          v-if="this.list.login === 'SNS'"
        />
        <input
          type="text"
          class="userpw"
          v-model="email"
          ref="email"
          v-if="this.list.login !== 'SNS'"
        />
        <input
          type="text"
          class="userpw1"
          v-model="email"
          ref="email"
          disabled
          v-if="this.list.login === 'SNS'"
        />
        <select class="sele" v-model="email" v-if="this.list.login !== 'SNS'">
          <option disabled selected>선택항목</option>
          <option>naver.com</option>
          <option>google.com</option>
          <option>gmail.com</option>
          <option>daum.net</option>
        </select>
        <select
          disabled
          class="sele1"
          v-model="email"
          v-if="this.list.login === 'SNS'"
        >
          <option disabled selected>선택항목</option>
          <option>naver.com</option>
          <option>google.com</option>
          <option>gmail.com</option>
          <option>daum.net</option>
        </select>

        <br />
        <label>성별</label
        ><input
          type="radio"
          name="gender"
          value="man"
          class="radio"
          v-model="gender"
          ref="gender"
        />남성
        <input
          type="radio"
          name="gender"
          value="woman"
          class="radio"
          v-model="gender"
        />여성
      </div>
      <div class="btn_box">
        <button class="chbtn" @click="handlechange">변경</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
      this.$emit("searchon", true);
    await this.refresh();
  },

  data() {
    return {
      list: "",
      username: "",
      usernickname: "",
      usermail: "",
      gender: "",
      email: "선택항목",
      token: sessionStorage.getItem("TOKEN"),
    };
  },
  methods: {
    async refresh() {
      const url = `/REST/mypage/home`;
      const headers = { "Content-type": "application/json", token: this.token };
      const response = await axios.get(url, { headers });
      console.log(response);
      this.list = response.data.member;
      this.username = response.data.member.name;
      const mail = response.data.member.email.split("@");
      console.log(mail);
      this.usermail = mail[0];
      this.email = mail[1];
      this.usernickname = response.data.member.nicname;
      this.gender = response.data.member.gender;
    },
    handlepw() {
      this.$emit("chmenu", 1);
    },
    async handlechange() {
      const url = `/REST/mypage/memberchange`;
      const headers = { "Content-type": "application/json", token: this.token };
      const body = {
        name: this.username,
        nicname: this.usernickname,
        email: this.usermail + "@" + this.email,
        gender: this.gender,
      };
      const response = await axios.put(url, body, { headers });
      console.log(response);
      if (response.data.status === 200) {
        alert("회원정보 수정이 완료되었습니다");
        this.$emit("infochange", true);
      }
    },
  },
};
</script>

<style scoped>
.maillabel {
  height: 20px;
}
.wrap_in {
  padding: 0px 50px;
}
.chbtn {
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
  margin-top: 35px;
}
.btn_box {
  text-align: center;
}
.title {
  font-weight: bold;
  font-size: 18px;
  margin-left: 50px;

  text-align: left;
}
.gopw {
  padding: 8px 12px;
  background: #2752be;
  cursor: pointer;
  color: white;
  font-size: 13px;
  text-decoration: none;
}
.gopw1 {
  padding: 8px 12px;
  background: #c5c6c9;
  cursor: default;
  color: white;
  font-size: 13px;
  text-decoration: none;
}
.radio {
  width: 24px;
  height: 24px;
  vertical-align: -6px;
  margin-right: 5px;
}
.usermail {
  margin-right: 5px;
  width: 28%;
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
.usermail1 {
  margin-right: 5px;
  width: 28%;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: rgb(209, 207, 207);
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
.sele {
  width: 28%;
  height: 38px;
  margin-left: 3px;
  background: #eee;
  border: none;
  vertical-align: 1px;
  font-size: 16px;

  text-indent: 0.01px;
  position: relative;

  color: #222;
  margin-right: -40px;
  padding-right: 40px;
  padding-left: 20px;
  min-width: 150px;
}
.sele1 {
  width: 28%;
  height: 38px;
  margin-left: 3px;
  background: rgb(209, 207, 207);
  border: none;
  vertical-align: 1px;
  font-size: 16px;

  text-indent: 0.01px;
  position: relative;

  color: #222;
  margin-right: -40px;
  padding-right: 40px;
  padding-left: 20px;
  min-width: 150px;
}
.userid {
  width: 187px;
  height: 38px;
  padding: 0px 10px 0px 20px;
}
label {
  width: 110px;
  display: inline-block;
  padding: 15px 0px;
  font-size: 13px;
}
.userpw {
  width: 187px;
  height: 38px;
  padding: 0px 10px 0px 20px;

  margin-right: 5px;
  width: 28%;
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
.userpw1 {
  width: 187px;
  height: 38px;
  padding: 0px 10px 0px 20px;

  margin-right: 5px;
  width: 28%;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: rgb(209, 207, 207);
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
.wrap1 {
  padding: 10px;
}
.hr {
  border-bottom: 1px solid #ddd;
  margin: 20px 0px;
}

/* 아이디
        이름
        닉네임
        이메일 */
</style>