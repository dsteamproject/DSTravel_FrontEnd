<template>
  <div>
    <div class="wrap">
      <div class="left1">
        <h4>코로나19</h4>
        <input type="checkbox" /> <label>안전조치 이행시설</label>
        <div class="hr"></div>
        <h4>가격</h4>
        <div class="slider-demo-block">
          <el-slider v-model="value" range show-stops :min="100" :max="400">
          </el-slider>
        </div>
        {{ this.value }}
        <div class="hr"></div>
        <h4>스타일</h4>
        <input type="checkbox" /> <label>가성비</label><br />
        <input type="checkbox" /> <label>중간급</label><br />
        <input type="checkbox" /> <label>럭셔리</label><br />
        <input type="checkbox" /> <label>가족친화형</label>
        <div class="hr"></div>
        <h4>호텔등급</h4>
        <input type="checkbox" /> <label>5성급</label><br />
        <input type="checkbox" /> <label>4성급</label><br />
        <input type="checkbox" /> <label>3성급</label><br />
        <input type="checkbox" /> <label>2성급</label><br />
        <div class="hr"></div>
      </div>
      <div class="right1">
        <tabel>
          <tr v-for="item in 4" :key="item">
            <th class="th_list">
              <div class="img">사진</div>
              <div class="text">
                <div class="text_top">
                  <h4>호텔 말트 - 아스토텔</h4>
                </div>
                <div class="text_left">
                  <h3>₩356,031</h3>
                  <button class="text_btn" @click="$router.push('/hotelcontent')">상세 보기</button>
                </div>
                <div class="text_right">
                  <span>무료 와이파이</span><br />
                  <span>스페셜 프로모션</span><br />
                  <span>룸서비스</span><br />
                </div>
              </div>
            </th>
          </tr>
        </tabel>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const value = ref([1, 2]);
    console.log(value);

    return {
      value,
    };
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
.text_btn {
  border: none;
  padding: 13px 40px;
  background: #e6bf55;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  border-radius: 20px;
}
.text_top {
  height: 50px;
}
.text_top h4 {
  font-size: 20px;
  font-weight: bold;
}
.text_left {
  width: 30%;
  float: left;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  height: 200px;
  text-align: center;
}
.text_right {
  width: 70%;
  float: left;
  height: 200px;
  box-sizing: border-box;
  padding-left: 30px;
}
.text {
  text-align: left;
  float: left;
  width: 70%;
  padding: 10px;

  box-sizing: border-box;
}
.wrap {
 
}
.img {
  width: 30%;
  float: left;
  background: rgb(219, 211, 211);
  height: 300px;
}
.th_list {
  border: 1px solid #ccc;
  background: #eee;
  height: 300px;
  display: block;
  margin-bottom: 10px;
  width: 1000px;
}
.hr {
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
}
.wrap {
  width: 1320px;
  margin: 0 auto;
}
.left1 {
  width: 20%;
  height: 900px;
  box-sizing: border-box;
  float: left;
  border: 1px solid #eee;
  margin: 0px 20px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
.right1 {
  width: 75%;
  height: auto;
  box-sizing: border-box;
  float: left;

  margin-top: 20px;
}
</style>