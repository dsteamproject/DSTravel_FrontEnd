<template>
  <div>
    <div class="wrap">
      <h1 class="maintitle">예약/결제</h1>
      <p class="abc">주문상품</p>
      <div class="text">
        <table class="table">
          <th>상품</th>
          <th>옵션</th>

          <th>날짜</th>
          <th>인원</th>
          <th>상품금액</th>
          <tr>
            <td>
              <div class="hr_img">
                <img :src="this.list.firstimage" class="imgg" />
              </div>
              <span class="vertitle">{{ this.list.title }}</span>
            </td>
            <td>{{ this.select }}</td>
            <td>{{ this.value[0] }}<br />~ {{ this.value[1] }}</td>
            <td>{{ this.number }}</td>
            <td>{{ this.price }}만원</td>
          </tr>
        </table>
        <h3>방문하실 객실과 예약정보를 입력해주세요</h3>
        <p>예약정보 입력</p>
      </div>
      <div class="jin_left">
        <div class="left5">
          <p class="ib_left">날짜와 객실선택</p>
          <span class="font_mini">체크인/아웃 선택</span>
          <div class="block321">
            <el-date-picker
              v-model="value"
              type="daterange"
              start-placeholder="Start date"
              end-placeholder="End date"
              :default-time="defaultTime"
              value-format="YYYY-MM-DD"
            ></el-date-picker>
            <p class="inf">체크인 날짜와 체크아웃시간을 선택해주세요</p>
          </div>
          <div>
            <p class="font_mini">객실 선택</p>
            <select name="items1" class="select" v-model="select">
              <option value="싱글룸">싱글룸(+1만원)</option>
              <option value="스탠다드">스탠다드(+2만원)</option>
              <option value="스위트룸">스위트룸(+3만원)</option>
            </select>
          </div>
          <p class="font_mini">투숙인원</p>
          <input type="number" class="numberbox" v-model="number" />
          <p class="inf">추가인원에 따라 객실요금이 달라질수있습니다.</p>
          <div>
            <p class="customer ib_left">고객정보</p>
            <p class="name">이름</p>
            <input type="text" class="name1" placeholder="성" />
            <input type="text" class="name2" placeholder="이름" />
            <p class="phone font_mini">
              휴대폰 연락처 <span class="red"> * </span>
            </p>
            <input
              type="text"
              class="name3"
              placeholder=" '-'없이 숫자만 입력해주세요"
            />
          </div>
        </div>
        <div class="right5">
          <div class="ib_top">
            <p class="ib_right"><span class="red"> * </span>필수 입력사항</p>
          </div>
          <p class="datenum font_mini">숙박일수</p>
          <input
            class="datepiceer"
            type="text"
            :value="this.value[0] + ' ~ ' + this.value[1]"
          />

          <p class="font_mini addoption">추가옵션</p>
          <div class="plus_box">
            <input type="checkbox" name="xxx" value="yyy" checked /><label
              >조식</label
            ><br />
            <input type="checkbox" name="xxx" value="yyy" checked /><label
              >라운지</label
            >
          </div>
          <div>
            <br />
            <p class="font_mini">이메일</p>
            <input type="text" class="mail" placeholder="E-MAIL" />
          </div>
        </div>

        <div class="last_box">
          <p class="ib_left ib_plus">추가요청사항</p>
          <textarea class="area">sad</textarea>
        </div>
      </div>
      <div class="jin_right">
        <div class="fixbox">
          <div class="center">
            <p class="p1">최종결제금액</p>

            <div class="hr2"></div>
          </div>
          <div class="hr2_pa">
            <span class="p2">총 상품금액</span
            ><span class="p2_right">{{ this.price }}0,000</span><br />
            <span class="p2">수수료</span><span class="p2_right">500</span
            ><br />
          </div>
          <div class="gray">
            <p>총결제 금액</p>
            <div class="g_right">{{ this.price }}0,000</div>
          </div>
          <div class="btnbox">
            <button class="ribtn" @click="requestPay">예약하기</button>
          </div>
        </div>
      </div>
      <div class="both"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent, ref } from "vue";
export default defineComponent({
  watch: {
    select: async function () {
      if (this.select === "싱글룸") {
        this.price + 1;
        console.log(this.price);
      }
    },
  },
  async created() {
    this.$emit("searchon", true);
    await this.refresh();
  },
  setup() {
    const value = ref("00");
    const defaultTime = ref([
      new Date(2000, 1, 1, 0, 0, 0),
      new Date(2000, 2, 1, 23, 59, 59),
    ]); // '00:00:00', '23:59:59'

    return {
      value,
      defaultTime,
    };
  },
  data() {
    return {
      price: "",
      list1: "",
      number: "",
      select: "",
      list: [],
      impCode: "imp00284079",
      order: {
        name: "DSTRAVEL",
        amount: 1000,
        buyer_tel: "010-5195-1648",
      },
      token: sessionStorage.getItem("TOKEN"),
    };
  },
  methods: {
    async refresh() {
      const url1 = `/REST/travel/selectone?contentId=${this.$route.query.code}`;
      const headers1 = { "Content-type": "application/json" };

      const response1 = await axios.get(url1, { headers1 });
      console.log(response1);
      this.list = response1.data.TD;
      this.price = Number(response1.data.TD.price);
      console.log(this.price);
    },
    requestPay: async function () {
      //1. 객체 초기화 (가맹점 식별코드 삽입)
      var IMP = window.IMP;
      IMP.init(this.impCode);
      //3. 결제창 호출
      IMP.request_pay(
        {
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: "merchant_" + new Date().getTime(),
          name: this.order.name,
          amount: this.order.amount,
          buyer_tel: this.order.buyer_tel,
        },
        function (rsp) {
          if (rsp.success) {
            //4. 결제 요청 결과 서버(자사)에 적용하기
            //ajax 서버 통신 구현 -> 5. 서버사이드에서 validation check

            //6. 최종 서버 응답 클라이언트에서 단계 4.에서 보낸 서버사이드 응답 에따라 결제 성공 실패 출력
            var msg = "결제가 완료되었습니다.";
            msg += "고유ID : " + rsp.imp_uid;
            msg += "상점 거래ID : " + rsp.merchant_uid;
            msg += "결제 금액 : " + rsp.paid_amount;
            msg += "카드 승인번호 : " + rsp.apply_num;
          } else {
            var msg1 = "결제에 실패하였습니다.";
            msg1 += "에러내용 : " + rsp.error_msg;
          }
          console.log(msg);
          console.log(msg1);
        }
      );
    },
  },
});
</script>
<style>
.block321 .el-input__inner {
  width: 99%;
  margin-left: 5px;
}
.el-range-input:nth-child(2) {
  border-top: 1px solid rgb(223, 223, 223) !important;
  border-bottom: 1px solid rgb(223, 223, 223) !important;
  border-right: 1px solid rgb(223, 223, 223) !important;
  width: 50%;
  padding-right: 20px;
  box-sizing: border-box;
  background: rgb(241, 241, 241);
}
.el-range-input:nth-child(4) {
  border: 1px solid #ddd !important;
  width: 50%;
  background: rgb(241, 241, 241) !important;
}
.el-icon-date {
  border-right: 1px solid rgb(223, 223, 223) !important;
  border-top: 1px solid rgb(223, 223, 223) !important;
  border-bottom: 1px solid rgb(223, 223, 223) !important;
  margin-left: 5px;
  border-left: 1px solid #ddd;
}
</style>
<style scoped src= "../assets/css/order.css">
</style>