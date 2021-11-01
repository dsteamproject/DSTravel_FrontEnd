<template>
  <div>
    <div class="wrap">
      <h2 class="tti">글 수정</h2>
      <div class="hr"></div>
      <label>작성자</label> <span>{{list.writer}}</span><br />
      <label>말머리</label>
      <select class="keyword" v-model="keyword">
        <option value="free">잡담</option>
        <option value="review">여행후기</option>
        <option value="info">여행정보</option>
        <option value="que">질문</option></select
      ><br />
      <label>제목</label
      ><input type="text" class="title" v-model="title" /><br />
      <label>내용</label>
      <div class="ckeditor">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig">
        </ckeditor>
        <div class="btn2">
          <button class="confirm" @click="handleconfirm">완료</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import "@ckeditor/ckeditor5-build-classic/build/translations/ko";
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  components: {
    ckeditor: CKEditor.component,
  },
  async created() {
    await this.refresh();
  },
  data() {
    return {
      keyword: "",
      list: [],
      title: "",
      editor: ClassicEditor,
      editorData: "",
      no: this.$route.query.no,
            token: sessionStorage.getItem("TOKEN"),
      editorConfig: {
        language: "ko",
      },
    };
  },
  methods: {
    async handleconfirm() {
      const url = `/REST/board/update`;
      const headers = { "Content-type": "application/json" ,  token : this.token };
      const body = {
        no: this.no,
        title: this.title,
        content: this.editorData,
        keyword: this.keyword,
      };
      const response = await axios.post(url, body, { headers });
      console.log(response);
      if(response.data.status === 200){
        alert("수정 완료되었습니다");
        this.$router.push(`/freecontent?no=${this.no}`)
      }
    },
    async refresh() {
      const url = `/REST/board/selectone?no=${this.no}`;

      const headers = { "Content-type": "application/json" };
      const response = await axios.get(url, headers);
      console.log(response);
      if (response.data.status === 200) {
        this.list = response.data.board;
        this.editorData = this.list.content;
        this.title = this.list.title;
        this.keyword = this.list.keyword;
      }
    },
  },
};
</script>

<style scoped>
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

.btn2 {
  text-align: center;
}
.confirm {
  text-align: center;
  clear: both;
  margin-top: 30px;
  padding: 10px 50px;
  border: none;
  cursor: pointer;
  background: #2752be;
  color: white;
  border-radius: 3px 3px 3px 3px;
  margin-bottom: 50px;
}

.ckeditor {
  width: 85%;
  box-sizing: border-box;
  float: right;

  height: auto;
}
.tti {
  margin-top: 30px;
}
.title {
  width: 85%;
  height: 45px;
  font-size: 14px;
  padding: 10px;
  outline: none;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 3px 3px 3px 3px;
}
label {
  width: 15%;
  display: inline-block;
  margin-bottom: 30px;
}
.keyword {
  width: 85%;
  height: 45px;
  font-size: 14px;
  padding: 10px;
  outline: none;
  border: 1px solid #dddddd;
  border-radius: 3px 3px 3px 3px;
}
.wrap {
  width: 1120px;
  margin: 0 auto;
  height: auto;
}
.hr {
  margin: 20px 0px;
  border-bottom: 1px solid #ccc;
}
</style>