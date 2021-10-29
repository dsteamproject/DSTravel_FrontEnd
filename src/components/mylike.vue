<template>
    <div>
          <button id="idbtn"  @click="$router.push('/mypage/mylike/mmtr')" v-on:click="idbtn" v-bind:class="on">
            여행지
            </button>
            <button id="pwbtn" @click="$router.push('/mypage/mylike/mmho')" v-on:click="pwbtn" v-bind:class="off">
                숙소
                </button>
                     <router-view></router-view>
    </div>
</template>

<script>
   export default {
    created(){
        
       var location = document.location.href.split("mylike/");
       console.log(location[1])
       if(location[1] === "mmtr"){
         
            this.on="oncss"
             this.off="offcss"
       }else if(location[1] === "mmho"){
         
              this.on="offcss"
             this.off="oncss"
       }
    },
    data(){
        return{
          
            on:"oncss",
            off:"offcss",

        }
    },
     methods: {
         idbtn(){
             this.chk= 1;
             this.on="oncss"
             this.off="offcss"
         },
         pwbtn(){
             this.chk=2;
             this.on="offcss"
             this.off="oncss"
         }
     }
}

</script>

<style scoped>
.oncss{
    border-top:1px solid black!important;
    border-right:1px solid black!important;
    border-left:1px solid black!important;
    background: white;
}
.offcss{
    border-bottom: 1px solid black!important;
}
.rou{
    border:1px solid #ccc;
    height: auto;
  
}
.title{
        font-size: 18px;
    color: #222;
    clear: both;
    margin:50px 0px 20px;
    display: block;
      text-align: center;

}
#idbtn{
    width:50%;
    height: 56px;
    border:none;
    cursor: pointer;
}
#pwbtn{
    width:50%;
    height: 56px;
    border:none;
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