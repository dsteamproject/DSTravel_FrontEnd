<template>
  <div>
    <!-- https://onycat.com/vue-easy-lightbox/guide/ -->
    <div class="wrap">
      <div class="left1">
        <div class="stayheader">
          <h2>{{ this.list.title }}</h2>
          <p>tel : {{ this.list.tel }}</p>

          <div class="br"></div>
          <span>{{ this.list.addr1 }}</span>

          <div class="br"></div>
        </div>
        <div class="staycontent">
          <div class="mainjpg">
            <span class="preview" @click="showMultiple">크게 보기</span>
            <img
              :src="this.list.firstimage"
              class="zoomimg"
              @click="showMultiple"
            />
          </div>
          <img src="../assets/seoul1.jpg" class="img2" @click="showMultiple2" />
          <img
            src="../assets/seoul2.jpg"
            class="img2 cimg"
            @click="showMultiple3"
          />
          <img src="../assets/seoul3.jpg" class="img2" @click="showMultiple4" />
        </div>
        <div class="staychoice">
          <div class="cho1">
            <label>소개</label>
            <ul class="info">
              <li><span v-html="this.list.overview"></span></li>
              <li v-if="this.list2.agelimit !== undefined">
                <span v-html="this.list2.agelimit"></span>
              </li>
              <li>
                <span v-html="this.list2.usetimefestival"> </span>
              </li>
              <li v-if="this.list2.eventhomepage === ''">
                <span v-html="this.list2.eventhomepage"></span>
              </li>
            </ul>
            <div class="hr"></div>
            <label class="label3">시간</label
            ><span
              class="cancel"
              v-if="this.list2.playtime !== ''"
              v-html="this.list2.playtime"
            >
            </span>
            <span v-if="this.list2.playtime === ''"> -</span>
            <div class="hr"></div>
            <label class="label3">환불규정</label>
            <span class="cancel"
              >취소 및 환불 규정<br />
              - 7일 전 : 취소 수수료 없음<br />
              - 2일 전 : 취소 수수료 50%<br />
              - 당일 : 취소 수수료 100%<br />
              <br />
              - 취소요청 이후에는 취소의 철회가 불가능합니다.<br />
              - 구매당일 취소시에도 환불 규정에 따라 취소 수수료가
              부과됩니다.</span
            >
          </div>
        </div>
        <div class="staysub"></div>
      </div>
      <div class="right1_99">
        <div class="right_in1">
          <span class="usertitle" v-html="this.list2.usetimefestival"></span>

          <br />
          <a :href="this.link" target="_blank"
            ><button class="ribtn">해당 사이트로 이동</button></a
          >
          <button class="ribtn2" @click="goodup">위치보기</button>
        </div>
      </div>
      <div class="both"></div>
    </div>

    <el-dialog
      v-model="dialogVisible1"
      top="10vh"
      width="50%"
      :before-close="handleClose"
      append-to-body
      class="sasa"
    >
      <div class="mapdia">
        <mapdialog v-bind:childVaule="this.chvalue" :key="abc" />
        <div style="clear: both"></div>
      </div>
    </el-dialog>
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import mapdialog from "./mapdialog.vue";
import axios from "axios";
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox,
    mapdialog,
  },
  data() {
    return {
      dialogVisible1: false,
      abc: 0,
      link: "",
      token: sessionStorage.getItem("TOKEN"),
      list: [],
      list2: [],
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
    };
  },

  async created() {
    await this.refresh();
  },
  methods: {
    async refresh() {
      const url1 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?serviceKey=FPCnbDX7v%2Fdl0UkUw9p5jW%2Bt4AgPdbPVS7y9uC29%2F7E3S4FZTJtiKORsRbMZPhjR6IhNNeHvdchVtbxY6rfUMg%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${this.$route.query.code}&contentTypeId=15`;
      const headers1 = { "Content-type": "application/json" };

      const response1 = await axios.get(url1, { headers1 });
      console.log(response1.data.response.body.items.item);
      this.list2 = response1.data.response.body.items.item;

      const url2 = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?serviceKey=FPCnbDX7v%2Fdl0UkUw9p5jW%2Bt4AgPdbPVS7y9uC29%2F7E3S4FZTJtiKORsRbMZPhjR6IhNNeHvdchVtbxY6rfUMg%3D%3D&numOfRows=1&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${this.$route.query.code}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`;
      const headers2 = { "Content-type": "application/json" };

      const response2 = await axios.get(url2, { headers2 });
      console.log(response2.data.response.body.items.item);
      this.list = response2.data.response.body.items.item;
      console.log(this.list.overview);

      console.log(this.list.homepage);
      this.link2 = this.list.homepage
        .replace(/(<([^>]+)>)/gi, "")
        .replace("https://", "")
        .replace("http://", "");

      this.link = "https://" + this.link2;
    },
    async goodup() {
      this.abc += 1;

      this.chvalue = {
        title: this.list.title,
        ylocation: this.list.mapy,
        xlocation: this.list.mapx,
      };
      this.dialogVisible1 = true;
    },
    showMultiple() {
      this.imgs = [
        this.list.firstimage,
        "/img/seoul1.f2d4e6e5.jpg",
        // 9 (1) 2 3
        "/img/seoul2.aad40864.jpg",
        "/img/seoul3.1ca5440c.jpg",
      ];
      this.index = 0; // index of imgList
      this.show();
    },
    showMultiple2() {
      this.imgs = [
        this.list.firstimage,
        "/img/seoul1.f2d4e6e5.jpg",
        // 9 (1) 2 3
        "/img/seoul2.aad40864.jpg",
        "/img/seoul3.1ca5440c.jpg",
      ];
      this.index = 1; // index of imgList
      this.show();
    },
    showMultiple3() {
      this.imgs = [
        this.list.firstimage,
        "/img/seoul1.f2d4e6e5.jpg",
        // 9 (1) 2 3
        "/img/seoul2.aad40864.jpg",
        "/img/seoul3.1ca5440c.jpg",
      ];
      this.index = 2; // index of imgList
      this.show();
    },
    showMultiple4() {
      this.imgs = [
        this.list.firstimage,
        "/img/seoul1.f2d4e6e5.jpg",
        // 9 (1) 2 3
        "/img/seoul2.aad40864.jpg",
        "/img/seoul3.1ca5440c.jpg",
      ];
      this.index = 3; // index of imgList
      this.show();
    },

    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.usertitle {
  font-size: 13px;
  font-weight: bold;
}
.both {
  clear: both;
}
.heart_box {
  overflow: hidden;
}
.heart {
  float: right;
  color: red;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.ritext {
  margin-top: 10px;
  font-size: 13px;
}
.ribtn2 {
  width: 100%;
  height: 45px;
  border: 1px solid #ddd;
  background: #f1f1f1;
  color: black;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  color: rgb(0, 0, 0);
}
.ribtn {
  width: 100%;
  height: 50px;
  border: none;
  background: #2752be;
  color: white;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
}
.right_in1 {
  position: sticky;
  top: 150px;
  border: 1px solid #ddd;
  width: 330px;
  height: auto;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
.label3 {
  vertical-align: top;
}
.cancel {
  display: inline-block;
  width: 70%;
}
.hr {
  border-bottom: 1px solid #ddd;
  margin: 20px 0px;
}
.info li {
  margin-left: 20px;
}
.info {
  display: inline-block;
  vertical-align: top;
  width: 70%;
}
label {
  width: 150px;
  display: inline-block;
}

.cho1 {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 30px;
}
.preview {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  z-index: 99;
  padding: 5px 10px;
  font-size: 12px;
}
.mainjpg {
  position: relative;
}
.zoomimg {
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
}

.img2 {
  transition: all 0.5s;
}

.zoomimg:hover {
  filter: brightness(70%);
}

.img2:hover {
  filter: brightness(70%);
}

.cimg {
  padding: 0px 5px;
}

.img2 {
  width: 230px;
  height: 100px;
  margin-top: 10px;
  cursor: pointer;
}

.br {
  border-bottom: 1px solid #ddd;
  margin: 20px 0px;
}
.mapbtn {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  background: rgb(124, 182, 169);
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
.mapdia {
  height: 500px !important;
}
.wrap {
  width: 1060px;
  margin: 0 auto;
  display: flex;
}
.left1 {
  margin-top: 50px;
  width: 700px;

  margin-right: 30px;
  height: auto;
}
.right1_99 {
  position: relative;
  margin-top: 50px;
  width: 330px;
}
</style>