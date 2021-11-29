<template>
  <div>
    <!--  :to="`/menu_3/boardcontent?_id=${scope.row._id}`" -->
    <!-- https://www.tripade.com/ -->
    <div class="wrap1_2">
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
          <input
            type="text"
            class="sch"
            v-model="keyword"
            v-on:keyup.enter="searchclick"
          />
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
        header-row-class-name="cellt"
      >
        <el-table-column prop="no" label="번호" width="100" align="center" />

        <el-table-column prop="title" label="제목">
          <template #default="scope">
            <span class="keyword1">잡담</span>
            <router-link
              class="idlink"
              @click="handleHit(scope.row.no)"
              :to="`/freecontent?no=${scope.row.no}&category=${this.category}`"
              ><span class="title"
                >{{ scope.row.title }}
                <span v-if="scope.row.reply !== 0"
                  >({{ scope.row.reply }})</span
                >
                <span
                  class="new"
                  v-if="
                    scope.row.regdate2 === this.todayfull && scope.row.hours < 1
                  "
                  >new</span
                >
              </span>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="member.nicname"
          label="작성자명"
          width="180"
          align="center"
        />
        <el-table-column
          prop="regdate"
          label="작성일"
          width="120"
          align="center"
        >
          <template #default="scope">
            <span
              v-if="this.todays === 1"
              class="datec"
              @mouseover="dateclick(scope.row.no)"
              @mouseout="datedown"
              >{{ scope.row.regdate2 }}</span
            >
            <span v-if="this.todays === 2" class="datec" @mouseout="datedown">{{
              scope.row.regdate3
            }}</span>
          </template></el-table-column
        >
        <el-table-column prop="hit" label="조회수" width="120" align="center" />
        <el-table-column
          prop="good"
          label="👍"
          width="120"
          align="center"
          label-class-name="asd"
        />
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
  watch: {
    orderby: async function () {
      await this.start();
    },
    size: async function () {
      await this.start();
    },
  },
  data() {
    return {
      reg: "regdate2",
      list: [],
      regdate: [],
      size: "10",
      orderby: "latest",
      keyword: "",
      type: "title",
      pages: "", // 전체 페이지수
      page: 1,
      todays: 1,
      token: sessionStorage.getItem("TOKEN"),
      category: "que",
      todayhours: "",
      todayfull: "",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    datedown() {
      this.todays = 1;
    },
    dateclick() {
      this.todays = 2;
    },
    async searchclick() {
      await this.start();
    },
    async start() {
      const url = `/REST/board/select_all?type=${this.type}&orderby=${this.orderby}&keyword=${this.keyword}&size=${this.size}&page=${this.page}&category=${this.category}`;
      const headers = { "Content-type": "application/json" };

      const response = await axios.get(url, { headers });
      console.log(response);

      if (response.data.status === 200) {
        this.list = response.data.list;

        this.pages = Number(response.data.cnt) * 10;
        for (var i = 0; i < this.list.length; i++) {
          const regdate1 = this.list[i].regdate;

          const dada = new Date(regdate1);

          const simpledate =
            dada.getFullYear() +
            "-" +
            ("0" + (dada.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + dada.getDate()).slice(-2);

          const simpledate2 =
            ("0" + dada.getHours()).slice(-2) +
            ":" +
            ("0" + dada.getMinutes()).slice(-2);
          const simpledate3 = ("0" + dada.getHours()).slice(-2);

          const todaydate = new Date();
          const todayfull =
            todaydate.getFullYear() +
            "-" +
            ("0" + (todaydate.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + todaydate.getDate()).slice(-2);

          this.todayfull = todayfull;
          const todaydate2 = ("0" + todaydate.getHours()).slice(-2);

          this.todayhours = todaydate2;

          const Timeremaining = Number(todaydate2) - Number(simpledate3);

          this.list[i].regdate2 = simpledate;
          this.list[i].todayfull = todayfull;
          this.list[i].regdate3 = simpledate2;
          this.list[i].hours = Timeremaining;
        }
      }
    },

    async handleCurrentChange(val) {
      this.page = val;
      await this.start();
    },
    async handleHit(no) {
      const url = `/REST/board/updateHit?no=${no}`;
      await axios.put(url);
    },
    writer() {
      if (this.token !== null) {
        this.$router.push({
          path: "/freewrite",
          query: { category: this.category },
        });
      } else {
        alert("글작성은 로그인후 가능합니다");
      }
    },
  },
  async created() {
    this.$emit("searchon", true);
    await this.start();
  },
};
</script>
<style scope src= "../assets/css/free.css" >
</style>