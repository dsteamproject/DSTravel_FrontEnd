<template>
  <div id="back">
    <div class="wrap">
      <ul class="ul_1">
        <li class="circle1">
          <span id="circle" v-bind:class="oncircle">
            <el-icon style="font-size: 50px; line-height: 30px">
              <document-checked />
            </el-icon>
          </span>
          <dl class="circle_dl">
            <dt class="cdt">Step1</dt>
            <dd class="cdd">약관동의</dd>
          </dl>
        </li>
        <li class="circle1">
          <span id="circle" v-bind:class="offcircle1">
            <el-icon style="font-size: 50px">
              <document />
            </el-icon>
          </span>
          <dl class="circle_dl">
            <dt class="cdt">Step2</dt>
            <dd class="cdd">정보입력</dd>
          </dl>
        </li>
        <li class="circle1">
          <span id="circle" v-bind:class="offcircle2">
            <el-icon style="font-size: 50px">
              <finished />
            </el-icon>
          </span>
          <dl class="circle_dl">
            <dt class="cdt">Step3</dt>
            <dd class="cdd">가입완료</dd>
          </dl>
        </li>
      </ul>

      <div class="input_box" v-if="step === 1">
        <ul class="iul">
          <li>
            <input type="checkbox" class="chk" v-model="checkAll" />
            <span class="chk1"
              >사이트 이용약관, 개인정보 수집 및 이용동의, 이벤트 및 프로모션
              안내메일 수신(선택)에 모두 동의 합니다.</span
            >
          </li>
          <li>
            <input type="checkbox" class="chk" v-model="check.check1" />
            <span class="chk1"
              >사이트 이용약관
              <span class="blue">(필수)</span>
            </span>
            <button class="exbtn">자세히 보기</button>
          </li>
          <li>
            <input type="checkbox" class="chk" v-model="check.check2" />
            <span class="chk1"
              >개인정보 수집 및 이용동의
              <span class="blue">(필수)</span>
            </span>
            <button class="exbtn">자세히 보기</button>
          </li>
          <li>
            <input type="checkbox" class="chk" v-model="check.check3" />
            <span class="chk1"
              >이벤트 및 프로모션 알림 메일 수신
              <span class="blue">(선택)</span>
            </span>

            <button class="exbtn">자세히 보기</button>
          </li>
        </ul>
        <div class="center">
          <button class="nonebtn" @click="handlenone">비동의</button>
          <button class="yesbtn" @click="handleyes">동의</button>
        </div>
      </div>
      <div class="input_box1" v-if="step === 2">
        <p class="s2title">회원정보 입력</p>
        <label>아이디</label
        ><input
          type="text"
          class="userid"
          v-model="userid"
          ref="userid"
        /><button class="id_btn" @click="checkid">중복확인</button
        ><span v-bind:class="idchk">{{ idcheck }}</span
        ><br />
        <label>비밀번호</label
        ><input type="password" class="userpw" v-model="userpw" ref="userpw" />

        <br />
        <label>비밀번호 확인</label
        ><input
          type="password"
          class="userpw"
          v-model="userpw2"
          ref="userpw2"
        /><br />
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
        <label>이메일</label
        ><input
          type="text"
          class="usermail"
          v-model="usermail"
          ref="usermail"
        />
        <input
          type="text"
          class="userpw"
          v-model="email"
          ref="email"
          readonly
        />
        <select class="sele" v-model="email">
          <option disabled selected>선택항목</option>
          <option>naver.com</option>
          <option>google.com</option>
          <option>daum.net</option></select
        ><br />
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
        <div class="center1">
          <button class="nonebtn" @click="handlenone2">취소</button>
          <button class="yesbtn" @click="handlelast">가입완료</button>
        </div>
      </div>
      <div class="input_box2" v-if="step === 3">
        <h1 class="last_title">환영합니다!</h1>
        <p class="last_1">
          {{ username }}님, 회원가입을 축하합니다!<br />
          가입하신 ID는<span class="effect">{{ userid }}</span
          >입니다.
        </p>
        <p class="last_2">
          travel 에서는 항상 회원님들의 입장에서<br />
          보다 좋은 서비스를 받으실 수 있도록 노력하겠습니다
        </p>
        <button class="nonebtn" @click="gohome">메인으로</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Document } from "@element-plus/icons";
