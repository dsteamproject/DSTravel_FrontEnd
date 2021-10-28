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
          
        >
        </ckeditor>
        <div class="btn2">
          <button class="confirm" @click="handleconfirm">완료</button>
         
          </div>
         
           
             <div v-html="editorData" class="ck-content"></div>
      </div>
    
    </div>
  </div>
</template>

<script>


 import CKEditor from '@ckeditor/ckeditor5-vue';
import '@ckeditor/ckeditor5-build-classic/build/translations/ko';


import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
      components: {
            ckeditor: CKEditor.component
        },
  data() {
    return {
 
      editor: ClassicEditor,
      editorData: "",
   
      editorConfig: {
        language: 'ko',
       
        editorConfig: {
      fontSize:{
        option:[
         'tiny',
'small',
'big',
'huge',
        ]
      },
 
            simpleUpload: {
            // The URL that the images are uploaded to.
            uploadUrl: 'http://example.com',

            // Enable the XMLHttpRequest.withCredentials property.
            withCredentials: true,

            // Headers sent along with the XMLHttpRequest to the upload server.
            headers: {
                'X-CSRF-TOKEN': 'CSRF-Token',
                Authorization: 'Bearer <JSON Web Token>'
            }
        },
  toolbar: {
    items: [
      
          'heading',
          '|',
          'fontSize',
          'fontFamily',
          'fontColor',
          'fontBackgroundColor',
          'imageInsert',
          '|',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'highlight',
          'removeFormat',
          '|',
          'alignment',
          '|',
          'numberedList',
          'bulletedList',
          '|',
          'indent',
          'outdent',
          '|',
          'todoList',
          'link',
          'blockQuote',
          'imageUpload',
          'insertTable',
          'mediaEmbed',
          '|',
          'undo',
          'redo',
          'CKFinder'
        ]
      },

    },
      },
      
    };
  },
  methods:{
    handleconfirm(){
      console.log(this.editorData)
    }
  }

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

.btn2{
  text-align: center;
}
.confirm{
  text-align: center;
  clear: both;
  margin-top:30px;
  padding:10px 50px;
  border:none;
  cursor: pointer;
  background:#2752be  ;
  color:white;
  border-radius: 3px 3px 3px 3px;
}


.ckeditor {
  width: 85%;
  box-sizing: border-box;
  float: right;

  height: 500px;
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