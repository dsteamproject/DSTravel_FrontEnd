<template>
  <div class="wrap">
    <div class="wrap_in">
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
            <li v-for="item in list" :key="item">
              <div
                class="img_box"
                v-bind:style="{
                  backgroundImage: 'url(' + item.total[0][0].firstimage + ')',
                }"
              ></div>
              <div class="text_box1">
                <div class="sqare">
                  <img
                    :src="`//127.0.0.1:8080/REST/mypage/select_image?id=${item.member.id}`"
                    class="myimg"
                  />
                </div>
                <div class="text_b">
                  <p class="text_b3">{{ item.total[0][0].city.name }} 여행</p>
                  <span class="text_b0">{{ item.title }}</span>
                  <p class="text_b1">
                    {{ item.date[0] }} ~
                    {{ item.date[item.date.length - 1] }}
                  </p>

                  <p class="text_b2">{{ item.member.nicname }}님의 여행일정</p>

                  <button class="text_b_btn">상세보기</button>
                </div>
              </div>
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
          <Slide v-for="slide in reviewlist" :key="slide">
            <div class="carousel__item">
              <div class="img_box2">
                <img
                  :src="`http://127.0.0.1:8080/REST/board/select_image?no=${slide.no}`"
                  class="myimg"
                />
              </div>
              <div class="text_box2">
                <p class="bfp">
                  <span class="bigfont"> {{ slide.title }}</span
                  ><span class="redfont" v-if="slide.reply !== 0"
                    >[{{ slide.reply }}]</span
                  >
                </p>
                <div class="contentbox" v-html="slide.review"></div>

                <div class="nicname">
                  <el-icon style="font-size: 13px; vertical-align: -2px">
                    <Avatar />
                  </el-icon>
                  {{ slide.member.nicname }}님
                  <el-icon style="font-size: 13px; vertical-align: -2px">
                    <AlarmClock /> </el-icon
                  >{{ slide.simple }}
                </div>
              </div>
            </div>
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
import { AlarmClock } from "@element-plus/icons";
import { Avatar } from "@element-plus/icons";
import axios from "axios";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    AlarmClock,
    Avatar,
  },
  data() {
    return {
      list: [],
      reviewlist1: "",
      reviewlist: [],
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
  async created() {
    this.$emit("searchon", true);
    await this.boardlist();
    await this.travellist();
  },
  methods: {
    async travellist() {
      const url = `/REST/board/select_all?type=title&orderby=latest&keyword=&size=6&page=1&&category=TDsave`;
      const headers = { "Content-type": "application/json" };

      const response = await axios.get(url, { headers });
      console.log(response.data.cnt);
      console.log(response);
      this.list = response.data.list;
      console.log(this.list[0].date);
      this.pages = response.data.cnt;

      console.log(this.list);
    },

    async boardlist() {
      const url = `/REST/board/select_all?type=title&orderby=latest&keyword=&size=5&page=1&category=review`;
      const headers = { "Content-type": "application/json" };

      const response = await axios.get(url, { headers });
      console.log(response);
      this.reviewlist = response.data.list;
      console.log(this.reviewlist);
      for (var i = 0; i < this.reviewlist.length; i++) {
        const review = this.reviewlist[i].content.replace(/(<([^>]+)>)/gi, "");
        const review1 = review.substr(0, 43) + "...";
        this.reviewlist[i].review = review1;

        const rgd = new Date(this.reviewlist[i].regdate);

        const simple =
          rgd.getFullYear() +
          "-" +
          ("0" + (rgd.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + rgd.getDate()).slice(-2);
        this.reviewlist[i].simple = simple;
      }

      console.log(this.reviewlist);
    },
    handlebtn() {
      this.$emit("dialog", true);
    },
  },
};
</script>

<style scoped src="../assets/css/menu1.css">
</style>