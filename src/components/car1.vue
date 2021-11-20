<template>
  <div>
    <div class="wrap4_1">
      <div class="ecsel">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 3" :key="item"> </el-carousel-item>
        </el-carousel>
      </div>
      <div class="seolu_box">
        <div class="loti">
          <span class="locationtitle">문화관광,일반축제</span>
        </div>

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
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { defineComponent } from "vue";

export default defineComponent({
  async created() {
    const url1 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=mK%2Fn1wrd%2BkpKfgOKIsZlMX6gtKHuhcb%2BXQWk5%2FIlqDIC6zz6nuP%2FS4xInk0L98YpxvscEIFY3pm%2BCFuYLPcMJQ%3D%3D&pageNo=1&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=P&cat1=A02&contentTypeId=15&&cat2=A0207&listYN=Y`;
    const headers1 = { "Content-type": "application/json" };

    const response1 = await axios.get(url1, { headers1 });
    console.log(response1.data.response.body.items.item);
    this.list = response1.data.response.body.items.item;
  },
  methods: {
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
<style scoped src="../assets/css/car.css">
</style>