<template>
  <div class="wrap">
    <div class="main_img">
      <div class="input">
        <h1>어디로 떠나세요?</h1>
        <input type="text" class="search" placeholder="위치" />
        <input type="text" class="search" placeholder="날짜" />
        <input type="text" class="search" placeholder="인원" />
        <input type="button" value="검색" class="search_btn" />
      </div>
    </div>
    <div class="content">
      <h3>인기 여행지</h3>
      <p class="sub">POPULAR DESTINATIONS</p>
      <ul class="travel">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.wrap {
}
.main_img {
  height: 80vh;
  width: 100%;
  background-image: url(../assets/main.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.input {
  text-align: center;
}
h1 {
  padding-top: 250px;
  padding-bottom: 50px;
  color: white;
}
.search {
  outline: none;
  border: none;

  height: 50px;
  padding: 0px 20px;
}
.search:nth-child(2) {
  border-right: 1px solid #ccc;
  border-radius: 10px 0px 0px 10px;
}
.search:nth-child(3) {
  border-right: 1px solid #ccc;
}
.search_btn {
  padding: 14.5px 30px;
  padding-bottom: 17.5px;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: rgb(86, 233, 66);
  border-radius: 0px 10px 10px 0px;
  color: white;
  cursor: pointer;
}
.content {
  text-align: center;
  padding-top: 50px;
}
h3 {
  font-size: 28px;
}
.sub {
  font-size: 15px;
}
.travel li {
  width: 429px;
  height: 460px;
  float: left;
  background: #ccc;
  margin-right: 5px;
}
</style>