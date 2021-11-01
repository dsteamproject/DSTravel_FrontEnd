<template>
  <div>
    <div class="wrap">
      <h2 class="tti">커뮤니티</h2>
      <div class="hr"></div>
      <label>작성자</label> <span>박병근</span><br />
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
  created() {
    console.log(this.token);
  },
  data() {
    return {
      title: "",
      keyword: "",
      firstimg: "",
      editor: ClassicEditor,
      editorData: "",
      token: sessionStorage.getItem("TOKEN"),
      editorConfig: {
        language: "ko",
      },
    };
  },
  methods: {
    async handleconfirm() {
      // console.log(this.editorData);
      // const image = this.editorData;
      // const imgReg = /(<img[^>]*src\s*=\s*["']?([^>"']+)["']?[^>]*>)/g;
      // const regex = /<img[^>]+src=["']?([^>"']+)["']?[^>]*>/g;
      // let extractUrl = [];
      // if (image.indexOf("img") === true) {
      //   extractUrl = regex.exec(image);
      //   this.firstimg = extractUrl[1];
      //   let imagearray = [];
      //   while (imgReg.test(image)) {
      //     imagearray.push(RegExp.$2.trim());
      //   }

      //   const dataURLtoFile = (dataurl, fileName) => {
      //     var arr = dataurl.split(",");
      //     var mime = arr[0].match(/:(.*?);/)[1];
      //     var bstr = atob(arr[1]);
      //     var n = bstr.length;
      //     var u8arr = new Uint8Array(n);

      //     while (n--) {
      //       u8arr[n] = bstr.charCodeAt(n);
      //     }
      //     return new File([u8arr], fileName, { type: mime });
      //   };

      //   var file = dataURLtoFile(this.firstimg, "파일이름", { type: "mime" });
      //   console.log(file);
      // }

      // ===================================================================
      
          const url = `/REST/board/insert`;
      const headers = { "Content-type": "application/json" ,
      token : this.token };
    
      const body = {
        title: "123",
        
      };
      console.log(headers)
      const response = await axios.post(url, body, { headers });
      console.log(response);
      if (response.data.status === 200) {
        alert("글 작성완료");
        this.$router.push({ path: "/board/free" });
      }
    },
  },
};
</script>
<style>
.ck-editor__editable {
  min-height: 500px;
}
.ck.ck-editor__editable_inline {
  margin-left: 20px;
  width: auto;
  margin: 0 auto;
  list-style-position: inside;
}
</style>
<style scoped>
.ck-editor__editable {
  min-height: 500px;
}
.ck-content {
  height: 500px;
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