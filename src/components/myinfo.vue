<template>
    <div>
        <div class="wrap1">
            <p class="title">회원정보 수정</p>
            <div class="hr"></div>
          <label>아이디</label
        >
        <span> test12 </span>
       
        <span v-bind:class="idchk">{{ idcheck }}</span
        ><br />
        <label>비밀번호</label
        ><router-link to="/mypage/mypw" @click="handlepw" class="gopw">비밀번호 재설정</router-link>

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
      
        </div>
        <div class="btn_box">
          <button class="chbtn">변경</button>
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
  methods:{
      handlepw(){
        this.$emit("chmenu", 1);
      }
  }
        
    }
</script>

<style scoped>
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
}
.title{
    font-size:27px;
}
.gopw{
    padding:8px 12px;
    background:#2752be;
    cursor: pointer;
    color:white;
    font-size:13px;
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
.userpw {
  width: 187px;
  height: 38px;
  padding: 0px 10px 0px 20px;
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