<template>
  <div>
    <input type="text" v-model="search"><button @click="handlesearch">검색</button>
    <div>
      <table>
        <th>검색결과</th>
          <tr v-for="list in item" :key="list">
            <td>{{list.zipNo}}</td>
            <td>{{list.roadAddr}}</td>
            <td><button @click="btnclick(list.roadAddr)">해당지역 위도,경도</button></td>
     
          </tr>
      </table>
         {{this.item2.oldLat}}
            {{this.item2.oldLon}}
            서면에서 선택한 위치와의 거리 구하기
            <button @click="loadkm">거리구하기</button>
            <br>
            거리 : {{this.loadk}} m
            걸리는시간 : {{this.loadt}} m
    </div>
    <br>
    <hr>
    <br>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      search:"",
      item:[],
      item2:[],
      item3:[],
      item4:[],
      loadk:"",
      loadt:"",
    };
  },
  methods: {
    async loadkm(){
      const url =`https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=16&directionOption=0&endX=${this.item3[1]}&endY=${this.item3[0]}&reqCoordType=WGS84GEO&endRpFlag=G&startX=129.0589949151094&startY=35.157733104827386&sort=index`;
           const headers = { "Content-type": "application/json" };
       const body = {}
     const response = await axios.get(url,body, {headers});
     console.log(response.data.features[0].properties.totalDistance)
     this.loadk = response.data.features[0].properties.totalDistance
     console.log(response.data.features[0].properties.totalTime)
     this.loadt = response.data.features[0].properties.totalTime
    },
    // 해당지역 위도 경도
  async btnclick(value){
    console.log(value)
     const url = `https://apis.openapi.sk.com/tmap/geo/convertAddress?appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&version=1&searchTypCd=NtoO&reqAdd=${value}&reqMulti=M&resCoordType=WGS84GEO`;
     const headers = { "Content-type": "application/json" };
       const body = {}
     const response = await axios.get(url,body, {headers});
     
     this.item2 = response.data.ConvertAdd
     console.log(this.item2)
     this.item3.push(this.item2.oldLat,this.item2.oldLon  )
    
     console.log(this.item3)
   this.item2.oldLat 
  },
  // 도로명주소 검색
   async handlesearch(){
      const url = `https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIxMTEwODEwMDgzNzExMTg1NDU=&currentPage=1&countPerPage=10&keyword=${this.search}56&resultType=JSON&firstSort=none`;

      const headers = { "Content-type": "application/json" };
      const body = {}
      const response = await axios.get(url,body, {headers});
      console.log(response);
      this.item = response.data.results.juso
      console.log(this.item)
    }
  },
};
</script>

<style scoped>
</style>