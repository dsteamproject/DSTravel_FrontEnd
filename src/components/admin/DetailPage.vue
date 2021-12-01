<template>
	<div class="container">
		<router-link to="/admin/board">목록으로 이동</router-link>

		<hr style="margin : 20px 0;">

		<div class="item-div">
			<label for="no" class="label">번호</label>
			<input type="text" id="no" class="input" :value="item.no" readonly>
		</div>

		<!-- <div class="item-div">
			<label for="category" class="label">카테고리</label>
			<input type="text" id="category" class="input" :value="item.category">
		</div> -->
		<div class="item-div">
			<label for="category" class="label">카테고리</label>

			<el-select v-model="value" placeholder="Select" @change="categoryChange">
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
			<label for="title" class="label">제목</label>
			<input type="text" id="title" class="input" :value="item.title">
		</div>

		<div class="item-div">
			<label for="content" class="label">내용</label>
			<textarea class="input" id="content" rows="8" :value="item.content" style="resize : vertical;"></textarea>
		</div>

		<div class="item-div">
			<label for="hit" class="label">조회수</label>
			<input type="text" id="hit" class="input" :value="item.hit" readonly>
		</div>

		<div class="item-div">
			<label for="writer" class="label">작성자</label>
			<input type="text" id="writer" class="input" :value="this.id" readonly>
		</div>

		<div class="item-div">
			<label for="regdate" class="label">등록일</label>
			<input type="text" id="regdate" class="input" :value="this.regdate" readonly>
		</div>

		<div class="item-div">
			<label for="good" class="label">좋아요</label>
			<input type="text" id="good" class="input" :value="item.good" readonly>
		</div>

		<!-- <div class="item-div">
			<label for="file" class="file">이미지</label>
		</div> -->

		<div class="item-div">
			<el-button-group style="float : left; margin : 10px 50px;">
				<el-button type="primary" @click="boardUpdate">수정</el-button>
				<el-button type="primary" @click="boardDelete">삭제</el-button>
			</el-button-group>

			<el-button-group style="float : right; margin : 10px 50px;">
				<el-button type="primary" round @click="prev" icon="el-icon-arrow-left">이전글</el-button>
				<el-button type="primary" round @click="next">다음글<i class="el-icon-arrow-right"></i></el-button>
			</el-button-group>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
  export default {
		async created(){
			const url = `/REST/board/selectone?no=${this.no}`;
			const headers = { "Content-Type" : "application/json", token : this.token };
			const response = await axios.get(url, {headers});

			console.log("select board one = ", response);
			this.value = this.boardCategory;

			if(response.data.status === 200){
				this.item = response.data.board;
				this.id = this.item.member.id;
			}


			let yyyy = response.data.board.regdate.substr(0,4);
			let mm = response.data.board.regdate.substr(5,2);
			let dd = response.data.board.regdate.substr(8,2);
			this.regdate = yyyy + "/" + mm + "/" + dd;

		},

    methods:{
			categoryChange(){
				console.log(`category value - ${this.value}`)
			},

			// 게시글 삭제
			boardDelete(){
				this.$confirm('삭제를 하시겠습니까?', {
					confirmButtonText: '확인', cancelButtonText: '취소'
				}). then(async () => {
					const url = `/REST/board/delete?no=${this.no}`;
					const obj = ''
					const headers = { "Content-Type" : "application/json", token : this.token};
					const response = await axios.put(url, obj, {headers});

					console.log("delete res = ", response);

					if(response.data.status === 200){
						this.$message({ showClose: true, type: 'success', message: '삭제완료' });
						this.$router.push({ path : '/admin/board' })
					}
				}).catch(() => {
					this.$message({ showClose: true, type: 'info', message: '삭제실패' })
				});
			},

			// 게시글 수정
			async boardUpdate(){
				console.log(this.token);
				const url = `/REST/board/update?no=${this.no}`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const body = { title : this.title, content : this.content};
				const response = await axios.put(url, body, {headers});

				console.log("update res = ", response);

				// this.$confirm('수정 하시겠습니까?', {
				// 	confirmButtonText: '확인', cancelButtonText: '취소'
				// }). then(() => {
				// 	this.$message({ showClose: true, type: 'success', message: '수정완료' });
				// 	this.$router.push({ path : '/admin/board' })
				// }).catch(() => {
				// 	this.$message({ showClose: true, type: 'info', message: '수정실패' })
				// });
			},

			async prev(){
				console.log(this.boardCategory);
				

				const url = `/REST/board/selectone?no=${this.no}&category=${this.boardCategory}`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});

				console.log("prev = ", response)

				if(response.data.status === 200){
					this.item = response.data.board;
					// this.$router.push({ path : "detailpage", query : {no:response.data.prev, category:this.value}});
					// this.$router.go(this.$router.currentRoute)
				}
			},

			async next(){

				const url = `/REST/board/selectone?no=${this.no}&category=${this.boardCategory}`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});

				if(response.data.status === 200){
					this.item = response.data.board;
				}

			},

			
    },

    data(){
      return{
				token : sessionStorage.getItem("TOKEN"),
        no : this.$route.query.no,
				boardCategory : this.$route.query.category,
				item : [],
				regdate : '',
        title : 'test title',
        content : 'test content',
				centerDialogVisible: false,
				items : this.$route.query.items,
				id : '',

				category : [
					{label : "전체", value : "all"},
					{label : "여행후기", value : "review"},
					{label : "여행정보", value : "info"},
					{label : "질문", value : "que"},
				],
				value : '',
      }
    }
  }
</script>

<style src='@/assets/css/detailpage.css' scoped>
</style>