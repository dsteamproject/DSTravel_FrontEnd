<template>
  <div>
    <div class="wrap">
      <div class="top">
        <input
          type="text"
          class="searchtxt"
          placeholder="검색어를 입력해주세요"
        /><input type="button" value="검색" class="searchbtn" />
      </div>
      <ul class="select">
        <li @click="push">
          <img src="../assets/seoul1.jpg" class="s1img" /><img
            src="../assets/seoul2.jpg"
            class="s2img"
          />
          <div>서울여행지 월드컵</div>
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
export default {
  data() {
    return {};
  },
  methods: {
    push() {
      this.$router.push({ path: "/vsseoul" });
    },
  },
};
</script>

<style scoped>
.s1img {
  width: 50%;
  height: 150px;
}
.s2img {
  width: 50%;
  height: 150px;
}
.select {
  list-style: none;
}

.select li {
  float: left;
  width: 23%;
  height: 200px;
  margin: 12px;
  margin-bottom: 50px;
  border: 1px solid #eee;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.top {
  text-align: center;
}
.wrap {
  width: 1320px;
  margin: 0 auto;
}
.searchtxt {
  width: 60%;
}
.searchbtn {
}
</style>