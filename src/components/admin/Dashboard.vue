<template>
	<div class="container">
		<h2 class="title">Dashboard</h2>
	
		<hr style="margin : 20px 0;">

		<!-- 여기는 차트를 보여줌 -->
		<div class="chart-view">
			<BarChart style="width : 75%; float:left; margin: 50px 0;"></BarChart>
			<LineChart style="width : 75%; float:right; margin: 50px 0;"></LineChart>
		</div>

		<hr style="margin : 100px 0;">

		<h2 class="title">게시물 정보</h2>
		<div class="table-container" style="overflow:hidden;">
			<table class="table" style="float:left;">
				<caption>게시판</caption>
				<tr>
					<th scope="row">총 게시물 갯수</th>
					<td width="100">{{boardData.length}}</td>
				</tr>
				<tr>
					<th scope="row">삭제 대기 게시물</th>
					<td>{{cancleWaitBoard}}</td>
				</tr>

				<tr>
					<th scope="row">삭제된 게시물</th>
					<td>{{deleteBoard}}</td>
				</tr>
			</table>

			<table class="table" style="float:right;">
				<caption>여행지 수정요청</caption>
				<tr>
					<th scope="row">여행지 추가 요청 갯수</th>
					<td width="100">{{tdTemp.length}}</td>
				</tr>
				<tr>
					<th scope="row">승인된 데이터</th>
					<td width="100">{{approvalData.length}}</td>
				</tr>
				<tr>
					<th scope="row">반려된 데이터</th>
					<td width="100">{{returnData.length}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

import BarChart from '@/chart/BarChart.vue'
import LineChart from '@/chart/LineChart.vue'

  export default {
    components:{
			BarChart,
			LineChart,
			// Board,
		},

		created(){
			this.getBoardTotal();
			this.getTDTemp();
		},

		methods:{
			async getBoardTotal(){
				const url = `/REST/admin/board/selectAll`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});

				if(response.data.status === 200){
					this.boardData = response.data.board;
					console.log("board - ", this.boardData);

					for(let i = 0; i < this.boardData.length; i++){
						if(this.boardData[i].state == 0){
							if(!this.boardData[i].title && !this.boardData[i].content && !this.boardData[i].category){
								this.cancleWaitBoard++;
							}

							else this.deleteBoard++;
						}
					}
				}
			},

			async getTDTemp(){
				const url = `/REST/admin/TDtem?state=0`
				const approvalDataUrl = `/REST/admin/TDtem?state=1`
				const returnDataUrl = `/REST/admin/TDtem?state=2`
				const headers = { "Content-Type" : "application/json", token : this.token};
				const response = await axios.get(url, {headers});
				const approvalRes = await axios.get(approvalDataUrl, {headers});
				const returnRes = await axios.get(returnDataUrl, {headers});

				if(response.data.status === 200){
					this.tdTemp = response.data.AdminTDtemList;
					this.returnData = returnRes.data.AdminTDtemList;
					this.approvalData = approvalRes.data.AdminTDtemList;
				}
			}
		},

		data(){
			return{
				token : sessionStorage.getItem("TOKEN"),
				boardData : [],
				tdTemp : [],
				returnData : [],
				approvalData : [],
				cancleWaitBoard : 0,
				deleteBoard : 0
			}
		}
  }
</script>

<style src='@/assets/css/dashboard.css' scoped>
</style>