<template>
    <div class="app">
        <div class="bg1">
            <div class="bg1_in">
            <h2 class="title">제목들어갈공간</h2>
            </div>
        </div>
        <div class="bg2">
            <div class="bg2_in">
                <span class="sub">2021-10-28</span>  <span class="sub1"> 조회수:3</span>
            </div>
        </div>
<div class="wrap">
<div  v-html="editorData" class="ck-content"></div>
<div class="reply_box">
<div class="hr"></div>
<ul class="replyul">
    <li v-for="item in 4" :key="item">
        <div class="reply_content">
            <span>user01</span><span class="regdate">2021-10-28</span>
            <div class="reply_content2">댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용</div>
        </div>
      
    </li>
</ul>
<textarea class="replytext" ></textarea><button class="replybtn">댓글쓰기</button>
</div>
</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                editorData:'<figure class="table"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure><p><strong>dasdsaddadasdad</strong></p><figure class="table"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure><p><strong>dasdsaddadasdad</strong></p><figure class="table"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure><p><strong>dasdsaddadasdad</strong></p>'
            }
        }
        
    }
</script>

<style scoped>
.reply_content2{
    min-height: 100px;
    clear: both;
     border-bottom: 1px solid #ddd;
     margin-top:10px;
}
.regdate{
    float:right
}
.reply_content{
    height: 40px;

   
}

.replyul{
    list-style: none;
}
.replyul li{
    min-height: 150px;
}
.replybtn{
    width:10%;
    padding:41px 0px;
    border:none;
     box-sizing: border-box;
         outline: 0;
         vertical-align: 43px;
         cursor: pointer;
}
.replytext{
    width:90%;
    height: 98px;
    margin-top:30px;
    outline: 0;
    box-sizing: border-box;
    resize: none;
}
.hr{
    border-bottom: 1px solid #ddd;
    margin-top:55px;
    margin-bottom: 10px;
}
.reply_box{
    width:1100px;
    margin: 0 auto;
}
.sub{
    vertical-align: -13px;
}
.sub1{
    vertical-align: -15px;
    margin-left:10px;
}
.bg1_in{
    width:1100px;
    margin:0 auto;
    padding-top:70px;
}
.bg2_in{
    width:1100px;
    margin:0 auto;
    
}
.bg1{
    background: #ccc;
    height: 200px;
}
.bg2{
    background: #eee;
    height: 50px;
}
.ck-content{
    width:952px;
    margin:0 auto;
}
.wrap{
    width:1320px;
    margin: 0 auto;
}
.ck-content .text-tiny {
    font-size: 0.7em;
}

.ck-content .text-small {
    font-size: 0.85em;
}

.ck-content .text-big {
    font-size: 1.4em;
}

.ck-content .text-huge {
    font-size: 1.8em;
}
.app{
    height: 3000px;
}
</style>