import { DocumentChecked } from "@element-plus/icons";
import { Finished } from "@element-plus/icons";
export default {
  components: {
    Document,
    Finished,
    DocumentChecked,
  },
  data() {
    return {
      check: {
        analysis: "ads",
        check1: false,
        check2: false,
        check3: false,
      },
      idchk: "",
      idcheck: "",
      userid: "",
      userpw: "",
      userpw2: "",
      username: "",
      usernickname: "",
      usermail: "",
      gender: "",
      allcheck: false,
      chk1: false,
      chk2: false,
      chk3: false,
      oncircle: "bluebg",
      step: 1,
      offcircle2: "graybg",
      offcircle1: "graybg",
      email: "선택항목",
    };
  },
  methods: {
    async checkid() {
      const url = `/REST/member/idcheck`;
      const headers = { "Content-type": "application/json" };
      const body = {
        id: this.userid,
      };
      const response = await axios.post(url, body, { headers });
      console.log(response);
      if (this.userid.length < "4") {
        console.log(this.userid.length);
        this.idcheck = "아이디는 5자리 이상입력해주세요";
        this.idchk = "black";
      } else {
        if (response.data.status === 200) {
          this.idcheck = response.data.result;
          this.idchk = "blue";
        } else {
          this.idcheck = response.data.result;

          this.idchk = "red";
        }
      }
    },
    handlenone2() {
      this.step = 1;
      this.offcircle1 = "graybg";
      this.oncircle = "bluebg";
      this.offcircle2 = "graybg";
    },
    handlenone() {
      this.$router.go(-1);
    },
    handleyes() {
      if (this.check.check1 === false || this.check.check2 === false) {
        alert("필수 체크항목을 체크해주세요");
      } else {
        this.step = 2;
        this.offcircle1 = "bluebg";
        this.oncircle = "graybg";
      }
    },
    async handlelast() {
      if (this.userid === "") {
        alert("아이디를 입력해주세요");
        this.$refs.userid.focus();
        return;
      }
      if (this.userpw === "") {
        alert("비밀번호를 입력해주세요");
        this.$refs.userpw.focus();
        return;
      }
      if (this.userpw2 === "") {
        alert("비밀번호 확인을 입력해주세요");
        this.$refs.userpw2.focus();
        return;
      }
      if (this.username === "") {
        alert("이름을 입력해주세요");
        this.$refs.username.focus();
        return;
      }
      if (this.usernickname === "") {
        alert("닉네임을 입력해주세요");
        this.$refs.usernickname.focus();
        return;
      }
      if (this.usermail === "") {
        alert("이메일을 입력해주세요");
        this.$refs.usermail.focus();
        return;
      }
      if (this.email === "선택항목") {
        alert("메일을 선택해주세요");
        this.$refs.email.focus();
        return;
      }
      if (this.gender === "") {
        alert("성별을 선택해주세요");
        this.$refs.gender.focus();
        return;
      }
      if (!/^[a-z0-9]{5,20}$/i.test(this.userid)) {
        alert("아이디는 5~20자의 영문 소문자, 숫자만 사용 가능합니다");
        return;
      }
      if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,15}$/i.test(
          this.userpw
        )
      ) {
        alert(
          "암호는 5~15자 영문 대 소문자, 숫자, 특수문자를 포함해서 사용하세요"
        );
        return;
      }
      if (!/^[가-힣A-Za-z]+$/i.test(this.username)) {
        alert("실명을 입력해주세요");
        return;
      }

      if (this.userpw !== this.userpw2) {
        alert("암호와 암호확인이 다릅니다");
      } else {
        const url = `/REST/member/join`;
        const headers = { "Content-type": "application/json" };
        const body = {
          id: this.userid,
          password: this.userpw,
          name: this.username,
          nicname: this.usernickname,
          email: this.usermail + "@" + this.email,
          gender: this.gender,
        };
        const response = await axios.post(url, body, { headers });
        console.log(response);
        if (response.data.status === 200) {
          alert("회원가입완료");
          this.step = 3;
          this.offcircle2 = "bluebg";
          this.offcircle1 = "graybg";
          this.oncircle = "graybg";
        }
      }
    },
    gohome() {
      this.$router.push("/");
    },
  },
  computed: {
    checkAll: {
      get: function () {
        return this.check1 + "," + this.check2 + "," + this.check3;
      },
      set: function (e) {
        if (e === true) {
          this.check.check1 = true;
          this.check.check2 = true;
          this.check.check3 = true;
        } else {
          this.check.check1 = false;
          this.check.check2 = false;
          this.check.check3 = false;
        }
      },
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Noto Sans KR", sans-serif;
}
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

.black {
  margin-left: 15px;
  font-size: 13px;
  color: black;
  vertical-align: 3px;
  font-family: "Noto Sans KR", sans-serif;
}
.blue {
  margin-left: 15px;
  font-size: 13px;
  color: blue;
  vertical-align: 3px;
  font-family: "Noto Sans KR", sans-serif;
}
.red {
  margin-left: 15px;
  font-size: 13px;
  color: red;
  vertical-align: 3px;
  font-family: "Noto Sans KR", sans-serif;
}
.last_2 {
  font-size: 15px;
  margin-top: 30px;
  color: #3b3c3f;
}
.effect {
  color: blue;
}
.last_1 {
  font-size: 18px;
  margin-top: 30px;
}
.last_title {
  font-size: 40px;
  font-weight: 300;
  margin-top: 30px;
}
.radio {
  width: 24px;
  height: 24px;
  vertical-align: -6px;
  margin-right: 5px;
}
.sele {
  width: 200px;
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
.id_btn {
  width: 97px;
  height: 38px;
  background: #282d41;
  color: white;
  border: none;
  margin-left: 5px;
  cursor: pointer;
  font-weight: bold;
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
.userid {
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
label {
  width: 150px;
  display: inline-block;
  padding: 15px 0px;
}
.s2title {
  font-size: 18px;
  padding: 20px 0px;
}
.graybg {
  background: #eee;
  color: black;
}
.bluebg {
  background: #2752be !important;
  color: white;
}
.nonebtn {
  padding: 20px 0;
  width: 280px;
  margin: 0 5px;
  font-size: 15px;
  margin-top: 50px;
  border: 1px solid black;
  cursor: pointer;
  background: white;
  font-weight: bold;
}
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
}
.iul li:nth-child(1) {
  background: #eee;
}
.iul {
  margin-top: 30px;
}
.center {
  width: 100%;
  text-align: center;
}
.center1 {
  width: 100%;
  text-align: center;
  margin-top: 70px;
}
.exbtn {
  float: right;
  margin-top: 40px;
  margin-right: 60px;
  padding: 15px 25px;
  border: none;
  background: #282d41;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.blue {
  color: blue;
}
.chk1 {
  margin-left: 10px;
  font-size: 17px;
  font-weight: bold;
}
.chk {
  vertical-align: -6px;

  width: 23px;
  height: 23px;
}
.input_box ul li {
  list-style: none;
  line-height: 125px;
  padding-left: 50px;

  width: 100%;
  height: 125px;
  border: 1px solid #eee;
}
.cdt {
  text-align: center;
  line-height: 3.5;
}
.cdd {
  text-align: center;
  font-weight: 600;
  font-size: 20px;
}
#back {
  background: #eeeeee;
  width: 100%;
  height: 140vh;
  padding-top: 30px;
}
.wrap {
  background: white;
  width: 1200px;
  height: auto;
  margin: auto;
  padding: 70px 120px;
  box-sizing: border-box;
}
#circle {
  width: 120px;
  height: 120px;
  background: #ccc;
  border-radius: 50%;
  text-align: center;
  line-height: 148px;
  margin: 0px 100px;
  float: left;
}
ul .circle1 {
  list-style: none;
  float: left;
}
.ul_1 {
  height: 213px;
}

.input_box {
  clear: both;
  box-sizing: border-box;
  width: 100%;
  height: auto;
}
.input_box1 {
  clear: both;
  border: 1px solid #ccc;
  width: 100%;
  height: 520px;
  padding: 30px 50px;
  box-sizing: border-box;
  margin-top: 30px;
}
.input_box2 {
  text-align: center;
  clear: both;
  border: 1px solid #ccc;
  width: 100%;
  height: 520px;
  padding: 30px 50px;
  box-sizing: border-box;
  margin-top: 30px;
}
</style>