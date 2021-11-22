<template>
  <div>
    <div class="wrap1">
      <!-- ㅇㅁㄴㅇ    -->
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
          <el-table-column
            prop="regdate2"
            label="작성일"
            width="120"
            sortable
          />
          <el-table-column
            prop="category"
            label="카테고리"
            width="120"
            sortable
          >
            <template #default="scope">
              <span v-if="scope.row.category === 'A'">여행후기</span>
              <span v-if="scope.row.category === 'info'">여행정보</span>
              <span v-if="scope.row.category === 'free'">잡담</span>
              <span v-if="scope.row.category === 'que'">질문</span>
            </template>
          </el-table-column>
          <el-table-column
            property="title"
            label="글제목"
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
          <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
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
    };
  },
  async created() {
    const url = `/REST/mypage/myboard`;
    const headers = { "Content-type": "application/json", token: this.token };

    const response = await axios.get(url, { headers });
    console.log(response);
    this.list = response.data.list;
    console.log(this.list);
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

      this.list[i].regdate2 = simpledate;
      this.list[i].regdate3 = simpledate2;
    }
  },
  methods: {
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
</style>