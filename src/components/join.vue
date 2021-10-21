<template>
  <div id="back">
    <div class="wrap">
      <ul class="ul_1">
        <li class="circle1">
          <span id="circle" v-bind:class="oncircle">1</span>
          <dl class="circle_dl">
            <dt class="cdt">Step1</dt>
            <dd class="cdd">약관동의</dd>
          </dl>
        </li>
        <li class="circle1">
          <span id="circle" v-bind:class="offcircle1">2</span>
          <dl class="circle_dl">
            <dt class="cdt">Step2</dt>
            <dd class="cdd">정보입력</dd>
          </dl>
        </li>
        <li class="circle1">
          <span id="circle" v-bind:class="offcircle2">3</span>
          <dl class="circle_dl">
            <dt class="cdt">Step3</dt>
            <dd class="cdd">가입완료</dd>
          </dl>
        </li>
      </ul>

      <div class="input_box" v-if="step === 1">
        <ul class="iul">
          <li>
            <input type="checkbox" class="chk" />
            <span class="chk1"
              >사이트 이용약관, 개인정보 수집 및 이용동의, 이벤트 및 프로모션
              안내메일 수신(선택)에 모두 동의 합니다.</span
            >
          </li>
          <li>
            <input type="checkbox" class="chk" />
            <span class="chk1"
              >사이트 이용약관
              <span class="blue">(필수)</span>
            </span>
            <button class="exbtn">자세히 보기</button>
          </li>
          <li>
            <input type="checkbox" class="chk" />
            <span class="chk1"
              >개인정보 수집 및 이용동의
              <span class="blue">(필수)</span>
            </span>
            <button class="exbtn">자세히 보기</button>
          </li>
          <li>
            <input type="checkbox" class="chk" />
            <span class="chk1"
              >이벤트 및 프로모션 알림 메일 수신
              <span class="blue">(선택)</span>
            </span>

            <button class="exbtn">자세히 보기</button>
          </li>
        </ul>
        <div class="center">
          <button class="nonebtn">비동의</button>
          <button class="yesbtn" @click="handleyes">동의</button>
        </div>
      </div>
      <div class="input_box1" v-if="step === 2">
        <p class="s2title">회원정보 입력</p>
        <label>아이디</label><input type="text" class="userid" /><button
          class="id_btn"
        >
          중복확인</button
        ><br />
        <label>비밀번호</label><input type="text" class="userpw" />

        <br />
        <label>비밀번호 확인</label><input type="text" class="userpw" /><br />
        <label>이름</label><input type="text" class="userpw" /><br />
        <label>닉네임</label><input type="text" class="userpw" /><br />
        <label>이메일</label><input type="text" class="usermail" />
        <input type="text" class="userpw" />
        <select class="sele">
          <option>naver.com</option>
          <option>google.com</option>
          <option>daum.net</option></select
        ><br />
        <label>성별</label
        ><input type="radio" name="gender" value="man" class="radio" />남성
        <input type="radio" name="gender" value="woman" class="radio" />여성
        <div class="center1">
          <button class="nonebtn">취소</button>
          <button class="yesbtn" @click="handlelast">가입완료</button>
        </div>
      </div>
      <div class="input_box2" v-if="step === 3">
        <h1 class="last_title">환영합니다!</h1>
        <p class="last_1">
          OOO님, 회원가입을 축하합니다!<br />
          가입하신 ID는<span class="effect">OOOOOO</span>입니다.
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
export default {
  data() {
    return {
      oncircle: "bluebg",
      step: 1,
      offcircle2: "graybg",
      offcircle1: "graybg",
    };
  },
  methods: {
    handleyes() {
      this.step = 2;
      this.offcircle1 = "bluebg";
      this.oncircle = "graybg";
    },
    handlelast() {
      this.step = 3;
      this.offcircle2 = "bluebg";
      this.offcircle1 = "graybg";
      this.oncircle = "graybg";
    },
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
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
}
.userid {
  width: 187px;
  height: 38px;
  padding: 0px 10px 0px 20px;
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
}
.cdd {
  text-align: center;
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
  height: 1300px;
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
  line-height: 107px;
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
  height: 800px;
}
.input_box1 {
  clear: both;
  border: 1px solid #ccc;
  width: 100%;
  height: 520px;
  padding: 30px 50px;
  box-sizing: border-box;
}
.input_box2 {
  text-align: center;
  clear: both;
  border: 1px solid #ccc;
  width: 100%;
  height: 520px;
  padding: 30px 50px;
  box-sizing: border-box;
}
</style>