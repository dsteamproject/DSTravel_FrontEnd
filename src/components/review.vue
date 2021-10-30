<template>
  <div>
     <!--  :to="`/menu_3/boardcontent?_id=${scope.row._id}`" -->
    <!-- https://www.tripade.com/ -->
    <div class="wrap">
      <ul class="opt">
        <li>
          <select class="boardlength">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </li>
        <li>
          <select class="boardro">
            <option value="recent">최신순</option>
            <option value="old">오래된순</option>
          </select>
        </li>
        <li>
          <button class="sbtn">검색</button>
        </li>
        <li>
          <input type="text" class="sch" />
        </li>
        <li>
          <select class="schsel">
            <option value="recent">제목</option>
            <option value="old">작성자</option>
          </select>
        </li>
      </ul>

      <el-table
        :data="tableData"
        style="width: 100%"
        header-cell-style="border-top:2px solid #E2E2E2; background:#FAFAFA;"
      >
        <el-table-column prop="no" label="번호" width="100" />
        <el-table-column prop="title" label="제목">
          <template #default="scope">
            <router-link
              class="idlink"
              @click="handleHit(scope.row._id)"
              to="/freecontent"
              >{{ scope.row.title }}
            </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="writer" label="작성자명" width="180" />
        <el-table-column prop="regdate" label="작성일" width="120" />
        <el-table-column prop="cno" label="조회수" width="120" />
        <el-table-column prop="gno" label="따봉" width="120" />
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        class="pag"
      >
      </el-pagination>
      <button class="wrbtn" @click="writer">글 쓰기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          no: "1",
          title: "제목1",
          writer: "박병근",
          regdate: "2021-10-27",
          cno: 1,
          gno: 2,
        },
        {
          no: "2",
          title: "제목1",
          writer: "박병근",
          regdate: "2021-10-27",
          cno: 1,
          gno: 2,
        },
        {
          no: "3",
          title: "제목1",
          writer: "박병근",
          regdate: "2021-10-27",
          cno: 1,
          gno: 2,
        },
        {
          no: "4",
          title: "제목1",
          writer: "박병근",
          regdate: "2021-10-27",
          cno: 1,
          gno: 2,
        },
        {
          no: "4",
          title: "제목1",
          writer: "박병근",
          regdate: "2021-10-27",
          cno: 1,
          gno: 2,
        },
        {
          no: "4",
          title: "제목1",
          writer: "박병근",
          regdate: "2021-10-27",
          cno: 1,
          gno: 2,
        },
        {
          no: "4",
          title: "제목1",
          writer: "박병근",
          regdate: "2021-10-27",
          cno: 1,
          gno: 2,
        },
      ],
    };
  },
  methods: {
    writer() {
      this.$router.push({ path: "/freewrite" });
    },
  },
};
</script>

<style scoped>
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