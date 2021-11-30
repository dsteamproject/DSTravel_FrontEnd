<template>
  <div>
    <div class="wrap3_1">
      <div class="left1">
        <div class="demo-collapse">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
              <template #title>
                <h4 class="h44">지역</h4>
              </template>
              <div class="location">
                <button
                  :class="locationcss1"
                  value="id"
                  :name="1"
                  @click="handlelocation('')"
                >
                  전체보기</button
                ><br />
                <button :class="locationcss2" @click="handlelocation(1)">
                  서울</button
                ><br />
                <button :class="locationcss3" @click="handlelocation(6)">
                  부산</button
                ><br />
                <button :class="locationcss4" @click="handlelocation(3)">
                  대전</button
                ><br />
                <button :class="locationcss5" @click="handlelocation(4)">
                  대구</button
                ><br />
                <button :class="locationcss6" @click="handlelocation(2)">
                  인천</button
                ><br />
                <button :class="locationcss7" @click="handlelocation(5)">
                  광주</button
                ><br />
                <button :class="locationcss8" @click="handlelocation(7)">
                  울산</button
                ><br />
                <button :class="locationcss9" @click="handlelocation(39)">
                  제주
                </button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <h4>가격</h4>
        <div class="slider-demo-block">
          <el-slider
            v-model="value"
            @change="valuechange"
            range
            show-stops
            :min="0"
            :max="100"
            step="1"
          >
          </el-slider>
        </div>
        {{ this.value[0] }}만원 ~ {{ this.value[1] }}만원<span
          v-if="this.value[1] === 100"
          >이상</span
        >

        <div class="hr"></div>
        <h4>호텔등급</h4>
        <div class="demo-rate-block">
          <span class="demonstration">{{ this.value1 }}성급 호텔</span>
          <span class="allv" @click="allv">전체보기</span>
          <el-rate
            class="abc"
            v-model="value1"
            @change="value1get(value1)"
            :size="'30px'"
          ></el-rate>
        </div>
        <!--<input type="radio" name="grade" /> <label>5성급</label><br />
        <input type="radio" name="grade" /> <label>4성급</label><br />
        <input type="radio" name="grade" /> <label>3성급</label><br />
        <input type="radio" name="grade" /> <label>2성급</label><br />-->
        <div class="hr"></div>
      </div>
      <div class="right1_1">
        <div class="right-top">
          <span class="right_top_text">검색된 숙소 :{{ this.total }}개</span>
        </div>
        <ul>
          <li
            v-for="item in list"
            :key="item"
            class="list1_3"
            @click="detailcontentgo(item)"
          >
            <div class="img">
              <img :src="item.firstimage" class="img_in" />
            </div>
            <div class="text">
              <h4 class="item_title">{{ item.title }}</h4>
              <span class="item_sub" v-if="item.rank !== 0 && item.rank !== 1"
                >{{ item.rank }}성급 ·</span
              ><span class="item_sub">{{ item.addr }}</span
              ><br />
              <div class="coupon_wrap">
                <span class="coupon coupon1">숙박쿠폰</span
                ><span class="coupon coupon2">선착순 할인</span><br />
              </div>
              <div class="numbertext">
                <span class="minus">-30000원</span
                ><span class="itemcount3">{{ item.price + 3 }}0000원</span>
              </div>

              <span class="totalprice">{{ item.price }}0,000원</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="pagen">
        <el-pagination
          :current-page="this.page * 1"
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :total="this.pages * 10"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, defineComponent } from "vue";
export default defineComponent({
  async created() {
    console.log(this.value);
    await this.listrefresh();
    if (sessionStorage.getItem("PAGE") !== null) {
      this.page = sessionStorage.getItem("PAGE");
    }
    if (sessionStorage.getItem("LOC") !== null) {
      this.city = Number(sessionStorage.getItem("LOC"));
    }
    if (sessionStorage.getItem("PRICE1") !== null) {
      this.value = ref([
        Number(sessionStorage.getItem("PRICE1")),
        Number(sessionStorage.getItem("PRICE2")),
      ]);

      console.log(this.value);
      this.value[0] = Number(sessionStorage.getItem("PRICE1"));
      this.value[1] = Number(sessionStorage.getItem("PRICE2"));
    }
    if (sessionStorage.getItem("RAT") !== null) {
      this.value1 = Number(sessionStorage.getItem("RAT"));
    }

    this.$emit("searchon", true);
    await this.cssch();
    await this.listrefresh();

    console.log(this.city);
  },
  beforeUnmount() {
    sessionStorage.removeItem("PAGE");
    sessionStorage.removeItem("LOC");
    sessionStorage.removeItem("PRICE1");
    sessionStorage.removeItem("PRICE2");
    sessionStorage.removeItem("RAT");
  },

  setup() {
    const value = ref([0, 100]);
    console.log(value);
    const activeName = ref("1");
    return {
      value,
      activeName,
    };
  },
  data() {
    return {
      pages: "",
      list: [],
      value1: "",
      page: 1,

      locationcss1: "location2",
      locationcss2: "location1",
      locationcss3: "location1",
      locationcss4: "location1",
      locationcss5: "location1",
      locationcss6: "location1",
      locationcss7: "location1",
      locationcss8: "location1",
      locationcss9: "location1",
      rank: "",
      city: "",
      total: "",
    };
  },

  methods: {
    detailcontentgo(item) {
      console.log(item.code);
      this.$router.push({
        path: "/hotelcontent",
        query: {
          code: item.code,
          page: this.page,
          location: this.city,
          value1: this.value[0],
          value2: this.value[1],
          rat: this.value1,
        },
      });
    },
    async valuechange() {
      console.log(this.value);
      await this.listrefresh();
    },
    async listrefresh() {
      let url1;
      if (this.city === 0) {
        url1 = `/REST/hotel/select?size=5&page=${this.page}&firstprice=${this.value[0]}&endprice=${this.value[1]}&city=&rank=${this.rank}`;
      } else {
        url1 = `/REST/hotel/select?size=5&page=${this.page}&firstprice=${this.value[0]}&endprice=${this.value[1]}&city=${this.city}&rank=${this.rank}`;
      }
      const headers1 = { "Content-type": "application/json" };
      const response1 = await axios.get(url1, { headers1 });
      console.log(response1);
      this.pages = response1.data.cnt;
      this.list = response1.data.list;
      this.total = response1.data.total;
      for (var i = 0; i < this.list.length; i++) {
        if (String(this.list[i].price).length === 3) {
          var coma =
            String(this.list[i].price).slice(0, 1) +
            "," +
            String(this.list[i].price).slice(1, 3);

          this.list[i].price = coma;
        }
      }
    },
    async handleCurrentChange(val) {
      console.log(val);
      this.page = val;

      await this.listrefresh();
    },
    async handlelocation(me) {
      this.page = 1;
      this.city = me;
      await this.cssch();
    },
    async cssch() {
      if (this.city === "") {
        this.locationcss1 = "location2";
        this.locationcss2 = "location1";
        this.locationcss3 = "location1";
        this.locationcss4 = "location1";
        this.locationcss5 = "location1";
        this.locationcss6 = "location1";
        this.locationcss7 = "location1";
        this.locationcss8 = "location1";
        this.locationcss9 = "location1";

        await this.listrefresh();
      }
      if (this.city === 1) {
        this.locationcss1 = "location1";
        this.locationcss2 = "location2";
        this.locationcss3 = "location1";
        this.locationcss4 = "location1";
        this.locationcss5 = "location1";
        this.locationcss6 = "location1";
        this.locationcss7 = "location1";
        this.locationcss8 = "location1";
        this.locationcss9 = "location1";

        await this.listrefresh();
      }
      if (this.city === 6) {
        this.locationcss1 = "location1";
        this.locationcss2 = "location1";
        this.locationcss3 = "location2";
        this.locationcss4 = "location1";
        this.locationcss5 = "location1";
        this.locationcss6 = "location1";
        this.locationcss7 = "location1";
        this.locationcss8 = "location1";
        this.locationcss9 = "location1";

        await this.listrefresh();
      }
      if (this.city === 3) {
        this.locationcss1 = "location1";
        this.locationcss2 = "location1";
        this.locationcss3 = "location1";
        this.locationcss4 = "location2";
        this.locationcss5 = "location1";
        this.locationcss6 = "location1";
        this.locationcss7 = "location1";
        this.locationcss8 = "location1";
        this.locationcss9 = "location1";

        await this.listrefresh();
      }
      if (this.city === 4) {
        this.locationcss1 = "location1";
        this.locationcss2 = "location1";
        this.locationcss3 = "location1";
        this.locationcss4 = "location1";
        this.locationcss5 = "location2";
        this.locationcss6 = "location1";
        this.locationcss7 = "location1";
        this.locationcss8 = "location1";
        this.locationcss9 = "location1";

        await this.listrefresh();
      }
      if (this.city === 2) {
        this.locationcss1 = "location1";
        this.locationcss2 = "location1";
        this.locationcss3 = "location1";
        this.locationcss4 = "location1";
        this.locationcss5 = "location1";
        this.locationcss6 = "location2";
        this.locationcss7 = "location1";
        this.locationcss8 = "location1";
        this.locationcss9 = "location1";

        await this.listrefresh();
      }
      if (this.city === 5) {
        this.locationcss1 = "location1";
        this.locationcss2 = "location1";
        this.locationcss3 = "location1";
        this.locationcss4 = "location1";
        this.locationcss5 = "location1";
        this.locationcss6 = "location1";
        this.locationcss7 = "location2";
        this.locationcss8 = "location1";
        this.locationcss9 = "location1";

        await this.listrefresh();
      }
      if (this.city === 7) {
        this.locationcss1 = "location1";
        this.locationcss2 = "location1";
        this.locationcss3 = "location1";
        this.locationcss4 = "location1";
        this.locationcss5 = "location1";
        this.locationcss6 = "location1";
        this.locationcss7 = "location1";
        this.locationcss8 = "location2";
        this.locationcss9 = "location1";

        await this.listrefresh();
      }
      if (this.city === 39) {
        this.locationcss1 = "location1";
        this.locationcss2 = "location1";
        this.locationcss3 = "location1";
        this.locationcss4 = "location1";
        this.locationcss5 = "location1";
        this.locationcss6 = "location1";
        this.locationcss7 = "location1";
        this.locationcss8 = "location1";
        this.locationcss9 = "location2";

        await this.listrefresh();
      }
    },
    async value1get(value1) {
      console.log(value1);
      this.rank = value1;
      await this.listrefresh();
    },
    async allv() {
      this.rank = "";
      this.value1 = "";
      await this.listrefresh();
    },
  },
});
</script>
<style>
.abc .el-rate__item .el-rate__icon {
  font-size: 30px;
}
.location1 {
  background: none;
  display: inline-block;
  font-size: 13px;
  width: 100%;
  height: 4vh;
  border: 1px solid rgb(146, 168, 233);
  cursor: pointer;
  border-radius: 30px;
  margin-bottom: 10px;
}
.location2 {
  font-size: 13px;
  width: 100%;
  height: 4vh;
  color: white;
  border: 1px solid rgb(146, 168, 233);
  background: rgb(146, 168, 233);
  cursor: pointer;
  border-radius: 30px;
  margin-bottom: 10px;
}
.location {
  text-align: center;
}
</style>
<style scoped>
.pagen {
  clear: both;
  text-align: center;
}
.totalprice {
  font-weight: bold;
  font-size: 18px;
}
.itemcount3 {
  color: #99a0a7;
  font-size: 13px;
  text-decoration: line-through;
}
.minus {
  font-size: 15px;
  font-weight: bold;
  color: #e6bf55;
  margin-right: 4px;
}
.numbertext {
  margin-top: 25px;
}
.coupon_wrap {
  margin-top: 3px;
}
.coupon {
  font-size: 11px;
  padding: 3px 15px;
  border-radius: 5px;
  background: #c6def7;
  color: #4e88c2;
}
.coupon1 {
  margin-right: 3px;
}
.item_sub {
  margin: 0;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: -0.3px;
  color: #848c94;
}

