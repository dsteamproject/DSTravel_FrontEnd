<template>
  <div>
    <div class="wrap1">
      <p class="text1">비밀번호 재설정</p>
      <div class="hr"></div>
      <p class="text2 textsa">새로 사용할 비밀번호를 입력하세요</p>
      <p class="text3 textsa">
        암호는 5~15자 영문 대 소문자, 숫자, 특수문자를 포함하여 사용하세요
      </p>
      <div class="wrap1_in">
        <label>아이디</label><span class="userid1">{{ this.list.id }}</span
        ><br />
        <input
          type="password"
          class="userpw"
          v-model="nowpw"
          placeholder="현재 비밀번호"
          ref="nowpw"
        />
        <br />
        <input
          type="password"
          class="userpw"
          v-model="newpw1"
          placeholder="새 비밀번호"
          ref="newpw1"
        />
        <br />
        <input
          type="password"
          class="userpw"
          v-model="newpw2"
          placeholder="새 비밀번호 확인"
          ref="newpw2"
        />
      </div>
      <button class="pwbtn" @click="handlechange">비밀번호 변경</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nowpw: "",
      newpw1: "",
      newpw2: "",
      token: sessionStorage.getItem("TOKEN"),
      list: [],
    };
  },
  async created() {
      this.$emit("searchon", true);
    await this.refresh();
  },
  methods: {
    async refresh() {
      const url = `/REST/mypage/home`;
      const headers = { "Content-type": "application/json", token: this.token };
      const response = await axios.get(url, { headers });
      console.log(response);
      this.list = response.data.member;
    },

    async handlechange() {
      if (this.nowpw === "") {
        alert("현재 비밀번호를 입력해주세요");
        this.$refs.nowpw.focus();
        return;
      }
      if (this.newpw1 === "") {
        alert("새 비밀번호를 입력해주세요");
        this.$refs.newpw1.focus();
        return;
      }
      if (this.newpw2 === "") {
        alert("새 비밀번호 확인을 입력해주세요");
        this.$refs.newpw2.focus();
        return;
      }
      if (this.nowpw === this.newpw1) {
        alert("현재 비밀번호와 동일한 비밀번호로 변경하실수 없습니다");

        return;
      }
      if (this.newpw1 !== this.newpw2) {
        alert("새 비밀번호 와 새 비밀번호 확인이 서로 다릅니다");
        this.$refs.newpw2.focus();
        return;
      }
      if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,15}$/i.test(
          this.newpw1
        )
      ) {
        alert(
          "새 비밀번호는 5~15자 영문 대 소문자, 숫자, 특수문자를 포함해서 사용하세요"
        );
        this.$refs.newpw1.focus();
        return;
      } else {
        const url = `/REST/mypage/memberpwchange`;
        const headers = {
          "Content-type": "application/json",
          token: this.token,
        };
        const body = {
          password: this.nowpw,
          newpw: this.newpw1,
        };
        const response = await axios.put(url, body, { headers });
        console.log(response);
        if (response.data.status === 200) {
          this.nowpw = "";
          this.newpw1 = "";
          this.newpw2 = "";
          alert(
            "비밀번호 변경이 완료되었습니다.\n변경된 비밀번호로 재로그인 해주세요"
          );
          sessionStorage.removeItem("TOKEN");
          this.$router.push("/login");
          this.$emit("changeLogged", false);
        }
      }
    },
  },
};
</script>

<style scoped>
.hr {
  border-bottom: 1px solid #ddd;

  padding: 10px 0px;
}
.pwbtn {
  padding: 10px 165px;
  margin-top: 30px;
  border: none;
  background: #2752be;
  color: white;
  cursor: pointer;
}
.userid1 {
  vertical-align: 3px;
}
label {
  padding-bottom: 7px;
  display: inline-block;
  margin-right: 10px;
  font-size: 17px;
}
.userpw {
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
.text3 {
  margin-bottom: 20px;
  margin-bottom: 30px;
}
.textsa {
  font-size: 15px;
  line-height: 25px;
  color: rgb(95, 92, 92);
}
.text2 {
  margin-top: 40px;
}
.text1 {
  font-weight: bold;
  font-size: 18px;
  margin-left: 50px;

  text-align: left;
}
.wrap1_in {
  width: 38%;
  margin: 0 auto;
  text-align: left;
}

.wrap1 {
  text-align: center;
  padding: 10px;
}
</style>