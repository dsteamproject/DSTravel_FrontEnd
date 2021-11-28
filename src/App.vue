<template>
  <div id="main">
    <el-dialog
      v-model="dialogVisible"
      title=""
      width="50%"
      :before-close="handleClose"
      top="4vh"
    >
      <div id="box1">
        <h3>여행의 시작부터 끝까지,</h3>
        <p class="sub">나에게 맞는 여행경로를 추천받아보세요</p>
        <ul class="step_travel">
          <li id="main_step" v-bind:class="stepbg" @click="step1go">
            <span
              >Step.1<br />
              <span class="sub_step">여행지</span>
            </span>
          </li>
          <li id="main_step" v-bind:class="stepbg1" @click="step2go">
            <span
              >step2<br />
              <span class="sub_step"> 여행테마</span>
            </span>
          </li>
          <li id="main_step" v-bind:class="stepbg2" @click="step3go">
            <span
              >step.3<br />
              <span class="sub_step" @click="step = 3">여행날짜</span>
            </span>
          </li>
        </ul>
        <div v-if="step === 1" class="step">
          <ul>
            <li
              v-for="item in location"
              :key="item"
              class="item"
              :id="item.title"
              @click="handlestep1(item.title + '.' + item.sub)"
            >
              <img src="./assets/mapfood.jpg" style="display: none" />
              <img src="./assets/active.jpg" style="display: none" />
              <img src="./assets/daegu.jpg" style="display: none" />
              <img src="./assets/incheon.jpg" style="display: none" />
              <img src="./assets/gwangju.jpg" style="display: none" />
              <img src="./assets/gwangju.jpg" style="display: none" />
              <img src="./assets/daejeon.jpg" style="display: none" />
              <img src="./assets/ulsan.jpg" style="display: none" />
              <img src="./assets/tripA.jpg" style="display: none" />

              <img :src="item.src" />
              <div class="item_in">
                <p>{{ item.title }}</p>
                <p><span style="display: none">.</span>{{ item.sub }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="step === 2" class="step">
          <ul>
            <li
              v-for="item2 in travellike"
              :key="item2"
              class="item2"
              @click="handlestep2($event.target.textContent)"
            >
              <img :src="item2.src" />
              <div class="item2_in">
                <p>{{ item2.title }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="step === 3" class="step1">
          <div class="range_box">
            <v-date-picker
              is-range
              v-model="range"
              @click="range1"
              :columns="$screens({ default: 1, lg: 2 })"
              :is-expanded="$screens({ default: true, lg: true })"
              :min-date="new Date()"
              show-caps
            >
            </v-date-picker>
          </div>

          <br />

          <span>시작일 : {{ start }} </span> ~ <span>종료일 : {{ end }} </span
          ><br />
          <button class="last_btn" @click="handlesearch">추천여행 보기</button>
        </div>
      </div>
    </el-dialog>

    <div class="wrap9">
      <div class="wrap_1">
        <div class="nav">
          <ul class="nav_in">
            <li>
              <h2>
                <router-link to="/" class="logo" @click="scrollToTop()"
                  >DS TRAVEL</router-link
                >
              </h2>
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
              <router-link
                to="/join"
                class="router clrouter"
                v-if="logined === false"
                @click="scrollToTop()"
                >회원가입</router-link
              >
              <router-link
                to="/mypage/myinfo"
                class="router clrouter"
                v-if="logined === true"
                @click="scrollToTop()"
                >마이페이지</router-link
              >
            </li>

            <li>
              <router-link
                to="/login"
                class="router"
                v-if="logined === false"
                @click="scrollToTop()"
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
            <li>
              <el-dropdown trigger="click" v-if="logined === true">
                <span class="el-dropdown-link">
                  <el-icon class="iconbell"><bell-filled /></el-icon>
                  <el-badge class="mark" :value="1" />
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item class="clearfix">
                      공지사항
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix"> 안내 </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </li>
          </ul>
        </div>
        <div class="nav2">
          <ul>
            <li>
              <router-link
                to="/hotel"
                :class="routerclass1"
                @click="scrollToTop(1)"
                ><img
                  src="../src/assets/hotel.png"
                  style="width: 20px; height: 14px"
                />
                숙소</router-link
              >
            </li>
            <li>
              <router-link
                to="/car"
                :class="routerclass2"
                @click="scrollToTop(2)"
                ><img
                  src="../src/assets/ticket.png"
                  style="width: 20px; height: 14px"
                />
                행사·티켓</router-link
              >
            </li>
            <li>
              <router-link
                to=""
                :class="routerclass3"
                @click="scrollToTop(3)"
                class="chu"
                >여행추천</router-link
              >
            </li>
            <li>
              <router-link
                to="/vs/vsplay"
                :class="routerclass4"
                @click="scrollToTop(4)"
                >여행지월드컵</router-link
              >
            </li>
            <li>
              <router-link
                to="/board/free"
                :class="routerclass5"
                @click="scrollToTop(5)"
                >커뮤니티</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="blo"></div>
    <router-view
      @changeLogged="changeLogged"
      @dialog="dialog"
      @searchon="searchon"
    >
    </router-view>
    <div></div>
    <div class="footer" v-if="this.footeron === true">
      <div class="contact_wrap">
        <div class="contact1">
          <h1 style="color: #ffd75e; font-size: 50px; margin-bottom: 20px">
            Contact me
          </h1>
          <p style="color: white; font-size: 13px">
            저의 웹사이트에 방문해주셔서 감사합니다 <br />
            구인관련 및 궁금한 점이 있으시다면,<br />
            아래 연라처를 통해 연락 바랍니다
          </p>
          <div style="font-size: 45px; color: white">
            <Message style="width: 1em; height: 1em; margin-right: 8px" />
          </div>
          <span style="font-weight: bold; color: white">Mail me</span><br />
          <span style="color: white; margin-bottom: 20px"
            >qudrms1648@kakao.com</span
          >
          <div style="font-size: 45px; color: white; padding-top: 20px">
            <Phone style="width: 1em; height: 1em; margin-right: 8px" />
          </div>
          <span style="font-weight: bold; color: white">Call me</span><br />
          <span style="color: white">010-5195-1648</span>
        </div>
        <div class="contact2">
          <input
            type="text"
            class="input_text1"
            placeholder="이름을 입력해주세요"
            v-model="contactname"
          />
          <br />
          <input
            placeholder="이메일을 입력해주세요  'exmail@naver.com'"
            type="text"
            class="input_text2"
            v-model="contactmail"
          />
          <br />
          <textarea
            class="text_area"
            placeholder="메세지를 입력해주세요"
            v-model="contactmessage"
          ></textarea
          ><br />
          <button class="sendbtn" @click="send">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "@element-plus/icons";
import { Phone } from "@element-plus/icons";
import { BellFilled } from "@element-plus/icons";
import { Search } from "@element-plus/icons";
import axios from "axios";
export default {
  components: {
    Search,
    BellFilled,
    Message,
    Phone,
  },
  async created() {
    const currentPath = window.location.pathname;
    console.log(currentPath);

    if (currentPath === "/hotel") {
      this.routerclass1 = "router3";
    } else if (currentPath === "/hotelcontent") {
      this.routerclass1 = "router3";
    } else if (currentPath === "/order") {
      this.routerclass1 = "router3";
    } else if (currentPath === "/car") {
      this.routerclass2 = "router3";
    } else if (currentPath === "/carcontent") {
      this.routerclass2 = "router3";
    } else if (currentPath === "/search") {
      this.routerclass3 = "router3";
    } else if (currentPath === "/vs/vsplay") {
      this.routerclass4 = "router3";
    } else if (currentPath === "/vs/vsrank") {
      this.routerclass4 = "router3";
    } else if (currentPath === "/board/free") {
      this.routerclass5 = "router3";
    } else if (currentPath === "/board/review") {
      this.routerclass5 = "router3";
    } else if (currentPath === "/board/info") {
      this.routerclass5 = "router3";
    } else if (currentPath === "/board/que") {
      this.routerclass5 = "router3";
    } else if (currentPath === "/board/travel") {
      this.routerclass5 = "router3";
    } else if (currentPath === "/freewrite") {
      this.routerclass5 = "router3";
    } else if (currentPath === "/freecontent") {
      this.routerclass5 = "router3";
    } else if (currentPath === "/freechange") {
      this.routerclass5 = "router3";
    } else {
      this.routerclass1 = "router2";
      this.routerclass2 = "router2";
      this.routerclass3 = "router2";
      this.routerclass4 = "router2";
      this.routerclass5 = "router2";
    }

    const url = "https://api.ipify.org?format=json";
    const headers = { "Content-type": "application/json" };

    const response = await axios.get(url, { headers });
    console.log(response);
    if (this.token !== null) {
      this.logined = true;
    }
  },
  data() {
    return {
      comma: ".",
      today: new Date(),
      location: [
        { title: "서울", sub: "SEOUL", src: "/img/seoul.92f4ef72.png" },
        { title: "부산", sub: "BUSAN", src: "/img/busan.867f30bc.jpg" },
        { title: "대구", sub: "Daegu", src: "/img/daegu.8f368f57.jpg" },
        { title: "인천", sub: "Incheon", src: "/img/incheon.a3c3f074.jpg" },
        { title: "광주", sub: "Gwangju", src: "/img/gwangju.5f11e492.jpg" },
        { title: "대전", sub: "Daejeon", src: "/img/daejeon.77979afe.jpg" },
        { title: "울산", sub: "Ulsan", src: "/img/ulsan.5de67486.jpg" },
        { title: "제주도", sub: "JEJU", src: "/img/jeju.49b444ad.jpg" },
      ],
      travellike: [
        { title: "체험", src: "/img/tripA.9a03f755.jpg" },
        { title: "액티비티", src: "/img/active.07446c8c.jpg" },
        { title: "전통", src: "https://ktourtop10.kr/images/main_con02-6.png" },
        { title: "힐링", src: "https://ktourtop10.kr/images/main_con02-1.png" },
        { title: "미식", src: "/img/mapfood.bbfbdcd4.jpg" },
        {
          title: "가족이랑",
          src: "https://ktourtop10.kr/images/main_con02-7.png",
        },
        {
          title: "아이랑",
          src: "https://ktourtop10.kr/images/main_con02-10.png",
        },
        {
          title: "친구랑",
          src: "https://ktourtop10.kr/images/main_con02-3.png",
        },
      ],
      range: new Date(),
      step: 1,
      stepbg: "sbg",
      stepbg1: "nonesbg",
      stepbg2: "nonesbg",
      step1value: "",
      step1valuekor: "",
      step1valueeng: "",
      step2value: "",
      start: "",
      startmonth: "",
      startyear: "",
      startdate: "",
      betsec: "",
      betday: "",
      end: "",
      endmonth: "",
      endyear: "",
      enddate: "",
      routerclass1: "router2",
      routerclass2: "router2",
      routerclass3: "router2",
      routerclass4: "router2",
      routerclass5: "router2",
      kora: [],
      traveldate: "",
      scrollPostion: 0,
      logined: false,
      token: sessionStorage.getItem("TOKEN"),
      footeron: true,
      dialogVisible: false,
    };
  },
  methods: {
    searchon(abc) {
      this.footeron = abc;
    },
    dialog() {
      this.dialogVisible = true;
    },
    step1go() {
      this.step = 1;
      this.stepbg = "sbg";
      this.stepbg1 = "nonesbg";
      this.stepbg2 = "nonesbg";
    },
    step2go() {
      if (this.step1value === "") {
        alert("여행지를 선택해주세요");
      } else {
        this.step = 2;
        this.stepbg = "nonesbg";
        this.stepbg1 = "sbg";
        this.stepbg2 = "nonesbg";
      }
    },
    step3go() {
      if (this.step2value === "" && this.step1value === "") {
        alert("여행테마를 선택해주세요");
        return;
      }
      if (this.step1value === "") {
        alert("여행지를 선택해주세요");
        return;
      } else {
        this.step = 3;
        this.stepbg = "noesbg";
        this.stepbg1 = "noesbg";
        this.stepbg2 = "sbg";
      }
    },
    handleClose() {
      this.step = 1;
      this.dialogVisible = false;
      this.step2value = "";
      this.step1value = "";
      this.start = "";
      this.end = "";
      this.range = "";
      this.stepbg = "sbg";
      this.stepbg1 = "nonesbg";
      this.stepbg2 = "nonesbg";
    },
    async range1() {
      console.log(this.range);
      await this.handlestep3();
    },
    datechange() {
      console.log(this.date);
    },
    handlestep3() {
      console.log(this.range.start);
      console.log(this.range.end);
      this.start =
        this.range.start.getFullYear() +
        "." +
        (this.range.start.getMonth() + 1) +
        "." +
        this.range.start.getDate();

      this.startmonth = this.range.start.getMonth() + 1;
      console.log(this.startmonth);
      this.startyear = this.range.start.getFullYear();
      console.log(this.startyear);
      this.startdate = this.range.start.getDate();
      console.log(this.startdate);

      this.end =
        this.range.end.getFullYear() +
        "." +
        (this.range.end.getMonth() + 1) +
        "." +
        this.range.end.getDate();

      this.endmonth = this.range.end.getMonth() + 1;

      this.endyear = this.range.end.getFullYear();
      this.enddate = this.range.end.getDate();

      this.startDate = new Date(
        this.startyear,
        this.startmonth,
        this.startdate
      );
      this.endDate = new Date(this.endyear, this.endmonth, this.enddate);
      this.betsec = this.endDate.getTime() - this.startDate.getTime();
      this.betday = this.betsec / 1000 / 60 / 60 / 24;
      console.log(this.betday);
    },
    handlestep1(value) {
      this.step1value = value;
      console.log(value);
      this.step = 2;
      this.stepbg = "nonesbg";
      this.stepbg1 = "sbg";
      this.stepbg2 = "nonesbg";
    },
    handlestep2(value) {
      this.step2value = value;
      console.log(value);
      this.step = 3;
      this.stepbg = "nonesbg";
      this.stepbg1 = "nonesbg";
      this.stepbg2 = "sbg";
    },
    handlenext() {
      this.step = 2;
      this.stepbg = "nonesbg";
      this.stepbg1 = "sbg";
      this.stepbg2 = "nonesbg";
    },
    handlenext2() {
      this.step = 3;
      (this.stepbg = "nonesbg"), (this.stepbg1 = "nonesbg");
      this.stepbg2 = "sbg";
    },
    async handlesearch() {
      console.log(this.step1value);
      const kor = this.step1value;
      this.kora = kor.split(".");
      this.step1valuekor = this.kora[0];
      this.step1valueeng = this.kora[1];
      this.dialogVisible = false;

      if (this.betday > 9) {
        alert("여행일정은 10일을 넘길수 없습니다");
        return;
      }

      this.$router.push({
        name: "search",
        query: {
          locationkor: this.step1valuekor,
          locationeng: this.step1valueeng,
          theme: this.step2value,
          start: this.start,
          end: this.end,
          startmon: this.startmonth,
          endmonth: this.endmonth,
          betday: this.betday + 1,
        },
      });
      this.step = 1;
      this.start = "";
      this.end = "";
      this.step1value = "";
      this.step2value = "";
      this.range = "";
      this.stepbg = "sbg";
      this.stepbg1 = "nonesbg";
      this.stepbg2 = "nonesbg";
      window.scrollTo(0, 0);
    },
    scrollToTop(num) {
      window.scrollTo(0, 0);
      console.log(num);
      if (num === 1) {
        this.routerclass1 = "router3";
        this.routerclass2 = "router2";
        this.routerclass3 = "router2";
        this.routerclass4 = "router2";
        this.routerclass5 = "router2";
      } else if (num === 2) {
        this.routerclass1 = "router2";
        this.routerclass2 = "router3";
        this.routerclass3 = "router2";
        this.routerclass4 = "router2";
        this.routerclass5 = "router2";
      } else if (num === 3) {
        this.dialogVisible = true;
        this.routerclass1 = "router2";
        this.routerclass2 = "router2";
        this.routerclass3 = "router2";
        this.routerclass4 = "router2";
        this.routerclass5 = "router2";
      } else if (num === 4) {
        this.routerclass1 = "router2";
        this.routerclass2 = "router2";
        this.routerclass3 = "router2";
        this.routerclass4 = "router3";
        this.routerclass5 = "router2";
      } else if (num === 5) {
        this.routerclass1 = "router2";
        this.routerclass2 = "router2";
        this.routerclass3 = "router2";
        this.routerclass4 = "router2";
        this.routerclass5 = "router3";
      } else {
        this.routerclass1 = "router2";
        this.routerclass2 = "router2";
        this.routerclass3 = "router2";
        this.routerclass4 = "router2";
        this.routerclass5 = "router2";
      }
    },
    onscroll(e) {
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
        this.$router.push("/");
      } else {
        this.logined = true;
        this.$router.push(-1);
      }
    },
  },
};
</script>
<style>
.dp__calendar {
  width: 305px;
  padding: 5px 20px;
}
.dp__calendar dp__calendar_next {
  width: 305px;
  padding: 5px 20px;
}
.dp__flex_display {
  display: inline-flex !important;
}

.dp__theme_light {
  --dp-hover-color: #caddf0 !important;
}
</style>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
.ft_center h2 {
  color: white;
  font-size: 40px;
  margin-top: 40px;
  padding-top: 30px;
}
.ft_center {
  text-align: center;
}
#main_step {
  cursor: pointer;
}
.range_box {
  width: 79%;
  margin: 10px auto;
}
.blo {
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

.logo {
  text-decoration: none;
  color: #2752be;
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
  margin: 5px;
  padding: 5px 20px;
}
.nav_in_2 li:nth-child(1) {
  border: 1px solid rgb(19, 77, 184);
  padding: 5px 25px;
  margin-left: 5px;
  transition: all 0.6s;
}
.nav_in_2 li:nth-child(3) {
  padding: 5px 0px;
  transition: all 0.6s;
}
.nav_in_2 li:hover {
  opacity: 0.5;
}
.nav_in_2 li:nth-child(2) {
  font-weight: bold;
}
.router {
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
}
.clrouter {
  color: rgb(19, 77, 184);
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
  color: rgb(99, 99, 99);
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  padding-bottom: 5px;
}
.router3 {
  text-decoration: none;
  color: rgb(99, 99, 99);
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  padding-bottom: 5px;

  border-bottom: 2px solid #98dde3;
  color: #98dde3;
}
.router2:hover {
  border-bottom: 2px solid #98dde3;
}
/* asd */

.traveltitle {
  color: #000;
  font-size: 25px;
  padding-top: 70px;
  font-weight: 500;
}
.travellog {
  color: #999999;
  font-size: 18px;
  padding-bottom: 20px;
}
.carousel__next {
  background-color: red !important;
}
.carousel__item {
  width: 300px;
  height: 300px;
  background: #ccc;
}
.box2 {
  width: 1320px;
  margin: 0 auto;
}

.last_btn {
  padding: 20px 45px;
  border: none;
  margin-top: 50px;
  background: #98dde3;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
}
.item {
  width: 9vw;
  height: 22vh;
  border: 1px solid #ccc;
  display: inline-block;
  margin: 20px;
  position: relative;
  transition: all 0.5s;
}
.item:hover {
  filter: brightness(70%);
}
.item img {
  width: 100%;
  height: 100%;
}
.item_in {
  position: absolute;
  top: 40%;
  color: white;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.item2_in {
  position: absolute;
  top: 40%;
  color: rgb(15, 15, 14);
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.item2_in p {
  font-weight: 900;
  font-size: 20px;
  text-shadow: 1px 1px 1px rgb(255, 255, 255);
}

.item_in p {
  font-weight: bold;
  font-size: 20px;
  text-shadow: 1px 1px 1px #000;
}
.item2 img {
  width: 100%;
  height: 100%;
}
.item2 {
  position: relative;
  width: 8vw;
  height: 15vh;
  border: 1px solid #ccc;
  display: inline-block;
  margin: 20px;
}
.item3 {
  width: 270px;
  height: 100px;
  border: 1px solid #ccc;
  display: inline-block;
  margin: 20px;
}
.step {
  margin: 0 auto;
  cursor: pointer;
}
.step1 {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.sbg {
  background: #98dde3;
  color: white;
}
.nonesbg {
  background: white;
  color: black;
}
.sub_step {
  font-size: 12px;
  font-weight: bold;
}
.step_travel li {
  display: inline-block;
  margin: 20px;
  width: 6vw;
  border: 1px solid #ccc;
}
.iconbell {
  font-size: 23px;
  vertical-align: -5px;
  margin-right: 20px;
  cursor: pointer;
  color: rgb(167, 185, 178);
}

.area_eng {
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding-top: 350px;
  display: inline-block;
}
.area_kor {
  font-weight: bold;
  color: white;
}

.text_btn {
  background: rgba(246, 155, 48, 0.8);

  padding: 15px 30px;
  line-height: 140px;
  color: white;
  text-decoration: none;
  border-radius: 40px;
  font-weight: bold;
}
.text_btn2 {
  border: 1px solid white;
  padding: 4px 15px;
  border-radius: 10px;
  margin-left: 30px;
}
.wrap_in {
  position: relative;
}
.text_box {
  position: absolute;
  top: 25%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
}
.text_box h5 {
  font-size: 50px;
  color: white;
}
.text_box p {
  font-size: 20px;
  color: white;
}

.wrap {
  width: 100%;
  height: auto;
}

.input {
  text-align: center;
}

.content {
  text-align: center;
  padding-top: 50px;
  margin-bottom: 150px;
}
h3 {
  font-size: 28px;
}
.sub {
  font-size: 15px;
}
.travel li {
  width: 409px;
  height: 440px;

  background: #ccc;
  margin: 20px;
  margin-top: 40px;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
}
#box1 {
  text-align: center;
  padding-top: 20px;
}
.el-dropdown-link {
  position: relative;
}
.mark {
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 10px;
}
/* */
.sendbtn {
  width: 423px;
  padding: 16px;
  margin-top: 20px;
  background: #ffd75e;
  border: none;
  cursor: pointer;
  color: white;
  transition: all 0.5s;
}
.sendbtn:hover {
  background: #b18d20;
}
.text_area {
  width: 400px;
  height: 110px;
  margin-top: 30px;
  resize: none;
  background: none;
  border: 1px solid white;
  padding: 10px;
  color: white;
}
.input_text1 {
  width: 400px;
  height: 40px;
  background: none;
  border: 1px solid white;
  padding: 0px 10px;
  margin-top: 22px;
  color: white;
}
.input_text2 {
  width: 400px;
  height: 40px;
  background: none;
  margin-top: 20px;
  border: 1px solid white;
  padding: 0px 10px;
  color: white;
}
.contact_wrap {
  display: block;
  width: 950px;
  margin: 50px auto;
}
.contact1 {
  width: 400px;
  height: 300px;
  display: inline-block;

  float: left;
  text-align: right;
}
.contact2 {
  width: 400px;
  height: 300px;

  display: inline-block;
  folat: left;
}
.footer {
  padding-top: 10px;
  /*background-color: #B3C0D1;*/
  background: #3f3f3f;
  color: black;
  text-align: center;
  height: 500px !important;
  clear: both;
  width: 100%;
}
.chu {
  animation: downicon 2s infinite;
}
@keyframes downicon {
  0% {
    color: black;
  }
  50% {
    color: rgb(180, 180, 46);
  }
  100% {
    color: black;
  }
}
</style>
