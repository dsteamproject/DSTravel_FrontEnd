<template>
  <div class="wrap">
    <div class="left1">
      <h3>부산</h3>
      <span class="sub_area">BUSAN</span><br />
      <span class="day">10day</span><br />

      <a href="#" class="full_day">2021.12.01 - 2021.12.10</a>

      <h5>선택목록</h5>

      <div v-if="check === 1">
        <p class="text1">인원</p>
        <p class="text2">성인</p>
        <span class="text3">만 13세 이상</span><br />
        <el-input-number v-model="num" :step="1" size="mini" />

        <p class="text2">어린이</p>
        <span class="text3">만 2~12세</span><br />
        <el-input-number v-model="num1" :step="1" size="mini" />

        <p class="text2">유아</p>
        <span class="text3">만 2세 미만</span><br />
        <el-input-number v-model="num2" :step="1" size="mini" />
      </div>

      <br />
      <button class="btn_last">검색</button>
    </div>
    <div class="center1">지도 들어감</div>
    <div class="right1">123</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: 1,
      num: 0,
      num2: 0,
      num1: 0,
    };
  },
  methods: {},
};
</script>

<style scoped>
.text1 {
  font-size: 19px;
  margin-bottom: 10px;
}
.text2 {
  font-weight: bold;
}
.text3 {
  font-size: 13px;
}
h5 {
  display: block;
  background: #98dde3;
  margin: 10px;
  padding: 10px;
  color: white;
}
.full_day {
  font-size: 1.2rem;
  color: #696969;
  text-decoration: none;
  margin-bottom: 30px;
  display: block;
}
.day {
  font-size: 1.5rem;
  font-weight: 700;
  display: block;
  margin-top: 10px;
}
.sub_area {
  font-size: 0.8rem;

  color: #999;
}
h3 {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0px;
  margin-top: 17px;
  margin-bottom: 3px;
}
p {
  font-size: 20px;
}
.wrap {
  width: 100%;
}
.left1 {
  width: 20%;
  height: 900px;
  background: #ffffff;
  text-align: center;
  float: left;
  box-sizing: border-box;
}
.center1 {
  width: 60%;
  height: 900px;
  background: #eee;
  float: left;
}
.right1 {
  width: 20%;
  height: 900px;
  background: red;
  float: left;
  box-sizing: border-box;
}
.btn_last {
  padding: 10px 140px;
  outline: none;
  border: none;
  background: #ff1744;
  color: white;
  cursor: pointer;
}
</style>