<template>
  <div class="wrap">
    <div class="wrap_in">
      <el-popover
        v-model:visible="visible"
        placement="left-end"
        title="Title"
        :width="300"
        trigger="manual"
      >
        <div class="popovercontent">채팅 구현</div>
        <template #reference>
          <div @click="visible = !visible" class="fixedbtn"></div>
        </template>
      </el-popover>
      <el-carousel height="480px">
        <el-carousel-item v-for="item in 3" :key="item"> </el-carousel-item>
      </el-carousel>
      <div class="text_box">
        <h5>YOURS TO EXPLORE</h5>
        <p>더 넓은 세상을 경험하고, 잊지 못할 순간을 예약하세요</p>
        <a href="#box1" class="text_btn1_1"
          >여행의 시작부터 끝가지
          <span class="text_btn2" @click="handlebtn">여행추천 받기 ></span>
        </a>
      </div>
    </div>
    <div class="content1_1">
      <h3>인기 여행지</h3>
      <p class="sub">POPULAR DESTINATIONS</p>
      <ul class="travel">
        <li>
          <div class="tpos">
            <span class="area_eng">SEOUL</span><br />
            <span class="area_kor">서울</span>
          </div>
          <div class="ttbox"></div>
        </li>
        <li>
          <div class="tpos">
            <span class="area_eng">BUSAN</span><br />
            <span class="area_kor">부산</span>
          </div>
          <div class="ttbox1"></div>
        </li>
        <li>
          <div class="tpos">
            <span class="area_eng">JEJU</span><br />
            <span class="area_kor">제주도</span>
          </div>
          <div class="ttbox2"></div>
        </li>
      </ul>
      <div class="box1">
        <h3 class="traveltitle">여행일정</h3>
        <p class="travellog">
          다른 여행자들의 일정을 참고해 나만의 여행을 계획해보세요!
        </p>
        <div class="box1_in">
          <ul class="traveldate">
            <li>
              <div class="img_box">asd</div>
              <div class="text_box1"><div class="sqare"></div></div>
            </li>
            <li>
              <div class="img_box">asd</div>
              <div class="text_box1"><div class="sqare"></div></div>
            </li>
            <li>
              <div class="img_box">asd</div>
              <div class="text_box1"><div class="sqare"></div></div>
            </li>
            <li>
              <div class="img_box">asd</div>
              <div class="text_box1"><div class="sqare"></div></div>
            </li>
            <li>
              <div class="img_box">asd</div>
              <div class="text_box1"><div class="sqare"></div></div>
            </li>
            <li>
              <div class="img_box">asd</div>
              <div class="text_box1"><div class="sqare"></div></div>
            </li>
          </ul>
        </div>
      </div>

      <div class="box2">
        <h3 class="traveltitle">여행 후기</h3>
        <p class="travellog">TRAVELOG</p>
        <Carousel
          :itemsToShow="3.95"
          :wrapAround="true"
          :breakpoints="breakpoints"
        >
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
// import axios from "axios";
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
      visible: false,
      breakpoints: {
        // 700px and up
        300: {
          itemsToShow: 2,
        },
        700: {
          itemsToShow: 3,
        },
        // 1024 and up
        1024: {
          itemsToShow: 3.95,
        },
      },
    };
  },
  methods: {
    handlebtn() {
      this.$emit("dialog", true);
    },
  },
};
</script>

<style scoped src="../assets/css/menu1.css">
</style>