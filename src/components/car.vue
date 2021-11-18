<template>
  <div>
    <div class="wrap">
      <div class="left1">
        <h4>코로나19</h4>
        <input type="checkbox" /> <label>안전조치 이행시설</label>
        <div class="hr"></div>
        <h4>가격</h4>
        <div class="slider-demo-block">
          <el-slider
            v-model="value"
            range
            show-stops
            :min="0"
            :max="100"
            step="1"
          >
          </el-slider>
        </div>
        {{ this.value[0] }}원 ~ {{ this.value[1] }}만원<span
          v-if="this.value[1] === 100"
          >이상</span
        >
        <div class="hr"></div>
        <h4>스타일</h4>
        <input type="radio" name="style" /> <label>가성비</label><br />
        <input type="radio" name="style" /> <label>중간급</label><br />
        <input type="radio" name="style" /> <label>럭셔리</label><br />
        <input type="radio" name="style" /> <label>가족친화형</label>
        <div class="hr"></div>
        <h4>호텔등급</h4>
        <input type="radio" name="grade" /> <label>5성급</label><br />
        <input type="radio" name="grade" /> <label>4성급</label><br />
        <input type="radio" name="grade" /> <label>3성급</label><br />
        <input type="radio" name="grade" /> <label>2성급</label><br />
        <div class="hr"></div>
      </div>
      <div class="right1">
        <tabel>
          <tr v-for="item in list" :key="item">
            <th class="th_list">
              <div class="img">
                <img :src="item.firstimage" class="img_in" />
              </div>
              <div class="text">
                <div class="text_top">
                  <h4>{{ item.title }}</h4>
                </div>
                <div class="text_left">
                  <h3 style="font-size: 13px">상세페이지 참조</h3>
                  <button
                    class="text_btn"
                    @click="$router.push('/hotelcontent')"
                  >
                    상세 보기
                  </button>
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
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="60"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, defineComponent } from "vue";
export default defineComponent({
  async created() {
    const url1 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?serviceKey=FPCnbDX7v%2Fdl0UkUw9p5jW%2Bt4AgPdbPVS7y9uC29%2F7E3S4FZTJtiKORsRbMZPhjR6IhNNeHvdchVtbxY6rfUMg%3D%3D&numOfRows=10&pageNo=${this.page}&MobileOS=ETC&MobileApp=AppTest&arrange=A&listYN=Y&eventStartDate=20211118`;
    const headers1 = { "Content-type": "application/json" };

    const response1 = await axios.get(url1, { headers1 });
    console.log(response1.data.response.body.items.item);
    this.list = response1.data.response.body.items.item;
  },
  setup() {
    const value = ref([0, 100]);
    console.log(value);

    return {
      value,
    };
  },
  data() {
    return {
      list: [],
      page: 1,
    };
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
  overflow: hidden;
}
.img_in {
  width: 100%;
  height: 100%;
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
  margin-bottom: 20px;
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