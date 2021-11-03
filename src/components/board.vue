
<template>
  <div>
         <div class="mainimg">
           <div class="mainimg_text">
             <h1>커뮤니티</h1>
             <p>조금 더 특별한 여행을 위한 정보공유의 공간</p>
           </div>
         </div>
    <div class="wrap">

 
      <div class="left1">
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
        </div>
      </div>
      <div class="right1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const currentPath = window.location.pathname;
    console.log(currentPath);
    if (currentPath === "/board/free") {
      this.oncolor1 = "btnon";
      this.oncolor2 = "btnoff";
      this.oncolor3 = "btnoff";
      this.oncolor4 = "btnoff";
    }
    if (currentPath === "/board/review") {
      this.oncolor1 = "btnoff";
      this.oncolor2 = "btnon";
      this.oncolor3 = "btnoff";
      this.oncolor4 = "btnoff";
    }
    if (currentPath === "/board/info") {
      this.oncolor1 = "btnoff";
      this.oncolor2 = "btnoff";
      this.oncolor3 = "btnon";
      this.oncolor4 = "btnoff";
    }
    if (currentPath === "/board/que") {
      this.oncolor1 = "btnoff";
      this.oncolor2 = "btnoff";
      this.oncolor3 = "btnoff";
      this.oncolor4 = "btnon";
    }
  },
  data() {
    return {
      currentView: "free", // 처음 시작시 메뉴
      menus: ["/board/free", "/board/review", "/board/info", "/board/que"],
      free: "",
      review: "",
      info: "",
      que: "",
      oncolor1: "",
      oncolor2: "",
      oncolor3: "",
      oncolor4: "",
    };
  },
  methods: {
    changeMenu(val) {
      this.free = this.menus[val];
      if (val === 0) {
        this.oncolor1 = "btnon";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnoff";
        this.$router.push({ path: "/board/free" });
      }
      if (val === 1) {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnon";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnoff";
        this.$router.push({ path: "/board/review" });
      }
      if (val === 2) {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnon";
        this.oncolor4 = "btnoff";
        this.$router.push({ path: "/board/info" });
      }
      if (val === 3) {
        this.oncolor1 = "btnoff";
        this.oncolor2 = "btnoff";
        this.oncolor3 = "btnoff";
        this.oncolor4 = "btnon";
        this.$router.push({ path: "/board/que" });
      }
    },
  },
};
</script>

<style scoped>
.mainimg_text{
      padding-top:70px;
      width: 1040px;
    max-width: 100%;
    margin:0px auto;
  color:white
}
.mainimg{
  background: url(../assets/tabelimg2.jpg) no-repeat;
  width:100%;
  height: 228px;
   background-size:cover;
   background-position:10% 83% ;
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
}
.wrap {
  width: 1320px;
  margin: 0 auto;
}
.left1 {
  width: 10%;
  background: #ccc;
  float: left;
  text-align: center;
}
.right1 {
  width: 90%;

  float: left;
  margin-left: 10%;
}
.fix {
  margin-top: 30px;

  position: fixed;
  clear: both;
}
</style>