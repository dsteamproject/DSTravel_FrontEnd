<template>
  <div>
    <div class="wrap">
      <div style="display: none">
        <img src="../assets/seoul1.jpg" />
        <img src="../assets/seoul2.jpg" />
        <img src="../assets/seoul3.jpg" />
        <img src="../assets/seoul4.jpg" />
        <img src="../assets/seoul5.jpg" />
        <img src="../assets/seoul6.jpg" />
        <img src="../assets/seoul7.jpg" />
        <img src="../assets/seoul8.jpg" />
        <img src="../assets/seoul9.jpg" />
        <img src="../assets/seoul10.jpg" />
        <img src="../assets/seoul11.jpg" />
        <img src="../assets/seoul12.jpg" />
        <img src="../assets/seoul13.jpg" />
        <img src="../assets/seoul14.jpg" />
        <img src="../assets/seoul15.jpg" />
        <img src="../assets/seoul16.jpg" />
      </div>

      <h1 v-if="rank === 16">16강</h1>
      <h1 v-if="rank === 8">8강</h1>
      <h1 v-if="rank === 4">4강</h1>
      <h1 v-if="rank === 2">결승</h1>
      <h1 v-if="rank === 1">우승 여행지</h1>
      <span v-if="rank === 16">{{ this.step }}/8</span>
      <span v-if="rank === 8">{{ this.step2 }}/4</span>
      <span v-if="rank === 4">{{ this.step3 }}/2</span>
      <span v-if="rank === 2">{{ this.step4 }}/1</span>
      <div v-if="step === 1">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick($event)"
          /><br />
          <span>{{ this.selectedtitle }}</span>
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick($event)"
            v-bind:id="this.selectedvalue2"
          /><br />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step === 2">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick2($event)"
          />
          <br />
          <span>{{ this.selectedtitle }}</span>
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick2($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step === 3">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick3($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick3($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step === 4">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick4($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick4($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step === 5">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick5($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick5($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step === 6">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick6($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick6($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step === 7">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick7($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick7($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>

      <div v-if="step === 8">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick8($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick8($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step2 === 1">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick9($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick9($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }} 1/4
        </div>
      </div>
      <div v-if="step2 === 2">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick10($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick10($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step2 === 3">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick11($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick11($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step2 === 4">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick12($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick12($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step3 === 1">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick13($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick13($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step3 === 2">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick14($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick14($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step4 === 1">
        <div class="left">
          <img
            ref="img1"
            :src="selectedImage"
            class="img1"
            v-bind:id="this.selectedvalue"
            @click="handleleftclick15($event)"
          />{{ this.selectedtitle }}
        </div>
        <div class="right">
          <img
            ref="img2"
            :src="selectedImage2"
            class="img2"
            @click="handlerightclick15($event)"
            v-bind:id="this.selectedvalue2"
          />{{ this.selectedtitle2 }}
        </div>
      </div>
      <div v-if="step5 === 1">
        <img
          :src="selectedImage"
          class="img1"
          v-bind:id="this.selectedvalue"
        /><br />{{ this.selectedtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { img: "/img/seoul1.f2d4e6e5.jpg", title: "경복궁", value: "0" },
        { img: "/img/seoul2.aad40864.jpg", title: "N서울타워", value: "1" },
        {
          img: "/img/seoul5.4361ca3e.jpg",
          title: "서울역사박물관",
          value: "2",
        },
        { img: "/img/seoul7.d0c14541.jpg", title: "롯데월드", value: "3" },
        { img: "/img/seoul9.75611971.jpg", title: "남산", value: "4" },
        { img: "/img/seoul11.c1439350.jpg", title: "반포대교", value: "5" },
        { img: "/img/seoul13.6b80037c.jpg", title: "명동대성당", value: "6" },
        { img: "/img/seoul15.5dafbc9d.jpg", title: "갤러리현대", value: "7" },
      ],
      images2: [
        { img: "/img/seoul3.1ca5440c.jpg", title: "명동", value: "0" },
        { img: "/img/seoul4.c7f2f5db.jpg", title: "63빌딩", value: "1" },
        { img: "/img/seoul6.8a8391db.jpg", title: "도봉산", value: "2" },
        { img: "/img/seoul8.32d5ae5b.jpg", title: "광장시장", value: "3" },
        {
          img: "/img/seoul10.b71424aa.jpg",
          title: "이화동 벽화마을",
          value: "4",
        },
        { img: "/img/seoul12.7bf09c7a.jpg", title: "광화문 광장", value: "5" },
        {
          img: "/img/seoul14.1792dc77.jpg",
          title: "익선동 한옥거리",
          value: "6",
        },
        {
          img: "/img/seoul16.9c64361d.jpg",
          title: "문화역서울 284",
          value: "7",
        },
      ],
      images3: [],
      images4: [],
      images5: [],
      images6: [],
      images7: [],
      images8: [],
      finalimage: [],
      selectedImage: "",
      selectedImage2: "",
      selectedvalue: "",
      selectedtitle: "",
      selectedtitle2: "",
      selectedvalue2: "",
      step: 1,
      step2: 0,
      step3: 0,
      step4: 0,
      step5: 0,
      random: [],
      random2: [],
      random3: [],
      rank: 16,
      scale: "scale",
    };
  },
  async created() {
    this.$emit("searchon", true);
    var allnum = [0, 1, 2, 3, 4, 5, 6, 7];
    var newnum = [];
    while (allnum.length > 0) {
      var movenum = allnum.splice(
        Math.floor(Math.random() * allnum.length),
        1
      )[0];
      newnum.push(movenum);
    }
    var allnum2 = [0, 1, 2, 3];
    var newnum2 = [];
    while (allnum2.length > 0) {
      var movenum2 = allnum2.splice(
        Math.floor(Math.random() * allnum2.length),
        1
      )[0];
      newnum2.push(movenum2);
    }
    var allnum3 = [0, 1];
    var newnum3 = [];
    while (allnum3.length > 0) {
      var movenum3 = allnum3.splice(
        Math.floor(Math.random() * allnum3.length),
        1
      )[0];
      newnum3.push(movenum3);
    }

    this.random = newnum;
    this.random2 = newnum2;
    this.random3 = newnum3;
    console.log(this.random2);
    console.log("rand3");
    console.log(this.random3);

    this.selectedImage = this.images[this.random[0]].img;
    this.selectedtitle = this.images[this.random[0]].title;
    this.selectedvalue = this.images[this.random[0]].value;
    this.selectedImage2 = this.images2[this.random[0]].img;
    this.selectedtitle2 = this.images2[this.random[0]].title;
    this.selectedvalue2 = this.images[this.random[0]].value;
  },
  methods: {
    async handleleftclick(event) {
      var index = this.images3.findIndex((i) => i.value == 0);
      var index2 = this.images4.findIndex((i) => i.value == 0);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images[event.currentTarget.id].value = 0;
          this.images3.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 1;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images[event.currentTarget.id].value = 0;
          this.images4.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 1;
          this.images4.push(this.images[event.currentTarget.id]);
        }
      }
      var img1 = this.$refs.img1;
      img1.style.transform = "scale(2)";
      console.log(index);
      console.log(this.images3);
      console.log(this.images4);
      delete this.images2[event.currentTarget.id];
      delete this.images[event.currentTarget.id];

      const wait = (timeToDelay) =>
        new Promise((resolve) => setTimeout(resolve, timeToDelay));
      await wait(2000);
      this.step = this.step + 1;

      this.randomimg();
    },
    async handleleftclick2(event) {
      var index = this.images3.findIndex((i) => i.value == 1);
      var index2 = this.images4.findIndex((i) => i.value == 1);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images[event.currentTarget.id].value = 1;
          this.images3.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 2;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images[event.currentTarget.id].value = 1;
          this.images4.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 2;
          this.images4.push(this.images[event.currentTarget.id]);
        }
      }
      var img1 = this.$refs.img1;
      img1.style.transform = "scale(2)";
      console.log(this.images3);
      console.log(this.images4);
      delete this.images2[event.currentTarget.id];
      delete this.images[event.currentTarget.id];

      const wait = (timeToDelay) =>
        new Promise((resolve) => setTimeout(resolve, timeToDelay));
      await wait(2000);
      this.step = this.step + 1;
      this.randomimg2();
    },
    async handleleftclick3(event) {
      var index = this.images3.findIndex((i) => i.value == 2);
      var index2 = this.images4.findIndex((i) => i.value == 2);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images[event.currentTarget.id].value = 2;
          this.images3.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 3;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images[event.currentTarget.id].value = 2;
          this.images4.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 3;
          this.images4.push(this.images[event.currentTarget.id]);
        }
      }
      var img1 = this.$refs.img1;
      img1.style.transform = "scale(2)";

      delete this.images2[event.currentTarget.id];
      delete this.images[event.currentTarget.id];

      const wait = (timeToDelay) =>
        new Promise((resolve) => setTimeout(resolve, timeToDelay));
      await wait(2000);
      this.step = this.step + 1;
      this.randomimg3();
    },
    async handleleftclick4(event) {
      var index = this.images3.findIndex((i) => i.value == 3);
      var index2 = this.images4.findIndex((i) => i.value == 3);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images[event.currentTarget.id].value = 3;
          this.images3.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 4;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images[event.currentTarget.id].value = 3;
          this.images4.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 4;
          this.images4.push(this.images[event.currentTarget.id]);
        }
      }
      var img1 = this.$refs.img1;
      img1.style.transform = "scale(2)";

      delete this.images2[event.currentTarget.id];
      delete this.images[event.currentTarget.id];
      console.log(this.images3);
      console.log(this.images4);
      const wait = (timeToDelay) =>
        new Promise((resolve) => setTimeout(resolve, timeToDelay));
      await wait(2000);
      this.step = this.step + 1;
      this.randomimg4();
    },
    async handleleftclick5(event) {
      var index = this.images3.findIndex((i) => i.value == 0);
      var index2 = this.images4.findIndex((i) => i.value == 0);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images[event.currentTarget.id].value = 0;
          this.images3.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 1;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images[event.currentTarget.id].value = 0;
          this.images4.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 1;
          this.images4.push(this.images[event.currentTarget.id]);
        }
      }
      var img1 = this.$refs.img1;
      img1.style.transform = "scale(2)";
      console.log(this.images3);
      console.log(this.images4);
      delete this.images2[event.currentTarget.id];
      delete this.images[event.currentTarget.id];

      const wait = (timeToDelay) =>
        new Promise((resolve) => setTimeout(resolve, timeToDelay));
      await wait(2000);
      this.step = this.step + 1;
      this.randomimg5();
    },
    async handleleftclick6(event) {
      var index = this.images3.findIndex((i) => i.value == 1);
      var index2 = this.images4.findIndex((i) => i.value == 1);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images[event.currentTarget.id].value = 1;
          this.images3.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 2;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images[event.currentTarget.id].value = 1;
          this.images4.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 2;
          this.images4.push(this.images[event.currentTarget.id]);
        }
      }
      var img1 = this.$refs.img1;
      img1.style.transform = "scale(2)";
      console.log(this.images3);
      console.log(this.images4);

      delete this.images2[event.currentTarget.id];
      delete this.images[event.currentTarget.id];

      const wait = (timeToDelay) =>
        new Promise((resolve) => setTimeout(resolve, timeToDelay));
      await wait(2000);
      this.step = this.step + 1;
      this.randomimg6();
    },
    async handleleftclick7(event) {
      var index = this.images3.findIndex((i) => i.value == 2);
      var index2 = this.images4.findIndex((i) => i.value == 2);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images[event.currentTarget.id].value = 2;
          this.images3.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 3;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images[event.currentTarget.id].value = 2;
          this.images4.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 3;
          this.images4.push(this.images[event.currentTarget.id]);
        }
      }
      console.log(this.images3);
      console.log(this.images4);

      delete this.images2[event.currentTarget.id];
      delete this.images[event.currentTarget.id];

      this.step = this.step + 1;
      await this.randomimg7();
    },
    async handleleftclick8(event) {
      var index = this.images3.findIndex((i) => i.value == 3);
      var index2 = this.images4.findIndex((i) => i.value == 3);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images[event.currentTarget.id].value = 3;
          this.images3.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 4;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images[event.currentTarget.id].value = 3;
          this.images4.push(this.images[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 4;
          this.images4.push(this.images[event.currentTarget.id]);
        }
      }
      console.log(this.images3);
      console.log(this.images4);

      delete this.images2[event.currentTarget.id];
      delete this.images[event.currentTarget.id];

      this.step = 0;
      this.step2 = this.step2 + 1;
      this.rank = 8;

      await this.randomimg8();
    },
    async handleleftclick9(event) {
      var index = this.images5.findIndex((i) => i.value == 0);
      var index2 = this.images6.findIndex((i) => i.value == 0);
      if (this.images5.length < 2) {
        if (index === -1) {
          this.images3[event.currentTarget.id].value = 0;
          this.images5.push(this.images3[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 1;
          this.images5.push(this.images3[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images3[event.currentTarget.id].value = 0;
          this.images6.push(this.images3[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 1;
          this.images6.push(this.images3[event.currentTarget.id]);
        }
      }
      console.log(this.images5);
      console.log(this.images6);
      this.step2 = this.step2 + 1;
      this.rank = 8;

      await this.randomimg9();
    },
    async handleleftclick10(event) {
      var index = this.images5.findIndex((i) => i.value == 1);
      var index2 = this.images6.findIndex((i) => i.value == 1);
      if (this.images5.length < 2) {
        if (index === -1) {
          this.images3[event.currentTarget.id].value = 1;
          this.images5.push(this.images3[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 2;
          this.images5.push(this.images3[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images3[event.currentTarget.id].value = 1;
          this.images6.push(this.images3[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 2;
          this.images6.push(this.images3[event.currentTarget.id]);
        }
      }
      console.log(this.images5);
      console.log(this.images6);
      this.step2 = this.step2 + 1;
      this.rank = 8;

      await this.randomimg10();
    },
    async handleleftclick11(event) {
      var index = this.images5.findIndex((i) => i.value == 0);
      var index2 = this.images6.findIndex((i) => i.value == 0);
      if (this.images5.length < 2) {
        if (index === -1) {
          this.images3[event.currentTarget.id].value = 0;
          this.images5.push(this.images3[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 1;
          this.images5.push(this.images3[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images3[event.currentTarget.id].value = 0;
          this.images6.push(this.images3[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 1;
          this.images6.push(this.images3[event.currentTarget.id]);
        }
      }
      console.log(this.images5);
      console.log(this.images6);
      this.step2 = this.step2 + 1;
      this.rank = 8;

      await this.randomimg11();
    },
    async handleleftclick12(event) {
      var index = this.images5.findIndex((i) => i.value == 1);
      var index2 = this.images6.findIndex((i) => i.value == 1);
      if (this.images5.length < 2) {
        if (index === -1) {
          this.images3[event.currentTarget.id].value = 1;
          this.images5.push(this.images3[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 2;
          this.images5.push(this.images3[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images3[event.currentTarget.id].value = 1;
          this.images6.push(this.images3[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 2;
          this.images6.push(this.images3[event.currentTarget.id]);
        }
      }
      console.log(this.images5);
      console.log(this.images6);
      this.step2 = 0;
      this.step3 = this.step3 + 1;
      this.rank = 4;

      await this.randomimg12();
    },
    async handleleftclick13(event) {
      this.images5[event.currentTarget.id].value = 0;
      this.images7.push(this.images5[event.currentTarget.id]);

      console.log(this.images7);
      console.log(this.images8);
      this.step2 = 0;
      this.step3 = this.step3 + 1;
      this.rank = 4;

      await this.randomimg13();
    },
    async handleleftclick14(event) {
      this.images5[event.currentTarget.id].value = 0;
      this.images8.push(this.images5[event.currentTarget.id]);

      console.log(this.images7);
      console.log(this.images8);
      this.step2 = 0;
      this.step3 = 0;
      this.step4 = 1;
      this.rank = 2;

      await this.randomimg14();
    },
    async handleleftclick15() {
      this.finalimage.push(this.images7[0]);

      this.step2 = 0;
      this.step3 = 0;
      this.step4 = 0;
      this.step5 = 1;
      this.rank = 1;
      console.log(this.finalimage);
      await this.randomimg15();
    },

    async handlerightclick(event) {
      var index = this.images3.findIndex((i) => i.value == 0);
      var index2 = this.images4.findIndex((i) => i.value == 0);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images2[event.currentTarget.id].value = 0;
          this.images3.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 1;
          this.images3.push(this.images2[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images2[event.currentTarget.id].value = 0;
          this.images4.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 1;
          this.images4.push(this.images2[event.currentTarget.id]);
        }
      }
      var img2 = this.$refs.img2;
      img2.style.transform = "scale(2)";
      console.log(this.images3);
      console.log(this.images4);

      delete this.images[event.currentTarget.id];
      delete this.images2[event.currentTarget.id];

      const wait = (timeToDelay) =>
        new Promise((resolve) => setTimeout(resolve, timeToDelay));
      await wait(2000);
      this.step = this.step + 1;

      this.randomimg();
    },
    async handlerightclick2(event) {
      var index = this.images3.findIndex((i) => i.value == 1);
      var index2 = this.images4.findIndex((i) => i.value == 1);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images2[event.currentTarget.id].value = 1;
          this.images3.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 2;
          this.images3.push(this.images2[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images2[event.currentTarget.id].value = 1;
          this.images4.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 2;
          this.images4.push(this.images2[event.currentTarget.id]);
        }
      }
      delete this.images[event.currentTarget.id];
      delete this.images2[event.currentTarget.id];

      this.step = this.step + 1;
      await this.randomimg2();
    },
    async handlerightclick3(event) {
      var index = this.images3.findIndex((i) => i.value == 2);
      var index2 = this.images4.findIndex((i) => i.value == 2);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images2[event.currentTarget.id].value = 2;
          this.images3.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 3;
          this.images3.push(this.images2[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images2[event.currentTarget.id].value = 2;
          this.images4.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 3;
          this.images4.push(this.images2[event.currentTarget.id]);
        }
      }

      delete this.images[event.currentTarget.id];
      delete this.images2[event.currentTarget.id];

      this.step = this.step + 1;
      await this.randomimg3();
    },
    async handlerightclick4(event) {
      var index = this.images3.findIndex((i) => i.value == 3);
      var index2 = this.images4.findIndex((i) => i.value == 3);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images2[event.currentTarget.id].value = 3;
          this.images3.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 4;
          this.images3.push(this.images2[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images2[event.currentTarget.id].value = 3;
          this.images4.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 4;
          this.images4.push(this.images2[event.currentTarget.id]);
        }
      }

      delete this.images[event.currentTarget.id];
      delete this.images2[event.currentTarget.id];

      this.step = this.step + 1;
      await this.randomimg4();
    },
    async handlerightclick5(event) {
      var index = this.images3.findIndex((i) => i.value == 0);
      var index2 = this.images4.findIndex((i) => i.value == 0);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images2[event.currentTarget.id].value = 0;
          this.images3.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 1;
          this.images3.push(this.images2[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images2[event.currentTarget.id].value = 0;
          this.images4.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 1;
          this.images4.push(this.images2[event.currentTarget.id]);
        }
      }
      console.log(this.images3);
      console.log(this.images4);
      delete this.images[event.currentTarget.id];
      delete this.images2[event.currentTarget.id];

      this.step = this.step + 1;
      await this.randomimg5();
    },
    async handlerightclick6(event) {
      var index = this.images3.findIndex((i) => i.value == 1);
      var index2 = this.images4.findIndex((i) => i.value == 1);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images2[event.currentTarget.id].value = 1;
          this.images3.push(this.images2[event.currentTarget.id]);
        } else {
          this.images[event.currentTarget.id].value = 2;
          this.images3.push(this.images[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images2[event.currentTarget.id].value = 1;
          this.images4.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 2;
          this.images4.push(this.images2[event.currentTarget.id]);
        }
      }
      console.log(this.images3);
      console.log(this.images4);

      delete this.images[event.currentTarget.id];
      delete this.images2[event.currentTarget.id];

      this.step = this.step + 1;
      await this.randomimg6();
    },
    async handlerightclick7(event) {
      var index = this.images3.findIndex((i) => i.value == 2);
      var index2 = this.images4.findIndex((i) => i.value == 2);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images2[event.currentTarget.id].value = 2;
          this.images3.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 3;
          this.images3.push(this.images2[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images2[event.currentTarget.id].value = 2;
          this.images4.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 3;
          this.images4.push(this.images2[event.currentTarget.id]);
        }
      }
      console.log(this.images3);
      console.log(this.images4);

      delete this.images[event.currentTarget.id];
      delete this.images2[event.currentTarget.id];

      this.step = this.step + 1;
      await this.randomimg7();
    },
    async handlerightclick8(event) {
      var index = this.images3.findIndex((i) => i.value == 3);
      var index2 = this.images4.findIndex((i) => i.value == 3);
      if (this.images3.length < 4) {
        if (index === -1) {
          this.images2[event.currentTarget.id].value = 3;
          this.images3.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 4;
          this.images3.push(this.images2[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images2[event.currentTarget.id].value = 3;
          this.images4.push(this.images2[event.currentTarget.id]);
        } else {
          this.images2[event.currentTarget.id].value = 4;
          this.images4.push(this.images2[event.currentTarget.id]);
        }
      }
      console.log(this.images3);
      console.log(this.images4);
      console.log("click8");
      delete this.images[event.currentTarget.id];
      delete this.images2[event.currentTarget.id];

      this.step = 0;
      this.step2 = this.step2 + 1;
      this.rank = 8;
      console.log(this.images3);
      console.log(this.images4);
      await this.randomimg8(); // 16 -> 8
    },
    async handlerightclick9(event) {
      var index = this.images5.findIndex((i) => i.value == 0);
      var index2 = this.images6.findIndex((i) => i.value == 0);
      if (this.images5.length < 2) {
        if (index === -1) {
          this.images4[event.currentTarget.id].value = 0;
          this.images5.push(this.images4[event.currentTarget.id]);
        } else {
          this.images3[event.currentTarget.id].value = 1;
          this.images5.push(this.images4[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images4[event.currentTarget.id].value = 0;
          this.images6.push(this.images4[event.currentTarget.id]);
        } else {
          this.images4[event.currentTarget.id].value = 1;
          this.images6.push(this.images4[event.currentTarget.id]);
        }
      }

      this.step2 = this.step2 + 1;
      this.rank = 8;
      console.log(this.images5);
      console.log(this.images6);
      await this.randomimg9();
    },
    async handlerightclick10(event) {
      var index = this.images5.findIndex((i) => i.value == 1);
      var index2 = this.images6.findIndex((i) => i.value == 1);
      if (this.images5.length < 2) {
        if (index === -1) {
          this.images4[event.currentTarget.id].value = 1;
          this.images5.push(this.images4[event.currentTarget.id]);
        } else {
          this.images4[event.currentTarget.id].value = 2;
          this.images5.push(this.images4[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images4[event.currentTarget.id].value = 1;
          this.images6.push(this.images4[event.currentTarget.id]);
        } else {
          this.images4[event.currentTarget.id].value = 2;
          this.images6.push(this.images4[event.currentTarget.id]);
        }
      }

      this.step2 = this.step2 + 1;
      this.rank = 8;
      console.log(this.images5);
      console.log(this.images6);
      await this.randomimg10();
    },
    async handlerightclick11(event) {
      var index = this.images5.findIndex((i) => i.value == 0);
      var index2 = this.images6.findIndex((i) => i.value == 0);
      if (this.images5.length < 2) {
        if (index === -1) {
          this.images4[event.currentTarget.id].value = 0;
          this.images5.push(this.images4[event.currentTarget.id]);
        } else {
          this.images4[event.currentTarget.id].value = 1;
          this.images5.push(this.images4[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images4[event.currentTarget.id].value = 0;
          this.images6.push(this.images4[event.currentTarget.id]);
        } else {
          this.images4[event.currentTarget.id].value = 1;
          this.images6.push(this.images4[event.currentTarget.id]);
        }
      }

      this.step2 = this.step2 + 1;
      this.rank = 8;
      console.log(this.images5);
      console.log(this.images6);
      await this.randomimg11();
    },
    async handlerightclick12(event) {
      var index = this.images5.findIndex((i) => i.value == 1);
      var index2 = this.images6.findIndex((i) => i.value == 1);
      if (this.images5.length < 2) {
        if (index === -1) {
          this.images4[event.currentTarget.id].value = 1;
          this.images5.push(this.images4[event.currentTarget.id]);
        } else {
          this.images4[event.currentTarget.id].value = 2;
          this.images5.push(this.images4[event.currentTarget.id]);
        }
      } else {
        if (index2 === -1) {
          this.images4[event.currentTarget.id].value = 1;
          this.images6.push(this.images4[event.currentTarget.id]);
        } else {
          this.images4[event.currentTarget.id].value = 2;
          this.images6.push(this.images4[event.currentTarget.id]);
        }
      }

      this.step2 = 0;
      this.step3 = this.step3 + 1;
      this.rank = 4;
      console.log(this.images5);
      console.log(this.images6);
      await this.randomimg12();
    },
    async handlerightclick13(event) {
      this.images6[event.currentTarget.id].value = 0;
      this.images7.push(this.images6[event.currentTarget.id]);

      this.step2 = 0;
      this.step3 = this.step3 + 1;
      this.rank = 4;
      console.log(this.images7);
      console.log(this.images8);
      await this.randomimg13();
    },
    async handlerightclick14(event) {
      this.images6[event.currentTarget.id].value = 0;
      this.images8.push(this.images6[event.currentTarget.id]);

      this.step2 = 0;
      this.step3 = 0;
      this.step4 = 1;
      console.log("14");
      this.rank = 2;
      console.log(this.images7);
      console.log(this.images8);
      await this.randomimg14();
    },
    async handlerightclick15() {
      this.finalimage.push(this.images8[0]);

      this.step2 = 0;
      this.step3 = 0;
      this.step4 = 0;
      this.step5 = 1;

      this.rank = 1;
      console.log(this.finalimage);
      await this.randomimg15();
    },

    async randomimg() {
      this.selectedImage = this.images[this.random[1]].img;
      this.selectedtitle = this.images[this.random[1]].title;
      this.selectedvalue = this.images[this.random[1]].value;
      this.selectedImage2 = this.images2[this.random[1]].img;
      this.selectedtitle2 = this.images2[this.random[1]].title;
      this.selectedvalue2 = this.images2[this.random[1]].value;
    },
    async randomimg2() {
      this.selectedImage = this.images[this.random[2]].img;
      this.selectedtitle = this.images[this.random[2]].title;
      this.selectedvalue = this.images[this.random[2]].value;
      this.selectedImage2 = this.images2[this.random[2]].img;
      this.selectedtitle2 = this.images2[this.random[2]].title;
      this.selectedvalue2 = this.images2[this.random[2]].value;
    },
    async randomimg3() {
      this.selectedImage = this.images[this.random[3]].img;
      this.selectedtitle = this.images[this.random[3]].title;
      this.selectedvalue = this.images[this.random[3]].value;
      this.selectedImage2 = this.images2[this.random[3]].img;
      this.selectedtitle2 = this.images2[this.random[3]].title;
      this.selectedvalue2 = this.images2[this.random[3]].value;
    },
    async randomimg4() {
      this.selectedImage = this.images[this.random[4]].img;
      this.selectedtitle = this.images[this.random[4]].title;
      this.selectedvalue = this.images[this.random[4]].value;
      this.selectedImage2 = this.images2[this.random[4]].img;
      this.selectedtitle2 = this.images2[this.random[4]].title;
      this.selectedvalue2 = this.images2[this.random[4]].value;
    },
    async randomimg5() {
      this.selectedImage = this.images[this.random[5]].img;
      this.selectedtitle = this.images[this.random[5]].title;
      this.selectedvalue = this.images[this.random[5]].value;
      this.selectedImage2 = this.images2[this.random[5]].img;
      this.selectedtitle2 = this.images2[this.random[5]].title;
      this.selectedvalue2 = this.images2[this.random[5]].value;
    },
    async randomimg6() {
      this.selectedImage = this.images[this.random[6]].img;
      this.selectedtitle = this.images[this.random[6]].title;
      this.selectedvalue = this.images[this.random[6]].value;
      this.selectedImage2 = this.images2[this.random[6]].img;
      this.selectedtitle2 = this.images2[this.random[6]].title;
      this.selectedvalue2 = this.images2[this.random[6]].value;
    },
    async randomimg7() {
      this.selectedImage = this.images[this.random[7]].img;
      this.selectedtitle = this.images[this.random[7]].title;
      this.selectedvalue = this.images[this.random[7]].value;
      this.selectedImage2 = this.images2[this.random[7]].img;
      this.selectedtitle2 = this.images2[this.random[7]].title;
      this.selectedvalue2 = this.images2[this.random[7]].value;
    },
    async randomimg8() {
      this.selectedImage = this.images3[this.random2[0]].img;
      this.selectedtitle = this.images3[this.random2[0]].title;
      this.selectedvalue = this.images3[this.random2[0]].value;
      this.selectedImage2 = this.images4[this.random2[0]].img;
      this.selectedtitle2 = this.images4[this.random2[0]].title;
      this.selectedvalue2 = this.images4[this.random2[0]].value;
    },
    async randomimg9() {
      this.selectedImage = this.images3[this.random2[1]].img;
      this.selectedtitle = this.images3[this.random2[1]].title;
      this.selectedvalue = this.images3[this.random2[1]].value;
      this.selectedImage2 = this.images4[this.random2[1]].img;
      this.selectedtitle2 = this.images4[this.random2[1]].title;
      this.selectedvalue2 = this.images4[this.random2[1]].value;
    },
    async randomimg10() {
      this.selectedImage = this.images3[this.random2[2]].img;
      this.selectedtitle = this.images3[this.random2[2]].title;
      this.selectedvalue = this.images3[this.random2[2]].value;
      this.selectedImage2 = this.images4[this.random2[2]].img;
      this.selectedtitle2 = this.images4[this.random2[2]].title;
      this.selectedvalue2 = this.images4[this.random2[2]].value;
    },
    async randomimg11() {
      this.selectedImage = this.images3[this.random2[3]].img;
      this.selectedtitle = this.images3[this.random2[3]].title;
      this.selectedvalue = this.images3[this.random2[3]].value;
      this.selectedImage2 = this.images4[this.random2[3]].img;
      this.selectedtitle2 = this.images4[this.random2[3]].title;
      this.selectedvalue2 = this.images4[this.random2[3]].value;
    },
    async randomimg12() {
      this.selectedImage = this.images5[this.random3[0]].img;
      this.selectedtitle = this.images5[this.random3[0]].title;
      this.selectedvalue = this.images5[this.random3[0]].value;
      this.selectedImage2 = this.images6[this.random3[0]].img;
      this.selectedtitle2 = this.images6[this.random3[0]].title;
      this.selectedvalue2 = this.images6[this.random3[0]].value;
    },
    async randomimg13() {
      this.selectedImage = this.images5[this.random3[1]].img;
      this.selectedtitle = this.images5[this.random3[1]].title;
      this.selectedvalue = this.images5[this.random3[1]].value;
      this.selectedImage2 = this.images6[this.random3[1]].img;
      this.selectedtitle2 = this.images6[this.random3[1]].title;
      this.selectedvalue2 = this.images6[this.random3[1]].value;
    },
    async randomimg14() {
      this.selectedImage = this.images7[0].img;
      this.selectedtitle = this.images7[0].title;
      this.selectedvalue = this.images7[0].value;
      this.selectedImage2 = this.images8[0].img;
      this.selectedtitle2 = this.images8[0].title;
      this.selectedvalue2 = this.images8[0].value;
    },
    async randomimg15() {
      this.selectedImage = this.finalimage[0].img;
      this.selectedtitle = this.finalimage[0].title;
      this.selectedvalue = this.finalimage[0].value;
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 1440px;
  margin: 80px auto;
  text-align: center;
}
.img1 {
  width: 500px;
  height: 400px;
  cursor: pointer;
  transition: all 2s;
}

.img2 {
  width: 500px;
  height: 400px;
  cursor: pointer;
  transition: all 2s;
}
.left {
  width: 49.9%;
  float: left;
  border-right: 1px solid #ddd;
}
.right {
  width: 49.9%;
  float: right;
  text-align: center;
}
</style>