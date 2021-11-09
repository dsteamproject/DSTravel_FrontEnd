<template>
  <div class="wrap">
    <div class="left1">
      <h3 @change="locationchange">
        {{ this.$route.query.locationkor }}
      </h3>
      <span class="sub_area">{{ this.$route.query.locationeng }}</span
      ><br />
      <span class="day">{{ this.$route.query.betday }}day</span><br />

      <a href="#" class="full_day"
        >{{ this.$route.query.start }} - {{ this.$route.query.end }}</a
      >

      <div class="demo-collapse">
        <h3>여행일정 </h3>
        <p>1일차</p>
        <ul>
          <li v-for="list in choice" :key="list" class="mytravel_list" >
            <div class="mytimg">
            <img :src="list.firstimage" style="height: 80px; width:100px" />
            </div>
            {{list.title}}
          </li>
        </ul>
   
  
      </div>
    </div>
    <div :class="centercss">

      <GMapMap 
        ref="myMapRef"
        
        :center="center"
        :zoom="zoom"
        map-type-id="roadmap"
        style="width: 100vw; height: 20rem"
        @click="mark"
        class="gmap"
      >
   
 
          <GMapCluster :zoomOnClick="true" :style="clusterIcon" imagePath='https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m'>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :icon="m.icon"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="openMarker(m.id)"
          v-on:click="center = m.position"
          @closeclick="openMarker(null)"
        >
         <GMapPolyline 
      :path="path"
      :key="componentKey"
      :editable="false"
      ref="polyline" />
  
          <GMapInfoWindow
            :closeclick="true"
            @closeclick="openMarker(null)"
            :opened="openedMarkerID === m.id"
          >
          
            <div>{{ m.id }}</div>
          </GMapInfoWindow>
  
        </GMapMarker>
        </GMapCluster>
          
  
      
      </GMapMap>
      <button class="addmarker" @click="dialogVisible = true">추가</button>
    </div>
    <div :class="rightcss" >
      <div class="rightfull_btn"  v-if="rightc === 'off'" @click="handlefull"><span>◀</span></div>
       <div class="rightfull_btn" v-if="rightc === 'on'" @click="handlefull2"><span>▶</span></div>
      <div style="float:left; padding:10px; box-sizing:border-box; width:93.8%" >
      <button id="right_btn" @click="handleright" v-bind:class="btncolor">
        관광지
      </button>
      <button id="right_btn" @click="handleright2" v-bind:class="btncolor2">
        숙소
      </button>
      <button id="right_btn" @click="handleright3" v-bind:class="btncolor3">
        음식점
      </button>
      <div class="right_content" v-if="right === 1">
        <h4>추천코스</h4>
        <ul class="travel_list">
          <li v-for="list in busanlist10" :key="list"  class="listmap">
            <div class="imgdiv"  @click="openMarker1(list.title,list.mapx,list.mapy)">
              <img :src="list.firstimage" style="height: 100px" />
            </div>
            <div class="textdiv">{{list.title}}
              <button @click="listpush(list)">일정에 추가하기</button>
            </div>
          </li>
     
        </ul>
      </div>
      <div class="right_content" v-if="right === 2">내용2</div>
         <div class="right_content" v-if="right === 3">내용3</div>
    </div>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="위치 추가"
    width="30%"
    :before-close="handleClose"
    class="sasa"
  >
    <span class="ind"
      >위도,경도가 뜨지않을경우 지도에서 추가할려는 장소를 클릭해주세요</span
    ><br /><br />
    위도: {{ this.sublat }} , 경도: {{ this.sublng }}<br /><br />
    위치 이름:<input type="text" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">취소</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >완료</el-button
        >
      </span>
    </template>
  </el-dialog>

  
</template>

