<template>
  <div class="app">
    <div
      class="bg1"
      :style="{
        backgroundImage: 'url(' + this.tdsave1.total[0][0].firstimage + ')',
      }"
    >
      <div class="bg1_in">
        <h2 class="title">{{ list.title }}</h2>
      </div>
    </div>
    <div class="bg2">
      <div class="bg2_in">
        <div class="dech1">
          <span class="sub">작성자 : {{ this.list.member.nicname }}</span>
        </div>
        <span class="sub"></span>
        <div class="dech2"></div>
      </div>
    </div>

    <div class="wrap">
      <div class="userdetail">
        <img
          :src="`/REST/mypage/select_image?id=${this.list.member.id}`"
          class="myimg"
        />
        <p>{{ this.list.member.nicname }}</p>
      </div>
      <div class="travel_wrap">
        <div class="tw1">
          <img src="../assets/icon_cos_schedule1.gif" />
          <p>일정</p>
          <span
            >{{ this.tdsave1.date[0] }} ~
            {{ this.tdsave1.date[this.tdsave1.date.length - 1] }}</span
          >
        </div>
        <div class="tw2">
          <img src="../assets/icon_cos_theme1.gif" />
          <p>여행지</p>
          <span>{{ this.tdsave1.total[0][0].city.name }}</span>
        </div>
      </div>
      <div class="content">
        <div v-if="this.choice1 !== undefined">
          <p class="cp1">1일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice1" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div v-if="this.choice2 !== undefined">
          <p class="cp1">2일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice2" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div v-if="this.choice3 !== undefined">
          <p class="cp1">3일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice3" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div v-if="this.choice4 !== undefined">
          <p class="cp1">4일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice4" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div v-if="this.choice5 !== undefined">
          <p class="cp1">5일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice5" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div v-if="this.choice6 !== undefined">
          <p class="cp1">6일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice6" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div v-if="this.choice7 !== undefined">
          <p class="cp1">7일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice7" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div v-if="this.choice8 !== undefined">
          <p class="cp1">8일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice8" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div v-if="this.choice9 !== undefined">
          <p class="cp1">9일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice9" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div v-if="this.choice10 !== undefined">
          <p class="cp1">10일차</p>
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="(slide, index) in choice10" :key="index">
              <div class="sli1">
                <p class="cp2">{{ index + 1 }}</p>
                <div class="img_Box">
                  <p class="img_text">{{ slide.title }}</p>
                  <img :src="slide.firstimage" class="img" />
                </div>
              </div>
            </Slide>

            <template #addons> </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import axios from "axios";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  async created() {
    await this.refresh();
  },
  data() {
    return {
      settings: {
        itemsToShow: 5,
        snapAlign: "left",
      },
      no: this.$route.query.no,
      token: sessionStorage.getItem("TOKEN"),
      tdsave1: [],
      tdsave2: [],
      list: [],
      choice1: [],
      choice2: [],
      choice3: [],
      choice4: [],
      choice5: [],
      choice6: [],
      choice7: [],
      choice8: [],
      choice9: [],
      choice10: [],
    };
  },
  methods: {
    async refresh() {
      const url = `/REST/board/selectone?no=${this.no}&category=TDsave`;

      if (this.token !== null) {
        var headers = {
          "Content-type": "application/json",
          token: this.token,
        };
      } else {
        headers = {
          "Content-type": "application/json",
        };
      }
      const response = await axios.get(url, { headers });
      console.log(response);
      console.log(JSON.parse(response.data.tdsave.td));
      this.list = response.data.tdsave;
      console.log(this.list);
      this.tdsave1 = JSON.parse(response.data.tdsave.td);
      this.tdsave2 = this.tdsave1.total;
      this.choice1 = this.tdsave1.total[0];
      this.choice2 = this.tdsave1.total[1];
      this.choice3 = this.tdsave1.total[2];
      this.choice4 = this.tdsave1.total[3];
      this.choice5 = this.tdsave1.total[4];
      this.choice6 = this.tdsave1.total[5];
      this.choice7 = this.tdsave1.total[6];
      this.choice8 = this.tdsave1.total[7];
      this.choice9 = this.tdsave1.total[8];
      this.choice10 = this.tdsave1.total[9];
      console.log(this.choice1);
      console.log(this.choice2);
      console.log(this.choice3);
      console.log(this.choice4);
      console.log(this.choice5);
      console.log(this.choice6);
      console.log(this.choice7);
      console.log(this.choice8);
      console.log(this.choice9);
      console.log(this.choice10);
    },
  },
};
</script>

