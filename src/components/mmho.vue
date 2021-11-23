<template>
  <div>
    <div class="wrap1">
      <ul class="likelist">
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
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {
    async refresh() {
      const url = `/REST/mypage/mygoodtd?type=32`;
      const headers = { "Content-type": "application/json", token: this.token };

      const response = await axios.get(url, { headers: headers });
      console.log(response);
      this.list = response.data.td;
      console.log(this.list);
    },
  },
};
</script>

<style scoped>
.img {
  width: 100%;
}
.wrap1 {
  padding: 10px;
}
.liketext {
  padding: 10px;
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