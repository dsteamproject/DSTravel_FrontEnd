<template>
  <div>
    <div class="wrap1" @mouseover="wrapover">
      <ul
        class="likelist"
        infinite-scroll-distance="0"
        v-infinite-scroll="load"
        style="overflow: auto"
      >
        <li v-for="item in list" :key="item">
          <div class="img">
            <img :src="item.firstimage" class="img_in" />
          </div>
          <div :class="liketext">
            <p class="title">{{ item.title }}</p>
            <p class="addr">{{ item.addr }}</p>
          </div>
          <div class="btn_box">
            <button @click="handlemapdialog(item)" class="map">위치보기</button>
          </div>
          <span class="heart1">♥</span>
        </li>
      </ul>
    </div>
    <el-dialog
      v-model="dialogVisible1"
      top="10vh"
      width="50%"
      :before-close="handleClose"
      append-to-body
      class="sasa"
    >
      <div class="mapdia">
        <mapdialog v-bind:childVaule="this.chvalue" :key="abc" />
        <div style="clear: both"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import mapdialog from "./mapdialog.vue";
import axios from "axios";
export default {
  components: { mapdialog },
  data() {
    return {
      abc: 0,
      liketext: "liketext",
      img: "img",
      dialogVisible1: false,
      imgsrc: "`../assets/seoul${item}.jpg`",
      token: sessionStorage.getItem("TOKEN"),
      list: [],
      list1: [],
      page: 1,
      total: 0,
      size: 6,
      chvalue: [],
    };
  },
  async created() {
      this.$emit("searchon", true);
    await this.refresh();
  },
  methods: {
    handlemapdialog(item) {
      this.abc += 1;
      console.log(item);
      this.chvalue = item;
      this.dialogVisible1 = true;
      this.img = "img";
      this.liketext = "liketext";
    },
    async load() {
      const url = `/REST/mypage/mygoodtd?type=12&page=${this.page}&size=100`;
      const headers = { "Content-type": "application/json", token: this.token };

      const response = await axios.get(url, { headers: headers });
      console.log(response);
      console.log(response.data.td);
      this.total = response.data.total;
      for (var i = 0; i < response.data.td.length; i++) {
        this.list1.push(response.data.td[i]);
      }
      console.log(this.list);
      this.page++;
    },
    async refresh() {
      const url = `/REST/mypage/mygoodtd?type=32&page=${this.page}&size=6`;
      const headers = { "Content-type": "application/json", token: this.token };

      const response = await axios.get(url, { headers: headers });
      console.log(response);
      this.list = response.data.td;
      this.total = response.data.total;
      console.log(this.list);
    },
  },
};
</script>
<style>
.mapdia .vue-map-container {
  height: 100% !important;
}
</style>
<style scoped>
.img {
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  overflow: hidden;
}
.img_in {
  height: 100%;
  width: 100%;
  transition: all 1s;
}
.wrap1 {
  padding: 10px;
}
.liketext {
  padding: 10px;
  height: 25%;
  box-sizing: border-box;
  transition: all 1s;
}
.likelist {
  overflow: auto;
  height: 500px;
}
.likelist li {
  position: relative;
  width: 30%;
  height: 250px;
  overflow: hidden;
  border-top: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  border-bottom: 3px solid #40be70;
  border-left: 1px solid #f0f0f0;
  float: left;
  list-style: none;
  margin: 0px 10px;
  margin-bottom: 30px;
  box-shadow: 1px 5px 9px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

button {
  clear: both;
}
.heart1 {
  position: absolute;
  top: 3%;
  right: 1%;
  font-size: 25px;
  text-shadow: -1px -1px 0 rgb(255, 255, 255), 1px -1px 0 rgb(255, 255, 255),
    -1px 1px 0 rgb(255, 255, 255), 1px 1px 0 rgb(255, 255, 255);

  color: red;
}
.heart2 {
  position: absolute;
  top: 3%;
  right: 1%;
  font-size: 25px;
  text-shadow: -1px -1px 0 rgb(255, 255, 255), 1px -1px 0 rgb(255, 255, 255),
    -1px 1px 0 rgb(255, 255, 255), 1px 1px 0 rgb(255, 255, 255);

  color: red;
}
.title {
  font-size: 15px;
  font-weight: bold;
}
.addr {
  font-size: 12px;
}
.price {
  font-size: 13px;
  margin-top: 3px;
  margin-bottom: 10px;
}

.mapdia {
  height: 500px !important;
}
.likelist li:hover .img_in {
  transform: scale(1.5, 1.5);
}

.map {
  margin-top: 5px;
  border: none;
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 5px;
  background: #2752be;
  color: white;
  outline: none;
  margin-bottom: 5px;
}
.btn_box {
  width: 100%;
  text-align: right;
}
</style>