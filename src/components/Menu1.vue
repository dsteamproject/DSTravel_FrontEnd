<template>
  <div class="wrap">
    <div class="wrap_in">
      <el-carousel height="480px">
        <el-carousel-item v-for="item in 3" :key="item"> </el-carousel-item>
      </el-carousel>
      <div class="text_box">
        <h5>YOURS TO EXPLORE</h5>
        <p>더 넓은 세상을 경험하고, 잊지 못할 순간을 예약하세요</p>
        <a href="#box1" class="text_btn"
          >여행의 시작부터 끝가지
          <span class="text_btn2">여행추천 받기 ></span>
        </a>
      </div>
    </div>
    <div class="content">
      <h3>인기 여행지</h3>
      <p class="sub">POPULAR DESTINATIONS</p>
      <ul class="travel">
        <li>
          <span class="area_eng">SEOUL</span><br />
          <span class="area_kor">서울</span>
        </li>
        <li>
          <span class="area_eng">BUSAN</span><br />
          <span class="area_kor">부산</span>
        </li>
        <li>
          <span class="area_eng">JEJU</span><br />
          <span class="area_kor">제주</span>
        </li>
      </ul>
      <div id="box1">
        <h3>여행의 시작부터 끝까지,</h3>
        <p class="sub">나에게 맞는 여행경로를 추천받아보세요</p>
        <ul class="step_travel">
          <li id="main_step" v-bind:class="stepbg">
            <span
              >Step.1<br />
              <span class="sub_step">여행지</span>
            </span>
          </li>
          <li id="main_step" v-bind:class="stepbg1">
            <span
              >step2<br />
              <span class="sub_step"> 여행테마</span>
            </span>
          </li>
          <li id="main_step" v-bind:class="stepbg2">
            <span
              >step.3<br />
              <span class="sub_step">여행날짜</span>
            </span>
          </li>
        </ul>
        <div v-if="step === 1" class="step">
          <ul>
            <li v-for="item in 8" :key="item" class="item">여행지</li>
          </ul>
          <button class="last_btn" @click="handlenext">다음</button>
        </div>
        <div v-if="step === 2" class="step">
          <ul>
            <li v-for="item in 8" :key="item" class="item2">여행테마</li>
          </ul>
          <button class="last_btn" @click="handlenext2">다음</button>
        </div>
        <div v-if="step === 3" class="step1">
          <v-date-picker v-model="range" is-range style="width: 100%" />
          <span>시작일 : 2021.10.21 </span><br />
          <span>종료일 : 2021.10.23 </span><br />
          <button class="last_btn" @click="handlesearch">추천여행 보기</button>
        </div>
      </div>
      <div class="box2">
        <h3 class="traveltitle">여행 후기</h3>
        <p class="travellog">TRAVELOG</p>
        <Carousel :itemsToShow="3.95" :wrapAround="true">
          <Slide v-for="slide in 6" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
          </Slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      range: {
        start: new Date(2021, 10, 21),
        end: new Date(2021, 10, 23),
      },
      step: 1,
      stepbg: "sbg",
      stepbg1: "nonesbg",
      stepbg2: "nonesbg",
    };
  },
  methods: {
    handlenext() {
      this.step = 2;
      (this.stepbg = "nonesbg"), (this.stepbg1 = "sbg");
      this.stepbg2 = "nonesbg";
    },
    handlenext2() {
      this.step = 3;
      (this.stepbg = "nonesbg"), (this.stepbg1 = "nonesbg");
      this.stepbg2 = "sbg";
    },
    handlesearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
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
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
.last_btn {
  padding: 10px 40px;
  border: none;
  margin-top: 50px;
  background: #98dde3;
  color: white;
  cursor: pointer;
}
.item {
  width: 270px;
  height: 350px;
  border: 1px solid #ccc;
  display: inline-block;
  margin: 20px;
}
.item2 {
  width: 270px;
  height: 100px;
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
  width: 1300px;
  margin: 0 auto;
}
.step1 {
  width: 900px;
  margin: 0 auto;
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
  padding: 8px 30px;
  border: 1px solid #ccc;
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
.el-carousel__item:nth-child(5) {
  background-image: url(../assets/t1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.el-carousel__item:nth-child(4) {
  background-image: url(../assets/t2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.el-carousel__item:nth-child(3) {
  background-image: url(../assets/t3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.wrap {
}
.main_img {
  height: 80vh;
  width: 100%;
  background-image: url(../assets/main.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.input {
  text-align: center;
}
h1 {
  padding-top: 250px;
  padding-bottom: 50px;
  color: white;
}
.search {
  outline: none;
  border: none;

  height: 50px;
  padding: 0px 20px;
}
.search:nth-child(2) {
  border-right: 1px solid #ccc;
  border-radius: 10px 0px 0px 10px;
}
.search:nth-child(3) {
  border-right: 1px solid #ccc;
}
.search_btn {
  padding: 14.5px 30px;
  padding-bottom: 17.5px;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: rgb(86, 233, 66);
  border-radius: 0px 10px 10px 0px;
  color: white;
  cursor: pointer;
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
.travel li:nth-child(1) {
  background-image: url(../assets/seoul.png);
}
.travel li:nth-child(2) {
  background-image: url(../assets/busan.jpg);
  background-size: cover;
}
.travel li:nth-child(3) {
  background-image: url(../assets/jeju.jpg);
  background-size: cover;
}
</style>