.item_title {
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
}
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
  padding: 22px 24px 24px;
  box-sizing: border-box;
}

.img {
  width: 30%;
  float: left;
  background: rgb(219, 211, 211);
  height: 100%;
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
  width: 100%;
}
.hr {
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
}
.wrap3_1 {
  width: 1080px;
  margin: 0 auto;
  margin-bottom: 50px;
}
.left1 {
  width: 24%;
  height: auto;
  box-sizing: border-box;
  float: left;
  border: 1px solid #eee;

  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-right: 3%;
}
.left1 h4 {
  margin-bottom: 10px;
}
.right1_0 {
  width: 78%;
  height: auto;
  box-sizing: border-box;
  float: left;

  margin-top: 20px;
}
.right1_1 {
  width: 73%;
  margin-top: 20px;
  float: right;
  height: auto;
  box-sizing: border-box;
}
.list1_3 {
  list-style: none;
  float: left;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  width: 100%;
  height: 200px;
  cursor: pointer;
  box-sizing: border-box;
}
.list1_3:hover {
  box-shadow: inset 0 0 0 1px #666d7533;
}
.demo-collapse {
  border-top: 1px solid #f1efef;
  border-bottom: 1px solid #f1efef;
}
.h44 {
  font-size: 16px;
}
.allv {
  float: right;
  font-size: 12px;
  cursor: pointer;
}
.right-top {
  width: 100%;
  background: #409eff;
  height: 50px;
  margin-bottom: 20px;
}
.right_top_text {
  color: white;
  font-weight: bold;
  font-size: 15px;
  vertical-align: -13px;
  margin-left: 30px;
}
</style>