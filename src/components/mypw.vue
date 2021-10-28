<template>
    <div>
        <div class="wrap1">
            <p class="text1">비밀번호 재설정</p>
            <p class="text2 textsa">새로 사용할 비밀번호를 입력하세요</p>
            <p class="text3 textsa">암호는 5~15자 영문 대 소문자, 숫자, 특수문자를 포함하여 사용하세요</p>
            <div class="wrap1_in">
              
            <label>아이디</label><span class="userid1">test12</span><br>
          
            <input type="text" class="userpw" placeholder="새 비밀번호"> <br>
            <input type="text" class="userpw" placeholder="새 비밀번호 확인"> 
            </div>
            <button class="pwbtn">비밀번호 변경</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.pwbtn{
    padding:10px 165px;
    margin-top:30px;
    border:none;
    background: #2752be;
    color:white;
    cursor: pointer;
}
.userid1{
    vertical-align: 3px;
}
label{
    padding-bottom:7px;
    display: inline-block;
    margin-right: 10px;
    font-size:17px;
}
.userpw{
        width: 100%;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: #fff;
    height: 38px;
    padding: 0 10px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    line-height: 36px\9;
    font-family: inherit;
    font-size: 16px;
    margin-top: 5px;
    outline: none;
}
.text3{
    margin-bottom: 20px;
}
.textsa{
      font-size:15px;
      color:rgb(95, 92, 92);
}
.text2{
   
    margin-top:10px;
}
.text1{
    font-weight: bold;
    font-size:20px;
    padding-top:80px ;
}
.wrap1_in{
    width:38%;
    margin: 0 auto;
        text-align: left;
}

.wrap1{
    text-align: center;
}

</style>