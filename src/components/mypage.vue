<template>
  <div class="app">
    <div class="wrap">
      <div class="profile">
        <div class="square"></div>
        <p>박병근</p>
      </div>
      <router-link to="/mypage/mypw" class="btn1">암호변경</router-link>
      <router-link to="/mypage/myinfo" class="btn1">정보변경</router-link>
      <router-link to="/mypage/mypw" class="btn1">게시물</router-link>
      <router-link to="/mypage/mypw" class="btn1">위시리스트</router-link>
      <router-link to="/mypage/mypw" class="btn1">지도요청</router-link>
      <router-link to="/mypage/mypw" class="btn1">회원탈퇴</router-link>
      


      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content{
  margin-top:50px;
  min-height: 500px;
  background:white;
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
.wrap{
  width:1100px;
  margin: 0 auto;
  background:  #F0F0F0;
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
}
.app{
  background: #F0F0F0;
}
</style>