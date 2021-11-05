<template>
    <div>
        <div class="wrap1">
                <p class="title">내가 쓴 게시물</p>
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
        <el-table-column prop="writer" label="작성자명" width="180" />
        <el-table-column prop="regdate" label="작성일" width="120" />
        <el-table-column prop="cno" label="조회수" width="120" />
        <el-table-column prop="gno" label="따봉" width="120" />
      </el-table>
             <p class="title1">내가 좋아요 게시물</p>
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
        <el-table-column prop="writer" label="작성자명" width="180" />
        <el-table-column prop="regdate" label="작성일" width="120" />
        <el-table-column prop="cno" label="조회수" width="120" />
        <el-table-column prop="gno" label="따봉" width="120" />
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
    }
</script>

<style scoped>
.title{
    font-size:23px;
}
.title1{
    font-size:23px;
    margin-top:30px
}
.hr{
    border-bottom: 1px solid #ddd;
    margin:20px 0px;
}
.wrap1{
    padding:60px 100px;
    
   
 
}
</style>