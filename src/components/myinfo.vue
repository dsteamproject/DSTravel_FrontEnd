<template>
    <div>
        <div class="wrap1">
        
            <p class="title">회원정보 수정</p>
            <div class="hr"></div>
          <label>아이디</label
        >
        <span> {{this.list.id}} </span>
       
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
          <button class="chbtn" @click="handlechange">변경</button>
          </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
   
      async created(){
      await this.refresh();
      },
 
          data() {
    return {
      list:"",
      username:"",
      usernickname:"",
      usermail:"",
      gender:"",
      email: "선택항목",
           token: sessionStorage.getItem("TOKEN"),
    };
  },
  methods:{
    async refresh(){
        const url = `/REST/mypage/home`
        const headers = { "Content-type": "application/json",  token : this.token };
        const response = await axios.get(url, { headers });
        console.log(response);
        this.list = response.data.member
        this.username = response.data.member.name
        const mail = response.data.member.email.split("@");
        console.log(mail)
        this.usermail = mail[0];
        this.email = mail[1];
        this.usernickname = response.data.member.nicname;
        this.gender =response.data.member.gender;
      
    },
      handlepw(){
        this.$emit("chmenu", 1);
      },
    async handlechange(){
      const url = `/REST/mypage/memberchange`;
      const headers = { "Content-type": "application/json" , token : this.token };
      const body = {
          name: this.username,
          nicname: this.usernickname,
          email: this.usermail + "@" + this.email,
          gender: this.gender,
      };
      const response = await axios.put(url, body, {headers});
      console.log(response);
      if(response.data.status === 200){
        alert("회원정보 수정이 완료되었습니다")
      }
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