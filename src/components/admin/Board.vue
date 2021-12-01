<template>
	<div class="container">
		<div class="row2">
			<h2 class="title">게시판</h2>

			<div class="auto">
				<div>
					<el-input v-model="searchInput" placeholder="검색어" class="input-with-select">
						<template #prepend>
							<el-select v-model="keywordType" @change="searchKeyword" placeholder="제목" style="width: 110px">
								<el-option label="제목" value="title"></el-option>
								<el-option label="작성자" value="member"></el-option>
							</el-select>
						</template>
						<template #append>
							<el-button icon="el-icon-search" @click="boardSearch"></el-button>
						</template>
					</el-input>
				</div>
			</div>
		</div>

		<hr style="margin : 20px 0;">

		<el-select v-model="value" placeholder="Select" @change="getBoard">
			<el-option
				v-for="item in category"
				:key="item.value"
				:label="item.label"
				:value="item.value"
			>
				<span style="float: left">{{ item.label }}</span>
				<span
					style="float: right; color: var(--el-text-color-secondary); font-size: 13px">
					{{ item.value }}
				</span>
			</el-option>
		</el-select>
		

		<div>
			<table class="table">
				<thead>
					<tr>
						<th width="50">번호 
							<font-awesome-icon v-if="orderIndex === 'DESC' && orederByType === 'no'" icon="sort-down" @click="sort('no', 'ASC')"/>
							<font-awesome-icon v-else icon="sort-up" @click="sort('no', 'DESC')"/>
						</th>
						<th width="60">카테고리</th>
						<th width="100">제목</th>
						<th width="100">내용</th>
						<th>조회수</th>
						<th>작성자</th>
						<th>등록일
							<font-awesome-icon v-if="orderIndex === 'DESC' && orederByType === 'regdate'" icon="sort-down" @click="sort('regdate', 'ASC')"/>
							<font-awesome-icon v-else icon="sort-up" @click="sort('regdate', 'DESC')"/>
						</th><!---->
						<th>좋아요</th>
						<th>신고수
							<font-awesome-icon v-if="orderIndex === 'DESC' && orederByType === 'warning'" icon="sort-down" @click="sort('warning', 'ASC')"/>
							<font-awesome-icon v-else icon="sort-up" @click="sort('warning', 'DESC')"/>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in boardData" v-bind:key="item">
						<td>{{item.no}}</td>
						<td>{{item.category}}</td>
						<td>
							<router-link to="#" @click="detailPage(item.no)">{{item.title}}</router-link>
						</td>
						<el-popover v-if="bottomPop" placement="bottom" title="Title" :width="500" trigger="hover">
							<template #reference>
								<td width="50">
									<span class="table-td-span" @mouseover="mouseOver(item.no, $event)">{{item.content}}</span>
								</td>
							</template>
							<table class="popup-table">
								<thead>
									<tr>
										<th><span>제목</span></th>
										<th><span>내용</span></th>
										<th><span>주제</span></th>
										<th><span>작성자</span></th>
										<th><span>조회수</span></th>
										<th><span>좋아요</span></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width="50" style="word-break:break-all;">{{mouseOverData.title}}</td>
										<td width="100" style="word-break:break-all;">{{mouseOverData.content}}</td>
										<td><span>{{mouseOverData.category}}</span></td>
										<td><span>{{mouseOverData.member}}</span></td>
										<td><span>{{mouseOverData.hit}}</span></td>
										<td><span>{{mouseOverData.good}}</span></td>
									</tr>
								</tbody>
							</table>
						</el-popover>

						<el-popover v-if="!bottomPop" placement="top-start" title="Title" :width="500" trigger="hover">
							<template #reference>
								<td width="50">
									<span class="table-td-span" @mouseover="mouseOver(item.no, $event)">{{item.content}}</span>
								</td>
							</template>
							<table class="popup-table">
								<thead>
									<tr>
										<th><span>제목</span></th>
										<th><span>내용</span></th>
										<th><span>주제</span></th>
										<th><span>작성자</span></th>
										<th><span>조회수</span></th>
										<th><span>좋아요</span></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width="50" style="word-break:break-all;">{{mouseOverData.title}}</td>
										<td width="100" style="word-break:break-all;">{{mouseOverData.content}}</td>
										<td><span>{{mouseOverData.category}}</span></td>
										<td><span>{{mouseOverData.member}}</span></td>
										<td><span>{{mouseOverData.hit}}</span></td>
										<td><span>{{mouseOverData.good}}</span></td>
									</tr>
								</tbody>
							</table>
						</el-popover>

						<td>{{item.hit}}</td>
						<td>{{item.member}}</td>
						<td>{{item.regdate.substring(0, 10)}}</td>
						<td>{{item.good}}</td>
						<td>{{item.warning}}
							<font-awesome-icon v-if="item.warning < 5" icon="exclamation-circle" class="ic-warning warning_0" />
							<font-awesome-icon v-else-if="item.warning < 9" icon="exclamation-circle" class="ic-warning warning_5" />
							<font-awesome-icon v-else icon="exclamation-circle" class="ic-warning warning_10" />
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
			await this.getBoard();
		},

    methods:{
			// 게시판 데이터 가져오기
			async getBoard(){
				var url = `/REST/admin/board?page=${this.activePage}&state=${this.state}&keywordtype=${this.keywordType}&keyword=${this.searchInput}&orderbytype=${this.orederByType}&orderby=${this.orderIndex}`;

				if(this.value !== ""){
					url = `/REST/admin/board?category=${this.value}&page=${this.activePage}&state=${this.state}&keywordtype=${this.keywordType}&keyword=${this.searchInput}&orderbytype=${this.orederByType}&orderby=${this.orderIndex}`;
				}
				
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});

				// console.log("board", response);

				if(response.data.status == 200){
					this.boardCount = response.data.cnt;
					this.boardData = response.data.boardlist;
				}	

				// console.log("board Data - ", this.boardData);
			},

			// 게시판 데이터 하나만 가져오기
			async getBoardOne(idx){
				const url = `/REST/admin/board/selectOne?no=${idx}`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});

				if(response.data.status === 200){
					this.mouseOverData = response.data.board;
					this.warning = response.data.board.warning;
				}
			},

			searchKeyword(){
				// console.log("keyword Change - ", this.select);
				if(!this.keywordType) this.getBoard();
			},

			mouseOver(idx, event){
				// 해당 idx 번호 게시물 내용 받아오기
				this.getBoardOne(idx);

				var mouseXPos = event.pageX;
				var mouseYPos = event.pageY;

				this.currentMousePostion = {"x":mouseXPos, "y":mouseYPos};
				this.bottomPop = mouseYPos < 500 ? true:false;
			},

			boardSearch(){
				this.getBoard();
			},

      detailPage(no){
				console.log("detail cate - ", this.value);
        this.$router.push({ path : "detailpage", query : {no:no, category:this.value}});
      },

			pagenationChange(index){
				this.activePage = index;	// 현재 페이지를 바꿈
				console.log("this page = ", this.activePage);
				this.getBoard();
			},

			sort(index, sortdata){
				// this.orderIndex = this.orderIndex === "DESC" ? "ASC":"DESC";
				this.orderIndex = sortdata;
				this.orederByType = index;

				this.getBoard();
			}
    },

    data(){
      return{
				token : sessionStorage.getItem("TOKEN"),
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
				searchInput : '',
				state : 1,
				selected: '',
				mouseEvent: false,
				mouseOverData: '',
				currentMousePosition:'',
				bottomPop: true,

				orederByType: 'no',
				orderIndex: "DESC",
				warning:'',
				keywordType:'',
				// test:[]
      }
    }
  }
</script>

<style src='@/assets/css/board.css' scoped></style>