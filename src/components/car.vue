<template>
  <div>
    <div class="wrap4_1" v-loading="loading">
      <div class="ecsel">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 3" :key="item"> </el-carousel-item>
        </el-carousel>
      </div>
      <div class="seolu_box">
        <div class="loti">
          <span class="locationtitle">문화관광,일반축제</span>
          <span class="plus" @click="car1push(1)">더보기></span>
        </div>
        <div>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in list" :key="slide">
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
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div class="seolu_box">
          <div class="loti">
            <span class="locationtitle">전통공연</span>
            <span class="plus" @click="car1push(2)">더보기></span>
          </div>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in list1" :key="slide">
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
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <div class="seolu_box">
            <div class="loti">
              <span class="locationtitle">박람회</span>
              <span class="plus" @click="car1push(3)">더보기></span>
            </div>
            <Carousel :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in list2" :key="slide">
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
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
          <div class="seolu_box">
            <div class="loti">
              <span class="locationtitle">전시회</span>
              <span class="plus" @click="car1push(4)">더보기></span>
            </div>

            <Carousel :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in list3" :key="slide">
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
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
          <div class="seolu_box">
            <div class="loti">
              <span class="locationtitle">연극</span>
              <span class="plus" @click="car1push(5)">더보기></span>
            </div>
            <Carousel :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in list4" :key="slide">
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
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  async created() {
    const url1 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=mK%2Fn1wrd%2BkpKfgOKIsZlMX6gtKHuhcb%2BXQWk5%2FIlqDIC6zz6nuP%2FS4xInk0L98YpxvscEIFY3pm%2BCFuYLPcMJQ%3D%3D&pageNo=1&numOfRows=100&MobileApp=AppTest&MobileOS=ETC&arrange=P&cat1=A02&contentTypeId=15&&cat2=A0207&listYN=Y`;
    const headers1 = { "Content-type": "application/json" };

    const response1 = await axios.get(url1, { headers1 });
    console.log(response1.data.response.body.items.item);
    this.list = response1.data.response.body.items.item;

    const url2 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=mK%2Fn1wrd%2BkpKfgOKIsZlMX6gtKHuhcb%2BXQWk5%2FIlqDIC6zz6nuP%2FS4xInk0L98YpxvscEIFY3pm%2BCFuYLPcMJQ%3D%3D&pageNo=1&numOfRows=100&MobileApp=AppTest&MobileOS=ETC&arrange=P&cat1=A02&contentTypeId=15&cat2=A0208&cat3=A02080100&listYN=Y`;
    const headers2 = { "Content-type": "application/json" };
    const response2 = await axios.get(url2, { headers2 });
    console.log(response2.data.response.body.items.item);
    this.list1 = response2.data.response.body.items.item;

    const url3 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=mK%2Fn1wrd%2BkpKfgOKIsZlMX6gtKHuhcb%2BXQWk5%2FIlqDIC6zz6nuP%2FS4xInk0L98YpxvscEIFY3pm%2BCFuYLPcMJQ%3D%3D&pageNo=1&numOfRows=100&MobileApp=AppTest&MobileOS=ETC&arrange=P&cat1=A02&contentTypeId=15&cat2=A0208&cat3=A02080600&listYN=Y`;
    const headers3 = { "Content-type": "application/json" };
    const response3 = await axios.get(url3, { headers3 });
    console.log(response3.data.response.body.items.item);
    this.list2 = response3.data.response.body.items.item;

    const url4 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=mK%2Fn1wrd%2BkpKfgOKIsZlMX6gtKHuhcb%2BXQWk5%2FIlqDIC6zz6nuP%2FS4xInk0L98YpxvscEIFY3pm%2BCFuYLPcMJQ%3D%3D&pageNo=1&numOfRows=100&MobileApp=AppTest&MobileOS=ETC&arrange=P&cat1=A02&contentTypeId=15&cat2=A0208&cat3=A02080500&listYN=Y`;
    const headers4 = { "Content-type": "application/json" };
    const response4 = await axios.get(url4, { headers4 });
    console.log(response4.data.response.body.items.item);
    this.list3 = response4.data.response.body.items.item;

    const url5 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=mK%2Fn1wrd%2BkpKfgOKIsZlMX6gtKHuhcb%2BXQWk5%2FIlqDIC6zz6nuP%2FS4xInk0L98YpxvscEIFY3pm%2BCFuYLPcMJQ%3D%3D&pageNo=1&numOfRows=100&MobileApp=AppTest&MobileOS=ETC&arrange=P&cat1=A02&contentTypeId=15&cat2=A0208&cat3=A02080200&listYN=Y`;
    const headers5 = { "Content-type": "application/json" };
    const response5 = await axios.get(url5, { headers5 });
    console.log(response5.data.response.body.items.item);
    this.list4 = response5.data.response.body.items.item;
    this.loading = false;
  },
  methods: {
    car1push(num) {
      this.$router.push({
        path: "/car1",
        query: { type: num },
      });
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
      loading: true,
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