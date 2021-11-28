<template>
  <div class="wrap">
    <div class="toptitle">
      <span v-if="this.$route.query.city === '1'" class="topfont"
        >서울 여행지 월드컵</span
      >
      <span v-if="this.$route.query.city === '2'" class="topfont"
        >인천 여행지 월드컵</span
      >
      <span v-if="this.$route.query.city === '3'" class="topfont"
        >대전 여행지 월드컵</span
      >
      <span v-if="this.$route.query.city === '4'" class="topfont"
        >대구 여행지 월드컵</span
      >
      <span v-if="this.$route.query.city === '5'" class="topfont"
        >광주 여행지 월드컵</span
      >
      <span v-if="this.$route.query.city === '6'" class="topfont"
        >부산 여행지 월드컵</span
      >
      <span v-if="this.$route.query.city === '7'" class="topfont"
        >울산 여행지 월드컵</span
      >
      <span v-if="this.$route.query.city === '39'" class="topfont"
        >제주도 여행지 월드컵</span
      >
    </div>
    <span class="vs" v-if="this.last === false">vs</span>

    <div class="round_wrap" v-if="this.last === true">
      <span class="round">우승여행지</span>
    </div>
    <div class="round_wrap" v-if="this.last === false">
      <span class="round" v-if="this.count !== ''"
        >{{ this.count + 1 }}/ {{ this.list1.length }}</span
      >
    </div>
    <div class="round_wrap" v-if="this.last === false">
      <span class="round" v-if="this.count2 !== ''"
        >{{ this.count2 + 1 }}/ {{ this.list1a.length }}</span
      >
    </div>
    <div class="round_wrap" v-if="this.last === false">
      <span class="round" v-if="this.count3 !== ''"
        >{{ this.count3 + 1 }}/ {{ this.list3a.length }}</span
      >
    </div>
    <div class="round_wrap" v-if="this.last === false">
      <span class="round" v-if="this.count4 !== ''"
        >{{ this.count4 + 1 }}/ {{ this.list4a.length }}</span
      >
    </div>
    <div class="round_wrap" v-if="this.last === false">
      <span class="round" v-if="this.count5 !== ''"
        >{{ this.count5 + 1 }}/ {{ this.list5a.length }}</span
      >
    </div>

    <div class="round_wrap" v-if="this.last === false">
      <span class="round" v-if="this.count6 !== ''"
        >{{ this.count6 + 1 }}/ {{ this.list6a.length }}</span
      >
    </div>
    <div class="round_wrap" v-if="this.last === false">
      <span class="round" v-if="this.count7 !== ''"
        >{{ this.count7 + 1 }}/ {{ this.list7a.length }}</span
      >
    </div>

    <ul class="center" v-if="this.last === true">
      <!-- 마지막 오른쪽 -->
      <li class="img_box1" v-for="(item, index) in lastlist" :key="index">
        <img :src="item.firstimage" class="img" />
        <span class="img_title1">{{ item.title }}</span>
      </li>
    </ul>

    <ul class="right" v-if="this.last === false">
      <!-- 첫번재 오른쪽 -->
      <li
        class="img_box1"
        @click="list1push(item)"
        v-for="(item, index) in list1"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count" class="img" />
        <span class="img_title1" v-if="index === this.count">{{
          item.title
        }}</span>
      </li>
    </ul>
    <ul class="left" v-if="this.last === false">
      <!-- 첫번재 왼쪽 -->
      <li
        class="img_box2"
        @click="list2push(item)"
        v-for="(item, index) in list2"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count" class="img" />
        <span class="img_title2" v-if="index === this.count">{{
          item.title
        }}</span>
      </li>
    </ul>
    <!-- 두번째 -->
    <ul class="right" v-if="this.last === false">
      <!-- 두번재 오른쪽 -->
      <li
        class="img_box1"
        @click="list2apush(item)"
        v-for="(item, index) in list1a"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count2" class="img" />
        <span class="img_title1" v-if="index === this.count2">{{
          item.title
        }}</span>
      </li>
    </ul>
    <ul class="left" v-if="this.last === false">
      <!-- 두번재 왼쪽 -->
      <li
        class="img_box2"
        @click="list2bpush(item)"
        v-for="(item, index) in list2b"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count2" class="img" />
        <span class="img_title2" v-if="index === this.count2">{{
          item.title
        }}</span>
      </li>
    </ul>

    <!-- 세번쨰 -->
    <ul class="right" v-if="this.last === false">
      <!-- 세번째 오른쪽 -->
      <li
        class="img_box1"
        @click="list3apush(item)"
        v-for="(item, index) in list3a"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count3" class="img" />
        <span class="img_title1" v-if="index === this.count3">{{
          item.title
        }}</span>
      </li>
    </ul>
    <ul class="left" v-if="this.last === false">
      <!-- 세번째 왼쪽 -->
      <li
        class="img_box2"
        @click="list3bpush(item)"
        v-for="(item, index) in list3b"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count3" class="img" />
        <span class="img_title2" v-if="index === this.count3">{{
          item.title
        }}</span>
      </li>
    </ul>

    <!-- 네번쨰 -->
    <ul class="right" v-if="this.last === false">
      <!-- 네번째 오른쪽 -->
      <li
        class="img_box1"
        @click="list4apush(item)"
        v-for="(item, index) in list4a"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count4" class="img" />
        <span class="img_title1" v-if="index === this.count4">{{
          item.title
        }}</span>
      </li>
    </ul>
    <ul class="left" v-if="this.last === false">
      <!-- 네번째 왼쪽 -->
      <li
        class="img_box2"
        @click="list4bpush(item)"
        v-for="(item, index) in list4b"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count4" class="img" />
        <span class="img_title2" v-if="index === this.count4">{{
          item.title
        }}</span>
      </li>
    </ul>

    <!-- 다섯번쨰   16강일경우 결승-->
    <ul class="right" v-if="this.last === false">
      <!-- 다섯번째 오른쪽 -->
      <li
        class="img_box1"
        @click="list5apush(item)"
        v-for="(item, index) in list5a"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count5" class="img" />
        <span class="img_title1" v-if="index === this.count5">{{
          item.title
        }}</span>
      </li>
    </ul>
    <ul class="left" v-if="this.last === false">
      <!-- 다섯번째 왼쪽 -->
      <li
        class="img_box2"
        @click="list5bpush(item)"
        v-for="(item, index) in list5b"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count5" class="img" />
        <span class="img_title2" v-if="index === this.count5">{{
          item.title
        }}</span>
      </li>
    </ul>

    <!-- 여섯번쨰   32강일경우 결승-->
    <ul class="right" v-if="this.last === false">
      <!-- 여섯번째 오른쪽 -->
      <li
        class="img_box1"
        @click="list6apush(item)"
        v-for="(item, index) in list6a"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count6" class="img" />
        <span class="img_title1" v-if="index === this.count6">{{
          item.title
        }}</span>
      </li>
    </ul>
    <ul class="left" v-if="this.last === false">
      <!-- 여섯번째 왼쪽 -->
      <li
        class="img_box2"
        @click="list6bpush(item)"
        v-for="(item, index) in list6b"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count6" class="img" />
        <span class="img_title2" v-if="index === this.count6">{{
          item.title
        }}</span>
      </li>
    </ul>

    <!-- 일곱번쨰   64강일경우 결승-->
    <ul class="right" v-if="this.last === false">
      <!-- 일곱번째 오른쪽 -->
      <li
        class="img_box1"
        @click="list7apush(item)"
        v-for="(item, index) in list7a"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count7" class="img" />
        <span class="img_title1" v-if="index === this.count7">{{
          item.title
        }}</span>
      </li>
    </ul>
    <ul class="left" v-if="this.last === false">
      <!-- 일곱번째 왼쪽 -->
      <li
        class="img_box2"
        @click="list7bpush(item)"
        v-for="(item, index) in list7b"
        :key="index"
      >
        <img :src="item.firstimage" v-if="index === this.count7" class="img" />
        <span class="img_title2" v-if="index === this.count7">{{
          item.title
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // 전체
      list1: [],
      list2: [],
      // 다음단계
      list1a: [], // /2
      list2b: [], // /2
      // 다음단계
      list3a: [], // /2
      list3b: [], // /2
      // 다음단계
      list4a: [], // /2
      list4b: [], // /2
      // 다음단계
      list5a: [], // /2
      list5b: [], // /2
      // 다음단계
      list6a: [], // /2
      list6b: [], // /2
      // 다음단계
      list7a: [], // /2
      list7b: [], // /2
      // 다음단계
      list8a: [], // /2
      list8b: [], // /2
      size: this.$route.query.cnt,
      count: 0,
      count2: "",
      count3: "",
      count4: "",
      count5: "",
      count6: "",
      count7: "",
      count8: "",
      nextnum: 0,
      last: false,
      lastlist: [],
    };
  },
  async created() {
      this.$emit("searchon", true);
    await this.refresh();
  },
  methods: {
    // 오른쪽 일곱번째 64강 결승
    list7apush(item1) {
      if (this.list7a.length !== 1) {
        if (this.list7a.length < this.list7a.length / 2) {
          this.list8a.push(item1);
        } else {
          this.list8b.push(item1);
        }

        this.count7 += 1;

        if (this.count7 === Number(this.size) / 64) {
          this.nextnum = 3;
          this.count2 = "";
          this.count = "";
          this.count3 = "";
          this.count4 = "";
          this.count5 = "";
          this.count6 = "";
          this.count7 = "";
          this.count8 = "";
        }
      } else {
        this.lastlist.push(item1);
        this.last = true;
        this.count7 = "";
      }
    },
    //왼쪽 여섯번째 64강결승
    list7bpush(item) {
      if (this.list7a.length !== 1) {
        if (this.list7a.length < this.list7a.length / 2) {
          this.list8a.push(item);
        } else {
          this.list8b.push(item);
        }

        this.count6 += 1;

        if (this.count7 === Number(this.size) / 64) {
          this.nextnum = 3;
          this.count2 = "";
          this.count = "";
          this.count3 = "";
          this.count4 = "";
          this.count5 = "";
          this.count6 = "";
          this.count7 = "";
          this.count8 = 0;
        }
      } else {
        this.lastlist.push(item);
        this.last = true;
        this.count7 = "";
      }
    },
    // 오른쪽 여섯번째 32강 결승
    list6apush(item1) {
      if (this.list6a.length !== 1) {
        if (this.list7a.length < this.list6a.length / 2) {
          this.list7a.push(item1);
        } else {
          this.list7b.push(item1);
        }

        this.count6 += 1;

        if (this.count6 === Number(this.size) / 32) {
          this.nextnum = 3;
          this.count2 = "";
          this.count = "";
          this.count3 = "";
          this.count4 = "";
          this.count5 = "";
          this.count6 = "";
          this.count7 = 0;
        }
      } else {
        this.lastlist.push(item1);
        this.last = true;
        this.count6 = "";
      }
    },
    //왼쪽 여섯번째 32강결승
    list6bpush(item) {
      if (this.list6a.length !== 1) {
        if (this.list7a.length < this.list6a.length / 2) {
          this.list7a.push(item);
        } else {
          this.list7b.push(item);
        }

        this.count6 += 1;

        if (this.count6 === Number(this.size) / 32) {
          this.nextnum = 3;
          this.count2 = "";
          this.count = "";
          this.count3 = "";
          this.count4 = "";
          this.count5 = "";
          this.count6 = "";
          this.count7 = 0;
        }
      } else {
        this.lastlist.push(item);
        this.last = true;
        this.count6 = "";
      }
    },
    // 오른쪽 다섯번째 16강 결승
    list5apush(item1) {
      if (this.list5a.length !== 1) {
        if (this.list6a.length < this.list5a.length / 2) {
          this.list6a.push(item1);
        } else {
          this.list6b.push(item1);
        }

        this.count5 += 1;

        if (this.count5 === Number(this.size) / 16) {
          this.nextnum = 3;
          this.count2 = "";
          this.count = "";
          this.count3 = "";
          this.count4 = "";
          this.count5 = "";
          this.count6 = 0;
        }
      } else {
        this.lastlist.push(item1);
        this.last = true;
        this.count5 = "";
      }
    },
    //왼쪽 다섯번째 16강결승
    list5bpush(item) {
      if (this.list5a.length !== 1) {
        if (this.list6a.length < this.list5a.length / 2) {
          this.list6a.push(item);
        } else {
          this.list6b.push(item);
        }

        this.count5 += 1;

        if (this.count5 === Number(this.size) / 16) {
          this.nextnum = 3;
          this.count2 = "";
          this.count = "";
          this.count3 = "";
          this.count4 = "";
          this.count5 = "";
          this.count6 = 0;
        }
      } else {
        this.lastlist.push(item);
        this.last = true;
        this.count5 = "";
      }
    },
    // 오른쪽 네번째
    list4apush(item1) {
      if (this.list5a.length < this.list4a.length / 2) {
        this.list5a.push(item1);
      } else {
        this.list5b.push(item1);
      }
      console.log(this.list3a);
      console.log(this.list3b);
      this.count4 += 1;

      if (this.count4 === Number(this.size) / 8) {
        this.nextnum = 3;
        this.count2 = "";
        this.count = "";
        this.count3 = "";
        this.count4 = "";
        this.count5 = 0;
      }
    },
    //왼쪽 네번째
    list4bpush(item) {
      if (this.list5a.length < this.list4a.length / 2) {
        this.list5a.push(item);
      } else {
        this.list5b.push(item);
      }
      console.log(this.list3a);
      console.log(this.list3b);
      this.count4 += 1;

      if (this.count4 === Number(this.size) / 8) {
        this.nextnum = 3;
        this.count2 = "";
        this.count = "";
        this.count3 = "";
        this.count4 = "";
        this.count5 = 0;
      }
    },
    // 오른쪽 세번째
    list3apush(item1) {
      if (this.list4a.length < this.list3a.length / 2) {
        this.list4a.push(item1);
      } else {
        this.list4b.push(item1);
      }
      console.log(this.list3a);
      console.log(this.list3b);
      this.count3 += 1;

      if (this.count3 === Number(this.size) / 4) {
        this.nextnum = 3;
        this.count2 = "";
        this.count = "";
        this.count3 = "";
        this.count4 = 0;
      }
    },
    //왼쪽 세번째
    list3bpush(item) {
      if (this.list4a.length < this.list3a.length / 2) {
        this.list4a.push(item);
      } else {
        this.list4b.push(item);
      }
      console.log(this.list3a);
      console.log(this.list3b);
      this.count3 += 1;

      if (this.count3 === Number(this.size) / 4) {
        this.nextnum = 3;
        this.count2 = "";
        this.count = "";
        this.count3 = "";
        this.count4 = 0;
      }
    },
    // 오른쪽 두번째
    list2apush(item1) {
      if (this.list3a.length < this.list1a.length / 2) {
        this.list3a.push(item1);
      } else {
        this.list3b.push(item1);
      }
      console.log(this.list3a);
      console.log(this.list3b);
      this.count2 += 1;

      if (this.count2 === Number(this.size) / 2) {
        this.nextnum = 2;
        this.count2 = "";
        this.count = "";
        this.count3 = 0;
      }
    },
    //왼쪽 두번째
    list2bpush(item) {
      if (this.list3a.length < this.list1a.length / 2) {
        this.list3a.push(item);
      } else {
        this.list3b.push(item);
      }
      console.log(this.list3a);
      console.log(this.list3b);
      this.count2 += 1;

      if (this.count2 === Number(this.size) / 2) {
        this.nextnum = 2;
        this.count2 = "";
        this.count = "";
        this.count3 = 0;
      }
    },
    list1push(item) {
      // 오른쪽 첫번째

      if (this.list1a.length < this.list1.length / 2) {
        this.list1a.push(item);
      } else {
        this.list2b.push(item);
      }

      this.count += 1;

      if (this.count === Number(this.size)) {
        this.nextnum = 1;
        this.count2 = 0;
        this.count = "";
      }
    },
    list2push(item) {
      // 왼쪽 첫번째
      console.log(item);
      if (this.list1a.length < this.list1.length / 2) {
        this.list1a.push(item);
      } else {
        this.list2b.push(item);
      }

      this.count += 1;

      if (this.count === Number(this.size)) {
        this.nextnum = 1;
        this.count2 = 0;
        this.count = "";
      }
    },
    async refresh() {
      const url1 = `/REST/worldcup/home?city=${this.$route.query.city}&type=12&size=${this.$route.query.cnt}`;
      const headers1 = {
        "Content-type": "application/json",
      };
      const data = {};

      const response1 = await axios.post(url1, data, { headers: headers1 });
      console.log(response1);
      this.list1 = response1.data.randomlist1;
      this.list2 = response1.data.randomlist2;
    },
  },
};
</script>

<style scoped src= "../assets/css/vscontent.css">
</style>