<template>
  <div>
    <div class="wrap">
      <div class="top"></div>
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
              <p @click="push(64)" v-if="this.listcnt > 128">64강</p>
              <p @click="push(32)" v-if="this.listcnt > 64">32강</p>
              <p @click="push(16)" v-if="this.listcnt > 32">16강</p>
            </div>
          </div>
        </li>
        <li>대전</li>
        <li>대구</li>
        <li>부산</li>
        <li>인천</li>
        <li>광주</li>
        <li>제주도</li>
        <li>경주</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    const url = `/REST/worldcup/home?city=1&type=12`;
    const headers = { "Content-type": "application/json" };

    const response = await axios.get(url, { headers });
    console.log(response);
    this.listcnt = response.data.listCnt;
  },
  data() {
    return {
      listcnt: "",
    };
  },
  methods: {
    push(val) {
      this.$router.push({ path: "/vscontent", query: { cnt: val, city: 1 } });
    },
  },
};
</script>

<style scoped>
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
  height: 38.5vh;
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
}

.select li {
  position: relative;
  box-sizing: border-box;
  float: left;
  width: 30%;
  height: 38.5vh;
  margin: 12px;
  margin-bottom: 50px;
  border: 1px solid #eee;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);

  text-align: center;
}

.top {
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