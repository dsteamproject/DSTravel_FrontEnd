<template>
  <div>
    <ul class="select">
      <li>
        <div class="imgbox">
          <img src="../assets/seoul1.jpg" class="s1img" /><img
            src="../assets/seoul2.jpg"
            class="s2img"
          />
          <p class="area">서울</p>
        </div>
        <div class="img_btnbox">
          <div class="gang">
            <p @click="push(64)" v-if="this.seoulcnt > 128">64강</p>
            <p @click="push(32)" v-if="this.seoulcnt > 64">32강</p>
            <p @click="push(16)" v-if="this.seoulcnt > 32">16강</p>
          </div>
        </div>
      </li>
      <li class="center">
        <div class="imgbox">
          <img
            src="http://tong.visitkorea.or.kr/cms/resource/70/2661770_image2_1.jpg"
            class="s1img"
          /><img
            src="http://tong.visitkorea.or.kr/cms/resource/05/2364205_image2_1.jpg"
            class="s2img"
          />
          <p class="area">대전</p>
        </div>
        <div class="img_btnbox">
          <div class="gang">
            <p @click="push1(64)" v-if="this.daejuncnt > 128">64강</p>
            <p @click="push1(32)" v-if="this.daejuncnt > 64">32강</p>
            <p @click="push1(16)" v-if="this.daejuncnt > 32">16강</p>
          </div>
        </div>
      </li>
      <li>
        <div class="imgbox">
          <img
            src="http://tong.visitkorea.or.kr/cms/resource/12/1830012_image2_1.jpg"
            class="s1img"
          /><img
            src="http://tong.visitkorea.or.kr/cms/resource/10/2671410_image2_1.jpg"
            class="s2img"
          />
          <p class="area">대구</p>
        </div>
        <div class="img_btnbox">
          <div class="gang">
            <p @click="push2(64)" v-if="this.daegucnt > 128">64강</p>
            <p @click="push2(32)" v-if="this.daegucnt > 64">32강</p>
            <p @click="push2(16)" v-if="this.daegucnt > 32">16강</p>
          </div>
        </div>
      </li>
      <li>
        <div class="imgbox">
          <img
            src="http://tong.visitkorea.or.kr/cms/resource/84/2612484_image2_1.jpg"
            class="s1img"
          /><img
            src="http://tong.visitkorea.or.kr/cms/resource/75/2661675_image2_1.jpg"
            class="s2img"
          />
          <p class="area">부산</p>
        </div>
        <div class="img_btnbox">
          <div class="gang">
            <p @click="push3(64)" v-if="this.busancnt > 128">64강</p>
            <p @click="push3(32)" v-if="this.busancnt > 64">32강</p>
            <p @click="push3(16)" v-if="this.busancnt > 32">16강</p>
          </div>
        </div>
      </li>
      <li class="center">
        <div class="imgbox">
          <img
            src="http://tong.visitkorea.or.kr/cms/resource/32/2654832_image2_1.jpg"
            class="s1img"
          /><img
            src="http://tong.visitkorea.or.kr/cms/resource/15/2003415_image2_1.jpg"
            class="s2img"
          />
          <p class="area">인천</p>
        </div>
        <div class="img_btnbox">
          <div class="gang">
            <p @click="push4(64)" v-if="this.inchuncnt > 128">64강</p>
            <p @click="push4(32)" v-if="this.inchuncnt > 64">32강</p>
            <p @click="push4(16)" v-if="this.inchuncnt > 32">16강</p>
          </div>
        </div>
      </li>
      <li>
        <div class="imgbox">
          <img
            src="http://tong.visitkorea.or.kr/cms/resource/08/566608_image2_1.jpg"
            class="s1img"
          /><img
            src="http://tong.visitkorea.or.kr/cms/resource/55/2364355_image2_1.jpg"
            class="s2img"
          />
          <p class="area">광주</p>
        </div>
        <div class="img_btnbox">
          <div class="gang">
            <p @click="push5(64)" v-if="this.gangjucnt > 128">64강</p>
            <p @click="push5(32)" v-if="this.gangjucnt > 64">32강</p>
            <p @click="push5(16)" v-if="this.gangjucnt > 32">16강</p>
          </div>
        </div>
      </li>
      <li>
        <div class="imgbox">
          <img
            src="http://tong.visitkorea.or.kr/cms/resource/38/2654838_image2_1.jpg"
            class="s1img"
          /><img
            src="http://tong.visitkorea.or.kr/cms/resource/95/2726695_image2_1.jpg"
            class="s2img"
          />
          <p class="area">제주도</p>
        </div>
        <div class="img_btnbox">
          <div class="gang">
            <p @click="push6(64)" v-if="this.jejucnt > 128">64강</p>
            <p @click="push6(32)" v-if="this.jejucnt > 64">32강</p>
            <p @click="push6(16)" v-if="this.jejucnt > 32">16강</p>
          </div>
        </div>
      </li>
      <li class="center">
        <div class="imgbox">
          <img
            src="http://tong.visitkorea.or.kr/cms/resource/94/2648694_image2_1.jpg"
            class="s1img"
          /><img
            src="http://tong.visitkorea.or.kr/cms/resource/84/2617084_image2_1.jpg"
            class="s2img"
          />
          <p class="area">울산</p>
        </div>
        <div class="img_btnbox">
          <div class="gang">
            <p @click="push7(64)" v-if="this.ulsancnt > 128">64강</p>
            <p @click="push7(32)" v-if="this.ulsancnt > 64">32강</p>
            <p @click="push7(16)" v-if="this.ulsancnt > 32">16강</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
      this.$emit("searchon", true);
    // 서울
    const url1 = `/REST/worldcup/home?city=1&type=12`;
    const headers1 = { "Content-type": "application/json" };

    const response1 = await axios.get(url1, { headers: headers1 });
    console.log(response1);
    this.seoulcnt = response1.data.listCnt;
    // 부산
    const url2 = `/REST/worldcup/home?city=6&type=12`;
    const headers2 = { "Content-type": "application/json" };

    const response2 = await axios.get(url2, { headers: headers2 });
    console.log(response2);
    this.busancnt = response2.data.listCnt;
    // 대전
    const url3 = `/REST/worldcup/home?city=3&type=12`;
    const headers3 = { "Content-type": "application/json" };

    const response3 = await axios.get(url3, { headers: headers3 });
    console.log(response3);
    this.daejuncnt = response3.data.listCnt;

    // 대구
    const url4 = `/REST/worldcup/home?city=4&type=12`;
    const headers4 = { "Content-type": "application/json" };

    const response4 = await axios.get(url4, { headers: headers4 });
    console.log(response4);
    this.daegucnt = response4.data.listCnt;

    // 인천
    const url5 = `/REST/worldcup/home?city=2&type=12`;
    const headers5 = { "Content-type": "application/json" };

    const response5 = await axios.get(url5, { headers: headers5 });
    console.log(response5);
    this.inchuncnt = response5.data.listCnt;
    //광주
    const url6 = `/REST/worldcup/home?city=5&type=12`;
    const headers6 = { "Content-type": "application/json" };

    const response6 = await axios.get(url6, { headers: headers6 });
    console.log(response6);
    this.gangjucnt = response6.data.listCnt;
    //제주도
    const url7 = `/REST/worldcup/home?city=39&type=12`;
    const headers7 = { "Content-type": "application/json" };

    const response7 = await axios.get(url7, { headers: headers7 });
    console.log(response7);
    this.jejucnt = response7.data.listCnt;

    //울산
    const url8 = `/REST/worldcup/home?city=7&type=12`;
    const headers8 = { "Content-type": "application/json" };

    const response8 = await axios.get(url8, { headers: headers8 });
    console.log(response8);
    this.ulsancnt = response8.data.listCnt;
  },
  data() {
    return {
      seoulcnt: "",
      busancnt: "",
      daejuncnt: "",
      daegucnt: "",
      inchuncnt: "",
      gangjucnt: "",
      jejucnt: "",
      ulsancnt: "",
    };
  },
  methods: {
    push(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 1 } });
    },
    push1(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 3 } });
    },
    push2(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 4 } });
    },
    push3(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 6 } });
    },
    push4(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 2 } });
    },
    push5(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 5 } });
    },
    push6(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 39 } });
    },
    push7(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 7 } });
    },
  },
};
</script>

