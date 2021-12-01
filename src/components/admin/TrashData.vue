<template>
	<div class="container">
		<div class="row2">
			<h2 class="title">휴지통</h2>

				<div class="auto">
					<div>
						<el-input id="input-search" placeholder="검색어" v-model="searchInput" class="input-with-select">
							<template #append>
								<el-button icon="el-icon-search" @click="trashDataSearch"></el-button>
							</template>
						</el-input>
					</div>
				</div>
			</div>

			<hr style="margin : 20px 0;">

			<el-select v-model="value" placeholder="Select" @change="getTrashData">
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
				

			<div>
				<table class="table">
					<thead>
						<tr>
							<th>번호</th>
							<th>카테고리</th>
							<th>제목</th>
							<th>내용</th>
							<th>조회수</th>
							<th>작성자</th>
							<th>등록일</th>
							<th>좋아요</th>
							<th width="90"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in boardData" v-bind:key="item" v-show="item.title && item.content && item.category">
							<td>{{item.no}}</td>
							<td>{{item.category}}</td>
							<td>{{item.title}}</td>
							<td>{{item.content}}</td>
							<td>{{item.hit}}</td>
							<td>{{item.member}}</td>
							<td>{{item.regdate.substring(0, 10)}}</td>
							<td>{{item.good}}</td>
							<td class="btn-control">
								<el-button-group v-if="item.title && item.content && item.category">
									<el-button icon="el-icon-edit" circle @click="boardRestore(item.no)"></el-button>
									<el-button type="danger" plain icon="el-icon-delete" circle @click="boardDelete(item.no)"></el-button>
								</el-button-group>

								<div v-if="!item.title && !item.content && !item.category">
									<span>삭제된 데이터</span>
								</div>
							</td>
						</tr>

						<tr v-for="item in boardData" v-bind:key="item"  v-show="!item.title && !item.content && !item.category">
							<td>{{item.no}}</td>
							<td>{{item.category}}</td>
							<td>{{item.title}}</td>
							<td>{{item.content}}</td>
							<td>{{item.hit}}</td>
							<td>{{item.member}}</td>
							<td>{{item.regdate.substring(0, 10)}}</td>
							<td>{{item.good}}</td>
							<td>
								<el-button-group v-if="item.title && item.content && item.category">
									<el-button icon="el-icon-edit" circle @click="boardRestore(item.no)"></el-button>
									<el-button type="danger" plain icon="el-icon-delete" circle @click="boardDelete(item.no)"></el-button>
								</el-button-group>

								<div v-if="!item.title && !item.content && !item.category" style="color : #ff8585;">
									<span>삭제된 데이터</span>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

			<div>
				<el-pagination class="pagination" layout="prev, pager, next" :total="boardCount*10" @current-change="pagenationChange"> </el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
  export default {
		async created(){
			await this.getTrashData();
		},

    methods:{
			// 게시글 삭제
			async boardDelete(val){
				this.$confirm('삭제를 하시겠습니까?', {
					confirmButtonText: '확인', cancelButtonText: '취소'
				}). then(async () => {
					const url = `/REST/admin/board/delete?no=${val}`;
					const obj = ''
					const headers = { "Content-Type" : "application/json", token : this.token};
					const response = await axios.put(url, obj, {headers});

					if(response.data.status === 200){
						this.$message({ showClose: true, type: 'success', message: '삭제완료' });
						// this.pageRefresh();
						this.getTrashData();
					}
				}).catch(() => {
					this.$message({ showClose: true, type: 'info', message: '삭제실패' })
				});
			},

			// 게시글 state 변경
			async boardRestore(val){
				this.$confirm('복구 하시겠습니까?', {
					confirmButtonText: '확인', cancelButtonText: '취소'
				}). then(async () => {
					const url = `/REST/admin/board/update?no=${val}`
					const obj = {};
					const headers = { "Content-Type" : "application/json", token : this.token};
					const response = await axios.put(url, obj, {headers});

					if(response.data.status === 200){
						this.$message({ showClose: true, type: 'success', message: '상태 변경 완료' });
						// this.pageRefresh();
						this.getTrashData();
					}
				}).catch(() => {
					this.$message({ showClose: true, type: 'info', message: '상태 변경 취소' })
				});
			},

			trashDataSearch(){
				this.getTrashData();
			},

			// Page 새로고침함수
			pageRefresh(){
				// this.$router.push({path:'/admin/trash'});
				this.$router.go(this.$router.currentRoute)
			},

			async getTrashData(){
				var url = `/REST/admin/board?state=${this.state}&page=${this.activePage}&keyword=${this.searchInput}`;

				if(this.value !== ""){
					url = `/REST/admin/board?category=${this.value}&page=${this.activePage}&state=${this.state}&keyword=${this.searchInput}`;
				}
				
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});

				console.log("board - ", response);
				if(response.data.status == 200){
					this.boardCount = response.data.cnt;
					this.boardData = response.data.boardlist;

					console.log("board data = ", this.boardData);
				}	
			},

			pagenationChange(index){
				this.activePage = index;	// 현재 페이지를 바꿈
				console.log("this page = ", this.activePage);
			},
    },

    data(){
      return{
				token : sessionStorage.getItem("TOKEN"),
				no : this.$route.query.no,
				boardData : [],
				boardCount : 0,
				activePage : 1,
				category : [
					{label : "전체", value : ""},
					{label : "여행후기", value : "review"},
					{label : "여행정보", value : "info"},
					{label : "질문", value : "que"},
				],
				value : '',
				searchInput:'',
				state : 0
      }
    }
  }
</script>

<style src='@/assets/css/trashData.css' scoped></style>