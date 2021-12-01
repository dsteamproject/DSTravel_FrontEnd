<template>
  <div>
    <div class="wrap1">
      <!-- ㅇㅁㄴㅇ    -->
      <p class="text1">내 여행</p>
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
            <input type="text" class="textinput" v-model="textinput" />
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
          <el-table-column
            prop="total[0][0].city.name"
            label="지역"
            width="120"
            sortable
          />
          <el-table-column
            prop="date[0]"
            label="여행시작일"
            width="120"
            sortable
          >
          </el-table-column>
          <el-table-column
            property="title"
            label="여행일정제목"
            width="240"
            sortable
          />

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
            :total="this.pages"
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
      pages: "",
      page: 1,
    };
  },
  async created() {
    this.$emit("searchon", true);
    await this.refresh();
  },
  methods: {
    async handleasd(asd) {
      console.log(asd);
    },
    async refresh() {
      const url = `/REST/mypage/tdsave?title=&page=${this.page}&size=6`;
      const headers = { "Content-type": "application/json", token: this.token };

      const response = await axios.get(url, { headers });
      console.log(response.data.total);
      this.cnt = response.data.cnt;
      this.list = response.data.list;
      console.log(response.data.tdsave);
      this.list = response.data.tdsave; // 0: 1일 , 1 : 2일
      this.pages = response.data.total;
    },
    async handleCurrentChange(val) {
      this.page = val;
      await this.refresh();
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
.text1 {
  font-weight: bold;
  font-size: 18px;
  margin-left: 50px;
  text-align: left;
}
</style>