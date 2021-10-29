<template>
    <div>

        <div class="wrap1">
            <ul class="likelist">
                <li v-for="item in 9" :key="item">
                    <img src="../assets/seoul1.jpg" class="img">
                    <div class="liketext">
                        <p>[제주도] 트립에이드 X 제주 오설록티 뮤지엄 티스톤</p>
                        <p>30,000원</p>
                    </div>
                </li>
            </ul>
      
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                imgsrc:"`../assets/seoul${item}.jpg`",
            }
        }
    }
</script>

<style scoped>
.img{
    width:100%;
}
.wrap1{
    padding:50px 80px;
}
.liketext{
    padding:10px;

}
.likelist li{
        width:30%;
    height: 300px;
        border-top: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
     border-bottom: 3px solid #40be70;
    border-left: 1px solid #f0f0f0;
    display: inline-block;
    margin:0px 10px;
    margin-bottom:30px;
    box-shadow: 1px 5px 9px 2px rgba(0,0,0,0.2);
}

button{
    clear:both;
}
</style>