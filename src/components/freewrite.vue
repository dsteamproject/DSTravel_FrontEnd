<template>
  <div>
    <div class="wrap">
      <h2 class="tti">커뮤니티</h2>
      <div class="hr"></div>
      <label>작성자</label> <span>박병근</span><br />
      <label>말머리</label>
      <select class="keyword">
        <option>잡담</option>
        <option>여행후기</option>
        <option>여행정보</option>
        <option>질문</option></select
      ><br />
      <label>제목</label><input type="text" class="title" /><br />
      <label>내용</label>
      <div class="ckeditor">
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ckeditor>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
};
</script>

<style scoped>
.ck-editor__editable_inline {
  min-height: 400px;
}
.editor__editable {
  min-height: 500px;
}

.ckeditor {
  width: 85%;
  box-sizing: border-box;
  float: right;
  font-size: unset;
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
}
.hr {
  margin: 20px 0px;
  border-bottom: 1px solid #ccc;
}
</style>