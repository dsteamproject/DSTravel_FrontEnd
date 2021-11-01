<template>
  <div class="app">
    <div class="bg1">
      <div class="bg1_in">
        <h2 class="title">{{ list.title }}</h2>
      </div>
    </div>
    <div class="bg2">
      <div class="bg2_in">
        <div class="dech1">
          <span class="sub">{{ this.regdate }}</span>
          <span class="sub1">조회수: {{ this.list.hit }}</span>
        </div>
        <div class="dech2">
          <router-link
            class="change"
            :to="`/freechange?no=${this.no}`"
            @click="handleupdate"
            >수정</router-link
          ><router-link class="delete" to="">삭제</router-link>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div v-html="this.list.content" class="ck-content"></div>
      <div class="reply_box">
        <div class="hr"></div>
        <ul class="replyul">
          <li v-for="item in 4" :key="item">
            <div class="reply_content">
              <span>user01</span><span class="regdate">2021-10-28</span>
              <div class="reply_content2">
                댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
              </div>
            </div>
          </li>
        </ul>
        <textarea class="replytext"></textarea
        ><button class="replybtn">댓글쓰기</button>
        <div class="nepr">
          <button v-if="this.prev1 !== 0" class="prev" @click="prevclick">
            이전글</button
          ><button v-if="this.next1 !== 0" class="next" @click="nextclick">
            다음글</button
          ><button class="list">목록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

  data() {
    return {
      no: this.$route.query.no,
      list: [],

      prev1: "",
      next1: "",
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {
    async nextclick() {
      this.no = this.next1;
      await this.refresh();
    },
    async prevclick() {
      this.no = this.prev1;
      await this.refresh();
    },
    async refresh() {
      const url = `/REST/board/selectone?no=${this.no}`;

      const headers = { "Content-type": "application/json" };
      const response = await axios.get(url, headers);
      console.log(response);
      if (response.data.status === 200) {
        this.list = response.data.board;
        this.prev1 = response.data.prev;
        console.log(this.prev1);
        this.next1 = response.data.next;
        const regdate1 = response.data.board.regdate;
        const regdate2 = regdate1.split("T");
        console.log(regdate2);
        this.regdate = regdate2[0];
      }
    },
  },
};
</script>

<style scoped>
.prev {
  cursor: pointer;
}
.next {
  cursor: pointer;
}
.list {
  cursor: pointer;
}
.title {
  color: white;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 3px;
  z-index: 99;
}
.nepr button {
  margin: 10px 0 0 5px;
  padding: 2px 5px;
  border: 1px solid #ccc;
  background: white;
  font-size: 14px;
}
.nepr {
  text-align: right;
}
.dech1 {
  width: 20%;
  float: left;
}
.dech2 {
  width: 80%;
  text-align: right;
  float: left;
}
.delete {
  vertical-align: middle;
  margin-left: 15px;
  text-decoration: none;
  vertical-align: -13px;
}
.change {
  vertical-align: middle;
  margin-left: 10px;
  text-decoration: none;
  vertical-align: -13px;
}
.reply_content2 {
  min-height: 100px;
  clear: both;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
}
.regdate {
  float: right;
}
.reply_content {
  height: 40px;
}

.replyul {
  list-style: none;
}
.replyul li {
  min-height: 150px;
}
.replybtn {
  width: 10%;
  padding: 41px 0px;
  border: none;
  box-sizing: border-box;
  outline: 0;
  vertical-align: 43px;
  cursor: pointer;
}
.replytext {
  width: 90%;
  height: 98px;
  margin-top: 30px;
  outline: 0;
  box-sizing: border-box;
  resize: none;
}
.hr {
  border-bottom: 1px solid #ddd;
  margin-top: 55px;
  margin-bottom: 10px;
}
.reply_box {
  width: 1100px;
  margin: 0 auto;
}
.sub {
  vertical-align: -13px;
}
.sub1 {
  vertical-align: -13px;
  margin-left: 20px;
}
.bg1_in {
  width: 1100px;
  margin: 0 auto;
  padding-top: 70px;
}
.bg2_in {
  width: 1100px;
  margin: 0 auto;
}
.black_box {
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  background: black;
  opacity: 0.2;
  z-index: 98;
}
.bg1 {
  background: url(../assets/bg.jpg);

  height: 200px;
}
.bg2 {
  background: rgb(128, 182, 245);
  height: 50px;
  color: white;
}
.ck-content {
  width: 952px;
  margin: 40px auto;
  min-height: 400px;
}
.wrap {
  width: 1320px;
  margin: 0 auto;
}
.ck-content .text-tiny {
  font-size: 0.7em;
}

.ck-content .text-small {
  font-size: 0.85em;
}

.ck-content .text-big {
  font-size: 1.4em;
}

.ck-content .text-huge {
  font-size: 1.8em;
}
.app {
  height: 3000px;
}
</style>