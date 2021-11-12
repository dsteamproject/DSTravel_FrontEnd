<template>
  <div class="wrap" style="position: fixed">
    <div class="newleft" v-if="newleft === 'on'">
      <p class="nltext1">일정</p>
      <button class="nltext2" @click="allview">전체일정</button>
      <button
        v-for="item in traveldate"
        :key="item"
        class="lastleft_bth"
        @click="handledatego(item)"
      >
        DAY{{ item + 1 }}
      </button>
    </div>
    <div class="left1">
      <div v-if="newleft === 'off'">
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
          <div>
            <h5>여행일정</h5>
            <button @click="this.num3 -= 1" class="prev">&lt;</button>
            <el-input-number
              v-model="num3"
              :controls="false"
              :min="1"
              :max="Number(this.$route.query.betday)"
              controls-position="right"
              @change="handleChange"
            /><span>일차</span>
            <button @click="numplus" class="next">&gt;</button>
          </div>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 1"
          >
            <li v-for="list in choice1" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 2"
          >
            <li v-for="list in choice2" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 3"
          >
            <li v-for="list in choice3" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 4"
          >
            <li v-for="list in choice4" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 5"
          >
            <li v-for="list in choice5" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 6"
          >
            <li v-for="list in choice6" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 7"
          >
            <li v-for="list in choice7" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 8"
          >
            <li v-for="list in choice8" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 9"
          >
            <li v-for="list in choice9" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 10"
          >
            <li v-for="list in choice10" :key="list" class="mytravel_list">
              <div class="mytimg">
                <img :src="list.firstimage" style="height: 70px; width: 90px" />
              </div>
              {{ list.title }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="newleft0 === 'on'">
        <ul class="alldate">
          <li class="alldatetitle" v-if="this.choice1.length > 0">Day 1</li>
          <li class="alldatecontent" v-for="item in choice1" :key="item">
            <div class="ads" style="width: 10%; float: left">
              <img :src="item.firstimage" style="width: 50px; height: 50px" />
            </div>
            <div class="ads2" style="width: 90%; float: left">
              <span class="choice_title"> {{ item.title }}</span>
            </div>
          </li>

          <li class="alldatetitle" v-if="this.choice2.length > 0">Day 2</li>
          <li
            class="alldatecontent"
            v-for="(item, index) in choice2"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
          <li class="alldatetitle" v-if="this.choice3.length > 0">Day 3</li>
          <li class="alldatecontent" v-for="item in choice3" :key="item">
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
          <li class="alldatetitle" v-if="this.choice4.length > 0">Day 4</li>
          <li class="alldatecontent" v-for="item in choice4" :key="item">
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
          <li class="alldatetitle" v-if="this.choice5.length > 0">Day 5</li>
          <li class="alldatecontent" v-for="item in choice5" :key="item">
            {{ item.title }}
          </li>
          <li class="alldatetitle" v-if="this.choice6.length > 0">Day 6</li>
          <li class="alldatecontent" v-for="item in choice6" :key="item">
            {{ item.title }}
          </li>
          <li class="alldatetitle" v-if="this.choice7.length > 0">Day 7</li>
          <li class="alldatecontent" v-for="item in choice7" :key="item">
            {{ item.title }}
          </li>
          <li class="alldatetitle" v-if="this.choice8.length > 0">Day 8</li>
          <li class="alldatecontent" v-for="item in choice8" :key="item">
            {{ item.title }}
          </li>
          <li class="alldatetitle" v-if="this.choice9.length > 0">Day 9</li>
          <li class="alldatecontent" v-for="item in choice9" :key="item">
            {{ item.title }}
          </li>
          <li class="alldatetitle" v-if="this.choice10.length > 0">Day 10</li>
          <li class="alldatecontent" v-for="item in choice10" :key="item">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 0">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice1"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 1">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice2"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 2">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice3"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 3">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice4"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 4">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice5"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 5">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice6"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 6">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice7"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 7">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice8"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 8">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice9"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 9">
        <ul class="alldate">
          <li
            class="alldatecontent"
            v-for="(item, index) in choice10"
            :key="item"
          >
            <span class="choice_title">
              <span class="choice_no">NO.{{ index + 1 }}</span>
              {{ item.title }}</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div :class="centercss">
      <GMapMap
        ref="myMapRef"
        :key="key"
        :center="center"
        :zoom="zoom"
        map-type-id="roadmap"
        style="width: 100vw; height: 20rem"
        @click="mark"
        class="gmap"
        :options="{
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
        }"
      >
        <GMapCluster
          :minimumClusterSize="4"
          :zoomOnClick="true"
          :style="clusterIcon"
          imagePath="https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m"
        >
          <GMapMarker
            :key="(index, componentKey)"
            v-for="(m, index) in markers"
            :icon="m.icon"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="openMarker(m.id)"
            v-on:click="center = m.position"
            @closeclick="openMarker(null)"
          >
            <GMapPolyline
              v-if="this.num3 === 1"
              :options="options"
              :path="path1"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 2"
              :options="options"
              :path="path2"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 3"
              :options="options"
              :path="path3"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 4"
              :options="options"
              :path="path4"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 5"
              :options="options"
              :path="path5"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 6"
              :options="options"
              :path="path6"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 7"
              :options="options"
              :path="path7"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 8"
              :options="options"
              :path="path8"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 9"
              :options="options"
              :path="path9"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 10"
              :options="options"
              :path="path10"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />

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
      <button class="addmarker" @click="dialogVisible = true">장소등록</button>
      <button class="addmarker2" @click="lastaction">일정생성</button>
    </div>
    <div :class="rightcss">
      <div class="rightfull_btn" v-if="rightc === 'off'" @click="handlefull">
        <span>◀</span>
      </div>
      <div class="rightfull_btn" v-if="rightc === 'on'" @click="handlefull2">
        <span>▶</span>
      </div>
      <div
        style="float: left; padding: 10px; box-sizing: border-box; width: 93.8%"
      >
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
          검색<input type="text" class="searchinput" />
          <ul class="travel_list">
            <li v-for="list in busanlist10" :key="list" class="listmap">
              <div class="imgdiv" @click="openMarker1(list)">
                <img :src="list.firstimage" style="height: 100px" />
              </div>
              <div class="textdiv">
                <span class="td_title">{{ list.title }}</span>
              </div>
              <button class="info_btn" @click="openinfo(list)">i</button>
              <button class="plus_btn" @click="listpush(list)">+</button>
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

  <el-dialog
    v-model="dialogVisible1"
    :title="this.dialoglist.title"
    top="30vh"
    width="50%"
    :before-close="handleClose"
    append-to-body
    class="sasa"
  >
    <div>
      <div class="dialogimg">
        <img :src="this.dialoglist.firstimage" style="height: 310px" />
      </div>
      <div class="dialogtext">
        <span>{{ this.dialoglist.title }}</span>
      </div>
      <div style="clear: both"></div>
    </div>
  </el-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "search",

  async created() {
    console.log(this.$route.query.betday);
    for (var o = 0; o < this.$route.query.betday; o++) {
      this.traveldate.push(o);
    }
    console.log(this.traveldate);
    // 오른쪽 상세창
    await this.rightrefresh();

    // ========
    // 구글맵 화면용
    //const url = `/REST/travel/tourapi/select?page=1&cnt=100&arrange=P&contentTypeId=12&areaCode=6`;
    const url = `/REST/travel/select?size=100&page=1&title=&contentTypeId=12&areaCode=6`;
    const headers = { "Content-type": "application/json" };

    const response = await axios.get(url, { headers });
    console.log(response);

    this.busanlist = response.data.list;

    for (var i = 0; i < this.busanlist.length; i++) {
      this.markers.push({
        id: this.busanlist[i].title,
        position: {
          lat: Number(this.busanlist[i].ylocation),
          lng: Number(this.busanlist[i].xlocaion),
        },
        icon: "https://ifh.cc/g/3qp9x6.png",
      });
    }

    await this.replacerefresh();
  },
  data() {
    return {
      newleft0: "off",
      newleft: "off",
      newleft1: "",
      key: 1,
      num3: 1,
      startdate: 1,
      traveldate: [],
      abc: "dialog <br> <br/> adsdd",
      startnum: 0,
      startnum2: 0,
      startnum3: 0,
      startnum4: 0,
      startnum5: 0,
      startnum6: 0,
      startnum7: 0,
      startnum8: 0,
      startnum9: 0,
      startnum10: 0,
      endnum: 1,
      endnum2: 1,
      endnum3: 1,
      endnum4: 1,
      endnum5: 1,
      endnum6: 1,
      endnum7: 1,
      endnum8: 1,
      endnum9: 1,
      endnum10: 1,
      middleload1: [], // 경로
      middleload: [], // 경로
      componentKey: 0,
      path1: [],
      path2: [],
      path3: [],
      path4: [],
      path5: [],
      path6: [],
      path7: [],
      path8: [],
      path9: [],
      path10: [],
      rightc: "off",
      centercss: "center1",
      rightcss: "right1",
      dialoglist: [],
      dialogcontent: "",
      choice1: [],
      choice2: [],
      choice3: [],
      choice4: [],
      choice5: [],
      choice6: [],
      choice7: [],
      choice8: [],
      choice9: [],
      choice10: [],

      busan10ll: [],
      busanlist10: [],
      busanlist: [],
      lockor: this.$route.query.locationkor,
      zoom: 14,
      dialogVisible: false,
      dialogVisible1: false,
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
      markers: [],
      numberp: [],
      options: {
        strokeColor: "#FF0000",
        strokeWeight: "3",
      },
    };
  },
  async mounted() {
    console.log(this.$refs.myMapRef);

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
    allview() {
      this.newleft0 = "on";
      this.newleft1 = "off";
    },
    handledatego(i) {
      console.log(i);
      this.newleft1 = i;
      this.newleft0 = "off";
    },
    lastaction() {
      this.rightcss = "right3";
      this.centercss = "center3";
      this.newleft = "on";
      this.newleft0 = "on";
      console.log(this.choice1);
    },
    numplus() {
      this.num3 += 1;
    },
    async rightrefresh() {
      // 오른쪽 상세창
      const url1 = `/REST/travel/select?size=100&page=1&title=&contentTypeId=12&areaCode=6`;
      const headers1 = { "Content-type": "application/json" };

      const response1 = await axios.get(url1, { headers1 });
      console.log(response1);
      this.busanlist10 = response1.data.list;
    },
    handlefull() {
      this.rightcss = "right2";
      this.centercss = "center2";
      this.rightc = "on";
    },
    handlefull2() {
      this.rightcss = "right1";
      this.centercss = "center1";
      this.rightc = "off";
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
    async listpush(i) {
      console.log(i);
      console.log(i.title);

      var marknum = this.markers.findIndex((e) => e.id == i.title);
      console.log(marknum);
      console.log(this.choice1.length + 1);
      this.markers[marknum].icon = "https://ifh.cc/g/q7v7ZO.png";
      console.log(this.markers[marknum].icon);
      this.busanlist10 = [];
      console.log(i);
      if (this.num3 === 1) {
        this.choice1.push(i);
      } else if (this.num3 === 2) {
        this.choice2.push(i);
      } else if (this.num3 === 3) {
        this.choice3.push(i);
      } else if (this.num3 === 4) {
        this.choice4.push(i);
      } else if (this.num3 === 5) {
        this.choice5.push(i);
      } else if (this.num3 === 6) {
        this.choice6.push(i);
      } else if (this.num3 === 7) {
        this.choice7.push(i);
      } else if (this.num3 === 8) {
        this.choice8.push(i);
      } else if (this.num3 === 9) {
        this.choice9.push(i);
      } else if (this.num3 === 10) {
        this.choice10.push(i);
      }

      // =====================================
      //한개 선택후 오른쪽 list 변경

      //const url1 = `/REST/travel/distance?areaCode=6&Cnt=100&contentTypeId=12&kilometer=5&pageNo=1&xmap=${i.mapx}&ymap=${i.mapy}`;
      const url1 = `/REST/travel/distance?areaCode=6&size=100&contentTypeId=12&kilometer=5&page=1&xmap=${i.xlocaion}&ymap=${i.ylocation}`;
      const headers1 = {};
      const response1 = await axios.get(url1, { headers1 });
      console.log(response1);
      this.busanlist10 = response1.data.distanceList;

      // =====================================

      // 자동차 경로 REST api
      console.log(this.startnum);
      console.log(this.endnum);

      let url;
      if (this.num3 === 1) {
        console.log(this.choice1);
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice1[Number(this.endnum)].xlocaion
        }&endY=${
          this.choice1[Number(this.endnum)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice1[Number(this.startnum)].xlocaion
        }&startY=${this.choice1[Number(this.startnum)].ylocation}`;
      } else if (this.num3 === 2) {
        console.log(this.choice2);
        console.log(this.endnum2);
        console.log(this.choice2[Number(this.endnum2)].mapx);
        console.log(this.choice2[Number(this.endnum2)].mapy);
        console.log(this.choice2[Number(this.startnum2)].mapy);
        console.log(this.choice2[Number(this.startnum2)].mapx);
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice2[Number(this.endnum2)].mapx
        }&endY=${
          this.choice2[Number(this.endnum2)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice2[Number(this.startnum2)].mapx
        }&startY=${this.choice2[Number(this.startnum2)].mapy}`;
        console.log(url);
      } else if (this.num3 === 3) {
        console.log(this.choice3);
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice3[Number(this.endnum3)].mapx
        }&endY=${
          this.choice3[Number(this.endnum3)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice3[Number(this.startnum3)].mapx
        }&startY=${this.choice3[Number(this.startnum3)].mapy}`;
      } else if (this.num3 === 4) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice4[Number(this.endnum4)].mapx
        }&endY=${
          this.choice4[Number(this.endnum4)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice4[Number(this.startnum4)].mapx
        }&startY=${this.choice4[Number(this.startnum4)].mapy}`;
      } else if (this.num3 === 5) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice5[Number(this.endnum5)].mapx
        }&endY=${
          this.choice5[Number(this.endnum5)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice5[Number(this.startnum5)].mapx
        }&startY=${this.choice5[Number(this.startnum5)].mapy}`;
      } else if (this.num3 === 6) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice6[Number(this.endnum6)].mapx
        }&endY=${
          this.choice6[Number(this.endnum6)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice6[Number(this.startnum6)].mapx
        }&startY=${this.choice6[Number(this.startnum6)].mapy}`;
      } else if (this.num3 === 7) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice7[Number(this.endnum7)].mapx
        }&endY=${
          this.choice7[Number(this.endnum7)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice7[Number(this.startnum7)].mapx
        }&startY=${this.choice7[Number(this.startnum7)].mapy}`;
      } else if (this.num3 === 8) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice8[Number(this.endnum8)].mapx
        }&endY=${
          this.choice8[Number(this.endnum8)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice8[Number(this.startnum8)].mapx
        }&startY=${this.choice8[Number(this.startnum8)].mapy}`;
      } else if (this.num3 === 9) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice9[Number(this.endnum9)].mapx
        }&endY=${
          this.choice9[Number(this.endnum9)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice9[Number(this.startnum9)].mapx
        }&startY=${this.choice9[Number(this.startnum9)].mapy}`;
      } else if (this.num3 === 10) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice10[Number(this.endnum10)].mapx
        }&endY=${
          this.choice10[Number(this.endnum10)].mapy
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice10[Number(this.startnum10)].mapx
        }&startY=${this.choice10[Number(this.startnum10)].mapy}`;
      }
      const headers = {};
      const response = await axios.get(url, { headers });
      console.log(response.data);
      for (var e = 1; e < response.data.features.length; e++) {
        if (response.data.features[e].geometry.coordinates.length === 2) {
          if (response.data.features[e].geometry.coordinates[0].length === 2) {
            console.log("123");
          } else {
            this.middleload.push(
              response.data.features[e].geometry.coordinates
            );
          }
        } else {
          for (
            var q = 0;
            q < response.data.features[e].geometry.coordinates.length;
            q++
          ) {
            this.middleload.push(
              response.data.features[e].geometry.coordinates[q]
            );
          }
        }
      }
      console.log(this.middleload1);

      for (var a = 0; a < this.middleload.length; a++) {
        if (this.num3 === 1) {
          this.path1.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 2) {
          this.path2.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 3) {
          this.path3.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 4) {
          this.path4.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 5) {
          this.path5.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 6) {
          this.path6.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 7) {
          this.path7.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 8) {
          this.path8.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 9) {
          this.path9.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 10) {
          this.path10.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        }
      }
      if (this.num3 === 1) {
        this.startnum += 1;
        this.endnum += 1;
        this.middleload = [];
      } else if (this.num3 === 2) {
        this.startnum2 += 1;
        this.endnum2 += 1;
        this.middleload = [];
      } else if (this.num3 === 3) {
        this.startnum3 += 1;
        this.endnum3 += 1;
        this.middleload = [];
      } else if (this.num3 === 4) {
        this.startnum4 += 1;
        this.endnum4 += 1;
        this.middleload = [];
      } else if (this.num3 === 5) {
        this.startnum5 += 1;
        this.endnum5 += 1;
        this.middleload = [];
      } else if (this.num3 === 6) {
        this.startnum6 += 1;
        this.endnum6 += 1;
        this.middleload = [];
      } else if (this.num3 === 7) {
        this.startnum7 += 1;
        this.endnum7 += 1;
        this.middleload = [];
      } else if (this.num3 === 8) {
        this.startnum8 += 1;
        this.endnum8 += 1;
        this.middleload = [];
      } else if (this.num3 === 9) {
        this.startnum9 += 1;
        this.endnum9 += 1;
        this.middleload = [];
      } else if (this.num3 === 10) {
        this.startnum10 += 1;
        this.endnum10 += 1;
        this.middleload = [];
      }

      // 강제  렌더링
      console.log(this.path);
      this.componentKey += 1;
    },
    async openinfo(i) {
      const url = `/REST/travel/tourapi/selectone?contentId=${i.contentid}`;
      const headers = { "Content-type": "application/json" };

      const response = await axios.get(url, { headers });
      console.log(response);
      this.dialoglist = response.data.list;
      this.dialogcontent = this.dialoglist.overview.replace(
        /(<br>|<br\/>|<br \/>)/g,
        "\r\n"
      );

      this.dialogVisible1 = true;
    },
    async openMarker1(i) {
      this.openedMarkerID = null;
      this.openedMarkerID = i.title;
      this.center = { lat: Number(i.mapy), lng: Number(i.mapx) };
      this.zoom = 18;
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
      this.btncolor3 = "noneactive";
      this.btncolor2 = "noneactive";
      this.btncolor = "active";
    },
    handleright2() {
      this.right = 2;
      this.btncolor2 = "active";
      this.btncolor = "noneactive";
      this.btncolor3 = "noneactive";
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
.el-input-number {
  width: 23px;
}
.el-input__inner {
  border: none;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.el-dialog__header {
  display: none;
}
.el-dialog__body {
  padding: unset;
}
.el-collapse-item__header {
  text-align: center;
  display: block;
  background: #98dde3;
  color: white;
}
</style>
<style scoped>
.listmap {
  position: relative;
}
.info_btn {
  border: none;
  padding: 4px 10px;
  color: white;
  background: #ccc;
  position: absolute;
  border-radius: 50%;
  bottom: 6.5px;
  right: 50px;
}
.plus_btn {
  position: absolute;
  bottom: 0;
  right: 20px;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 30px;
  cursor: pointer;
}
.td_title {
  font-size: 13px;
  font-weight: 500;
  margin-left: 10px;
  margin-top: 10px;
  vertical-align: -11px;
}
.textdiv {
  text-align: left;
}
.nltext1 {
  display: inline-block;
  padding: 5px 10px;
  box-shadow: rgb(31 38 135 / 10%) 0px 8px 32px 0px !important;
  background-color: #fff;
  margin-top: 10px;
  font-size: 13px;
}
.nltext2 {
  display: inline-block;
  padding: 20px 10px;
  box-shadow: rgb(31 38 135 / 10%) 0px 8px 32px 0px !important;
  background-color: #fff;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  border: none;
}
.lastleft_bth {
  border: none;
  padding: 0px 15px;
  margin: 6px;
  border-radius: 0px;
  backdrop-filter: blur(4px);
  /* color: rgb(255, 255, 255); */
  box-shadow: rgb(31 38 135 / 10%) 0px 8px 32px 0px !important;
  cursor: pointer;
  height: 50px;

  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  background-color: #fff;
  font-size: 13px;
}
.newleft {
  width: 5%;
  float: left;
  height: 850px;
  text-align: center;
  background: #fafafa;
  transition: all 1s;
}
.mytimg {
  float: left;
  height: 80px;
}
.travel_list {
  overflow: auto;
  height: 72vh;
  margin-top: 5px;
}
.mytravel_list {
  border: 1px solid #ddd;

  height: 70px;
  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  background: #ffffff;
  list-style: none;
  display: inline-flex;
  width: 90%;
}
.rightfull_btn {
  height: 100%;
  width: 20px;

  background: rgba(0, 0, 0, 0.1);
  float: left;
  line-height: 50;
  color: darkslateblue;
  cursor: pointer;
  transition: all 1s;
}
.rightfull_btn:hover {
  background: rgba(0, 0, 0, 0.3);
  color: white;
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
  height: 88px;
  width: 100px;
  float: left;
  cursor: pointer;
  border-radius: 10px 0px 0px 10px;
}

.travel_list li {
  border-radius: 10px;
  width: 16.7vw;
  height: 88px;
  box-shadow: rgb(31 38 135 / 15%) 0px 8px 16px 0px;
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
  height: 86.5vh !important;
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
  font-size: 1.1rem;
  color: #696969;
  text-decoration: none;
  margin-bottom: 20px;
  display: block;
}
.day {
  font-size: 1.2rem;
  font-weight: 700;
  display: block;
  margin-top: 10px;
}
.sub_area {
  font-size: 0.8rem;

  color: #999;
}
h3 {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0px;
  margin-top: 10px;
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
  height: 850px;
  background: #ffffff;
  text-align: center;
  float: left;
  box-sizing: border-box;
  padding: 10px;
}
.center1 {
  width: 60%;
  height: 850px;
  position: relative;
  float: left;
  transition: all 1.5s;
}
.center2 {
  width: 40%;
  height: 850px;
  position: relative;
  float: left;
  transition: all 1.5s;
}
.center3 {
  width: 75%;
  height: 850px;
  position: relative;
  float: left;
  transition: all 1.5s;
}
.addmarker {
  position: absolute;
  top: 20px;
  left: 10px;
  border: none;
  cursor: pointer;
  width: 120px;
  height: 56px;
  padding: 0;
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000 !important;
  box-shadow: unset;
  /* background: rgba(255, 255, 255, 0.25); */
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 20%) !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px) !important;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px !important;
  text-decoration: unset !important;
}
.addmarker2 {
  position: absolute;
  top: 100px;
  left: 10px;
  border: none;
  cursor: pointer;
  width: 120px;
  height: 56px;
  padding: 0;
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000 !important;
  box-shadow: unset;
  /* background: rgba(255, 255, 255, 0.25); */
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 20%) !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px) !important;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px !important;
  text-decoration: unset !important;
}
.right1 {
  width: 20%;
  height: 900px;
  background: #f7f7f7;
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
.right3 {
  display: none;
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
  margin-top: 10px;
}

#right_btn:nth-child(3) {
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
}
.right_content {
  margin-top: 10px;

  height: 800px;
  padding: 10px 0px 10px 10px;
  text-align: center;
}
.right_content h4 {
  font-weight: 900;
  font-size: 20px;
}
.dialogimg {
  overflow: hidden;
  height: 286px;
  width: 35%;
  float: left;
}
.dialogtext {
  float: left;
  width: 65%;
  padding: 20px 10px 20px 10px;
  box-sizing: border-box;
}
.diatextarea {
  border: none;
  height: 200px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  resize: none;
  outline: none;
  -ms-overflow-style: none;
}
.diatextarea::-webkit-scrollbar {
  display: none;
}
.searchinput {
  padding: 5px 10px;
  border: 1px solid #ddd;
}
.rightscroll::-webkit-scrollbar {
  width: 1px;
  background-color: rgba(145, 210, 229, 0);
}
.travel_list::-webkit-scrollbar {
  width: 3px;
  background-color: rgba(145, 210, 229, 0);
}
.prev {
  float: left;
  font-size: 30px;
  font-weight: bold;
  background: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  line-height: 38px;
}
.next {
  float: right;
  font-size: 30px;
  font-weight: bold;
  background: none;
  border: none;
  margin-right: 15px;
  cursor: pointer;
  line-height: 38px;
}
/* 결과창 css */
.alldate li {
  list-style: none;
}

.alldate {
  text-align: center;
  height: 732px;
  overflow: auto;
}
.alldatetitle {
  font-weight: bold;
  font-size: 17px;
}

.alldatecontent {
  font-size: 13px;
  text-align: center;
  width: 80%;
  height: 6vh;

  margin-top: 10px;
  display: inline-table;
  box-shadow: rgb(31 38 135 / 8%) 0px 8px 16px 0px !important;
  background: rgba(255, 255, 255, 0.8) !important;
  border-radius: 4px !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 8px;
  background-color: transparent !important;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  position: relative;
}

.choice_title {
  vertical-align: -100%;
}
.choice_no {
  margin-right: 50px;
  color: #ffba3b;
}
</style>