<template>
  <div>
    <div class="wrap1">
      <p class="title">회원탈퇴</p>
      <div class="hr"></div>
      <div class="wrap_in">
        <span class="bold">회원 탈퇴 안내</span>
        <div class="delbox">
          <br />
          [회원탈퇴 약관]<br />
          <br />
          회원탈퇴 신청 전 안내 사항을 확인 해 주세요.<br />
          회원탈퇴를 신청하시면 현재 로그인 된 아이디는 사용하실 수 없습니다.<br />
          회원탈퇴를 하더라도, 서비스 약관 및 개인정보 취급방침 동의하에 따라
          일정 기간동안 회원 개인정보를 보관합니다.<br />
          <br />
          - 주문 정보<br />
          - 상품 구입 및 대금 결제에 관한 기록<br />
          - 상품 배송에 관한 기록<br />
          - 소비자 불만 또는 처리 과정에 관한 기록<br />
          - 게시판 작성 및 사용후기에 관한 기록<br />
          <br />
          ※ 상세한 내용은 사이트 내 개인정보 취급방침을 참고 해 주세요.<br />
          <br />
        </div>
        <input type="checkbox" v-model="check1" class="chkbox" />
        <span class="info">회원 탈퇴 안내에 동의합니다</span>
        <br />
        <span class="bold2">개인정보처리방침</span>
        <div class="delbox">
          <br />
          DS TRAVEL(이하 “회사”)는 「개인정보보호법」 등 관련법령에 따라
          정보주체의 개인정보 및 권익을 보호하고, 개인정보와 관련한 정보주체의
          고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 두고
          있습니다.<br />
          <br />
          제 1 조 개인정보 처리 항목<br />
          <br />
          회사는 서비스를 위한 목적에 필요한 범위에서 최소한의 개인정보를 다음과
          같이 처리합니다.<br />
          서비스 회원가입 및 관리<br />
          <br />
          필수항목 : 이름, 생년월일, 아이디, 비밀번호, 성별, 이메일<br />
          선택항목 : 주소, 연락처, 프로필사진, 체형정보, 취향정보<br />
          <br />
          민원사무 처리 <br />
          <br />
          이름, 아이디, 주소, 연락처 등 상담을 위해 필요한 회원의 등록정보
          <br />
          <br />

          재화 또는 서비스 제공 <br />
          <br />
          이름, 아이디, 이메일, 주소, 연락처 등 서비스 수령을 위한 정보 <br />
          <br />

          마케팅 및 광고에의 활용 <br />
          <br />
          이름, 연락처, 생년월일, 서비스 이용정보, 회원이 사이트 내에
          게시·등록한 콘텐츠 등 <br />
          <br />
        </div>
        <input type="checkbox" v-model="check2" class="chkbox" />
        <span class="info">개인정보처리방침에 동의합니다</span>
        <div class="btn_box">
          <button class="chbtn" @click="handleout">탈퇴하기</button>
        </div>
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <div class="dialog">
        <span class="outdia"
          >회원탈퇴시 보유중인 포인트와 마일리지<br />
          회원정보,거래정보는 즉시 삭제처리되며,재가입시 복원되지 않습니다.<br />
          정말 탈퇴하시겠습니까?
        </span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">취소</el-button>
          <el-button type="danger" @click="dialogVisible1">탈퇴하기</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      check1: false,
      check2: false,
      email: "선택항목",
      token: sessionStorage.getItem("TOKEN"),
      dialogVisible: false,
      yes: false,
    };
  },
  methods: {
    dialogVisible1() {
      (this.yes = true), (this.dialogVisible = false);
    },
    async handleout() {
      if (this.check1 !== true) {
        alert("회원 탈퇴 안내를 체크해주세요");
        return;
      }
      if (this.check2 !== true) {
        alert("개인정보처리방침을 체크해주세요");
        return;
      }
      this.dialogVisible = true;
      if (this.yes === true) {
        const url = `/REST/mypage/memberdelete`;
        const headers = {
          "Content-type": "application/json",
          token: this.token,
        };
        const data = {};
        const response = await axios.put(url, data, { headers });
        console.log(response);

        if (response.data.status === 200) {
          sessionStorage.removeItem("TOKEN");

          this.$router.push({ path: "/" });

          this.$emit("changeLogged", false);
        }
      }
    },
  },
};
</script>

<style scoped>
.chkbox {
  margin-top: 5px;
  vertical-align: -3px;
  margin-right: 3px;
}
.info {
  font-size: 13px;
}
.dialog {
  padding: 30px;
}
.outdia {
  margin-top: 50px;
  margin-bottom: 30px;
}
.bold {
  font-weight: bold;
  display: block;
  padding-top: 30px;
}
.bold2 {
  font-weight: bold;
  padding-top: 30px;
  display: block;
}
.chbtn {
  padding: 20px 0;
  width: 280px;
  margin: 0 5px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  background: #2752be;
  color: white;
  font-weight: bold;
  margin-bottom: 100px;
}
.btn_box {
  text-align: center;
  margin-top: 50px;
}
.delbox {
  border: 1px solid #ddd;
  height: 200px;
  overflow-y: scroll;
  font-size: 13px;
  padding: 10px;
  box-sizing: border-box;
}

.title {
  font-weight: bold;
  font-size: 18px;
  margin-left: 50px;
  text-align: left;
}

.wrap1 {
  padding: 10px;
}
.hr {
  border-bottom: 1px solid #ddd;
  margin: 20px 0px;
}
.wrap_in {
  padding: 0px 50px;
}
/* 아이디
        이름
        닉네임
        이메일 */
</style>