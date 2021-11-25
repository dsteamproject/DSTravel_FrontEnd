
<template>
  <div>
    <div class="mainimg">
      <div class="mainimg_text">
        <h1>커뮤니티</h1>
        <p>조금 더 특별한 여행을 위한 정보공유의 공간</p>
      </div>
    </div>
    <div class="wrap">
      <div class="fix">
        <router-link
          :to="free"
          id="btn1"
          v-bind:class="oncolor1"
          @click="changeMenu(0)"
          >잡담</router-link
        ><br />
        <router-link
          :to="review"
          id="btn1"
          v-bind:class="oncolor2"
          @click="changeMenu(1)"
          >여행후기</router-link
        ><br />
        <router-link
          :to="info"
          id="btn1"
          v-bind:class="oncolor3"
          @click="changeMenu(2)"
          >여행정보</router-link
        ><br />
        <router-link
          :to="que"
          id="btn1"
          v-bind:class="oncolor4"
          @click="changeMenu(3)"
          >질문</router-link
        ><br />
        <router-link
          :to="que"
          id="btn1"
          v-bind:class="oncolor5"
          @click="changeMenu(4)"
          >여행일정</router-link
        >
      </div>
      <div class="left1"></div>
      <div class="right10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    async $route(to, form) {
      console.log(to.path);
      console.log(form.path);
      this.$router.push(to.path);
      this.currentPath = to.path;
      await this.currentPath1();
    },
  },
  async created() {
    await this.currentPath1();
  },
  data() {
    return {
      currentPath: window.location.pathname,
      currentView: "free", // 처음 시작시 메뉴
      menus: [
        "/board/free",
        "/board/review",
        "/board/info",
        "/board/que",
        "/board/travel",
      ],
      free: "",
      review: "",
      info: "",
      que: "",
      oncolor1: "",
      oncolor2: "",
      oncolor3: "",
      oncolor4: "",
      oncolor5: "",
    };
  },
  methods: {
    currentPath1() {
      if (this.currentPath === "/board/free") {
        this.oncolor1 = "btnon";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnoff";
        this.oncolor5 = "btnoff";
      }
      if (this.currentPath === "/board/review") {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnon";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnoff";
        this.oncolor5 = "btnoff";
      }
      if (this.currentPath === "/board/info") {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnon";
        this.oncolor4 = "btnoff";
        this.oncolor5 = "btnoff";
      }
      if (this.currentPath === "/board/que") {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnon";
        this.oncolor5 = "btnoff";
      }

      if (this.currentPath === "/board/travel") {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnoff";
        this.oncolor5 = "btnon";
      }
    },
    changeMenu(val) {
      this.free = this.menus[val];
      if (val === 0) {
        this.oncolor1 = "btnon";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnoff";
        this.oncolor5 = "btnoff";
        this.$router.push({ path: "/board/free" });
      }
      if (val === 1) {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnon";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnoff";
        this.oncolor5 = "btnoff";
        this.$router.push({ path: "/board/review" });
      }
      if (val === 2) {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnon";
        this.oncolor4 = "btnoff";
        this.oncolor5 = "btnoff";
        this.$router.push({ path: "/board/info" });
      }
      if (val === 3) {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnon";
        this.oncolor5 = "btnoff";
        this.$router.push({ path: "/board/que" });
      }
      if (val === 4) {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnoff";
        this.oncolor5 = "btnon";
        this.$router.push({ path: "/board/travel" });
      }
    },
  },
};
</script>

<style scoped>
.br {
  height: 200px;
  clear: both;
}
.mainimg_text {
  padding-top: 70px;
  width: 1040px;
  max-width: 100%;
  margin: 0px auto;
  color: white;
}
.mainimg {
  background: url(../assets/tabelimg2.jpg) no-repeat;
  width: 100%;
  height: 228px;
  background-size: cover;
  background-position: 10% 83%;
}
.btnoff {
  background: #fff;
}
.btnon {
  background-color: #2752be !important;
  color: white !important;
}
#btn1 {
  margin: 0px 0px;
  font-size: 13px;
  padding: 10px;
  display: block;
  width: 80px;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}
.wrap {
  width: 1320px;
  margin: 0 auto;
  margin-bottom: 139px;
}
.left1 {
  width: 10%;
  background: #ccc;
  float: left;
  text-align: center;
}
.right10 {
  width: 90%;

  float: revert;
  margin-left: 10%;
  overflow: hidden;
}
.fix {
  margin-top: 30px;
  float: left;
  position: sticky;
  top: 200px;
  clear: both;
  text-align: center;
}
</style>