<template>
    <div>
        <div class="wrap1">
       
             <p class="title1">내가 좋아요 게시물</p>
            <div class="hr"></div>
       


            <!-- ㅇㅁㄴㅇ    -->
            <div style="margin-top: 20px">
    <!-- <el-button @click="toggleSelection([tableData[i]])"
      >Toggle selection status of second and third rows</el-button
    >
    <el-button @click="toggleSelection()">Clear selection</el-button>
   -->
   <div class="tableheader">
       <div class="cell">
   <button class="btn1" @click="toggleAllSelection([tableData])">전체선택</button>
   <button class="btn2">삭제</button>
  

   </div>
   <div class="cellmeiddle"></div>
   <div class="cell2">
     <select class="searchselect">
      <option>321</option>
      <option>321</option>
      <option>321</option>
  </select>
   <input type="text">
   </div>
   
   </div>
  
             <el-table
    ref="multipleTable"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
     header-cell-style="background:#FAFAFA; "
    
  >
    <el-table-column type="selection" width="55"    />
    <el-table-column label="작성일" width="120"    />
    <el-table-column label="카테고리" width="120"   sortable>
      <template #default="scope">{{ scope.row.no }}</template>
    </el-table-column>
    <el-table-column property="no" label="글제목" width="120" sortable />
    <el-table-column property="address" label="작성자" show-overflow-tooltip  sortable/>
     <el-table-column align="right">

      <template #default="scope">
      
        <button
         
          @click="handleDelete(scope.$index, scope.row)"
          >수정</button
        >
         <button
         
          @click="handleDelete(scope.$index, scope.row)"
          >삭제</button
        >
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
    export default {
          data() {
    return {
         multipleSelection: [],
      
     
    };
  },
    methods: {
    toggleAllSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleAllSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
  },
}
    
</script>
<style>

.el-table{
    overflow: unset;
}
</style>
<style scoped>
.block{
    text-align: center;
}
.cellmeiddle{
    width: 61%;
    display: table-cell;
}
.cell2{
    display: table-cell;
    vertical-align: middle;
   text-align: right;
}

.btn1{
background: #8E9093;
color:white;
padding:2px 5px;
margin-right: 10px;
margin-left:10px;

 
}
.btn2{
background: #8E9093;
color:white;
padding:2px 5px;
}
.cell{
    height: 48px;
    display: table-cell;
        vertical-align: middle;
}
.tableheader{
    border-top:1px solid rgb(175, 173, 173);
    border-left:1px solid rgb(175, 173, 173);
    border-right:1px solid rgb(175, 173, 173);
    background:#62656A;
    color: #8E9093;
    height: 48px;
    width:100%;

    
 
     
}

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