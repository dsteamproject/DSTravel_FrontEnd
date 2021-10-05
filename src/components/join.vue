<template>
     <div id="back">
    <div class="wrap">
   
        <ul class="ul_1">
            <li class="circle1"><span class="circle">1</span>
            <dl>
                <dt>Step1</dt>
                <dd>약관동의</dd>
            </dl>
            </li>
            <li class="circle1"><span class="circle">2</span></li>
            <li class="circle1"><span class="circle">3</span></li>
            <li class="circle1"><span class="circle">4</span></li>
            
        </ul>
      
     
        <div class="input_box"></div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#back {
    background: #eeeeee;
    width: 100%;
    height: 110vh;
    padding-top: 30px;
  }
  .wrap {
    background: white;
    width: 1200px;
    height: 900px;
    margin: auto;
    padding: 70px 120px;
    box-sizing: border-box;
  }
  .circle {
      width:107px;
      height: 107px;
      background: #ccc;
      border-radius: 50%;
      text-align: center;
      line-height: 107px;
      margin:0px 66px;
            float: left;
  }
  ul .circle1{
      list-style: none;
      float: left;
     

    
  }
  .ul_1{
      height: 213px;
  }

  .input_box{
      clear: both;
      
      width:100%;
      height: 500px;
      border:1px solid #ccc;
  }

</style>