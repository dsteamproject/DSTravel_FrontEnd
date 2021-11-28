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
        <li v-for="item in 6" :key="item" class="list1_3_2">
          <div
            class="tl_img"
            v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <span>가나다라마바</span><br />
            <span>지역:부산</span> <span>박병근</span>
          </div>

          <div class="tl_text">
            <div class="block">
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.timestamp"
                >
                  {{ activity.content }}
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("searchon", true);
  },
  data() {
    return {
      image: "https://ifh.cc/g/hOQCCf.jpg",
      activities: [
        {
          content: "1번여행지",
          timestamp: "2021-11-20",
        },
        {
          content: "2번여행지",
          timestamp: "2021-11-21",
        },
        {
          content: "3번여행지",
          timestamp: "2021-11-22",
        },
        {
          content: "3번여행지",
          timestamp: "2021-11-22",
        },
      ],
      type: "title",
      size: 10,
      orderby: "latest",
      keyword: "",
    };
  },
};
</script>

<style scoped>
.block {
  padding: 10px;
  height: 100%;
  overflow: hidden;
}
.tl_img {
  width: 100%;

  height: 40%;
  background-size: cover;

  box-sizing: border-box;
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