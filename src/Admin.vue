<template>
	<el-container>
		<el-aside width="200px">
				<el-row class="tac">
					<el-col :span="24">
						<el-menu class="menubar" :default-active="activeIndex" @select="changeMenu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
							<h1 class="main-title">DS Trable</h1>
							<el-menu-item index="1">
								<i class="el-icon-location"></i>
									<span>Dashboard</span>
							</el-menu-item>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
									<span>Board</span>
							</el-menu-item>
							<el-menu-item index="3">
								<i class="el-icon-document"></i>
									<span>Writer</span>
							</el-menu-item>
							<el-menu-item index="4">
								<i class="el-icon-user"></i>
									<span>Customer</span>
							</el-menu-item>
							<el-menu-item index="5">
								<i class="el-icon-delete"></i>
									<span>TrashData</span>
							</el-menu-item>
							<el-menu-item index="6">
								<i class="el-icon-folder"></i>
									<span>TempStorage</span>
							</el-menu-item>

							<el-row style="justify-content : center; margin: 50px 0">
								<el-card :body-style="{ padding: '0px' }" style="background-color:rgba(114, 122, 132, 0.25); border:none; border-radius:15px;">
									<div style="padding: 15px; margin:auto;" v-if="testBoolean">
										<div class="bottom">
											<div class="weather-wrap">
												<div class="location-box">
													<div class="location">{{weather.sys.country}} {{weather.name}}
														<img class="card-img" :src="iconurl">
													</div>
													<!-- 영어 -->
													<div class="date">{{dateBuilder("eng")}}</div>
													<!-- 한국어 -->
													<!-- <div class="date">{{dateBuilder("kor")}}</div> -->
												</div>

												<div class="weather-box">
													<div class="temp">{{weather.main.temp}}<sup>o</sup>C</div>
													<div class="weather">{{weather.weather[0].main}}</div>
												</div>
											</div>
										</div>
									</div>
								</el-card>
								</el-row>
						</el-menu>
					</el-col>
					
					
					<div class="visit-count">
						<span class="visit-count-title">방문자</span>
						<li class="nav-item">
							<span>Today : </span>
							<span class="visit-data">{{todayTotal}}</span>
						</li>
						<li class="nav-item">
							<span>Total : </span>
							<span class="visit-data">{{total}}</span>
						</li>
					</div>
				</el-row>
		</el-aside>

		<el-container>

			<el-main>
				<router-view></router-view>
			</el-main>

			<!-- <el-footer>
			</el-footer> -->
		</el-container>
	</el-container>
</template>

