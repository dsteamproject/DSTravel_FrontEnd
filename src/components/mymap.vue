<template>
  <div>
    <div class="wrap1">
      <p class="title">마이 여행지 등록</p>
      <div class="hr"></div>

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
        <el-table-column prop="writer" label="위도/경도" width="200" />
        <el-table-column prop="regdate" label="작성일" width="120" />
        <el-table-column prop="cno" label="처리결과" width="120" />
        <el-table-column prop="gno" label="따봉" width="120"
          ><button>삭제</button></el-table-column
        >
      </el-table>
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
          writer: "12.1323123 / 12.12312323",
          regdate: "2021-10-27",
          cno: "대기중",
          gno: 2,
        },
        {
          no: "2",
          title: "제목1",
          writer: "12.1323123 / 12.12312323",
          regdate: "2021-10-27",
          cno: "대기중",
          gno: 2,
        },
        {
          no: "3",
          title: "제목1",
          writer: "12.1323123 / 12.12312323",
          regdate: "2021-10-27",
          cno: "완료",
          gno: 2,
        },
        {
          no: "4",
          title: "제목1",
          writer: "12.1323123 / 12.12312323",
          regdate: "2021-10-27",
          cno: "완료",
          gno: 2,
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 18px;
  margin-left: 50px;
  text-align: left;
}
.title1 {
  font-size: 27px;
  margin-top: 30px;
}
.hr {
  border-bottom: 1px solid #ddd;
  margin: 20px 0px;
}
.wrap1 {
  padding: 10px;
}
</style>