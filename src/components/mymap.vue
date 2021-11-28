<template>
  <div>
    <div class="wrap1">
      <!-- ㅇㅁㄴㅇ    -->
      <p class="text1">내 여행지등록</p>
      <div class="hr"></div>
      <div style="margin-top: 20px">
        <!-- <el-button @click="toggleSelection([tableData[i]])"
      >Toggle selection status of second and third rows</el-button
    >
    <el-button @click="toggleSelection()">Clear selection</el-button>
   -->
        <div class="tableheader">
          <div class="cell">
            <button class="btn1" @click="toggleAllSelection([tableData])">
              전체선택
            </button>
            <button class="btn2">삭제</button>
          </div>
          <div class="cellmeiddle"></div>
          <div class="cell2">
            <select class="searchselect">
              <option>제목</option>
              <option>카테고리</option>
            </select>
            <input type="text" class="textinput" />
          </div>
        </div>

        <el-table
          ref="multipleTable"
          :data="list"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          header-cell-style="background:#FAFAFA;"
          header-cell-class-name="hcellclass"
        >
          <el-table-column type="selection" width="55" />

          <el-table-column prop="title" label="제목" width="120" sortable />
          <el-table-column prop="addr" label="주소" width="270" sortable />
          <el-table-column prop="state" label="처리결과" width="100" sortable>
            <template #default="scope">
              <span v-if="scope.row.state === 0">처리중</span>
              <span v-if="scope.row.state === 1">승인</span>
              <span v-if="scope.row.state === 2">반려</span>
            </template>
          </el-table-column>

          <el-table-column align="right">
            <template #default="scope">
              <button
                class="chbtn"
                @click="handleDelete(scope.$index, scope.row)"
              >
                수정
              </button>
              <button
                class="delbtn"
                @click="handleDelete(scope.$index, scope.row)"
              >
                삭제
              </button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="this.cnt * 10"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      multipleSelection: [],
      token: sessionStorage.getItem("TOKEN"),
      list: [],
      page: 1,
    };
  },
  async created() {
      this.$emit("searchon", true);
    await this.refresh();
  },
  methods: {
    async handleCurrentChange(val) {
      this.page = val;
      await this.refresh();
    },
    async refresh() {
      const url = `/REST/mypage/mytdtem?page=${this.page}&size=5`;
      const headers = { "Content-type": "application/json", token: this.token };

      const response = await axios.get(url, { headers });
      console.log(response);
      this.cnt = response.data.cnt;
      this.list = response.data.mytdtem;
    },
    toggleAllSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleAllSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style>
.hcellclass:nth-child(1) {
  border-left: 1px solid rgb(218, 216, 216);
  border-bottom: 1px solid rgb(218, 216, 216);
}
.hcellclass:nth-child(6) {
  border-right: 1px solid rgb(218, 216, 216);
}
.el-checkbox__inner {
  border: 1px solid #ddd;
  outline: 1px solid #ddd;
}
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #8e9093;
  border: none;
}

.el-table {
  overflow: unset;
}
</style>
<style scoped>
.headercell {
  border-left: 1px solid #62656a;
}
.textinput {
  height: 25.76px;
  border: none;
}
.searchselect {
  height: 25.76px;
  border: none;
  margin-right: 5px;
}
.text1 {
  font-weight: bold;
  font-size: 18px;
  margin-left: 50px;
  text-align: left;
}
.chbtn {
  border: none;
  background: white;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  margin-right: 10px;
}
.delbtn {
  border: none;
  background: rgb(245, 63, 63);
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}
.block {
  text-align: center;
}
.cellmeiddle {
  display: inline-block;
}
.cell2 {
  display: inline-block;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}

.btn1 {
  background: #8e9093;
  color: white;
  padding: 2px 5px;
  margin-right: 10px;
  margin-left: 10px;
}
.btn2 {
  background: #8e9093;
  color: white;
  padding: 2px 5px;
}
.cell {
  display: inline-block;
  margin-top: 10px;
}
.tableheader {
  background: #62656a;
  color: #8e9093;
  height: 48px;
  width: 100%;
}

.title {
  font-size: 23px;
}
.title1 {
  font-size: 23px;
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