<template>
  <div class="app">
    <div
      class="bg1"
      :style="{
        backgroundImage:
          'url(' +
          `//127.0.0.1:8080/REST/board/select_image?no=${this.no}` +
          ')',
      }"
    >
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
            v-if="this.loginid === this.list.member.id"
            >수정</router-link
          ><router-link
            class="delete"
            to=""
            @click="dialogVisible = true"
            v-if="this.loginid === this.list.member.id"
            >삭제</router-link
          >
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="userdetail">
        <img
          :src="`//127.0.0.1:8080/REST/mypage/select_image?id=${this.list.member.id}`"
          class="myimg"
        />
        <p>{{ this.list.member.nicname }}</p>
      </div>
      <div v-html="this.list.content" class="ck-content"></div>

      <div class="reply_box">
        <div class="likebox">
          <img
            @click="likeup"
            class="likeicon2"
            src="../assets/report.png"
          /><button class="report" @click="report">신고하기</button>
          <img @click="likeup" class="likeicon" src="../assets/like.png" /><span
            style="vertical-align: 5px"
          >
            {{ this.list.good }}
          </span>
        </div>
        <div class="hr"></div>
        <div class="nonereply" v-if="this.reply.length === 0">
          현재 댓글이 없습니다.
        </div>
        <ul class="replyul" v-if="this.reply.length !== 0">
          <li v-for="(item, index) in reply" :key="index">
            <div class="reply_content">
              <span class="rewriter">{{ item.member.nicname }}</span>
              <span v-if="this.today === item.regdate2" class="regdate"
                >{{ item.regdate3 }}
              </span>
              <span v-if="this.today !== item.regdate2" class="regdate"
                >{{ item.regdate2 }}
              </span>
              <div class="reply_content2">
                <div class="reply_in">
                  <!--<span v-if="this.repch !==index" v-html="item.reply"></span>-->
                  <textarea
                    v-html="item.replycontent"
                    disabled
                    class="replychange1"
                    v-if="this.repch !== index"
                  ></textarea>
                  <div class="btn_replybox">
                    <textarea
                      class="replychange"
                      v-model="item.replycontent"
                      v-if="this.repch === index"
                    ></textarea>
                    <button
                      v-if="this.repch === index"
                      @click="cancelreply(index)"
                      class="cancel"
                    >
                      취소
                    </button>
                    <span v-if="this.repch === index">│</span
                    ><button
                      v-if="this.repch === index"
                      @click="changereply(index)"
                      class="confirm"
                    >
                      수정
                    </button>
                  </div>
                </div>

                <div class="reply_in2">
                  <button
                    class="re_change"
                    @click="replychange(index)"
                    v-if="this.loginid === item.member.id"
                  >
                    수정
                  </button>

                  <button
                    class="re_delete"
                    @click="dialog(index)"
                    v-if="this.loginid === item.member.id"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <textarea
          v-if="this.token === null"
          class="replytext1"
          disabled
          v-model="replytext1"
        ></textarea>
        <textarea
          v-if="this.token !== null"
          class="replytext"
          v-model="replytext"
        ></textarea>
        <button
          class="replybtn"
          v-if="this.token === null"
          disabled
          @click="writereply"
        >
          댓글쓰기
        </button>
        <button class="replybtn" v-if="this.token !== null" @click="writereply">
          댓글쓰기
        </button>
        <div class="nepr">
          <button v-if="this.prev1 !== 0" class="prev1_1" @click="prevclick">
            이전글</button
          ><button v-if="this.next1 !== 0" class="next1_1" @click="nextclick">
            다음글</button
          ><button class="list" @click="golist">목록</button>
        </div>
      </div>
    </div>

    <!-- 글 삭제 다이얼로그 -->
    <el-dialog
      v-model="dialogVisible"
      title="글 삭제"
      width="30%"
      :before-close="handleClose"
    >
      <div class="delbox">
        <h2>게시물 삭제</h2>
        <div class="hr4"></div>
        <p>선택한 게시물을 정말 삭제 하시겠습니까?</p>
        <p>한번 삭제한 자료는 복구할 수 없습니다.</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <button class="no_btn" @click="dialogVisible = false">취소</button>
          <button class="del_btn" @click="handledelete">삭제</button>
        </span>
      </template>
    </el-dialog>

    <!-- 신고하기 다이얼로그 -->

    <el-dialog
      v-model="dialogVisible2"
      title="글 삭제"
      width="23%"
      :before-close="handleClose"
    >
      <div class="delbox2">
        <div class="dlbti">
          <p>신고하기</p>
        </div>
        <div class="dlbti2">
          <p>신고사유를 선택해주세요</p>
          <div class="rp1">
            <el-radio v-model="report1" label="1"
              >게시판 목적과 무관한 글</el-radio
            >
          </div>
          <div class="rp1">
            <el-radio v-model="report1" label="2"
              >악의적 용설이 포함된 글</el-radio
            >
          </div>
          <div class="rp1">
            <el-radio v-model="report1" label="3"
              >성적인 글 및 성희롱 발언</el-radio
            >
          </div>
          <div class="rp1">
            <el-radio v-model="report1" label="4"
              >홍보 및 상업적인 내용이 들어간 글</el-radio
            >
          </div>
          <div class="rp1">
            <el-radio v-model="report1" label="5">기타</el-radio>
          </div>
          <textarea class="area"></textarea>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <button class="no_btn" @click="dialogVisible2 = false">취소</button>
          <button class="del_btn" type="primary" @click="singo">신고</button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      report1: "",
      repch: "off",
      no: this.$route.query.no,
      list: [],
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      token: sessionStorage.getItem("TOKEN"),
      prev1: "",
      next1: "",
      replytext: "",
      reply: "",
      today: "",
      replytext1: "댓글작성은 로그인후 가능합니다",
      likenum: 0,
      category: this.$route.query.category,
      push: "",
      loginid: "",
      good: 0,
    };
  },
  async created() {
    this.$emit("searchon", true);
    await this.refresh();
    console.log(this.list);
    console.log(this.loginid);
  },
  methods: {
    async singo() {
      const url = `/REST/board/warning`;
      const headers = { "Content-type": "application/json", token: this.token };
      const body = {
        no: this.list.no,
      };
      const response = await axios.post(url, body, { headers });
      console.log(response);
      if (response.data.status === 200) {
        alert("신고 완료되었습니다");
      }
    },
    report() {
      this.dialogVisible2 = true;
    },
    cancelreply() {
      this.repch = "off";
    },
    dialog(i) {
      console.log(i);
      this.dialogVisible1 = true;
      this.push = i;
    },
    // 댓글 삭제 PUT
    async replydelete() {
      const url = `/REST/board/reply_delete?no=${this.reply[this.push].no}`;
      const headers = { "Content-type": "application/json", token: this.token };
      const body = {
        no: this.list.no,
      };
      const response = await axios.put(url, body, { headers });
      console.log(response);
      if (response.data.status === 200) {
        this.dialogVisible1 = false;
        await this.refresh();
      }
    },
    // 댓글 수정 PUT
    async changereply(i) {
      console.log(i);
      console.log(this.reply[i].replycontent); // 선택된 변경상자 값
      const url = `/REST/board/reply_update`;
      const headers = { "Content-type": "application/json", token: this.token };
      const body = {
        no: this.reply[i].no,
        replycontent: this.reply[i].replycontent,
      };
      const response = await axios.put(url, body, { headers });
      console.log(response);
      if (response.data.status === 200) {
        alert("수정완료되었습니다");
        this.repch = "off";
      }
    },
    // 댓글수정 상자 변환
    async replychange(i) {
      console.log(i);
      this.repch = i;
      console.log(this.reply[i].reply); // 선택된 변경상자 값
      console.log(this.reply[i].no); // 선택된 변경상자 값
    },
    // 해당 카테고리 리스트로 이동
    golist() {
      this.$router.push(`/board/${this.list.category}`);
      window.scrollTo(0, 0);
    },
    // 좋아요 UP
    async likeup() {
      if (this.token === null) {
        alert("로그인 후 이용가능한 서비스입니다");
      } else {
        const url = `/REST/board/good`;
        const headers = {
          "Content-type": "application/json",
          token: this.token,
        };
        const body = {
          no: this.list.no,
        };
        const response = await axios.post(url, body, { headers });
        console.log(response);
        if (response.data.status === 200) {
          this.good = response.data.good;
          await this.refresh();
        }
      }
    },
    // 댓글 작성 POST
    async writereply() {
      console.log(this.replytext);
      if (this.replytext === "") {
        alert("댓글을 입력해주세요");
      } else {
        const url = `/REST/board/reply?no=${this.no}`;
        const body = {
          replycontent: this.replytext,
        };
        const headers = {
          "Content-type": "application/json",
          token: this.token,
        };
        const response = await axios.post(url, body, { headers });

        if (response.data.status === 200) {
          alert("댓글 작성완료");
          this.replytext = "";
          await this.refresh();
        }
      }
    },
    // put = > 변경 데이터 전송
    // 글삭제 PUT
    async handledelete() {
      const url = `/REST/board/delete?no=${this.no}`;
      const data = {};
      const headers = { "Content-type": "application/json", token: this.token };
      const response = await axios.put(url, { data }, { headers });
      console.log(response);
      if (response.data.status === 200) {
        this.$router.push({ path: `/board/${this.list.category}` });
      }
    },
    // 다음글
    async nextclick() {
      this.no = this.next1;
      await this.refresh();
      window.scrollTo(0, 0);
    },
    // 이전글
    async prevclick() {
      this.no = this.prev1;
      await this.refresh();
      window.scrollTo(0, 0);
    },
    // 상세글 가져오기 GET
    async refresh() {
      const url = `/REST/board/selectone?no=${this.no}&category=${this.category}`;
      if (this.token !== null) {
        var headers = {
          "Content-type": "application/json",
          token: this.token,
        };
      } else {
        headers = {
          "Content-type": "application/json",
        };
      }
      const response = await axios.get(url, { headers });
      console.log(response);

      if (response.data.status === 200) {
        this.list = response.data.board;
        this.loginid = response.data.LoginId;
        console.log(this.loginid);
        this.loginid = response.data.LoginId;

        this.reply = response.data.reply;
        console.log(this.reply);
        for (var i = 0; i < this.reply.length; i++) {
          const sample = this.reply[i].regdate;

          const dada = new Date(sample);
          const simpledate =
            dada.getFullYear() +
            "-" +
            ("0" + (dada.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + dada.getDate()).slice(-2);
          const simpledate2 =
            ("0" + dada.getHours()).slice(-2) +
            ":" +
            ("0" + dada.getMinutes()).slice(-2);

          this.reply[i].regdate2 = simpledate;
          this.reply[i].regdate3 = simpledate2;

          const today2 = new Date();
          const today =
            today2.getFullYear() +
            "-" +
            ("0" + (today2.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + today2.getDate()).slice(-2);

          this.today = today;
        }
        this.prev1 = response.data.prev;

        this.next1 = response.data.next;
        const regdate1 = response.data.board.regdate;
        const regdate2 = regdate1.split("T");

        this.regdate = regdate2[0];
      }
    },
  },
};
</script>


<style scoped>
.userdetail {
  text-align: center;
  margin-top: 25px;
}
.userdetail p {
  font-weight: 500;
  font-size: 1.7rem;
}
.myimg {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.btn_replybox {
  text-align: right;
}
.cancel {
  cursor: pointer;
  border: none;
  background: none;
}
.confirm {
  cursor: pointer;
  border: none;
  background: none;
  padding: 3px;
}
.replychange1 {
  width: 100%;
  height: 85px;
  background: white;
  outline: 0;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  border: none;
  font-size: 15px;
}
.replychange {
  width: 100%;
  height: 85px;

  outline: 0;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  border: 1px solid rgb(182, 182, 182);
}
.likebox {
  text-align: right;
  padding-right: 20px;
}
.likeicon {
  width: 30px;
  cursor: pointer;
}
.nonereply {
  text-align: center;
  padding-top: 30px;
  height: 30px;
}
.rewriter {
  font-weight: bold;
}
.re_change {
  background: none;
  border: none;
  cursor: pointer;
}
.re_delete {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 3px;
}
.reply_in2 {
  width: 10%;
  display: inline-block;
  height: auto;
  text-align: right;
}
.reply_in {
  width: 90%;
  display: inline-block;
  height: auto;
  float: left;
}
.prev1_1 {
  cursor: pointer;
}
.next1_1 {
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
  color: black;
}
.change {
  vertical-align: middle;
  margin-left: 10px;
  text-decoration: none;
  vertical-align: -13px;
  color: black;
}
.reply_content2 {
  min-height: 120px;
  clear: both;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
  margin-left: 10px;
}
.regdate {
  float: right;
  margin-right: 10px;
  font-weight: bold;
}
.reply_content {
  height: 40px;
  margin-top: 10px;
}

.replyul {
  list-style: none;
}
.replyul li {
  min-height: 150px;
}
.replybtn {
  width: 10%;
  padding: 40px 0px;
  border: none;
  box-sizing: border-box;
  outline: 0;
  vertical-align: 44px;
  cursor: pointer;
  background: #2752be;
  color: white;
}
.replytext {
  width: 90%;
  height: 98px;
  margin-top: 30px;
  outline: 0;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  border: 1px solid rgb(182, 182, 182);
}
.replytext1 {
  width: 90%;
  height: 98px;
  margin-top: 30px;
  outline: 0;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  border: 1px solid rgb(182, 182, 182);
  text-align: center;
  padding-top: 40px;
  padding-left: 118px;
}
.hr {
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 20%;
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
  height: auto;
  margin-bottom: 50px;
}
.likeicon2 {
  width: 20px;
  cursor: pointer;
  float: left;
  margin-right: 2px;
}
.report {
  float: left;
  border: none;
  background: none;
  cursor: pointer;
}
.report:hover {
  opacity: 0.6;
}
.delbox {
  width: 100%;
  height: 100px;
  padding: 10px;
}
.delbox p {
  margin-bottom: 10px;
}
.hr4 {
  margin: 20px 0px 10px 0px;
  width: 95%;
  border-bottom: 1px solid #ddd;
}
.no_btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  border: 1px solid #ddd;
  margin-right: 5px;
  transition: all 1s;
}
.no_btn:hover {
  background: rgb(238, 238, 238);
}
.del_btn {
  padding: 10px 20px;
  background: #d82424;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 1s;
}

.del_btn:hover {
  background: #af1313;
}
.delbox2 {
  width: 100%;
  height: 450px;
  padding: 20px;
  box-sizing: border-box;
}
.dlbti {
  text-align: center;
  margin: 20px 0px;
}
.dlbti2 {
  width: 100%;
}
.rp1 {
  margin: 20px;
}
.dlbti p {
  font-size: 20px;
  font-weight: bold;
}
.area {
  width: 90%;
  margin: 0px 20px;
  height: 100px;
  resize: none;
  outline: none;
}
</style>