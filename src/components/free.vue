<template>
  <div>
    <!--  :to="`/menu_3/boardcontent?_id=${scope.row._id}`" -->
    <!-- https://www.tripade.com/ -->
    <div class="wrap">
      <ul class="opt">
        <li>
          <select class="boardlength" v-model="size">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </li>
        <li>
          <select class="boardro" v-model="orderby">
            <option value="latest">최신순</option>
            <option value="old">오래된순</option>
          </select>
        </li>
        <li>
          <button class="sbtn" @click="searchclick">검색</button>
        </li>
        <li>
          <input type="text" class="sch" v-model="keyword"  v-on:keyup.enter="searchclick" />
        </li>
        <li>
          <select class="schsel" v-model="type">
            <option value="title">제목</option>
            <option value="writer">작성자</option>
          </select>
        </li>
      </ul>

      <el-table
        :data="list"
        style="width: 100%"
        header-cell-style="border-top:2px solid #E2E2E2; background:#FAFAFA;"
      >
        <el-table-column prop="no" label="번호" width="100" align="center" />

        <el-table-column prop="title" label="제목">
          <template #default="scope">
            <span class="keyword">{{ scope.row.keyword }}</span>
            <router-link
              class="idlink"
              @click="handleHit(scope.row.no)"
              :to="`/freecontent?no=${scope.row.no}`"
              ><span  class="title">{{ scope.row.title }}</span>
             
            </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="writer" label="작성자명" width="180" align="center" />
        <el-table-column prop="regdate" label="작성일" width="120" align="center"  >
                <template #default="scope" >
          <span v-if="this.todays === 1" class="datec" @mouseover="dateclick(scope.row.no)" @mouseout="datedown">{{scope.row.regdate2}}</span>      
          <span v-if="this.todays === 2" class="datec" @mouseout="datedown">{{scope.row.regdate3}}</span>      
          </template></el-table-column>
        <el-table-column prop="hit" label="조회수" width="120" align="center" />
        <el-table-column prop="gno" label="따봉" width="120" align="center" />
      </el-table>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="pages"
        class="pag"
      >
      </el-pagination>
      <button class="wrbtn" @click="writer">글 쓰기</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    watch:{
       orderby:async function(){
          await this.start();
    },
    size:async function(){
      await this.start();
    },
   
  },
  data() {
    return {
      reg:"regdate2",
      list: [],
      regdate: [],
      size: "10",
      orderby: "latest",
      keyword: "",
      type: "title",
      pages: "", // 전체 페이지수
      page: 1,
      todays:1,
    };
  },
  methods: {
    datedown(no){
      console.log(no)
      this.todays=1
    },
    dateclick(no){
      console.log(no)
      this.todays=2
    },
    async searchclick() {
      const url = `/REST/board/select_all?type=${this.type}&orderby=${this.orderby}&keyword=${this.keyword}&size=${this.size}&page=${this.page}`;
      const headers = { "Content-type": "application/json" };
      const response = await axios.get(url, { headers });
      console.log(response);
      if (response.data.status === 200) {
        this.list = response.data.list;
        this.pages = Number(response.data.cnt) * 10;
        for (var i = 0; i < this.list.length; i++) {
          const regdate1 = this.list[i].regdate.split("T");
          console.log(regdate1[0]);
          this.list[i].regdate = regdate1[0];
        }
      }
    },
    async start() {
      const url = `/REST/board/select_all?type=${this.type}&orderby=${this.orderby}&keyword=${this.keyword}&size=${this.size}&page=${this.page}`;
      const headers = { "Content-type": "application/json" };

      const response = await axios.get(url, { headers });
      console.log(response);
      if (response.data.status === 200) {
        this.list = response.data.list;
        this.pages = Number(response.data.cnt) * 10;
        for (var i = 0; i < this.list.length; i++) {
          const regdate1 = this.list[i].regdate
        
          const dada = new Date(regdate1)
          console.log(dada);
             const simpledate = dada.getFullYear() + "-" + ("0" + (dada.getMonth() + 1)).slice(-2) + "-" + ("0" + dada.getDate()).slice(-2)
        
        const simpledate2 = dada.getHours() +":"+ dada.getMinutes();
           console.log(simpledate);
              console.log(simpledate2);
          this.list[i].regdate2 = simpledate;
          this.list[i].regdate3 = simpledate2;
        }
      }
    },

    async handleCurrentChange(val) {
      console.log(val);
      this.page = val;
      await this.start();
    },
    async handleHit(no) {
      console.log(no);
      const url = `/REST/board/updateHit?no=${no}`;
      await axios.put(url);
    },
    writer() {
      this.$router.push({ path: "/freewrite" });
    },
  },
  async created() {
    await this.start();
  },
};
</script>
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #2752be;
}
</style>
<style scoped>
.datec{
  cursor: pointer;
  z-index: 99;
  padding:10px 10px;
}
.idlink {
  color: black;
  margin-left: 5px;
  text-decoration: none;
}
.idlink:link {
  color: black;
}
.idlink:visited {
  color: rgb(158, 155, 155);
}

.keyword {
  padding: 2px 13px;
  color: white;
  background: #9dd3ec;
  border-radius: 100px;
}
.pag {
  float: left;
  margin-top: 20px;
}
.wrbtn {
  float: right;
  margin-right: 80px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background: #2752be;
  color: white;
  margin-top: 20px;
  border-radius: 2px 2px 2px 2px;
  margin-bottom: 50px;
}
.sbtn {
  padding: 10px 35px;
  border: none;
  cursor: pointer;
  background: #2752be;
  color: white;
  margin-right: 80px;
  margin-left: 5px;
  margin-bottom: 20px;
}
.sch {
  height: 36px;
  width: 200px;
  outline: none;
  border: 1px solid #dddddd;
  margin-left: 5px;
}
.schsel {
  height: 38px;
  width: 103px;
  font-size: 15px;
  border: 1px solid #dddddd;
  outline: none;
  padding-left: 10px;
}

.boardro {
  width: 98px;
  height: 38px;
  padding-left: 10px;
  font-size: 15px;
  border: 1px solid #dddddd;
  outline: none;
}

.boardlength {
  width: 78px;
  height: 38px;
  padding-left: 10px;
  font-size: 15px;
  border: 1px solid #dddddd;
  outline: none;
  margin-right: 5px;
}

.wrap {
  width: 1188px;
  padding-top: 30px;
}
.opt li {
  display: inline-block;
}
.opt li:nth-child(1) {
  float: left;
}
.opt li:nth-child(2) {
  float: left;
}
.opt li:nth-child(3) {
  float: right;
}
.opt li:nth-child(4) {
  float: right;
}
.opt li:nth-child(5) {
  float: right;
}
</style>