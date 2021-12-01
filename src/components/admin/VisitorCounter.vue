<template>
	<div>
		<input type="button" value="date test" @click="dateFormat">
		<input type="button" value="방문자 보내기" @click="postVisitData">
		<input type="button" value="오늘 총 방문자 보내기" @click="postTodayTotal">
		<input type="button" value="총 방문자 가져오기	" @click="getTotalVisitor">


		<input type="button" value="Today Count Total" @click="getTodayTotal">

	</div>
</template>

<script>
import axios from 'axios'
	export default {
		data(){
			return{
				token : sessionStorage.getItem("TOKEN"),
				date : '',
				todayTotal : 0,	// 오늘 방문자 토탈
			}
		},

		methods:{
			// test(){
			// 	const store = useStore();
			// 	console.log(store);
			// },
			
			async postVisitData(){
				await this.dateFormat();

				const url = `/REST/admin/todayVisitor`;
				const body = { "today_visit_count" : 1 , "today_visit_regdate" : this.date};
				const headers = { "Content-Type" : "application/json", "token" : this.token };

				const respone = await axios.post(url, body, {headers});
				console.log(respone);
			},

			async postTodayTotal(){
				console.log("total data - ", this.todayTotal)
				const url = `/REST/admin/visitorCount`;
				const body = { "visit_count" : this.todayTotal , "visit_regdate" : this.date};
				const headers = { "Content-Type" : "application/json", "token" : this.token };

				const respone = await axios.post(url, body, {headers});
				console.log("posttodayTotal - ", respone);
			},

			async getTodayTotal(){
				const url = `/REST/admin/todayTotal`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});

				let today = new Date();
				let date = today.getDate();

				if(response.data.status === 200){
					this.todayTotal = 0;	// today count 초기화

					for(let i = 0; i < response.data.todaycount.length; i++){
						let tt = response.data.todaycount[i].today_visit_regdate.split("-")[2].substring(0, 2);
						if(Number(tt) === date){
							this.todayTotal += response.data.todaycount[i].today_visit_count;
						}
					}
				}
			},

			// chart로 이동
			async getTotalVisitor(){
				const url = `/REST/admin/visitorTotal`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});
				console.log(response);
			},

			dateFormat(){
				let today = new Date();
				let years = today.getFullYear();
				let month = today.getMonth() + 1;
				let day = today.getDate();
				
				this.date = `${years}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;
			},
		}
	}
</script>