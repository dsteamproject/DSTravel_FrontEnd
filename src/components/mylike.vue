<template>
  <div>
    <button
      id="idbtn"
      @click="$router.push('/mypage/mylike/mmtr')"
      v-on:click="idbtn"
      v-bind:class="on"
    >
      여행지
    </button>
    <button
      id="pwbtn"
      @click="$router.push('/mypage/mylike/mmho')"
      v-on:click="pwbtn"
      v-bind:class="off"
    >
      숙소
    </button>
    <button
      id="pwbtn"
      @click="$router.push('/mypage/mylike/mmfo')"
      v-on:click="pwbtn2"
      v-bind:class="off2"
    >
      음식점
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
      this.$emit("searchon", true);
    var location = document.location.href.split("mylike/");
    console.log(location[1]);
    if (location[1] === "mmtr") {
      this.on = "oncss";
      this.off = "offcss";
      this.off2 = "offcss";
    } else if (location[1] === "mmho") {
      this.on = "offcss";
      this.off = "oncss";
      this.off2 = "offcss";
    } else if (location[1] === "mmfo") {
      this.on = "offcss";
      this.off = "offcss";
      this.off2 = "oncss";
    }
  },
  data() {
    return {
      on: "oncss",
      off: "offcss",
      off2: "offcss",
    };
  },
  methods: {
    idbtn() {
      this.chk = 1;
      this.on = "oncss";
      this.off = "offcss";
      this.off2 = "offcss";
    },
    pwbtn() {
      this.chk = 2;
      this.on = "offcss";
      this.off = "oncss";
      this.off2 = "offcss";
    },
    pwbtn2() {
      this.chk = 3;
      this.on = "offcss";
      this.off = "offcss";
      this.off2 = "oncss";
    },
  },
};
</script>

<style scoped>
.oncss {
  border-top: 1px solid black !important;
  border-right: 1px solid black !important;
  border-left: 1px solid black !important;
  background: white;
}
.offcss {
  border-bottom: 1px solid black !important;
}
.rou {
  border: 1px solid #ccc;
  height: auto;
}
.title {
  font-size: 18px;
  color: #222;
  clear: both;
  margin: 50px 0px 20px;
  display: block;
  text-align: center;
}
#idbtn {
  width: 33.3%;
  height: 56px;
  border: none;
  cursor: pointer;
}
#pwbtn {
  width: 33.3%;
  height: 56px;
  border: none;
  cursor: pointer;
}
#back {
  background: #eeeeee;
  width: 100%;
  height: 140vh;
  padding-top: 30px;
}
.wrap {
  background: white;
  width: 1200px;
  height: 1300px;
  margin: auto;
  padding: 70px 120px;
  box-sizing: border-box;
}
</style>