<script>
import axios from "axios";
export default {
  name: "search",
 
  
  async created() {
    // 오른쪽 상세창
     await this.rightrefresh();
 
 // ========
 // 구글맵 화면용 
       const url =`/REST/travel/tourapi/select?page=1&cnt=100&arrange=P&contentTypeId=12&areaCode=6`;
    const headers = { "Content-type": "application/json" };
  
      const response = await axios.get(url, {headers});
      console.log(response.data.list)


      this.busanlist =  response.data.list
   
     for(var i=0; i<this.busanlist.length; i++){
       this.markers.push(
         {
          "id":this.busanlist[i].title,
         "position":{
           "lat":Number(this.busanlist[i].mapy),
           "lng":Number(this.busanlist[i].mapx)
           },
           "icon":"https://ifh.cc/g/ZgAcfN.png"
           }
         )
     
     }
  
    
    await this.replacerefresh();
  },
  data() {
    return {
      middleload:[], // 경로 
      componentKey:0,
      path1:[],
        path: [],
      rightc:"off",
      centercss:"center1",
      rightcss:"right1",
    
      choice:[],
      busan10ll:[],
      busanlist10:[],
      busanlist:[],
      lockor: this.$route.query.locationkor,
      zoom: 14,
      dialogVisible: false,
      sublat: "",
      sublng: "",
      chclass: "chcss",
      btncolor: "active",
      btncolor2: "noneactive",
      btncolor3: "noneactive",
      right: 1,
      check: 1,
      num: 0,
      num2: 0,
      num1: 0,
      openedMarkerID: null,
      center: { lat: 35.15267616865169, lng: 129.05961009117254 },
      markers: [
 
      ],
    };
  },
  async mounted() {
    this.$refs.myMapRef.$mapPromise.then((map) => {
      map.addListener("click", (mapsMouseEvent) => {
        console.log(mapsMouseEvent.latLng.lat());
        console.log(mapsMouseEvent.latLng.lng());
      });
    });
  },
  watch: {
    async $route(to, from) {
      console.log(to);
      console.log(from);
      await this.replacerefresh();
    },
  
  },

  methods: {
   async rightrefresh(){
          // 오른쪽 상세창
      const url1 = `/REST/travel/tourapi/select?page=1&cnt=6&arrange=P&contentTypeId=12&areaCode=6`
    const headers1 = { "Content-type": "application/json" };
 
      const response1 = await axios.get(url1,{headers1});
      console.log(response1)
      this.busanlist10 = response1.data.list
    },
    handlefull(){
      this.rightcss ="right2"
      this.centercss ="center2"
      this.rightc ="on"
    },
    handlefull2(){
       this.rightcss ="right1"
      this.centercss ="center1"
      this.rightc ="off"
    },
    // 위도 경도로 직선거리 구하는 REST.API
    async locationdistance() {
      //
      //https://www.data.go.kr/data/15088773/openapi.do
      // 도로명 주소 api 검색 
      // https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do?confmKey=devU01TX0FVVEgyMDIxMTEwODEwMDgzNzExMTg1NDU=&currentPage=1&countPerPage=10&keyword=망미배산로&=
      // 위치검색
      // https://apis.openapi.sk.com/tmap/geo/convertAddress?appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&version=1&searchTypCd=NtoO&reqAdd=부산 서면&reqMulti=M&resCoordType=WGS84GEO
      // 위치검색 
      //https://apis.openapi.sk.com/tmap/geo/fullAddrGeo?addressFlag=F02&coordType=WGS84GEO&version=1&format=json&fullAddr=부산시 수영구 망미배산로56 3001&callback=json&page=1&count=20&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55
      // 경로 json 출력
      //https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=129.10239277274485&endY=35.17444316729922&reqCoordType=WGS84GEO&endRpFlag=G&startX=129.09522188698028&startY=35.17354426079996&sort=index
      // 경로 화면출력
      // https://apis.openapi.sk.com/tmap/routeStaticMap?appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&endX=129.10239277274485&endY=35.17444316729922&startX=129.09522188698028&startY=35.17354426079996&reqCoordType=WGS84GEO&endPoiId=1000560149&passList=129.10239277274485,35.17444316729922,1000560149,G,0_129.09522188698028,35.17354426079996,160886,G,0&lineColor=red&width=500&height=500
      // 자동차 경로안내// http://tmapapi.sktelecom.com/main.html#webservice/docs/tmapRouteDoc
      // https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=129.07579349764512&endY=35.17883196265564&reqCoordType=WGS84GEO&endRpFlag=G&startX=126.98217734415019&startY=37.56468648536046
      //const url = `https://apis.openapi.sk.com/tmap/routes/distance?appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&version=1&startX=126.926139&startY=37.557495&endX=126.82613&endY=37.657495&reqCoordType=WGS84GEO&callback=function`;
      //const headers = {};
      //const response = await axios.get(url, { headers });
      //console.log(response.data.distanceInfo.distance);
     
    },
    async locationchange() {
      await this.replacerefresh();
    },
    replacerefresh() {
      if (this.$route.query.locationkor === "서울") {
        this.center.lat = 37.549824070293155;
        this.center.lng = 126.9852119711522;
        this.zoom = 14;
      }
      if (this.$route.query.locationkor === "부산") {
        this.center.lat = 35.1563960364172;
        this.center.lng = 129.05290996776543;
        this.zoom = 13;
      }
      if (this.$route.query.locationkor === "대구") {
        this.center.lat = 35.828005238339074;
        this.center.lng = 128.56567195613573;
        this.zoom = 12;
      }
      if (this.$route.query.locationkor === "인천") {
        this.center.lat = 37.460431911450016;
        this.center.lng = 126.63023780388498;
        this.zoom = 12;
      }
      if (this.$route.query.locationkor === "광주") {
        this.center.lat = 35.15523093137521;
        this.center.lng = 126.83460715205861;
        this.zoom = 14;
      }
      if (this.$route.query.locationkor === "대전") {
        this.center.lat = 36.33921817956586;
        this.center.lng = 127.39410278706835;
        this.zoom = 13;
      }
      if (this.$route.query.locationkor === "울산") {
        this.center.lat = 35.5457310316843;
        this.center.lng = 129.2560979752397;
        this.zoom = 14;
      }
      if (this.$route.query.locationkor === "제주도") {
        this.center.lat = 33.37627377623203;
        this.center.lng = 126.56056736909964;
        this.zoom = 11.1;
      }
    },
   
    // mark(event) {
    //   console.log(event.latLng.lat());
    //   this.markers[2].position.lat = event.latLng.lat();
    //   this.sublat = event.latLng.lat();
    //   console.log(event.latLng.lng());
    //   this.markers[2].position.lng = event.latLng.lng();
    //   this.sublng = event.latLng.lng();
    // },
    async listpush(i){
         console.log(i)
      this.choice.push(i)
      console.log(this.choice)
  
      if(this.choice.length >= 2){
        // 자동차 경로 REST api
        const url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${this.choice[1].mapx}&endY=${this.choice[1].mapy}&reqCoordType=WGS84GEO&endRpFlag=G&startX=${this.choice[0].mapx}&startY=${this.choice[0].mapy}`;
      const headers = {};
      const response = await axios.get(url, { headers });
      console.log(response);
      for(var e=0; e<response.data.features.length; e++){
       //console.log(response.data.features[e].geometry.coordinates[0])
       if(response.data.features[e].geometry.coordinates[0].length === 2){
        this.middleload.push(response.data.features[e].geometry.coordinates[e]);
          }
  
     
  
     
       }
         console.log(this.middleload)
         for(var a=0; a<this.middleload.length; a++){
       this.path.push({"lat":Number(this.middleload[a][1]),"lng":Number(this.middleload[a][0])})
       }
       }
  

     
     
    console.log(this.path)
   this.componentKey += 1;
    },
    openMarker1(title,mapx,mapy){
      console.log(title,mapx)
     
      this.openedMarkerID = title;
      
     
      this.center ={lat: Number(mapy), lng: Number(mapx)}
      this.zoom =18;
    },
    openMarker(id) {
    
     
      this.openedMarkerID = id;
   
      
    },
    showPosition(event, two) {
      console.log(event.latLng);
      console.log(two);
    },
    handleright() {
      this.right = 1;
      this.btncolor3 ="noneactive"
      this.btncolor2 = "noneactive";
      this.btncolor = "active";
    },
    handleright2() {
      this.right = 2;
      this.btncolor2 = "active";
      this.btncolor = "noneactive";
      this.btncolor3 = "noneactive"
    },
        handleright3() {
      this.right = 3;
      this.btncolor2 = "noneactive";
      this.btncolor = "noneactive";
      this.btncolor3 = "active";
    },
  },
};
</script>
<style>
.el-collapse-item__header {
  text-align: center;
  display: block;
  background: #98dde3;
  color: white;
}
</style>
<style scoped>
.mytimg{
  float:left;
  height: 80px;
}
.mytravel_list{
  border:1px solid #ddd;
  width: 100%;
    height: 80px;
    box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  background: #ffffff;
  list-style: none;

}
.rightfull_btn{
  height: 100%;
  width:20px;
  background: rgba(0, 0, 0, 0.1);
  float:left;
  line-height: 50;
  color:darkslateblue;
  cursor: pointer;
  transition: all 1s;
}
.rightfull_btn:hover{
   background: rgba(0, 0, 0, 0.3);
   color:white;
}
.ind {
  color: red;
  font-size: 12px;
}
.chcss {
  text-align: center;
  display: block;
}
.imgdiv {
  overflow: hidden;
  height: 100px;
  width: 100px;
  float: left;
  cursor: pointer;
}

.travel_list li {
  width: 282px;
  height: 100px;
  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  background: #ffffff;
  list-style: none;
}
.noneactive {
  background: #ffffff;
  color: black;
}
.active {
  background: #98dde3;
  color: white;
}
.check {
  margin: 0px !important;
}
.vue-map-container {
  height: 900px !important;
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
  padding: 10px;
}
.center1 {
  width: 60%;
  height: 900px;
  position: relative;
  float: left;
  transition: all 1.5s;
}
.center2 {
  width: 40%;
  height: 900px;
  position: relative;
  float: left;
  transition: all 1.5s;
}
.addmarker {
  position: absolute;
  top: 60px;
  right: 10px;
  width: 40px;
  border: none;
  background: white;
  height: 40px;
  cursor: pointer;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
}
.right1 {
  width: 20%;
  height: 900px;
  background: rgb(238, 237, 237);
  float: left;
  box-sizing: border-box;
  transition: all 1.5s;

}
.right2 {
  width: 40%;
  height: 900px;
  background: rgb(238, 237, 237);
  float: left;
  box-sizing: border-box;
    transition: all 1.5s;
}
.btn_last {
  width: 100%;
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
#right_btn {
  width: 33%;
  height: 35px;
  border: none;
  cursor: pointer;
  margin-top:10px;

}

#right_btn:nth-child(3){
  border-right:1px solid #ddd;
  border-left:1px solid #ddd;
}
.right_content {
  margin-top: 10px;
  background: #f1f1f1;
  height: 800px;
  padding: 10px;
  text-align: center;
}
.right_content h4 {
  font-weight: 900;
  font-size: 20px;
}

</style>