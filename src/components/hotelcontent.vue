<template>
    <div>
        <div class="wrap">
            <div class="left1">
                <div class="stayheader">
                       <button class="mapbtn">위치보기</button>
                    <h2>호텔 말트 - 아스토텔</h2>
                    <p>4성급</p>
                 
                    <div class="br"></div>
                    <span>제주특별자치도 서귀포시 명동로 46</span>
                    <span>체크인 15:00 ~ 체크아웃 11:00</span>
                    <div class="br"></div>
                  
                      <v-zoomer style="width: 100%; height: 480px; ">
                <img src="../assets/seoul9.jpg" class="zoomimg" style="object-fit: contain; width: 100%; height: 100%;">
                     </v-zoomer>
                    
                          <img
        src="../assets/seoul1.jpg"
        class="img2"
        @mouseover="imgclick3"
        @mouseout="imgout"
      />
      <img
        src="../assets/seoul2.jpg"
        class="img2"
        @mouseover="imgclick"
        @mouseout="imgout"
      />
      <img
       src="../assets/seoul3.jpg"
        class="img2"
        @mouseover="imgclick2"
        @mouseout="imgout"
      />
                    
                </div>
                <div class="staycontent">

                </div>
                <div class="staychoice">

                </div>
                <div class="staysub">

                </div>
            </div>
            <div class="right1">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.img2 {
  width: 200px;
  height: 100px;
  margin-left: 20px;
  margin-top: 10px;
  cursor: pointer;
}


.br{
    border-bottom: 1px solid #ddd;
    margin:20px 0px;
}
.mapbtn{
    float:right;
}
.wrap{
    width:1060px;
    margin:0 auto;
}
.left1{
    margin-top:50px;
    width:700px;
    float:left;
    margin-right: 30px;
    height: 1000px;
    background: #ccc;
}
.right1{
    margin-top:50px;
    width: 330px;
        height: 1000px;
         float:left;
     background: #ccc;
}
</style>