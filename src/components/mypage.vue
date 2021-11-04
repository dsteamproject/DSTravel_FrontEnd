<template>
  <div class="app">
    <div class="wrap">
      <div class="profile">
        <div class="sqwrap">
        <div class="square" @click="gomypage">
          <img v-if="this.chk.name === undefinded" src="../assets/mypage.png" class="myimg">
        <img v-if="this.chk.name !== undefinded" :src="uploadImageFile" width="90px" height="90px" class="myimg"></div>
        <button class="imgbtn"><el-icon style="font-size:20px">
        <camera />
      </el-icon></button>
      <div class="filebox">
       
        <label for="file" class="imgbtn"> <el-icon style="font-size:20px; vertical-align:-12px">
        <camera />
      </el-icon></label> 
      <input type="file" id="file" accept=".jpg,.jpeg,.png,.gif,.bmp" @change="onFileSelected($event)">
    
      </div>


        </div>
        <p>박병근</p>
      </div>
      <router-link to="/mypage/mypw"   @click="changeMenu(0)" :class="btn1">암호변경</router-link>
      <router-link to="/mypage/myinfo"   @click="changeMenu(1)" :class="btn2">정보변경</router-link>
      <router-link to="/mypage/myboard"   @click="changeMenu(2)" :class="btn3">게시물</router-link>
      <router-link to="/mypage/mylike/mmtr"   @click="changeMenu(3)" :class="btn4">위시리스트</router-link>
      <router-link to="/mypage/mymap"   @click="changeMenu(4)" :class="btn5">지도요청</router-link>
      <router-link to="/mypage/mydel"   @click="changeMenu(5)" :class="btn6">회원탈퇴</router-link>
      


      <div class="content">
        <router-view @chmenu="chmenu"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { Camera } from "@element-plus/icons";
import axios from "axios";
export default {
  created(){
 
 const currentPath = window.location.pathname;
 console.log(currentPath)
 if(currentPath === "/mypage"){
    this.$router.push({ path: "/mypage/mypw" });
 }
 if (currentPath === "/mypage/mypw" || currentPath === "/mypage") {
      this.btn1 = "btn2";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn1";
    }
     if (currentPath === "/mypage/myinfo") {
      this.btn1 = "btn1";
      this.btn2 = "btn2";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn1";
    }
        if (currentPath === "/mypage/myboard") {
      this.btn1 = "btn1";
      this.btn2 = "btn1";
      this.btn3 = "btn2";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn1";
    }
            if (currentPath === "/mypage/mylike/mmtr" || currentPath === "/mypage/mylike/mmho") {
      this.btn1 = "btn1";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn2";
      this.btn5 = "btn1";
      this.btn6 = "btn1";
    }
                if (currentPath === "/mypage/mymap") {
      this.btn1 = "btn1";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn2";
      this.btn6 = "btn1";
    }
                    if (currentPath === "/mypage/mydel") {
      this.btn1 = "btn1";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn2";
    }
  },
  components: {
   Camera 
  },
  data(){
    return{
      uploadImageFile:[],
      chk:[],
      btn1:"btn1",
      btn2:"btn1",
      btn3:"btn1",
      btn4:"btn1",
      btn5:"btn1",
      btn6:"btn1",
      menu:"",
      token: sessionStorage.getItem("TOKEN"),
    }
  },
  methods:{
    chmenu(val){
      console.log(val);
        if (val === 1) {
      this.btn1 = "btn2";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn1";

      }
    },
   async onFileSelected(event){
       var input = event.target;
              console.log(this.uploadImageFile)
        if (input.files && input.files[0]) {
           var reader = new FileReader();
            reader.onload = (e) => { this.uploadImageFile = e.target.result; } 
            reader.readAsDataURL(input.files[0]); 
            this.chk = input.files[0]
            } 
             console.log(this.chk)

      const url = `/REST/mypage/insertMemberImg`
      const headers = { "Content-Type": "multipart/form-data" ,token:this.token };
      const body = new FormData();
      body.append("file", this.chk);
        const response = await axios.put(url, body, { headers });
      console.log(response)


            },

     changeMenu(val) {
       console.log(val)
      
      if (val === 0) {
      this.btn1 = "btn2";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn1";

      }
      if (val === 1) {
      this.btn1 = "btn1";
      this.btn2 = "btn2";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn1";
 
      }
      if (val === 2) {
      this.btn1 = "btn1";
      this.btn2 = "btn1";
      this.btn3 = "btn2";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn1";
    
      }
      if (val === 3) {
       this.btn1 = "btn1";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn2";
      this.btn5 = "btn1";
      this.btn6 = "btn1";
       
      }
            if (val === 4) {
       this.btn1 = "btn1";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn2";
      this.btn6 = "btn1";
       
      }
                  if (val === 5) {
       this.btn1 = "btn1";
      this.btn2 = "btn1";
      this.btn3 = "btn1";
      this.btn4 = "btn1";
      this.btn5 = "btn1";
      this.btn6 = "btn2";
       
      }
    },

  }
}
</script>

<style scoped>
.filebox .upload-name {
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: 78%;
    color: #999999;
}
.filebox input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
}


.imgbtn{
  width:40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  border: none;
  color:white;
  cursor: pointer;
  position: absolute;
  bottom:0px;
  right:-15px;
 
  
}
.sqwrap{
  display: inline-block;
  position: relative;
}
.myimg{
  width:90px;
  height: 90px;
}
.content{
  margin-top:50px;
  height: auto;
  padding-bottom: 150px;
  background:white;
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
}
.btn1{
  display: inline-block;
  padding:20px 59px;
  text-decoration: none;
  border:none;
  border-right:1px solid #ccc;
  font-weight: bold;
  cursor: pointer;
  margin-top:30px;
  background:#E6E6E6 ;
  color:black
}
.btn2{
  display: inline-block;
  padding:20px 59px;
  text-decoration: none;
  border:none;
  border-right:1px solid #ccc;
  font-weight: bold;
  cursor: pointer;
  margin-top:30px;
  background:#ffffff ;
  color:black
}
.wrap{
  width:1100px;
  margin: 0 auto;
  background:  #F0F0F0;
  height: auto;
  padding-bottom:30px;
}
.profile{
  text-align: center;
 padding-top: 40px;

}
.square{
  width:90px;
  height: 90px;
  background: #eee;
  display: inline-block;
  border-radius: 50%;
   overflow: hidden;
}
.app{
  background: #F0F0F0;

}
</style>