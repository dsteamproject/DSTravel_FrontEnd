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
            v-if="this.loginid === this.list.writer"
            >수정</router-link
          ><router-link class="delete" to=""  @click="dialogVisible = true" v-if="this.loginid === this.list.writer">삭제</router-link>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div v-html="this.list.content" class="ck-content"></div>
      <div class="reply_box">
        <div class="hr"></div>
        <ul class="replyul">
          <li v-for="item in reply" :key="item">
            <div class="reply_content">
              <span>{{item.writer}}</span>
              <span v-if="this.today = item.regdate2 " class="regdate">{{item.regdate3}}  </span>
              <span v-if="this.today != item.regdate2 " class="regdate">{{item.regdate3}}  </span>
              <div class="reply_content2">
                <div class="reply_in">
              {{item.reply}}
              </div>
              <span>수정</span>
              <span>삭제</span>
              </div>
            </div>
          </li>
        </ul>
        <textarea class="replytext" v-model="replytext"></textarea
        ><button class="replybtn" @click="writereply">댓글쓰기</button>
        <div class="nepr">
          <button v-if="this.prev1 !== 0" class="prev" @click="prevclick" >
            이전글</button
          ><button v-if="this.next1 !== 0" class="next" @click="nextclick">
            다음글</button
          ><button class="list">목록</button>
        </div>
      </div>
    </div>

      <el-dialog
    v-model="dialogVisible"
    title="글 삭제"
    width="30%"
    :before-close="handleClose"
  >
    <span>현재 게시글을 삭제하시겠습니까?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">취소</el-button>
        <el-button type="primary" @click="handledelete"
          >삭제</el-button
        >
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
      no: this.$route.query.no,
      list: [],
      dialogVisible:false,  
      token: sessionStorage.getItem("TOKEN"),
      prev1: "",
      next1: "",
      replytext:"",
      reply:"",
      today:"",
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {
    async writereply(){
      console.log(this.replytext)
      const url = `/REST/board/reply?no=${this.no}`;
       const body = {
         reply:this.replytext,
       
        
      };
      const headers = { "Content-type": "application/json",  token : this.token };
      const response = await axios.post(url,body, {headers});
      console.log(response);
      if(response.data.status === 200){
        alert("댓글 작성완료")
          await this.refresh();
      }
    },  
      async handledelete(){
            const url = `/REST/board/delete?no=${this.no}`;

      const headers = { "Content-type": "application/json",  token : this.token };
      const response = await axios.delete(url, {headers});
      console.log(response);
      if(response.data.status === 200){
     
             this.$router.push({ path: "/board/free" });
      }
    },
    async nextclick() {
      this.no = this.next1;
      await this.refresh();
      window.scrollTo(0,0);
    },
    async prevclick() {
      this.no = this.prev1;
      await this.refresh();
      window.scrollTo(0,0);
    },
    async refresh() {
      const url = `/REST/board/selectone?no=${this.no}`;

      const headers = {
         "Content-type": "application/json",
          token : this.token
           };
      const response = await axios.get(url, {headers});
      console.log(response);
      if (response.data.status === 200) {
          this.list = response.data.board;
        this.loginid = response.data.LoginId
        this.reply = response.data.reply
      for(var i=0; i<this.reply.length; i++){
        const sample = this.reply[i].regdate
        console.log(sample)
        const dada = new Date(sample)
        const simpledate = dada.getFullYear() + "-" + ("0" + (dada.getMonth() + 1)).slice(-2) + "-" + ("0" + dada.getDate()).slice(-2)
        const simpledate2 =("0"+ dada.getHours()).slice(-2) +":"+ ("0" + dada.getMinutes()).slice(-2);
        console.log(simpledate);
         this.reply[i].regdate2 = simpledate;
         this.reply[i].regdate3 = simpledate2;
         console.log(this.reply)
         const today2 = new Date();
         const today = today2.getFullYear() + "-" + ("0" + (today2.getMonth() + 1)).slice(-2) + "-" + ("0" + today2.getDate()).slice(-2)
         
         this.today = today;
         console.log(this.today);
      }
         
       
      
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
.reply_in{
  width:90%;
  display: inline-block;
}
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
  margin-left: 10px;
 
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