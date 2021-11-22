<template>
  <div class="wrap">
    <span class="vs">vs</span>

    <span class="round" v-if="this.count < this.list1.length"
      >{{ this.count + 1 }}/ {{ this.list1.length }}</span
    >

    <ul class="right">
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
      <!-- 두번재 오른쪽 -->
      <li
        class="img_box1"
        @click="list2apush(item1)"
        v-for="(item1, index) in list1a"
        :key="index"
      >
        <img :src="item1.firstimage" class="img" />
        <span class="img_title1" v-if="index === this.count2">{{
          item1.title
        }}</span>
      </li>
    </ul>
    <ul class="left">
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
      <!-- 두번재 왼쪽 -->
      <li
        class="img_box1"
        @click="list2bpush(item)"
        v-for="(item, index) in list2b"
        :key="index"
      >
        <img :src="item.firstimage" class="img" />
        <span class="img_title1" v-if="index === this.count2">{{
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
      size: this.$route.query.cnt,
      count: 0,
      count2: 0,
      nextnum: false,
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {
    // 오른쪽 두번째
    list2apush(item1) {
      if (this.list3a.length < this.list1a.length / 2) {
        this.list3a.push(item1);
      } else {
        this.list3b.push(item1);
      }
      this.count2 += 1;
    },
    //왼쪽 두번째
    list2bpush(item) {
      if (this.list3a.length < this.list1a.length / 2) {
        this.list3a.push(item);
      } else {
        this.list3b.push(item);
      }
      this.count2 += 1;
    },
    list1push(item) {
      // 오른쪽 첫번째

      if (this.list1a.length < this.list1.length / 2) {
        this.list1a.push(item);
      } else {
        this.list2b.push(item);
      }

      this.count += 1;
      console.log(this.count);
      if (this.count === this.size) {
        this.nextnum = true;
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
      console.log(this.count);
      if (this.count === this.size) {
        this.nextnum = true;
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