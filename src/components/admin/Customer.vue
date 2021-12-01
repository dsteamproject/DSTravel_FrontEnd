<template>
	<div class="container">
		<div class="row2">
			<h2 class="title">사용자관리</h2>

			<div class="auto">
				<div>
					<el-input v-model="searchInput" placeholder="검색어" class="input-with-select">
						<template #prepend>
							<el-select v-model="keywordType" @change="searchKeyword" placeholder="아이디" style="width: 110px">
								<el-option label="이름" value="name"></el-option>
								<el-option label="아이디" value="id"></el-option>
							</el-select>
						</template>
						<template #append>
							<el-button icon="el-icon-search" @click="memberSearch"></el-button>
						</template>
					</el-input>
				</div>
			</div>
		</div>
		<hr style="margin : 20px 0;">

		<table>
			<thead>
				<tr>
					<th width="25"></th>
					<th width="100">아이디
					</th>
					<th width="50">이름
						<font-awesome-icon v-if="orderIndex === 'DESC' && orderByType=== 'name'" icon="sort-down" @click="sort('name', 'ASC')"/>
						<font-awesome-icon v-else icon="sort-up" @click="sort('name', 'DESC')" />
					</th>
					<th width="250">email</th>
					<th width="40">성별</th>
					<th>닉네임</th>
					<th width="80">가입일</th>
					<th width="50">권한
						<font-awesome-icon v-if="orderIndex === 'DESC' && orderByType=== 'role'" icon="sort-down" @click="sort('role', 'ASC')"/>
						<font-awesome-icon v-else icon="sort-up" @click="sort('role', 'DESC')" />
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(tmp, idx) in memberData" :key="tmp">
					<td><input type="checkbox" v-model="tmp.chk"></td>
					<td>{{ tmp.id }}</td>
					<td>{{ tmp.name }}</td>
					<td>{{ tmp.email }}</td>
					<td>{{ tmp.gender }}</td>
					<td>{{ tmp.nicname }}</td>
					<td>{{ this.regdate[idx] }}</td>
					<td>{{ tmp.role }}</td>
				</tr>
			</tbody>
		</table>

		<!-- <hr style="margin : 20px 0;"> -->

		

	<!-- dialog -->
		<div class="dialog-cover" v-if="dialogVisible">
			<div class="dialog">
				<div class="dialog-window">
					<div class="dialog-header">
						<span>수정</span> 
					</div>
					<div class="dialog-body">
						<div class="dialog-table">
							<table style="table-layout:fixed;">
								<thead>
									<tr>
										<th>아이디</th>
										<th>메일</th>
										<th>성별</th>
										<th>이름</th>
										<th>닉네임</th>
										<th width="50">권한</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(tmp, idx) in changeData" :key="tmp" @change="changeValue($event, idx)">
										<td><input type="text" id="id" :value="tmp.id" readonly></td>
										<td><input type="text" id="email" :value="tmp.email"></td>
										<td>
											<el-select model-value="${{tmp.gender}}" id="gender">
												<el-option v-for="item in genderSlect" :key="item.value" :label="item.label" :value="item.value">
													<span style="float: left">{{ item.label }}</span>
													<span style="float: right; color: var(--el-text-color-secondary); font-size: 13px">{{ item.value }}</span>
												</el-option>
											</el-select>
										</td>
										<td><input type="text" id="name" :value="tmp.name"></td>
										<td><input type="text" id="nicname" :value="tmp.nicname"></td>
										<td><input type="text" id="role" :value="tmp.role"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="dialog-footer">
						<span class="dialog-footer">
							<el-button @click="dialogVisible = false">취소</el-button>
							<el-button type="primary" @click="changedItem">확인</el-button>
						</span>
					</div>
				</div>
			</div>
		</div>

		<div>
			<el-pagination class="pagination" layout="prev, pager, next" :total="memberCnt*10" @current-change="pagenationChange"> </el-pagination>
		</div>

		<div class="item-div">
			<el-button-group class="button-group">
				<el-button type="primary" class="button" @click="enableDialog">수정</el-button>
				<el-button type="primary" class="button" @click="customerDelete">삭제</el-button>
			</el-button-group>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
		async created(){
			this.getMember();
		},

		methods:{
			// member 데이터를 가져옴
			async getMember(){
				const url = `/REST/admin/member?page=${this.activePage}&keywordtype=${this.keywordType}&keyword=${this.searchInput}&orderbytype=${this.orderByType}&orderby=${this.orderIndex}`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.get(url, {headers});

				console.log("member data ------------ ", response);

				if(response.data.status == 200){
					console.log("member count - ", response.data.memberlist.length);
					this.memberCnt = response.data.cnt;
					this.memberCount = response.data.memberlist.length;
					this.memberData = response.data.memberlist;

					for(let i = 0; i < this.memberData.length; i++){
						this.memberData[i]['chk'] = false;

						let yyyy = response.data.memberlist[i].regdate.substr(0,4);
						let mm = response.data.memberlist[i].regdate.substr(5,2);
						let dd = response.data.memberlist[i].regdate.substr(8,2);
						this.regdate.push(yyyy + "/" + mm + "/" + dd);
					}
				}
			},

			// pagenation
			pagenationChange(index){
				this.activePage = index;	// 현재 페이지를 바꿈
				this.getMember();
			},

			sort(index, sordata){
				this.orderIndex = sordata;
				this.orderByType = index;

				this.getMember();
			},

			// 검색 키워드 변경
			searchKeyword(){
				if(!this.keywordType) this.getMember();
			},

			memberSearch(){
				this.getMember();
			},

			// dialog on
			enableDialog(){
				let tmp = [];

				for(let i = 0; i < this.memberCount; i++){
					if(this.memberData[i].chk === true){
						tmp.push(this.memberData[i]);
					}
				}

				this.changeData = tmp;
				this.dialogVisible = true;
			},

			// dialog off
			disableDialog(){
				this.dialogVisible = false;
			},

			// 회원 정보 수정
			async changedItem(){
				var body = [];

				for(let i = 0; i < this.changeData.length; i++){
					if(!this.email[i]) this.email[i] = this.changeData[i].email;
					if(!this.name[i]) this.name[i] = this.changeData[i].name;
					if(!this.nicname[i]) this.nicname[i] = this.changeData[i].nicname;
					if(!this.gender[i]) this.gender[i] = this.changeData[i].gender;
					if(!this.role[i]) this.role[i] = this.changeData[i].role;

					body.push({
						id : this.changeData[i].id, 
						email : this.email[i],
						name : this.name[i],
						nicname : this.nicname[i],
						gender : this.gender[i],
						role : this.role[i],
					});
				}

				const url = `/REST/admin/memberupdate`;
				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.put(url, body, {headers});

				if(response.data.status === 200){
					this.dialogVisible = false;
					// this.$router.push({path : "/admin/customer"});
					// this.$router.go();
					this.getMember();
				}
			},

			// 회원정보 변경된 값 받아오기
			changeValue(event, index){
				switch(event.target.id){
					case "id":
						this.id[index] = event.target.value;
						break;

					case "email":
						this.email[index] = event.target.value;
						break;

					case "gender":
						this.gender[index] = event.target.value;
						break;

					case "name":
						this.name[index] = event.target.value;
						break;

					case "nicname":
						this.nicname[index] = event.target.value;
						break;

					case "role":
						this.role[index] = event.target.value;
						break;
				}
			},

			toggleSelection(rows) {
        if (rows) {
          rows.forEach((row) => {
            this.$refs.multipleTable.toggleRowSelection(row);
          })
        } else {
						this.$refs.multipleTable.clearSelection();
        }
      },

			async customerDelete(){
				let tmp = [];

				for(let i = 0; i < this.memberCount; i++){
					if(this.memberData[i].chk === true){
						tmp.push(this.memberData[i]);
					}
				}

				this.changeData = tmp;

				const url = `/REST/admin/memberdelete`;
				const body = [];
				for(let i = 0; i < this.changeData.length; i++){
					body.push({ id : this.changeData[i].id });
				}

				const headers = { "Content-Type" : "application/json", token : this.token };
				const response = await axios.put(url, body, {headers});

				if(response.data.status === 200){
					this.getMember();
				}
			}

		},

		data(){
			return{
				token : sessionStorage.getItem("TOKEN"),
				memberData : [],
				memberCount : 0,
				dialogVisible : false,
				regdate: [],

				multipleSelection:[],
				dialogFormVisible: false,
				changeData: [],

				id: [],
				email: [],
				gender: [],
				name: [],
				nicname: [],
				role: [],
				state: [],

				dialogTableVisible: false,

				searchInput:'',
				keywordType:'',

				memberCnt: 0,
				activePage : 1,
				orderIndex : "DESC",
				orderByType : "no",
				genderSlect : [
					{value : "man", label : "남성"},
					{value : "woman", label : "여성"},
				],

				value : ''
			}
		}
	}
</script>

<style src='@/assets/css/customer.css' scoped></style>