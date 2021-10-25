<template>
    <div>
        <div class="wrap">
            <h1>16강</h1> <span>1/8</span>
         <img :src="selectedImage" class="img1" @click="handleclick" />{{this.selectedtitle}}<span> vs</span> <img :src="selectedImage2" class="img2" @click="handleclick" />{{this.selectedtitle2}}
        
         </div>
    </div>
</template>

<script>
    export default {
          data(){
            return{
                images:[
                    {img:'/img/seoul1.f2d4e6e5.jpg', title:"경복궁"},
                    {img:'/img/seoul2.aad40864.jpg', title:"N서울타워"},
                    {img:'/img/seoul5.4361ca3e.jpg', title:"서울역사박물관"}
                     
                ],
                   images2:[
                    {img:'/img/seoul3.1ca5440c.jpg', title:"명동"},
                    {img:'/img/seoul4.c7f2f5db.jpg', title:"63빌딩"},
                    {img:'/img/seoul6.8a8391db.jpg', title:"도봉산"}
                     
                ],
                 selectedImage: '',
                 selectedImage2: '',
                 selectedtitle:'',
                 selectedtitle2:'',
            }
        },
        created(){
            const idx = Math.floor(Math.random() * this.images.length)
             this.selectedImage = this.images[idx].img
             this.selectedtitle = this.images[idx].title
                  const idx2 = Math.floor(Math.random() * this.images2.length)
             this.selectedImage2 = this.images2[idx2].img
                 this.selectedtitle2 = this.images2[idx2].title
        },
        methods:{
            handleclick(){

            }
        }
    }
</script>

<style scoped>
    .wrap{
        width:1320px;
        margin:0 auto;

    }
    .img1{
        width:200px;
        height: 300px;
        cursor: pointer;
    }
    .img2{
          width:200px;
        height: 300px;
        cursor: pointer;

    }
</style>