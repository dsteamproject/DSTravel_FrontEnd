<template>
  <div>
    <div class="wrap1">
      <ul
        class="likelist"
        infinite-scroll-distance="0"
        v-infinite-scroll="load"
        style="overflow: auto"
      >
        <li v-for="item in list" :key="item">
          <img :src="item.firstimage" class="img" />
          <div class="liketext">
            <p>{{ item.title }}</p>
            <p>{{ item.addr }}</p>
            <p>{{ item.tel }}</p>
            <p>{{ item.price }}만원</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imgsrc: "`../assets/seoul${item}.jpg`",
      token: sessionStorage.getItem("TOKEN"),
      list: [],
      list1: [],
      page: 1,
      total: 0,
      size: 6,
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {
    async load() {
      const url = `/REST/mypage/mygoodtd?type=39&page=${this.page}&size=3`;
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
      const url = `/REST/mypage/mygoodtd?type=39&page=${this.page}&size=6`;
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

<style scoped>
.img {
  width: 100%;
  height: 70%;
  box-sizing: border-box;
}
.wrap1 {
  padding: 10px;
}
.liketext {
  padding: 10px;
  height: 30%;
  box-sizing: border-box;
}
.likelist {
  overflow: auto;
  height: 500px;
}
.likelist li {
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
}

button {
  clear: both;
}
</style>