<template>
  <div>
    <div class="wrap4_1">
      <div class="ecsel">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 3" :key="item"> </el-carousel-item>
        </el-carousel>
      </div>
      <div class="seolu_box">
        <div class="locationbox">
          <button class="lobtn" @click="pushlocation(0)">전체보기</button>
          <button class="lobtn" @click="pushlocation(1)">서울</button>
          <button class="lobtn" @click="pushlocation(2)">대전</button>
          <button class="lobtn" @click="pushlocation(3)">대구</button>
          <button class="lobtn" @click="pushlocation(4)">부산</button>

          <button class="lobtn" @click="pushlocation(5)">인천</button>
          <button class="lobtn" @click="pushlocation(6)">광주</button>
          <button class="lobtn" @click="pushlocation(7)">제주도</button>
          <button class="lobtn" @click="pushlocation(8)">울산</button>
        </div>
        <div class="loti">
          <span class="locationtitle">{{ this.title }}</span>
          <select
            class="rightsel"
            @change="arrchange(arrange)"
            v-model="arrange"
          >
            <option value="R">최신순</option>
            <option value="O">가나다순</option>
            <option value="P">인기순</option>
          </select>
        </div>
        <div v-if="this.nodata === false" class="abcc_wrap">
          <div class="abcc" v-for="slide in list" :key="slide">
            <div class="carousel__item1" @click="contentgo(slide)">
              <div class="carousel_img">
                <img
                  v-if="slide.firstimage !== undefined"
                  :src="slide.firstimage"
                  class="cimg"
                />
                <img
                  v-if="slide.firstimage === undefined"
                  src="../assets/noimage.jpg"
                  class="cimg"
                />
              </div>
              <div class="carousel_content">
                <div class="addrtitle">
                  <span class="addr">{{ slide.addr1 }}</span
                  ><br />
                  <span class="cacotitle">{{ slide.title }}</span>
                </div>
                <div class="demo-rate-block">
                  <el-rate
                    v-model="value1"
                    disabled
                    class="abc1"
                    text-color="#ff9900"
                  ></el-rate>
                  <span class="noneprice">상세페이지 참조 /1인</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pluslistdiv" v-if="this.tcount > this.list.length">
          <button @click="pluslist" class="plbtn">더 보기</button>
        </div>
        <div class="nodata" v-if="this.nodata === true">
          <h3>현재 지역에서의 행사가 없습니다</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { defineComponent } from "vue";

export default defineComponent({
  // arrange P = 인기순  O  제목순   R 최신순
  // cat1 = A02  고정
  // contentid = 15 고정
  // cat 2  // 1 => A0207   2 => A0208  3=> A0208 4 => A0208  5 => A0208
  // CAT 3  // 1=>   ""   2 = > A02080100  3=>  A02080600 4=>   A02080500  5=> A02080200

  async created() {
    if (this.$route.query.type === "1") {
      this.title = "문화관광,일반축제";
      this.arrange = "P";
      this.cat1 = "A02";
      this.contentid = "15";
      this.cat2 = "A0207";
      this.cat3 = "";
    } else if (this.$route.query.type === "2") {
      this.title = "전통공연";
      this.arrange = "P";
      this.cat1 = "A02";
      this.contentid = "15";
      this.cat2 = "A0208";
      this.cat3 = "A02080100";
    } else if (this.$route.query.type === "3") {
      this.title = "박람회";
      this.arrange = "P";
      this.cat1 = "A02";
      this.contentid = "15";
      this.cat2 = "A0208";
      this.cat3 = "A02080600";
    } else if (this.$route.query.type === "4") {
      this.title = "전시회";
      this.arrange = "P";
      this.cat1 = "A02";
      this.contentid = "15";
      this.cat2 = "A0208";
      this.cat3 = "A02080500";
    } else if (this.$route.query.type === "5") {
      this.title = "연극";
      this.arrange = "P";
      this.cat1 = "A02";
      this.contentid = "15";
      this.cat2 = "A0208";
      this.cat3 = "A02080200";
    }
    await this.refresh();
  },
  methods: {
    async pluslist() {
      this.numOfRows += 12;
      await this.refresh();
    },
    async arrchange(value) {
      this.arrange = value;
      await this.refresh();
    },
    async pushlocation(num) {
      if (num === 0) {
        this.areacode = "";
      } else if (num === 1) {
        this.areacode = "1";
      } else if (num === 2) {
        this.areacode = "3";
      } else if (num === 3) {
        this.areacode = "4";
      } else if (num === 4) {
        this.areacode = "6";
      } else if (num === 5) {
        this.areacode = "2";
      } else if (num === 6) {
        this.areacode = "5";
      } else if (num === 7) {
        this.areacode = "39";
      } else if (num === 8) {
        this.areacode = "7";
      }

      await this.refresh();
    },
    async refresh() {
      const url1 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=mK%2Fn1wrd%2BkpKfgOKIsZlMX6gtKHuhcb%2BXQWk5%2FIlqDIC6zz6nuP%2FS4xInk0L98YpxvscEIFY3pm%2BCFuYLPcMJQ%3D%3D&pageNo=${this.pageNo}&numOfRows=${this.numOfRows}&MobileApp=AppTest&MobileOS=ETC&arrange=${this.arrange}&cat1=${this.cat1}&contentTypeId=${this.contentid}&&cat2=${this.cat2}&cat3=${this.cat3}&listYN=Y&areaCode=${this.areacode}`;
      const headers1 = { "Content-type": "application/json" };

      const response1 = await axios.get(url1, { headers1 });
      console.log(response1);
      this.tcount = response1.data.response.body.totalCount;
      console.log(this.tcount);
      console.log(response1.data.response.body.items.item);
      this.list = response1.data.response.body.items.item;
      if (this.list === undefined) {
        this.nodata = true;
      } else {
        this.nodata = false;
      }
    },
    contentgo(slide) {
      console.log(slide);
      this.$router.push({
        path: "/carcontent",
        query: { code: slide.contentid },
      });
    },
  },

  data() {
    return {
      tcount: 0,
      pageNo: 1,
      numOfRows: 12,
      nodata: false,
      areacode: "",
      arrange: "P",
      cat1: "",
      contentid: "",
      cat2: "",
      cat3: "",
      title: "",
      value1: 5,
      settings: {
        itemsToShow: 4,
        snapAlign: "left",
      },
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      page: 1,
    };
  },
});
</script>
<style>
.abc1 .el-rate__item .el-rate__icon {
  font-size: 13px;
}
.carousel__prev {
  background: white;
  box-shadow: 0 0 0 1px #0000000d, 0 2px 6px #0000000d, 0 4px 12px #0000000d;
  color: black;
  box-sizing: unset;
  padding: 3px;
}
.carousel__next {
  background: white;
  box-shadow: 0 0 0 1px #0000000d, 0 2px 6px #0000000d, 0 4px 12px #0000000d;
  color: black;
  box-sizing: unset;
  padding: 3px;
}
</style>
<style scoped src="../assets/css/car1.css">
</style>