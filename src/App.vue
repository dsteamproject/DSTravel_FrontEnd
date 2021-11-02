<template>
  <div id="main">
    <div class="wrap9" >
      <div class="wrap_1">
        <div class="nav">
          <ul class="nav_in">
            <li>
              <h2><router-link to="/" class="logo">DS TRAVEL</router-link></h2>
            </li>
            <li class="li_sch">
              <input
                type="text"
                class="search"
                placeholder="도시나 상품을 검색해보세요"
              />
              <el-icon class="sch_icon">
                <search />
              </el-icon>
            </li>
          </ul>
          <ul class="nav_in_2">
            <li>
              <router-link to="/join" class="router" v-if="logined === false"
                >회원가입</router-link
              >
              <router-link to="/mypage" class="router" v-if="logined === true"
                >마이페이지</router-link
              >
            </li>
            <li>
              <router-link to="/login" class="router" v-if="logined === false"
                >로그인</router-link
              >
              <router-link
                to=""
                @click="handlelogout"
                class="router"
                v-if="logined === true"
                >로그아웃</router-link
              >
            </li>
          </ul>
        </div>
        <div class="nav2">
          <ul>
            <li>
              <router-link to="/airline" class="router2"
                ><img src="../src/assets/air.png" style="width: 30px" />
                항공권</router-link
              >
            </li>
            <li>
              <router-link to="/hotel" class="router2"
                ><img
                  src="../src/assets/hotel.png"
                  style="width: 20px; height: 14px"
                />
                숙소</router-link
              >
            </li>
            <li>
              <router-link to="/car" class="router2"
                ><img src="../src/assets/car.png" style="width: 20px" />
                렌터카</router-link
              >
            </li>
            <li>
              <router-link to="/search" class="router2">서치</router-link>
            </li>
            <li>
              <router-link to="/vs" class="router2">여행지월드컵</router-link>
            </li>
            <li>
              <router-link to="/board/free" class="router2">커뮤니티</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <div class="blo">

      </div>
    <router-view @changeLogged="changeLogged"></router-view>
    <div></div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons";
export default {
  components: {
    Search,
  },
  data() {
    return {
      scrollPostion : 0,
      logined: false,
      token: sessionStorage.getItem("TOKEN"),
    };
  },
  methods: {
    onscroll(e){
       console.log(e);
    },
    changeLogged(logged) {
      this.logined = logged;
    },
    handlelogout() {
      const result = confirm("로그아웃 하시겠습니까?");
      if (result) {
        sessionStorage.removeItem("TOKEN");
      
        this.logined = false;
        this.$router.push(-1);
      } else {
        this.logined = true;
        this.$router.push(-1);
      }
    },




  },
  created() {
    if (this.token !== null) {
      this.logined = true;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
.blo{
  height: 133px;
}
.li_sch {
  margin-left: 20px;
  position: relative;
}
.sch_icon {
  position: absolute;
  top: 11px;
  left: 15px;
  font-size: 18px;
  color: rgb(70, 64, 64);
}
.footer {
  text-align: center;
  height: 300px;
  background: #1d1616;
  clear: both;
}
.logo {
  text-decoration: none;
}
.wrap9 {
  border-bottom: 1px solid #ccc;
  height: auto;
  width: 100%;
  position: fixed;
  z-index: 99;
  background: white;
 
}
.wrap_1 {
  width: 1080px;
  margin: 0 auto;
}
.nav {
  height: 72px;
  box-sizing: border-box;
  padding-top: 20px;
}
.nav_in li {
  float: left;
  list-style: none;
}
.nav_in_2 li {
  float: right;
  list-style: none;
  margin-left: 30px;
  padding: 5px 20px;
}
.nav_in_2 li:nth-child(1) {
  border: 1px solid #ccc;
  padding: 5px 25px;
}
.nav_in_2 li:nth-child(2) {
  font-weight: bold;
}
.router {
  text-decoration: none;
  color: black;
}
.search {
  padding: 13px 50px;
  background: #eee;
  outline: none;
  border: none;

  border-radius: 10px;
}
.nav2 {
  height: 40px;
  margin-top: 20px;
}
.nav2 ul li {
  float: left;
  margin-right: 50px;
  list-style: none;
  font-weight: bold;
}
.router2 {
  text-decoration: none;
  color: black;
}
</style>
