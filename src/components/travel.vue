<template>
  <div class="wrap">
    <ul class="opt">
      <li>
        <select class="boardlength" v-model="size">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </li>
      <li>
        <select class="boardro" v-model="orderby">
          <option value="latest">최신순</option>
          <option value="old">오래된순</option>
        </select>
      </li>
      <li>
        <button class="sbtn" @click="searchclick">검색</button>
      </li>
      <li>
        <input
          type="text"
          class="sch"
          v-model="keyword"
          v-on:keyup.enter="searchclick"
        />
      </li>
      <li>
        <select class="schsel" v-model="type">
          <option value="title">제목</option>
          <option value="writer">작성자</option>
        </select>
      </li>
    </ul>
    <div>
      <ul class="travel_list1_3">
        <!-- 상자갯수  -->
        <li v-for="(item, index) in list" :key="index" class="list1_3_2">
          <div
            class="tl_img"
            v-bind:style="{
              backgroundImage: 'url(' + item.total[0][0].firstimage + ')',
            }"
          >
            <div class="tl2">
              <span class="tl2_title">{{ item.title }}</span
              ><br />
              <span class="tl2_city">{{ item.total[0][0].city.name }}</span>
              <p class="tl2_nicename">{{ item.member.nicname }}님의 여행일정</p>
            </div>
          </div>

          <div class="tl_text">
            <div class="block">
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index1) in list[index].date"
                  :key="index1"
                  :timestamp="activity"
                >
                  {{ this.list[index].total[index1][0].title }}
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pagen">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="10"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    this.$emit("searchon", true);

    //==============================
    await this.refresh();
  },
  methods: {
    async refresh() {
      const url = `/REST/mypage/tdsave?title=&page=${this.page}&size=6`;
      const headers = { "Content-type": "application/json", token: this.token };

      const response = await axios.get(url, { headers });
      console.log(response);
      console.log(response.data.tdsave);
      this.list = response.data.tdsave; // 0: 1일 , 1 : 2일
    },
    async handleCurrentChange(val) {
      this.page = val;
      await this.refresh();
    },
  },
  data() {
    return {
      pages: "",
      page: 1,
      mylist: [],
      datelist: [],
      tdlist: [],
      list: [],
      token: sessionStorage.getItem("TOKEN"),
      image: "https://ifh.cc/g/hOQCCf.jpg",

      type: "title",
      size: 10,
      orderby: "latest",
      keyword: "",
    };
  },
};
</script>

<style scoped>
.pagen {
  text-align: center;
  clear: both;
}
.block {
  padding: 10px;
  height: 100%;
  overflow: hidden;
}
.tl_img {
  width: 100%;
  text-align: center;
  height: 40%;
  background-size: cover;

  font-weight: bold;

  box-sizing: border-box;
}
.tl2 {
  color: white;
  text-shadow: 1px 1px 1px rgba;
  background: rgba(0, 0, 0, 0.4);
  width: 50%;
  margin: 0 auto;
  padding-top: 10px;
}
.tl2_title {
  font-size: 20px;
}
.tl2_city {
  font-size: 13px;
}
.tl2_nicename {
  font-size: 12px;
  margin-top: 10px;
  padding-bottom: 5px;
}
.tl_text {
  height: 60%;
  overflow: hidden;
  box-sizing: border-box;
}
.travel_list1_3 {
  list-style: none;
}
.list1_3_2 {
  width: 25%;
  margin: 0px 3% 3%;
  height: 300px;
  border: 1px solid #ddd;
  float: left;
  cursor: pointer;
}
.list1_3_2:hover {
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
}
.boardlength {
  width: 78px;
  height: 38px;
  padding-left: 10px;
  font-size: 15px;
  border: 1px solid #dddddd;
  outline: none;
  margin-right: 5px;
}
.boardro {
  width: 98px;
  height: 38px;
  padding-left: 10px;
  font-size: 15px;
  border: 1px solid #dddddd;
  outline: none;
}
.sbtn {
  padding: 10px 35px;
  border: none;
  cursor: pointer;
  background: #2752be;
  color: white;
  margin-right: 80px;
  margin-left: 5px;
  margin-bottom: 20px;
}
.schsel {
  height: 38px;
  width: 103px;
  font-size: 15px;
  border: 1px solid #dddddd;
  outline: none;
  padding-left: 10px;
}

.sch {
  height: 36px;
  width: 200px;
  outline: none;
  border: 1px solid #dddddd;
  margin-left: 5px;
}
.wrap {
  width: 1188px;
  padding-top: 30px;
}
.opt {
  height: 60px;
}
.opt li {
  display: inline-block;
}
.opt li:nth-child(1) {
  float: left;
}
.opt li:nth-child(2) {
  float: left;
}
.opt li:nth-child(3) {
  float: right;
}
.opt li:nth-child(4) {
  float: right;
}
.opt li:nth-child(5) {
  float: right;
}
</style>