<script>
import axios from 'axios'
export default {
	components:{
	},

	async created(){
		const currentPath = window.location.pathname;
		await this.dateFormat();
		await this.getLocation();

		// if(this.weather) console.log("weather ok", this.weather);
		// else if(!this.weather) console.log("weather no");

		// 토큰이 있는지 확인
		if(this.token){
			// 토큰이 있을고 "cookie" 쿠키가 없을시
			if(!this.$cookies.isKey("cookie")){
				this.$cookies.set("cookie", "visitor", "1d");	// 1일짜리 쿠기 생성

				// 방문자 카운터
				const url = `/REST/admin/todayVisitor`;
				const body = { "today_visit_count" : 1 , "today_visit_regdate" : this.date};
				const headers = { "Content-Type" : "application/json", "token" : this.token };

				const respone = await axios.post(url, body, {headers});
				if(respone.data.status === 200) this.$router.go();
			}
		}else alert("로그인이 필요합니다");

		

		switch(currentPath){
			case '/admin/dashboard':
				this.activeIndex = '1';
				break;
			case '/admin/board':
				this.activeIndex = '2';
				break;
			case '/admin/writer':
				this.activeIndex = '3';
				break;
			case '/admin/customer':
				this.activeIndex = '4';
				break;
			case '/admin/trash':
				this.activeIndex = '5';
				break;
			case '/admin/tempstorage':
				this.activeIndex = '6';
				break;
		}
	},

	async mounted(){
		const url = `/REST/admin/todayTotal`;
		const headers = { "Content-Type" : "application/json", token : this.token };
		const response = await axios.get(url, {headers});

		let today = new Date();
		let date = today.getDate();

		if(response.data.status === 200){
			this.todayTotal = 0;	// today count 초기화

			this.total =response.data.todaycount.length;

			for(let i = 0; i < response.data.todaycount.length; i++){
				let tt = response.data.todaycount[i].today_visit_regdate.split("-")[2].substring(0, 2);
				if(Number(tt) === date){
					this.todayTotal += response.data.todaycount[i].today_visit_count;
				}
			}
		}
	},

	methods :{
		// 위치정보 가져오기 (위치정보 허용 / https & localhost 가능    http 보안상 불가능)
		getLocation(){
			navigator.geolocation.getCurrentPosition(
				position => {
					this.latitude = position.coords.latitude;
					this.longitude = position.coords.longitude;

					this.fetchWeather();
				},
				error => {
					console.log(error.message);
				}
			)
		},

		fetchWeather(){
			// let fetchUrl = `${this.URL}weather?q=busan&units=metric&APPID=${this.APIKEY}`;
			let fetchUrl = `${this.URL}weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&APPID=${this.APIKEY}`;

			fetch(fetchUrl)
				.then((res) => {
					return res.json();
			})
				.then((results) => {
					return this.setResult(results);
			})
		},

		setResult(results){
			this.weather = results;
			this.iconurl = "http://openweathermap.org/img/w/" + this.weather.weather[0].icon + ".png";	// icon url을 저장
			this.testBoolean =true;
		},


		// 날짜표시 영어
		dateBuilder(language){ 
			let d = new Date(); 
			var months = [];
			var days = [];

			if(language == "eng"){
				months = [ 
					"January", 
					"February", 
					"March", 
					"April", 
					"May", 
					"June", 
					"July", 
					"August", 
					"September", 
					"October", 
					"November", 
					"December", 
				]; 

				days = [ 
					"Sunday", 
					"Monday", 
					"Tuesday", 
					"Wednesday", 
					"Thursday", 
					"Friday", 
					"Saturday", 
				];
			}

			else if(language == "kor"){
				months = [ 
				"1월", 
				"2월", 
				"3월", 
				"4월", 
				"5월", 
				"6월", 
				"7월", 
				"8월", 
				"9월", 
				"10월", 
				"11월", 
				"12월", 
			]; 

			days = [ 
				"월요일",
				"화요일",
				"수요일",
				"목요일",
				"금요일",
				"토요일",
				"일요일",
			];
			}

			
			let day = days[d.getDay()]; 
			let date = d.getDate(); 
			let month = months[d.getMonth()]; 
			let year = d.getFullYear(); 

			if(language == "eng")
				return `${day} ${date} ${month} ${year}`; 

			else if(language =="kor")
				return ` ${year} ${month} ${date} ${day}`; 
		},

		dateFormat(){
			let today = new Date();
			let years = today.getFullYear();
			let month = today.getMonth() + 1;
			let day = today.getDate();
			
			this.date = `${years}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;
		},


		handleOpen(key, keyPath){
			console.log("handleOpen = ", key, keyPath);
		},

		handleClose(key, keyPath){
			console.log("handleClose = ", key, keyPath);
		},

		changeMenu(key, keyPath){
			console.log("changeMenu = ", key, keyPath);
			this.activeIndex = key;

			switch(key){
				case '1':
					this.$router.push({path:'/admin/dashboard'});
					break;

				case '2':
					this.$router.push({path:'/admin/board'});
					break;

				case '3':
					this.$router.push({path:'/admin/writer'});
					break;

				case '4':
					this.$router.push({path:'/admin/customer'});
					break;

				case '5':
					this.$router.push({path:'/admin/trash'});
					break;

				case '6':
					this.$router.push({path:'/admin/tempstorage'});
					break;

				default: return null;
			}
		},

		setInput(value){
			this.todayVisitor = value;
		}
	},


	data(){
		return{
			activeIndex : '1',
			date : '',
			token : sessionStorage.getItem("TOKEN"),
			todayTotal : 0,
			total : 0,


			// weather
			APIKEY : "785c7d5db18c6b3722770282f57ead57",
			URL : "https://api.openweathermap.org/data/2.5/",
			weather: {},
			latitude : '',
			longitude : '',
			iconurl : '',

			testBoolean : false,

			months: [],
			days: [],
			mittData:''
		}
	}
}
</script>

<style src='@/assets/css/admin.css' scoped>
</style>

<style src='@/assets/css/main.css'>

</style>
