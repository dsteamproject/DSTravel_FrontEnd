<template>
  <div>
    <div class="wrap">
      <div class="top">
        <router-link :to="`/vs/vsplay`" class="rlink"
          >여행지 월드컵</router-link
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    this.$emit("searchon", true);
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

.top {
  margin-top: 20px;
  text-align: center;
}
.wrap {
  width: 100%;
  margin: 0 auto;
}
</style>