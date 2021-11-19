<template>
  <div>
    <!-- https://onycat.com/vue-easy-lightbox/guide/ -->
    <div class="wrap">
      <div class="left1">
        <div class="stayheader">
          <button class="mapbtn">위치보기</button>
          <h2>{{ this.list.title }}</h2>
          <p>{{ this.list.rank }}성급</p>

          <div class="br"></div>
          <span>{{ this.list.addr }}</span>
          <span>체크인 15:00 ~ 체크아웃 11:00</span>
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
              <li>전 객실 30.66㎡ 이상 넓은 객실 크기</li>
              <li>
                기본 객실부터 욕조 구비! 여행의 피로를 싹 풀어보세요! (단,
                트리플 객실 제외)
              </li>
              <li>이중섭거리, 매일올레시장 도보 5분 거리!</li>
            </ul>
            <div class="hr"></div>
            <label>체크인/체크아웃</label
            ><span> 체크인 - 15:00 / 체크아웃 - 11:00</span>
            <div class="hr"></div>
            <label class="label3">환불규정</label>
            <span class="cancel"
              >취소 및 환불 규정<br />
              - 체크인 7일 전 : 취소 수수료 없음<br />
              - 체크인 2일 전 : 취소 수수료 50%<br />
              - 체크인 당일 : 취소 수수료 100%<br />
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
          <span>1박</span><span>{{ this.list.price }}0,000원</span
          ><span class="heart">♡</span><span class="heart">♥</span>

          <br />
          <button class="ribtn">예약하기</button>
          <button class="ribtn2" @click="goodup">위시리스트에 담기</button>
          <span class="ritext"
            >{{ this.list.good }}명이 이 상품을 위시리스트에 담았습니다.</span
          >
        </div>
      </div>
    </div>
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
import axios from "axios";
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      token: sessionStorage.getItem("TOKEN"),
      list: [],
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
      const url1 = `/REST/travel/selectone?contentId=${this.$route.query.code}`;
      const headers1 = { "Content-type": "application/json" };

      const response1 = await axios.get(url1, { headers1 });
      console.log(response1);
      this.list = response1.data.TD;
    },
    async goodup() {
      const url1 = `/REST/travel/good?contentid=${this.$route.query.code}`;
      const headers = {
        "Content-type": "application/json",
        token: this.token,
      };
      const body = {};
      const response1 = await axios.post(url1, body, { headers });
      console.log(response1);
      await this.refresh();
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
  border: 1px solid rgb(53, 52, 52);
  background: #ffffff;
  color: black;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
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
  position: fixed;
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
.wrap {
  width: 1060px;
  margin: 0 auto;
}
.left1 {
  margin-top: 50px;
  width: 700px;
  float: left;
  margin-right: 30px;
  height: auto;
}
.right1_99 {
  margin-top: 50px;
  width: 330px;
  height: 1000px;
  float: left;
}
</style>