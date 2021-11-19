<template>
  <div>
    <div class="wrap4_1">
      <div class="seolu_box">
        <div class="loti"><span class="locationtitle">서울</span></div>
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in list" :key="slide">
            <div class="carousel__item1">
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
                <span class="cacotitle">{{ slide.title }}</span>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>

      <div class="seolu_box">
        <div class="loti"><span class="locationtitle">서울</span></div>
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in list" :key="slide">
            <div class="carousel__item1">
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
                <span class="cacotitle">{{ slide.title }}</span>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <div class="seolu_box">
          <div class="loti"><span class="locationtitle">서울</span></div>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in list" :key="slide">
              <div class="carousel__item1">
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
                  <span class="cacotitle">{{ slide.title }}</span>
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
    const url1 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?serviceKey=FPCnbDX7v%2Fdl0UkUw9p5jW%2Bt4AgPdbPVS7y9uC29%2F7E3S4FZTJtiKORsRbMZPhjR6IhNNeHvdchVtbxY6rfUMg%3D%3D&numOfRows=10&arrange=P&pageNo=${this.page}&MobileOS=ETC&MobileApp=AppTest&arrange=A&listYN=Y&eventStartDate=20211118&areaCode=1`;
    const headers1 = { "Content-type": "application/json" };

    const response1 = await axios.get(url1, { headers1 });
    console.log(response1.data.response.body.items.item);
    this.list = response1.data.response.body.items.item;
  },

  data() {
    return {
      settings: {
        itemsToShow: 4,
        snapAlign: "left",
      },
      list: [],
      page: 1,
    };
  },
});
</script>

<style scoped>
@import "../assets/css/car.css";
</style>