<style scoped>
.rlink {
  font-size: 18px;
  text-decoration: none;
  color: black;
  margin: 0px 10px;
  font-weight: bold;
}
.rlink:hover {
  color: royalblue;
}
.center {
  margin: 0px 1%;
}
.area {
  color: white;
  position: absolute;
  bottom: 20px;
  text-align: center;
  left: 44%;
  font-size: 28px;
  font-weight: bold;
}
.gang p {
  padding-bottom: 10px;
}
.gang {
  font-size: 30px;
  padding-top: 11vh;
}
.imgbox {
  height: 100%;
}
.img_btnbox {
  position: absolute;
  height: 38.5vh;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;

  top: 0;
  opacity: 0;
  transition: 0.5s all;
}
.img_btnbox p {
  color: white;
  cursor: pointer;
}
.img_btnbox p:hover {
  text-decoration: 1px solid underline;
}
.select li:hover .img_btnbox {
  opacity: 1;
}
.s1img {
  width: 50%;
  height: 100%;
  filter: brightness(90%);
}
.s2img {
  width: 50%;
  height: 100%;
  filter: brightness(90%);
}
.select {
  list-style: none;
  margin-top: 1 0px;
  padding: 20px;
}

.select li {
  position: relative;
  box-sizing: border-box;
  float: left;
  width: 32.6%;
  height: 37.5vh;
  overflow: hidden;

  margin-bottom: 50px;
  border: 1px solid #eee;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);

  text-align: center;
}

.top {
  margin-top: 20px;
  text-align: center;
}
.wrap {
  width: 100%;
  margin: 0 auto;
}
.searchtxt {
  width: 50%;
}
.searchbtn {
}
</style>