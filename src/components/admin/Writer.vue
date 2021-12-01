<template>
	<div class="container">
		<h2 class="title">글쓰기</h2>

		<hr style="margin : 20px 0;">
		
		<div class="item-div">
			<label for="category" class="label">카테고리</label>
			<el-select v-model="value" placeholder="Select">
				<el-option
					v-for="item in category"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
					<span style="float: left">{{ item.label }}</span>
					<span
						style="float: right; color: var(--el-text-color-secondary); font-size: 13px"
						>{{ item.value }}</span
					>
				</el-option>
			</el-select>
		</div>

		<div class="item-div">
			<label for="wrtier" class="label">작성자</label>
			<input type="text" id="writer" class="input" placeholder="작성자" readonly>
		</div>

		<div class="item-div">
			<label for="title" class="label">제목</label>
			<input type="text" id="title" class="input" placeholder="제목" ref="title">
		</div>

		<div class="item-div">
			<label for="content" class="label">내용</label>
			<textarea class="input" id="content" rows="8" v-model="content" style="resize: vetical;" ref="content"></textarea>
		</div>

		<div class="item-div">
			<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :auto-upload="false" :on-remove="handleRemove" @change="changeFile" ref="file">
				<el-button size="small" type="primary">Click to upload</el-button>
			</el-upload>
			<hr style="margin : 20px 0;">

			<div class="button-div">
				<el-button type="primary" plain class="submit-button" @click="postRegistration">글등록</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

  export default {
    methods:{
			// 이미지 업로드시 파일 등록
      changeFile(file){
				console.log("change File - ", file);
				this.images.push(file);
				console.log(this.images);
      },

			handleRemove(file, filelist) {
        console.log("remove - ", file, ", ", filelist);
      },

      handleDownload(file) {
        console.log(file)
      },

			// 글등록 (여기서 글등록)
			async postRegistration(){
				const url = `/REST/board/insert`;
				const headers = {"Content-type" : "multipart/form-data"}	// file 전송
				const body = new FormData();
				body.append("category", this.category);
				body.append("title", this.title);
				body.append("content", this.content);
				
				const response = await axios.get(url, body, { headers });
				console.log("board data = ", response);

				if(this.category === ""){
					alert("카테고리를 선택해 주세요.");
					this.$refs.category.focus();
					return;
				}

				if(this.title === ""){
					alert("제목을 입력해 주세요.");
					this.$refs.title.focus();
					return;
				}

				if(this.content === ""){
					alert("내용을 입력해 주세요.");
					this.$refs.content.focus();
					return;
				}

				if(this.filelist.length < 1){
					alert("사진을 첨부하여 주세요.");
					this.$refs.file.focus();
					return;
				}
			}
    },

    data(){
      return{
				category : [
					{label : "전체", value : "all"},
					{label : "여행후기", value : "review"},
					{label : "여행정보", value : "info"},
					{label : "질문", value : "que"},
				],
				value : '',

        title : '',
        content : '',

				no : '',
				countreply : '',
				hit : '',
				regdate : '',
				state : '',
				writer : '',

        images : [],
				filelist:[]
      }
    }
  }
</script>

<style src='@/assets/css/writer.css' scoped>
</style>