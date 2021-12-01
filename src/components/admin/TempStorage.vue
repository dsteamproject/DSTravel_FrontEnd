<template>
	<div class="container">
		<h2 class="title">여행지 임시저장소</h2>

		<hr style="margin : 20px 0;">

		<div>
			<table class="table">
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>주소</th>
						<th>도시</th>
						<th>type</th>						
						<th>사용자</th>
						<th width="110"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in tempData" v-bind:key="item">
						<td>{{item.no}}</td>
						<td>{{item.title}}</td>
						<td>{{item.addr}}</td>
						<td>{{item.city.name}}</td>
						<td>{{item.type.name}}</td>
						<td>{{item.user}}</td>
						<td>
							<el-button-group>
								<el-button circle @click="approval(item.no)">승인</el-button>
								<el-button type="danger" plain circle @click="companion(item.no)">반려</el-button>
							</el-button-group>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
		created(){
			this.getTemp();
		},

		methods:{
			async getTemp(){
				const url = `/REST/admin/TDtem?state=0`
				const headers = { "Content-Type" : "application/json", token : this.token};
				const response = await axios.get(url, {headers});

				console.log("get temp -- ", response);
				if(response.data.status === 200){
					this.tempData = response.data.AdminTDtemList;
				}
			},

			approval(val){
				this.$confirm('승인 하시겠습니까?', {
					confirmButtonText: '확인', cancelButtonText: '취소'
				}). then(async () => {
					const url = `/REST/admin/TDtem?no=${val}&review=Approval`;
					const obj = ''
					const headers = { "Content-Type" : "application/json", token : this.token};
					const response = await axios.put(url, obj, {headers});
					console.log("승인 - ", response);

					if(response.data.status === 200){
						this.$message({ showClose: true, type: 'success', message: '승인 완료' });
						// this.pageRefresh();
						this.getTemp();
					}
				}).catch(() => {
					this.$message({ showClose: true, type: 'info', message: '승인 취소' })
				});
			},

			companion(val){
				this.$confirm('반려 하시겠습니까?', {
					confirmButtonText: '확인', cancelButtonText: '취소'
				}). then(async () => {
					const url = `/REST/admin/TDtem?no=${val}&review=Companion`;
					const obj = ''
					const headers = { "Content-Type" : "application/json", token : this.token};
					const response = await axios.put(url, obj, {headers});
					console.log("반려 - ", response);

					if(response.data.status === 200){
						this.$message({ showClose: true, type: 'success', message: '반려 완료' });
						// this.pageRefresh();
						this.getTemp();
					}
				}).catch(() => {
					this.$message({ showClose: true, type: 'info', message: '반려 취소' })
				});
			},

			// Page 새로고침함수
			pageRefresh(){
				// await this.$router.go();
				this.$router.push({path:'/admin/tempstorage'});
			},
		},

		data(){
			return{
				token : sessionStorage.getItem("TOKEN"),
				tempData : []
			}
		}
	}
</script>

<style src='@/assets/css/tempStorage.css' scoped></style>