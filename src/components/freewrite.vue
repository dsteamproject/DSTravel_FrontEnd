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
          @ready="onReady"
        >
        </ckeditor>
        <div class="btn2">
          <button class="confirm" @click="handleconfirm">완료</button>
         
          </div>
         
           
           
      </div>
      <img :src="this.firstimg">
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
        created(){
           
        },
  data() {
    return {
      firstimg:"",
      editor: ClassicEditor,
      editorData: "",
   
      editorConfig: {
          height: '500px',
        language: 'ko',
        
  ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command.
          uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
             options: {
                resourceType: 'Images'
            },
                openerMethod: 'popup'
        },
        editorConfig: {
      fontSize:{
        option:[
         'tiny',
'small',
'big',
'huge',
        ]
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
        image: {
        toolbar: [
          'imageTextAlternative',
          'imageStyle:full',
          'imageStyle:side',
          'linkImage'
        ]
      },
         table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells'
        ]
      },
      licenseKey: ''

    },
      },
      
    };
  },
  methods:{
    handleconfirm(){
      console.log(this.editorData)
      const content = this.editorData
       const image = content.split('img').map(v => v.includes('src') === true && v.split("src="));
         const image2 = image.map(v => v && v[1]?.split("></figure>"))
         console.log(image2);
           image2.map(v => v && v[0].slice(1, v[0]?.length - 1)).filter(v => v !== false);
           var first = image2[1];
       console.log(first[0]);
      this.firstimg = first[0].replace(/"/g,'');




    }
  }

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
   .ck-content { height:500px; }
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