<style scoped>
.cp1 {
  margin-top: 10px;
  padding-top: 10px;
  font-weight: bold;
  color: #2752be;
}
.cp2 {
  background: white;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 50%;
  font-weight: bold;
}
.img {
  width: 100%;
  height: 100%;
}
.img_Box {
  width: 180px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.img_text {
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 1px black;
}
.wrapsl {
  height: 150px;
  width: 300px;
  background: #af1313;
}
.content {
  background: rgb(240, 240, 240);
  height: auto;
  margin-top: 40px;
  text-align: center;
}
.userdetail {
  text-align: center;
  margin-top: 25px;
}
.userdetail p {
  font-weight: 500;
  font-size: 1.7rem;
}
.myimg {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.btn_replybox {
  text-align: right;
}
.cancel {
  cursor: pointer;
  border: none;
  background: none;
}
.confirm {
  cursor: pointer;
  border: none;
  background: none;
  padding: 3px;
}
.replychange1 {
  width: 100%;
  height: 85px;
  background: white;
  outline: 0;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  border: none;
  font-size: 15px;
}
.replychange {
  width: 100%;
  height: 85px;

  outline: 0;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  border: 1px solid rgb(182, 182, 182);
}
.likebox {
  text-align: right;
  padding-right: 20px;
}
.likeicon {
  width: 30px;
  cursor: pointer;
}
.nonereply {
  text-align: center;
  padding-top: 30px;
  height: 30px;
}
.rewriter {
  font-weight: bold;
}
.re_change {
  background: none;
  border: none;
  cursor: pointer;
}
.re_delete {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 3px;
}
.reply_in2 {
  width: 10%;
  display: inline-block;
  height: auto;
  text-align: right;
}
.reply_in {
  width: 90%;
  display: inline-block;
  height: auto;
  float: left;
}
.prev1_1 {
  cursor: pointer;
}
.next1_1 {
  cursor: pointer;
}
.list {
  cursor: pointer;
}
.title {
  color: white;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 3px;
  z-index: 99;
}
.nepr button {
  margin: 10px 0 0 5px;
  padding: 2px 5px;
  border: 1px solid #ccc;
  background: white;
  font-size: 14px;
}
.nepr {
  text-align: right;
}
.dech1 {
  width: 20%;
  float: left;
}
.dech2 {
  width: 80%;
  text-align: right;
  float: left;
}
.delete {
  vertical-align: middle;
  margin-left: 15px;
  text-decoration: none;
  vertical-align: -13px;
  color: black;
}
.change {
  vertical-align: middle;
  margin-left: 10px;
  text-decoration: none;
  vertical-align: -13px;
  color: black;
}
.reply_content2 {
  min-height: 120px;
  clear: both;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
  margin-left: 10px;
}
.regdate {
  float: right;
  margin-right: 10px;
  font-weight: bold;
}
.reply_content {
  height: 40px;
  margin-top: 10px;
}

.replyul {
  list-style: none;
}
.replyul li {
  min-height: 150px;
}
.replybtn {
  width: 10%;
  padding: 40px 0px;
  border: none;
  box-sizing: border-box;
  outline: 0;
  vertical-align: 44px;
  cursor: pointer;
  background: #2752be;
  color: white;
}
.replytext {
  width: 90%;
  height: 98px;
  margin-top: 30px;
  outline: 0;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  border: 1px solid rgb(182, 182, 182);
}
.replytext1 {
  width: 90%;
  height: 98px;
  margin-top: 30px;
  outline: 0;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  border: 1px solid rgb(182, 182, 182);
  text-align: center;
  padding-top: 40px;
  padding-left: 118px;
}
.hr {
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
  margin-bottom: 10px;
}
.reply_box {
  width: 1100px;
  margin: 0 auto;
}
.sub {
  vertical-align: -13px;
}
.sub1 {
  vertical-align: -13px;
  margin-left: 20px;
}
.bg1_in {
  width: 1100px;
  margin: 0 auto;
  padding-top: 70px;
}
.bg2_in {
  width: 1100px;
  margin: 0 auto;
}
.black_box {
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  background: black;
  opacity: 0.2;
  z-index: 98;
}
.bg1 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 20%;
  height: 200px;
}
.bg2 {
  background: rgb(128, 182, 245);
  height: 50px;
  color: white;
}
.ck-content {
  width: 952px;
  margin: 40px auto;
  min-height: 400px;
}
.wrap {
  width: 1080px;
  margin: 0 auto;
}
.ck-content .text-tiny {
  font-size: 0.7em;
}

.ck-content .text-small {
  font-size: 0.85em;
}

.ck-content .text-big {
  font-size: 1.4em;
}

.ck-content .text-huge {
  font-size: 1.8em;
}
.app {
  height: auto;
  margin-bottom: 50px;
}
.likeicon2 {
  width: 20px;
  cursor: pointer;
  float: left;
  margin-right: 2px;
}
.report {
  float: left;
  border: none;
  background: none;
  cursor: pointer;
}
.report:hover {
  opacity: 0.6;
}
.delbox {
  width: 100%;
  height: 100px;
  padding: 10px;
}
.delbox p {
  margin-bottom: 10px;
}
.hr4 {
  margin: 20px 0px 10px 0px;
  width: 95%;
  border-bottom: 1px solid #ddd;
}
.no_btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  border: 1px solid #ddd;
  margin-right: 5px;
  transition: all 1s;
}
.no_btn:hover {
  background: rgb(238, 238, 238);
}
.del_btn {
  padding: 10px 20px;
  background: #d82424;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 1s;
}

.del_btn:hover {
  background: #af1313;
}
.delbox2 {
  width: 100%;
  height: 450px;
  padding: 20px;
  box-sizing: border-box;
}
.dlbti {
  text-align: center;
  margin: 20px 0px;
}
.dlbti2 {
  width: 100%;
}
.rp1 {
  margin: 20px;
}
.dlbti p {
  font-size: 20px;
  font-weight: bold;
}
.area {
  width: 90%;
  margin: 0px 20px;
  height: 100px;
  resize: none;
  outline: none;
}
.travel_wrap {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  height: 130px;
  padding: 40px 150px;
}
.tw1 {
  width: 50%;
  float: left;
  text-align: center;
}
.tw2 {
  width: 50%;
  float: left;
  text-align: center;
}
</style>