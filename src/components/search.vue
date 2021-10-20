<template>
  <div class="wrap">
    <div class="left1">
      <h3>부산</h3>
      <span class="sub_area">BUSAN</span><br />
      <span class="day">10day</span><br />

      <a href="#" class="full_day">2021.12.01 - 2021.12.10</a>

        <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange" >
      <el-collapse-item title=" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
      인원 상세설정" name="1" style="background-color:black" >
        <div>
           <div v-if="check === 1" class="check">
        <p class="text1">인원</p>
        <p class="text2">성인</p>
        <span class="text3">만 13세 이상</span><br />
        <el-input-number v-model="num" :step="1" size="mini" />

        <p class="text2">어린이</p>
        <span class="text3">만 2~12세</span><br />
        <el-input-number v-model="num1" :step="1" size="mini" />

        <p class="text2">유아</p>
        <span class="text3">만 2세 미만</span><br />
        <el-input-number v-model="num2" :step="1" size="mini" />
      </div>

      <br />
      <button class="btn_last">검색</button>
        </div>
      </el-collapse-item>
       </el-collapse>
  </div>

   
    </div>
    <div class="center1">
  <GMapMap
    ref="myMapRef"
    :center="center"
    :zoom="16"
    map-type-id="roadmap"
    style="width: 100vw; height: 20rem"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="openMarker(m.id)"
      @closeclick="openMarker(null)"
    >
      <GMapInfoWindow
        :closeclick="true"
        @closeclick="openMarker(null)"
        :opened="openedMarkerID === m.id"
      >
        <div>{{ m.id }}</div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
  </div>
    <div class="right1">
      <button id="right_btn" @click="handleright" v-bind:class="btncolor">추천코스</button>
      <button id="right_btn" @click="handleright2" v-bind:class="btncolor2">숙소</button>
      <div class="right_content" v-if="right=== 1">
        <h4>추천코스</h4>
        <ul class="travel_list">
          <li>
            <div class="imgdiv"><img src="../assets/gam.jpg" style=" height:100px;"></div>
            <div class="textdiv">감천문화마을</div>
            </li>
          <li>
            <div class="imgdiv"><img src="../assets/gam.jpg" style=" height:100px;"></div>
            <div class="textdiv">감천문화마을</div>
            </li>
           <li>
            <div class="imgdiv"><img src="../assets/gam.jpg" style=" height:100px;"></div>
            <div class="textdiv">감천문화마을</div>
            </li>
        </ul>
      </div>
      <div class="right_content" v-if="right=== 2">
        내용2
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btncolor:"active",
      btncolor2:"noneactive",
      right:1,
   check: 1,
      num: 0,
      num2: 0,
      num1: 0,
      openedMarkerID: null,
      center: { lat:  35.15267616865169, lng:129.05961009117254 },
      markers: [
        {
          id: "동성직업전문학교",
          position: {
            lat: 35.15267616865169,
            lng:129.05961009117254,
          },
        },
        {
          id: 2,
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
      ],
    };
  },
  mounted() {
    this.$refs.myMapRef.$mapPromise.then((map) => {
      map.addListener('click', (mapsMouseEvent) => {
        console.log(mapsMouseEvent.latLng.lat());
        console.log(mapsMouseEvent.latLng.lng());
      });
    });
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
    },
    showPosition(event, two) {
      console.log(event.latLng);
      console.log(two)
    },
    handleright(){
      this.right =1
       this.btncolor2 = "noneactive"
      this.btncolor ="active"
    },
        handleright2(){
      this.right =2
      this.btncolor2 = "active"
      this.btncolor ="noneactive"
    }
  },
};
</script>

<style scoped>
.imgdiv{
  overflow: hidden;
  height: 100px;
  width:100px;
  float:left;
}
.textdiv{
  float:left
}
.travel_list li{
  width:100%;
  height:100px;
  box-shadow: 1px 10px 10px rgba(0,0,0,0.2);
  margin-top:20px;
  background: #ffffff;
     list-style: none;
}
.noneactive{
  background: #ffffff;
  color:black;
}
.active{
  background: #98dde3;
  color:white;
}
.check{
  margin:0px!important;

}
.vue-map-container{
  height: 900px!important;
}
.text1 {
  font-size: 19px;
  margin-bottom: 10px;
}
.text2 {
  font-weight: bold;
}
.text3 {
  font-size: 13px;
}
h5 {
  display: block;
  background: #98dde3;
  margin: 10px;
  padding: 10px;
  color: white;
}
.full_day {
  font-size: 1.2rem;
  color: #696969;
  text-decoration: none;
  margin-bottom: 30px;
  display: block;
}
.day {
  font-size: 1.5rem;
  font-weight: 700;
  display: block;
  margin-top: 10px;
}
.sub_area {
  font-size: 0.8rem;

  color: #999;
}
h3 {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0px;
  margin-top: 17px;
  margin-bottom: 3px;
}
p {
  font-size: 20px;
}
.wrap {
  width: 100%;
  
}
.left1 {
  width: 20%;
  height: 900px;
  background: #ffffff;
  text-align: center;
  float: left;
  box-sizing: border-box;
    padding:10px;
}
.center1 {
  width: 60%;
  height: 900px;
  
  float: left;
}
.right1 {
  width: 20%;
  height: 900px;
   background: rgb(238, 237, 237);
  float: left;
  box-sizing: border-box;
  padding:10px;
}
.btn_last {
  width:100%;
  height: 30px;
  outline: none;
  border: none;
  background: #ff1744;
  color: white;
  cursor: pointer;
  
  

}
body {
  margin: 0;
}
#right_btn{
  width:50%;
  height: 35px;
  border:none;
  cursor: pointer;

}
.right_content{
  margin-top:10px;
   background: #f1f1f1;
   height: 800px;
   padding:10px;
   text-align: center;

}
.right_content h4{
  font-weight: 900;
  font-size:20px;
}
</style>