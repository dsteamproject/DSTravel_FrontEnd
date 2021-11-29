<template>
  <div class="wrap1_1" style="position: fixed" v-loading="loading">
    <div class="newleft" v-if="newleft === 'on'">
      <p class="nltext1">일정</p>
      <button :class="nltext2css" @click="allview">전체일정</button>
      <button
        style="
          border: none;
          padding: 0px 15px;
          margin: 6px;
          border-radius: 10px;
          backdrop-filter: blur(4px);
          box-shadow: rgb(31 38 135 / 10%) 0px 8px 32px 0px !important;
          cursor: pointer;
          height: 50px;
          justify-content: center;
          align-items: center;
          background-color: white;
          font-size: 13px;
        "
        v-for="(item, index) in traveldate"
        :key="item"
        :class="lastleft_bthcss + index"
        @click="handledatego(item, index)"
      >
        DAY{{ item + 1 }}
      </button>
    </div>
    <div class="left2">
      <div v-if="newleft === 'off'">
        <h3 class="h31" @change="locationchange">
          {{ this.$route.query.locationkor }}
        </h3>
        <span class="sub_area">{{ this.$route.query.locationeng }}</span
        ><br />
        <span class="day">{{ this.$route.query.betday }}day</span><br />

        <a href="#" class="full_day"
          >{{ this.$route.query.start }} - {{ this.$route.query.end }}</a
        >

        <div class="demo-collapse">
          <div>
            <h5>여행일정</h5>
            <button v-if="this.num3 !== 1" @click="numnegative" class="prev">
              &lt;
            </button>
            <button
              v-if="this.num3 === 1"
              @click="numnegative"
              class="prev"
              :disabled="this.num3 === 1"
              style="color: #a1a1a1; pointer-events: none"
            >
              &lt;
            </button>
            <el-input-number
              v-model="num3"
              :controls="false"
              :min="1"
              :max="Number(this.$route.query.betday)"
              controls-position="right"
              @change="handleChange"
            /><span>일차</span>
            <button
              @click="numplus"
              class="next"
              v-if="this.num3 !== Number(this.$route.query.betday)"
            >
              &gt;
            </button>
            <button
              @click="numplus"
              class="next"
              v-if="this.num3 === Number(this.$route.query.betday)"
              :disabled="this.num3 === Number(this.$route.query.betday)"
              style="color: #a1a1a1; pointer-events: none"
            >
              &gt;
            </button>
          </div>

          <ul
            style="overflow: auto; height: 62vh"
            class="rightscroll"
            v-if="this.num3 === 1"
            v-on:after-enter="fadeNext"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice1"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    v-if="list.firstimage !== undefined"
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                  <img
                    v-if="list.firstimage === undefined"
                    :src="`//127.0.0.1:8080/REST/travel/select_image?no=${list.no}`"
                    style="height: 100%; width: 100%"
                  />
                </div>

                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>

                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice1.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div v-if="loadinfon === true">
                    <button
                      v-if="index === this.loadnumb"
                      class="loadinfo2"
                      @click="loadinfo2(list, index)"
                    >
                      닫기
                    </button>
                  </div>
                  <div class="myt4_in" v-if="index === this.loadnumb">
                    <p v-for="(item, i) in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span
                          v-if="i !== this.loadtext.length - 1"
                          style="font-size: 8px"
                          >▼</span
                        >
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>

          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 2"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice2"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice2.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 3"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice3"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice3.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 4"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice4"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice4.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 5"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice5"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice5.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 6"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice6"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice6.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 7"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice7"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice7.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 8"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice8"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice8.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 9"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice9"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice9.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
          <ul
            style="overflow: auto; height: 530px"
            class="rightscroll"
            v-if="this.num3 === 10"
          >
            <transition-group name="list" tag="p">
              <li
                v-for="(list, index) in choice10"
                :key="index"
                class="mytravel_list"
              >
                <div class="mytimg">
                  <img
                    :src="list.firstimage"
                    style="height: 100%; width: 100%"
                  />
                </div>
                <div class="myt2">
                  <span class="mylist_text">{{ list.title }}</span>
                  <br />
                  <button class="loadinfo" @click="loadinfo(list, index)">
                    상세경로
                  </button>
                  <img
                    :src="`/REST/travel/image${index + 1}`"
                    class="ml_img"
                    style="width: 19px; height: 20px; vertical-align: bottom"
                  />
                </div>
                <div class="myt3">
                  <button
                    class="l_btn btn11"
                    v-if="index !== 0"
                    @click="listup(list, index)"
                  >
                    <img src="../assets/upi.png" /></button
                  ><button
                    class="l_btn btn12"
                    v-if="index !== this.choice10.length - 1"
                    @click="listdown(list, index)"
                  >
                    <img src="../assets/doi.png" /></button
                  ><button class="l_btn btn13" @click="listdelete(list)">
                    <img
                      src="../assets/x2.png"
                      style="width: 10px; height: 10px"
                    />
                  </button>
                </div>

                <div class="myt4" v-if="loadtexton === true">
                  <div class="myt4_in">
                    <p v-for="item in loadtext" :key="item">
                      <span class="loadcss" v-if="index === this.loadnumb"
                        >{{ item }}
                        <br />
                        <span style="font-size: 8px">▼</span></span
                      >
                    </p>
                  </div>
                </div>
              </li>
            </transition-group>
          </ul>
        </div>
      </div>
      <div v-if="newleft0 === 'on'">
        <ul class="alldate">
          <p>
            대한민국 <span class="ad_location">{{ this.lockor }}</span
            >: <span class="ad_betday">{{ this.$route.query.betday }}</span
            >일 여행
          </p>
          <br />
          <div class="date_bg" v-if="this.choice1.length > 0">
            <li class="alldatetitle" v-if="this.choice1.length > 0">
              Day 1 - {{ this.betdatelist[0] }}
            </li>
            <li class="alldatecontent" v-for="item in choice1" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>
          <div class="date_bg" v-if="this.choice2.length > 0">
            <li class="alldatetitle" v-if="this.choice2.length > 0">
              Day 2 - {{ this.betdatelist[1] }}
            </li>
            <li class="alldatecontent" v-for="item in choice2" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>

          <div class="date_bg" v-if="this.choice3.length > 0">
            <li class="alldatetitle" v-if="this.choice3.length > 0">
              Day 3 - {{ this.betdatelist[2] }}
            </li>
            <li class="alldatecontent" v-for="item in choice3" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>

          <div class="date_bg" v-if="this.choice4.length > 0">
            <li class="alldatetitle" v-if="this.choice4.length > 0">
              Day 4 - {{ this.betdatelist[3] }}
            </li>
            <li class="alldatecontent" v-for="item in choice4" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>
          <div class="date_bg" v-if="this.choice5.length > 0">
            <li class="alldatetitle" v-if="this.choice5.length > 0">
              Day 5 - {{ this.betdatelist[4] }}
            </li>
            <li class="alldatecontent" v-for="item in choice5" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>
          <div class="date_bg" v-if="this.choice6.length > 0">
            <li class="alldatetitle" v-if="this.choice6.length > 0">
              Day 6 - {{ this.betdatelist[5] }}
            </li>
            <li class="alldatecontent" v-for="item in choice6" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>
          <div class="date_bg" v-if="this.choice7.length > 0">
            <li class="alldatetitle" v-if="this.choice7.length > 0">
              Day 7 - {{ this.betdatelist[6] }}
            </li>
            <li class="alldatecontent" v-for="item in choice7" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>
          <div class="date_bg" v-if="this.choice8.length > 0">
            <li class="alldatetitle" v-if="this.choice8.length > 0">
              Day 8 - {{ this.betdatelist[7] }}
            </li>
            <li class="alldatecontent" v-for="item in choice8" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>
          <div class="date_bg" v-if="this.choice9.length > 0">
            <li class="alldatetitle" v-if="this.choice9.length > 0">
              Day 9 - {{ this.betdatelist[8] }}
            </li>
            <li class="alldatecontent" v-for="item in choice9" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>
          <div class="date_bg" v-if="this.choice10.length > 0">
            <li class="alldatetitle" v-if="this.choice10.length > 0">
              Day 10 - {{ this.betdatelist[9] }}
            </li>
            <li class="alldatecontent" v-for="item in choice10" :key="item">
              <div class="ads" style="width: 20%; float: left">
                <img :src="item.firstimage" style="width: 100%; height: 50px" />
              </div>
              <div class="ads2" style="width: 80%; float: left">
                <span class="choice_title2"> {{ item.title }}</span>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div v-if="newleft1 === 0">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice1"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 1">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice2"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 2">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice3"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 3">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice4"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 4">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice5"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 5">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice6"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 6">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice7"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 7">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice8"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 8">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice9"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="newleft1 === 9">
        <ul class="alldate">
          <li
            class="alldatecontent1"
            v-for="(item, index) in choice10"
            :key="item"
          >
            <div class="choice_title">
              <div class="choice_no">
                <div class="choice_no_in">
                  <div class="choice_text1">NO.{{ index + 1 }}</div>
                </div>
              </div>
              <div class="choice_title1">
                <div class="choice_title1_in">
                  <div class="choice_text2">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="totalDT">
              <div class="totaldt1" v-if="item.totalDistance !== undefined">
                ↓
              </div>
              <div class="totaldt2" v-if="item.totalDistance !== undefined">
                거리 : {{ item.totalDistance }}<br />
                시간 : {{ item.totalTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div :class="centercss">
      <GMapMap
        ref="myMapRef"
        :key="key"
        :center="center"
        :zoom="zoom"
        map-type-id="roadmap"
        style="width: 100vw; height: 20rem"
        @click="mark"
        class="gmap"
        :options="{
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
        }"
      >
        <GMapCluster
          :minimumClusterSize="10"
          :zoomOnClick="true"
          :style="clusterIcon"
          imagePath="https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m"
        >
          <GMapMarker
            :key="(index, componentKey)"
            v-for="(m, index) in markers"
            :icon="m.icon"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="openMarker(m.id)"
            v-on:click="center = m.position"
            @closeclick="openMarker(null)"
          >
            <GMapPolyline
              v-if="this.num3 === 1"
              :options="options"
              :path="path1"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 2"
              :options="options"
              :path="path2"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 3"
              :options="options"
              :path="path3"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 4"
              :options="options"
              :path="path4"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 5"
              :options="options"
              :path="path5"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 6"
              :options="options"
              :path="path6"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 7"
              :options="options"
              :path="path7"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 8"
              :options="options"
              :path="path8"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 9"
              :options="options"
              :path="path9"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />
            <GMapPolyline
              v-if="this.num3 === 10"
              :options="options"
              :path="path10"
              :key="componentKey"
              :editable="false"
              ref="polyline"
            />

            <GMapInfoWindow
              :closeclick="true"
              @closeclick="openMarker(null)"
              :opened="openedMarkerID === m.id"
            >
              <div>{{ m.id }}</div>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapCluster>
      </GMapMap>
      <div v-if="lastac === false">
        <button class="addmarker" @click="mapput">장소등록</button>
        <button class="addmarker2" @click="lastaction">일정생성</button>
        <button class="addmarker3" @click="deletemarker" v-if="dtm === true">
          마커제거
        </button>
        <button class="addmarker3" @click="showmarker" v-if="dtm === false">
          마커생성
        </button>
        <button class="addmarker4" @click="alllist">전체목록</button>
      </div>
      <div v-if="lastac === true">
        <button class="addmarker" @click="mapput2">일정저장</button>
        <button class="addmarker3" @click="goback">뒤로가기</button>
      </div>
      <div class="lo"></div>
    </div>
    <div :class="rightcss">
      <div class="rightfull_btn" v-if="rightc === 'off'" @click="handlefull">
        <span>◀</span>
      </div>
      <div class="rightfull_btn" v-if="rightc === 'on'" @click="handlefull2">
        <span>▶</span>
      </div>
      <div
        style="float: left; padding: 10px; box-sizing: border-box; width: 95%"
      >
        <button id="right_btn" @click="handleright" v-bind:class="btncolor">
          관광지
        </button>
        <button id="right_btn" @click="handleright2" v-bind:class="btncolor2">
          숙소
        </button>
        <button id="right_btn" @click="handleright3" v-bind:class="btncolor3">
          음식점
        </button>
        <div class="right_content" v-if="right === 1">
          <input
            type="text"
            class="searchinput"
            v-model="rightsearch"
            placeholder="검색어를 입력하세요"
            v-on:keyup.enter="submit"
          />
          <ul class="travel_list">
            <li v-for="list in busanlist10" :key="list" :class="listmapcss">
              <div
                class="imgdiv"
                @mouseout="outMarker1(list)"
                @mouseover="openMarker1(list)"
              >
                <img :src="list.firstimage" style="height: 100%; width: 100%" />
              </div>
              <div class="textdiv">
                <span class="td_title">{{ list.title }}</span>
              </div>
              <button class="info_btn" @click="openinfo(list)">i</button>
              <button class="plus_btn" @click="listpush(list)">+</button>
            </li>
          </ul>
        </div>
        <div class="right_content" v-if="right === 2">
          <input
            type="text"
            class="searchinput"
            v-model="rightsearch2"
            placeholder="검색어를 입력하세요"
            v-on:keyup.enter="submit2"
          />
          <ul class="travel_list">
            <li v-for="list in busanlist10" :key="list" :class="listmapcss">
              <div
                class="imgdiv"
                @mouseout="outMarker1(list)"
                @mouseover="openMarker1(list)"
              >
                <img :src="list.firstimage" style="height: 100%; width: 100%" />
              </div>
              <div class="textdiv">
                <span class="td_title">{{ list.title }}</span>
              </div>
              <button class="info_btn" @click="openinfo(list)">i</button>
              <button class="plus_btn" @click="listpush(list)">+</button>
            </li>
          </ul>
        </div>
        <div class="right_content" v-if="right === 3">
          <input
            type="text"
            class="searchinput"
            v-model="rightsearch3"
            placeholder="검색어를 입력하세요"
            v-on:keyup.enter="submit3"
          />
          <ul class="travel_list">
            <li v-for="list in busanlist10" :key="list" :class="listmapcss">
              <div
                class="imgdiv"
                @mouseout="outMarker1(list)"
                @mouseover="openMarker1(list)"
              >
                <img :src="list.firstimage" style="height: 100%; width: 100%" />
              </div>
              <div class="textdiv">
                <span class="td_title">{{ list.title }}</span>
              </div>
              <button class="info_btn" @click="openinfo(list)">i</button>
              <button class="plus_btn" @click="listpush(list)">+</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="위치 추가"
    width="30%"
    :before-close="handleClose"
    class="sasa"
  >
    <div class="mapputdialog">
      <h4 class="mapputtitle">장소등록</h4>
      <p class="mapputsub">
        검색해도 나오지 않는 장소를 이곳에서 등록 후 다시 검색해보세요.<br />

        추가하실 장소의 유형을 선택해주세요.
      </p>
      <button :class="mapputcss" @click="mapdialog(12)">관광지</button>
      <button :class="mapputcss1" @click="mapdialog(32)">숙소</button>
      <button :class="mapputcss2" @click="mapdialog(39)">음식점</button>
      <div>
        <div class="loadwrap">
          <label :class="focus">장소이름(최대50자)</label
          ><input
            v-model="pluslocation"
            type="text"
            id="lwput"
            @focus="focusevent"
            @blur="focusover"
          />
        </div>
        <div class="loadsh">
          <label :class="focus2">위치(도로명 주소)</label
          ><input
            type="text"
            v-model="addr"
            id="lwput1"
            @focus="focusevent2"
            @blur="focusover2"
          /><button class="addrbtn" @click="handlemapput">검색</button>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <input
          type="file"
          @change="imagechange(event)"
          ref="file"
          name="file"
        />
        <el-button @click="dialogVisible = false">취소</el-button>
        <el-button type="primary" @click="mapfinish">완료</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog
    v-model="dialogVisible1"
    :title="this.dialoglist.title"
    top="30vh"
    width="50%"
    :before-close="handleClose"
    append-to-body
    class="sasa"
  >
    <div>
      <div class="dialogimg">
        <img :src="this.dialoglist.firstimage" style="height: 310px" />
      </div>
      <div class="dialogtext">
        <div class="dltitle_wrap">
          <span class="dltitle">{{ this.dialoglist.title }}</span
          ><span class="heart" v-if="this.heart === false">♡</span
          ><span v-if="this.heart === true" class="heart2">♥</span>
        </div>
        <div><label>영업시간 </label><span>-</span></div>
        <div><label>홈페이지 </label><span>-</span></div>
        <div>
          <label>주소 </label><span>{{ this.dialoglist.addr }}</span>
        </div>
        <div><label>전화 </label><span>-</span></div>
        <div><label>입장료 </label><span>-</span></div>

        <div><label>팁 </label><span></span>-</div>
        <div class="tlright">
          <button>리뷰보기</button
          ><button @click="likepush(this.dialoglist.code)">
            위시리스트 추가
          </button>
        </div>
      </div>
      <div style="clear: both"></div>
    </div>
  </el-dialog>

  <el-dialog
    v-model="dialogVisible2"
    :title="this.dialoglist.title"
    top="30vh"
    width="30%"
    :before-close="handleClose"
    append-to-body
    class="sasa"
  >
    <div class="dialog2">
      <p class="dl2title">일정저장</p>
      <p>
        일정을 저장하여 일정등록 / 일정공유 등의 기능을<br />
        이용하실수 있습니다.
      </p>

      <div class="dlsqwrap">
        <input
          v-model="dltitle"
          type="text"
          class="dltitle1"
          placeholder="제목을 입력해주세요"
        />
        <ul class="dlsuqare">
          <li @click="TDsave"><p>일정저장</p></li>
          <li><p>일정공유</p></li>
        </ul>
      </div>
      <div style="clear: both"></div>
    </div>
  </el-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "searchbusan",

  async created() {
    this.$emit("searchon", false), await this.replacerefresh();

    this.contenttypeid = "12";

    for (var o = 0; o < this.$route.query.betday; o++) {
      this.traveldate.push(o);
    }

    // 오른쪽 상세창
    await this.rightrefresh();
    console.log(this.busanlist);

    // ========
    await this.googlemapopen();
  },
  data() {
    return {
      loading: true,
      postcode: "",
      address: "",
      extraAddress: "",
      dltitle: "",
      imagefile: "",
      heart: false,
      mapnum: 12,
      searchopen: false,
      focus: "",
      focus2: "",
      mapputnum: 1,
      mapputcss: "mapput2",
      mapputcss1: "mapput1",
      mapputcss2: "mapput1",

      lastleft_bth20: "asd",
      lastleft_bthcss: "lastleft_bth",
      nltext2css: "nltext2",
      lastac: false,
      betdatelist: [],
      loadinfon: false,
      listmapcss: "listmap",
      areacode: "",
      markersTOURIST: [],
      markershotel: [],
      markersfood: [],
      contenttypeid: "",
      rightsearch: "",
      rightsearch2: "",
      rightsearch3: "",
      newleft0: "off",
      newleft: "off",
      newleft1: "",
      key: 1,
      num3: 1,
      startdate: 1,
      traveldate: [],
      abc: "dialog <br> <br/> adsdd",
      startnum: 0,
      startnum2: 0,
      startnum3: 0,
      startnum4: 0,
      startnum5: 0,
      startnum6: 0,
      startnum7: 0,
      startnum8: 0,
      startnum9: 0,
      startnum10: 0,
      endnum: 1,
      endnum2: 1,
      endnum3: 1,
      endnum4: 1,
      endnum5: 1,
      endnum6: 1,
      endnum7: 1,
      endnum8: 1,
      endnum9: 1,
      endnum10: 1,
      middleload1: [], // 경로
      middleload: [], // 경로
      componentKey: 0,
      path1: [],
      path2: [],
      path3: [],
      path4: [],
      path5: [],
      path6: [],
      path7: [],
      path8: [],
      path9: [],
      path10: [],
      rightc: "off",
      centercss: "center1",
      rightcss: "right1",
      dialoglist: [],
      dialogcontent: "",
      choice1: [],
      choice2: [],
      choice3: [],
      choice4: [],
      choice5: [],
      choice6: [],
      choice7: [],
      choice8: [],
      choice9: [],
      choice10: [],

      busan10ll: [],
      busanlist10: [],
      busanlist: [],
      lockor: this.$route.query.locationkor,
      zoom: 14,
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      sublat: "",
      sublng: "",
      chclass: "chcss",
      btncolor: "active",
      btncolor2: "noneactive",
      btncolor3: "noneactive",
      right: 1,
      check: 1,
      num: 0,
      num2: 0,
      num1: 0,
      openedMarkerID: null,
      center: { lat: 0, lng: 0 },
      dtm: true,
      pluslocation: "",
      token: sessionStorage.getItem("TOKEN"),
      markers: [],
      markers1: [],
      markers2: [],
      markers3: [],
      markers4: [],
      markers5: [],
      markers6: [],
      markers7: [],
      markers8: [],
      markers9: [],
      markers10: [],
      numberp: [],
      coordinate: [],
      allchoice: [],

      addr: "",
      loadtexton: false,
      options: {
        strokeColor: "#FF0000",
        strokeWeight: "3",
      },
      loadtext: [],
      loadfirst: [],
      plusmarker: [],
      snum1: 0,
      lnum1: 1,
      loadnumb: "",
    };
  },
  async mounted() {
    this.$refs.myMapRef.$mapPromise.then((map) => {
      map.addListener("click", (mapsMouseEvent) => {
        console.log(mapsMouseEvent.latLng.lat());
        console.log(mapsMouseEvent.latLng.lng());
      });
    });
  },
  watch: {
    async $route(to, from) {
      console.log(to);
      console.log(from);
      await this.replacerefresh();
      await this.rightrefresh();
      await this.googlemapopen();
    },
  },

  methods: {
    async TDsave() {
      if (this.$route.query.betday === "1") {
        this.allchoice.push(this.choice1);
      }
      if (this.$route.query.betday === "2") {
        this.allchoice.push(this.choice1);
        this.allchoice.push(this.choice2);
      }
      if (this.$route.query.betday === "3") {
        this.allchoice = {
          save1: this.choice1,
          save2: this.choice2,
          save3: this.choice3,
        };
      }
      if (this.$route.query.betday === "4") {
        this.allchoice.push(this.choice1);
        this.allchoice.push(this.choice2);
        this.allchoice.push(this.choice3);
        this.allchoice.push(this.choice4);
      }
      if (this.$route.query.betday === "5") {
        this.allchoice.push(this.choice1);
        this.allchoice.push(this.choice2);
        this.allchoice.push(this.choice3);
        this.allchoice.push(this.choice4);
        this.allchoice.push(this.choice5);
      }
      if (this.$route.query.betday === "6") {
        this.allchoice.push(this.choice1);
        this.allchoice.push(this.choice2);
        this.allchoice.push(this.choice3);
        this.allchoice.push(this.choice4);
        this.allchoice.push(this.choice5);
        this.allchoice.push(this.choice6);
      }
      if (this.$route.query.betday === "7") {
        this.allchoice.push(this.choice1);
        this.allchoice.push(this.choice2);
        this.allchoice.push(this.choice3);
        this.allchoice.push(this.choice4);
        this.allchoice.push(this.choice5);
        this.allchoice.push(this.choice6);
        this.allchoice.push(this.choice7);
      }
      if (this.$route.query.betday === "8") {
        this.allchoice.push(this.choice1);
        this.allchoice.push(this.choice2);
        this.allchoice.push(this.choice3);
        this.allchoice.push(this.choice4);
        this.allchoice.push(this.choice5);
        this.allchoice.push(this.choice6);
        this.allchoice.push(this.choice7);
        this.allchoice.push(this.choice8);
      }
      if (this.$route.query.betday === "9") {
        this.allchoice.push(this.choice1);
        this.allchoice.push(this.choice2);
        this.allchoice.push(this.choice3);
        this.allchoice.push(this.choice4);
        this.allchoice.push(this.choice5);
        this.allchoice.push(this.choice6);
        this.allchoice.push(this.choice7);
        this.allchoice.push(this.choice8);
        this.allchoice.push(this.choice9);
      }
      if (this.$route.query.betday === "10") {
        this.allchoice.push(this.choice1);
        this.allchoice.push(this.choice2);
        this.allchoice.push(this.choice3);
        this.allchoice.push(this.choice4);
        this.allchoice.push(this.choice5);
        this.allchoice.push(this.choice6);
        this.allchoice.push(this.choice7);
        this.allchoice.push(this.choice8);
        this.allchoice.push(this.choice9);
        this.allchoice.push(this.choice10);
      }

      console.log(this.allchoice);

      const url1 = `/REST/travel/TDsave?title=${this.dltitle}`;
      const headers = {
        "Content-type": "application/json",
        token: this.token,
      };
      const body = { total: this.allchoice };
      const response1 = await axios.post(url1, body, { headers });
      console.log(response1);
      if (response1.data.status === 200) {
        alert("일정 저장이 완료되었습니다");
        this.dltitle = "";
        this.dialogVisible2 = false;
      }
    },
    // 일정저장
    async mapput2() {
      this.dialogVisible2 = true;
    },
    async imagechange() {
      this.imagefile = this.$refs.file.files[0];
      console.log(this.imagefile);
    },
    async likepush(item) {
      console.log(item);
      const url1 = `/REST/travel/good?contentid=${item}`;
      const headers = {
        "Content-type": "application/json",
        token: this.token,
      };
      const body = {};
      const response1 = await axios.post(url1, body, { headers });
      console.log(response1);

      const url2 = `/REST/travel/good/state?contentid=${item}`;
      const headers2 = {
        "Content-type": "application/json",
        token: this.token,
      };
      const data = {};

      const response2 = await axios.post(url2, data, { headers: headers2 });
      console.log(response2);
      this.heart = response2.data.goodresult;
    },
    //lat 35 lon 123  x 123 y 35
    async mapfinish() {
      const url = `https://apis.openapi.sk.com/tmap/geo/fullAddrGeo?addressFlag=F00&coordType=WGS84GEO&version=1&format=json&fullAddr=${this.addr}&page=1&count=20&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55`;
      const headers1 = { "Content-type": "application/json" };
      const body = {};
      const response = await axios.get(url, body, { headers1 });
      console.log(response);
      console.log(response.data.coordinateInfo.coordinate[0].lat);
      console.log(response.data.coordinateInfo.coordinate[0].lon);
      console.log(this.pluslocation);
      this.plusmarker.push({
        title: this.pluslocation,
        firstimage: this.imagefile,
        xlocation: Number(response.data.coordinateInfo.coordinate[0].lon),
        ylocation: Number(response.data.coordinateInfo.coordinate[0].lat),
      });

      if (this.num3 === 1) {
        this.choice1.push(this.plusmarker[0]);
        console.log(this.choice1);
        this.markers1.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice1.length + 1
          }`,
        });

        for (var nam = 0; nam < this.markers1.length; nam++) {
          this.markers1[nam].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam + 1
          }`;
          this.markers.push(this.markers1[nam]);
        }
      }

      if (this.num3 === 2) {
        this.choice2.push(this.plusmarker[0]);
        console.log(this.choice2);
        this.markers2.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice2.length + 1
          }`,
        });

        for (var nam2 = 0; nam2 < this.markers2.length; nam2++) {
          this.markers2[nam2].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam2 + 1
          }`;
          this.markers.push(this.markers2[nam2]);
        }
      }

      if (this.num3 === 3) {
        this.choice3.push(this.plusmarker[0]);
        console.log(this.choice3);
        this.markers3.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice3.length + 1
          }`,
        });

        for (var nam3 = 0; nam3 < this.markers3.length; nam3++) {
          this.markers3[nam3].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam3 + 1
          }`;
          this.markers.push(this.markers3[nam3]);
        }
      }

      if (this.num3 === 4) {
        this.choice4.push(this.plusmarker[0]);
        console.log(this.choice4);
        this.markers4.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice4.length + 1
          }`,
        });

        for (var nam4 = 0; nam4 < this.markers4.length; nam4++) {
          this.markers4[nam4].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam4 + 1
          }`;
          this.markers.push(this.markers4[nam4]);
        }
      }

      if (this.num3 === 5) {
        this.choice5.push(this.plusmarker[0]);
        console.log(this.choice5);
        this.markers5.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice5.length + 1
          }`,
        });

        for (var nam5 = 0; nam5 < this.markers5.length; nam5++) {
          this.markers5[nam5].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam5 + 1
          }`;
          this.markers.push(this.markers5[nam5]);
        }
      }

      if (this.num3 === 6) {
        this.choice6.push(this.plusmarker[0]);
        console.log(this.choice6);
        this.markers6.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice6.length + 1
          }`,
        });

        for (var nam6 = 0; nam6 < this.markers6.length; nam6++) {
          this.markers6[nam6].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam6 + 1
          }`;
          this.markers.push(this.markers6[nam6]);
        }
      }

      if (this.num3 === 7) {
        this.choice7.push(this.plusmarker[0]);
        console.log(this.choice7);
        this.markers7.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice7.length + 1
          }`,
        });

        for (var nam7 = 0; nam7 < this.markers7.length; nam7++) {
          this.markers7[nam7].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam7 + 1
          }`;
          this.markers.push(this.markers7[nam7]);
        }
      }

      if (this.num3 === 8) {
        this.choice8.push(this.plusmarker[0]);
        console.log(this.choice8);
        this.markers8.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice8.length + 1
          }`,
        });

        for (var nam8 = 0; nam8 < this.markers8.length; nam8++) {
          this.markers8[nam8].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam8 + 1
          }`;
          this.markers.push(this.markers8[nam8]);
        }
      }

      if (this.num3 === 9) {
        this.choice9.push(this.plusmarker[0]);
        console.log(this.choice9);
        this.markers9.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice9.length + 1
          }`,
        });

        for (var nam9 = 0; nam9 < this.markers9.length; nam9++) {
          this.markers9[nam9].icon = `http://127.0.0.1:8080/REST/travel/image${
            nam9 + 1
          }`;
          this.markers.push(this.markers9[nam9]);
        }
      }

      if (this.num3 === 10) {
        this.choice10.push(this.plusmarker[0]);
        console.log(this.choice10);
        this.markers10.push({
          id: this.pluslocation,
          position: {
            lat: Number(response.data.coordinateInfo.coordinate[0].lat), //위도   36
            lng: Number(response.data.coordinateInfo.coordinate[0].lon), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice10.length + 1
          }`,
        });

        for (var nam10 = 0; nam10 < this.markers10.length; nam10++) {
          this.markers10[
            nam10
          ].icon = `http://127.0.0.1:8080/REST/travel/image${nam10 + 1}`;
          this.markers.push(this.markers10[nam10]);
        }
      }

      console.log(this.token);
      const url1 = `/REST/travel/TDtem/insert?type=${this.mapnum}&city=${this.areacode}`;
      const headers = {
        "Content-Type": "multipart/form-data",
        token: this.token,
      };
      const body1 = new FormData();
      body1.append("title", this.pluslocation);
      body1.append("addr", this.addr);
      body1.append("xlocation", response.data.coordinateInfo.coordinate[0].lon);
      body1.append("ylocation", response.data.coordinateInfo.coordinate[0].lat);
      body1.append("file", this.imagefile);

      const response1 = await axios.post(url1, body1, { headers });
      console.log(response1);
      if (response1.data.status === 200) {
        this.dialogVisible = false;
        await this.rightrefresh();
      }
    },
    dorofull(event) {
      var doro = event.currentTarget.textContent;
      var doro1 = doro.split(".");
      console.log(doro1[1]);
      this.addr = doro1[1];
    },
    focusover2() {
      if (this.addr === "") {
        this.focus2 = "focusover";
      }
    },
    focusevent2() {
      this.focus2 = "focus";
    },
    focusover() {
      if (this.pluslocation === "") {
        this.focus = "focusover";
      }
    },
    focusevent() {
      this.focus = "focus";
    },
    async handlemapput() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          console.log(data);
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
          console.log(data);
          console.log(data.roadAddress);
          this.addr = data.jibunAddress;
        },
      }).open();

      // this.searchopen = true;
      // const url = `https://apis.openapi.sk.com/tmap/geo/postcode?version=1&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&addr=${this.addr}&coordType=WGS84GEO&addressFlag=F00&format=json&page=1&count=5`;
      // const headers = { "Content-type": "application/json" };

      // const response = await axios.get(url, { headers });

      // console.log(response.data.coordinateInfo.coordinate);
      // this.coordinate = response.data.coordinateInfo.coordinate;
    },
    mapdialog(num) {
      console.log(num);
      if (num === 12) {
        this.mapnum = num;
        this.mapputcss = "mapput2";
        this.mapputcss1 = "mapput1";
        this.mapputcss2 = "mapput1";
      } else if (num === 32) {
        this.mapnum = num;
        this.mapputcss = "mapput1";
        this.mapputcss1 = "mapput2";
        this.mapputcss2 = "mapput1";
      } else if (num === 39) {
        this.mapnum = num;
        this.mapputcss = "mapput1";
        this.mapputcss1 = "mapput1";
        this.mapputcss2 = "mapput2";
      }
    },
    async goback() {
      this.lastleft_bthcss = "";
      this.lastac = false;
      this.rightcss = "right1";
      this.centercss = "center1";
      this.newleft = "off";
      this.newleft0 = "off";
      this.markers = [];
      await this.showmarker();
      await this.onetwomarker();
    },
    betweendate() {
      var startDate = new Date(this.$route.query.start);
      var endDate = new Date(this.$route.query.end);
      var res_day = [];
      var ss_day = new Date(startDate);
      var ee_day = new Date(endDate);
      while (ss_day.getTime() <= ee_day.getTime()) {
        var _mon_ = ss_day.getMonth() + 1;
        _mon_ = _mon_ < 10 ? "0" + _mon_ : _mon_;
        var _day_ = ss_day.getDate();
        _day_ = _day_ < 10 ? "0" + _day_ : _day_;
        res_day.push(ss_day.getFullYear() + "-" + _mon_ + "-" + _day_);
        ss_day.setDate(ss_day.getDate() + 1);
      }

      this.betdatelist = res_day;
    },
    async alllist() {
      await this.rightrefresh();
    },
    async showmarker() {
      this.dtm = true;
      if (this.right === 1) {
        await this.right1();
      } else if (this.right === 2) {
        await this.right2();
      } else if (this.right === 3) {
        await this.right3();
      }
    },

    // 선택마커 제외 마케 제거
    async deletemarker() {
      this.dtm = false;
      this.markers = [];
      await this.savemarker2();
    },
    async googlemapopen() {
      // 구글맵 화면용
      //const url = `/REST/travel/tourapi/select?page=1&cnt=100&arrange=P&contentTypeId=12&areaCode=6`;
      const url = `/REST/travel/select?size=100&page=1&title=&contentTypeId=12&areaCode=${this.areacode}`;
      let headers;
      if (sessionStorage.getItem("TOKEN") === null) {
        headers = { "Content-type": "application/json" };
      } else {
        headers = { "Content-type": "application/json", token: this.token };
      }

      const response = await axios.get(url, { headers });

      this.busanlist = response.data.list;
      this.markersTOURIST = response.data.list;
      for (var i = 0; i < this.busanlist.length; i++) {
        this.markers.push({
          id: this.busanlist[i].title,
          position: {
            lat: Number(this.busanlist[i].ylocation),
            lng: Number(this.busanlist[i].xlocation),
          },
          icon: "https://ifh.cc/g/ugSmCT.png",
        });
      }
      this.loading = false;
    },
    mapput() {
      if (this.token === null) {
        alert("로그인후 이용가능한 서비스입니다");
      }
      this.dialogVisible = true;
    },
    loadinfo2() {
      for (var vv = 0; vv < this.loadfirst.length; vv++) {
        var marknum1 = this.markers.findIndex((e) => e.id == this.loadtext[vv]);
        this.markers.splice(marknum1, 1);
        this.loadinfon = false;
      }

      this.loadtext = [];
      this.loadtexton = true;
      this.loadnumb = false;
      this.middleload = [];
      this.path1 = [];
      this.path2 = [];
      this.path3 = [];
      this.path4 = [];
      this.path5 = [];
      this.path6 = [];
      this.path7 = [];
      this.path8 = [];
      this.path9 = [];
      this.path10 = [];
    },
    async loadinfo(i, index) {
      this.loadinfon = true;
      if (this.num3 === 1) {
        if (this.choice1.length === index + 1) {
          alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
          return;
        }
      } else if (this.choice2.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      } else if (this.choice3.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      } else if (this.choice4.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      } else if (this.choice5.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      } else if (this.choice6.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      } else if (this.choice7.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      } else if (this.choice8.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      } else if (this.choice9.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      } else if (this.choice10.length === index + 1) {
        alert("다음 여행지를 추가하신후 이용가능한 서비스입니다.");
        return;
      }
      for (var vv = 0; vv < this.loadfirst.length; vv++) {
        var marknum1 = this.markers.findIndex((e) => e.id == this.loadtext[vv]);
        this.markers.splice(marknum1, 1);
      }

      this.path1 = [];
      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];
      let chonum;
      if (this.num3 === 1) {
        chonum = this.choice1.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 2) {
        chonum = this.choice2.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 3) {
        chonum = this.choice3.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 4) {
        chonum = this.choice4.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 5) {
        chonum = this.choice5.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 6) {
        chonum = this.choice6.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 7) {
        chonum = this.choice7.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 8) {
        chonum = this.choice8.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 9) {
        chonum = this.choice9.findIndex((e) => e.title == i.title);
      } else if (this.num3 === 10) {
        chonum = this.choice10.findIndex((e) => e.title == i.title);
      }
      this.loadnumb = chonum;

      this.loadtext = [];
      this.loadtexton = true;

      let url;
      if (this.num3 === 1) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice1[Number(index + 1)].xlocation
        }&endY=${
          this.choice1[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice1[Number(index)].xlocation
        }&startY=${this.choice1[Number(index)].ylocation}`;
      } else if (this.num3 === 2) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice2[Number(index + 1)].xlocation
        }&endY=${
          this.choice2[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice2[Number(index)].xlocation
        }&startY=${this.choice2[Number(index)].ylocation}`;
      } else if (this.num3 === 3) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice3[Number(index + 1)].xlocation
        }&endY=${
          this.choice3[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice3[Number(index)].xlocation
        }&startY=${this.choice3[Number(index)].ylocation}`;
      } else if (this.num3 === 4) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice4[Number(index + 1)].xlocation
        }&endY=${
          this.choice4[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice4[Number(index)].xlocation
        }&startY=${this.choice4[Number(index)].ylocation}`;
      } else if (this.num3 === 5) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice5[Number(index + 1)].xlocation
        }&endY=${
          this.choice5[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice5[Number(index)].xlocation
        }&startY=${this.choice5[Number(index)].ylocation}`;
      } else if (this.num3 === 6) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice6[Number(index + 1)].xlocation
        }&endY=${
          this.choice6[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice6[Number(index)].xlocation
        }&startY=${this.choice6[Number(index)].ylocation}`;
      } else if (this.num3 === 7) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice7[Number(index + 1)].xlocation
        }&endY=${
          this.choice7[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice7[Number(index)].xlocation
        }&startY=${this.choice7[Number(index)].ylocation}`;
      } else if (this.num3 === 8) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice8[Number(index + 1)].xlocation
        }&endY=${
          this.choice8[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice8[Number(index)].xlocation
        }&startY=${this.choice8[Number(index)].ylocation}`;
      } else if (this.num3 === 9) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice9[Number(index + 1)].xlocation
        }&endY=${
          this.choice9[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice9[Number(index)].xlocation
        }&startY=${this.choice9[Number(index)].ylocation}`;
      } else if (this.num3 === 10) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice10[Number(index + 1)].xlocation
        }&endY=${
          this.choice10[Number(index + 1)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice10[Number(index)].xlocation
        }&startY=${this.choice10[Number(index)].ylocation}`;
      }
      const headers = {};
      const response = await axios.get(url, { headers });

      for (var aa = 1; aa < response.data.features.length; aa++) {
        this.loadtext.push(response.data.features[aa].properties.description);
      }
      for (var bb = 0; bb < response.data.features.length; bb++) {
        if (
          typeof response.data.features[bb].geometry.coordinates[0] === "number"
        ) {
          this.loadfirst.push(response.data.features[bb].geometry.coordinates);
        } else {
          this.loadfirst.push(
            response.data.features[bb].geometry.coordinates[0]
          );
        }
      }

      this.loadfirst.splice(0, 1);
      this.loadfirst.splice(this.loadfirst.length - 1, 1);

      for (var cc = 0; cc < this.loadfirst.length; cc++) {
        this.markers.push({
          id: this.loadtext[cc],
          position: {
            lat: Number(this.loadfirst[cc][1]),
            lng: Number(this.loadfirst[cc][0]),
          },
          icon: "https://ifh.cc/g/u6WanN.png",
        });
      }

      for (var e = 1; e < response.data.features.length; e++) {
        if (response.data.features[e].geometry.coordinates.length === 2) {
          if (response.data.features[e].geometry.coordinates[0].length === 2) {
            console.log("asd");
          } else {
            this.middleload.push(
              response.data.features[e].geometry.coordinates
            );
          }
        } else {
          for (
            var q = 0;
            q < response.data.features[e].geometry.coordinates.length;
            q++
          ) {
            this.middleload.push(
              response.data.features[e].geometry.coordinates[q]
            );
          }
        }
      }
      for (var a = 0; a < this.middleload.length; a++) {
        if (this.num3 === 1) {
          this.path1.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 2) {
          this.path2.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 3) {
          this.path3.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 4) {
          this.path4.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 5) {
          this.path5.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 6) {
          this.path6.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 7) {
          this.path7.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 8) {
          this.path8.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 9) {
          this.path9.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 10) {
          this.path10.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        }
      }
      this.componentKey += 1;
    },
    async submit() {
      // 작업중
      const url = `/REST/travel/select?size=100&page=1&title=${this.rightsearch}&contentTypeId=${this.contenttypeid}&areaCode=${this.areacode}`;
      let headers;
      if (sessionStorage.getItem("TOKEN") === null) {
        headers = { "Content-type": "application/json" };
      } else {
        headers = { "Content-type": "application/json", token: this.token };
      }

      const response = await axios.get(url, { headers });

      this.busanlist10 = response.data.list;
      await this.selectdeletelist();
    },
    async submit2() {
      // 작업중
      const url = `/REST/travel/select?size=100&page=1&title=${this.rightsearch2}&contentTypeId=${this.contenttypeid}&areaCode=${this.areacode}`;
      let headers;
      if (sessionStorage.getItem("TOKEN") === null) {
        headers = { "Content-type": "application/json" };
      } else {
        headers = { "Content-type": "application/json", token: this.token };
      }

      const response = await axios.get(url, { headers });

      this.busanlist10 = response.data.list;
      await this.selectdeletelist();
    },
    async submit3() {
      // 작업중
      const url = `/REST/travel/select?size=100&page=1&title=${this.rightsearch3}&contentTypeId=${this.contenttypeid}&areaCode=${this.areacode}`;
      let headers;
      if (sessionStorage.getItem("TOKEN") === null) {
        headers = { "Content-type": "application/json" };
      } else {
        headers = { "Content-type": "application/json", token: this.token };
      }

      const response = await axios.get(url, { headers });

      this.busanlist10 = response.data.list;
      await this.selectdeletelist();
    },
    async listdelete(i) {
      for (var vv = 0; vv < this.loadfirst.length; vv++) {
        var marknum2 = this.markers.findIndex((e) => e.id == this.loadtext[vv]);
        this.markers.splice(marknum2, 1);
      }
      if (this.num3 === 1) {
        var checknum1 = this.markers1.findIndex((e) => e.id == i.title);
        this.markers1.splice(checknum1, 1);
      } else if (this.num3 === 2) {
        var checknum2 = this.markers2.findIndex((e) => e.id == i.title);
        this.markers2.splice(checknum2, 1);
      } else if (this.num3 === 3) {
        var checknum3 = this.markers3.findIndex((e) => e.id == i.title);
        this.markers3.splice(checknum3, 1);
      } else if (this.num3 === 4) {
        var checknum4 = this.markers2.findIndex((e) => e.id == i.title);
        this.markers4.splice(checknum4, 1);
      } else if (this.num3 === 5) {
        var checknum5 = this.markers5.findIndex((e) => e.id == i.title);
        this.markers5.splice(checknum5, 1);
      } else if (this.num3 === 6) {
        var checknum6 = this.markers6.findIndex((e) => e.id == i.title);
        this.markers6.splice(checknum6, 1);
      } else if (this.num3 === 7) {
        var checknum7 = this.markers7.findIndex((e) => e.id == i.title);
        this.markers7.splice(checknum7, 1);
      } else if (this.num3 === 8) {
        var checknum8 = this.markers8.findIndex((e) => e.id == i.title);
        this.markers8.splice(checknum8, 1);
      } else if (this.num3 === 9) {
        var checknum9 = this.markers9.findIndex((e) => e.id == i.title);
        this.markers9.splice(checknum9, 1);
      } else if (this.num3 === 10) {
        var checknum10 = this.markers10.findIndex((e) => e.id == i.title);
        this.markers10.splice(checknum10, 1);
      }
      await this.pathnone();
      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];
      this.loadtexton = false;

      var chonum = this.choice1.findIndex((e) => e.title == i.title);

      this.choice1.splice(chonum, 1);
      var marknum = this.markers.findIndex((e) => e.id == i.title);
      // right 1,2,3 별로 변경 해야함
      if (this.right === 1) {
        this.markers[marknum].icon = "https://ifh.cc/g/ugSmCT.png";
      } else if (this.right === 2) {
        this.markers[marknum].icon = "https://ifh.cc/g/Xg70rK.png";
      } else if (this.right === 3) {
        this.markers[marknum].icon = "https://ifh.cc/g/PSvrrN.png";
      }

      for (var cc = 0; cc < this.choice1.length; cc++) {
        var marknum1 = this.markers.findIndex(
          (e) => e.id == this.choice1[cc].title
        );

        this.markers[marknum1].icon = `http://127.0.0.1:8080/REST/travel/image${
          cc + 1
        }`;
      }

      //"https://ifh.cc/g/3qp9x6.png"
    },
    async listdown(i) {
      for (var vv = 0; vv < this.loadfirst.length; vv++) {
        var marknum1 = this.markers.findIndex((e) => e.id == this.loadtext[vv]);
        this.markers.splice(marknum1, 1);
      }
      await this.pathnone();
      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];
      this.loadtexton = false;

      let chonum;
      let chonum2;
      let list;
      let list2;
      if (this.num3 === 1) {
        chonum = this.choice1.findIndex((e) => e.title == i.title);
        chonum2 = this.markers1.findIndex((e) => e.id == i.title);

        list = this.choice1.splice(chonum, 1);

        this.choice1.splice(chonum + 1, 0, list[0]);

        list2 = this.markers1.splice(chonum2, 1);
        this.markers1.splice(chonum2 + 1, 0, list2[0]);

        for (var cc = 0; cc < this.choice1.length; cc++) {
          var marknum = this.markers.findIndex(
            (e) => e.id == this.choice1[cc].title
          );

          this.markers[
            marknum
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc + 1}`;
        }
      } else if (this.num3 === 2) {
        chonum = this.choice2.findIndex((e) => e.title == i.title);
        chonum2 = this.markers2.findIndex((e) => e.id == i.title);
        list = this.choice2.splice(chonum, 1);

        this.choice2.splice(chonum + 1, 0, list[0]);
        list2 = this.markers2.splice(chonum2, 1);
        this.markers2.splice(chonum2 + 1, 0, list2[0]);

        for (var cc2 = 0; cc2 < this.choice2.length; cc2++) {
          var marknum2 = this.markers.findIndex(
            (e) => e.id == this.choice2[cc2].title
          );

          this.markers[
            marknum2
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc2 + 1}`;
        }
      } else if (this.num3 === 3) {
        chonum = this.choice3.findIndex((e) => e.title == i.title);
        chonum2 = this.markers3.findIndex((e) => e.id == i.title);
        list = this.choice3.splice(chonum, 1);

        this.choice3.splice(chonum + 1, 0, list[0]);

        list2 = this.markers3.splice(chonum2, 1);
        this.markers3.splice(chonum2 + 1, 0, list2[0]);

        for (var cc3 = 0; cc3 < this.choice3.length; cc3++) {
          var marknum3 = this.markers.findIndex(
            (e) => e.id == this.choice3[cc3].title
          );

          this.markers[
            marknum3
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc3 + 1}`;
        }
      } else if (this.num3 === 4) {
        chonum = this.choice4.findIndex((e) => e.title == i.title);
        chonum2 = this.markers4.findIndex((e) => e.id == i.title);
        list = this.choice4.splice(chonum, 1);

        this.choice4.splice(chonum + 1, 0, list[0]);

        list2 = this.markers4.splice(chonum2, 1);
        this.markers4.splice(chonum2 + 1, 0, list2[0]);

        for (var cc4 = 0; cc4 < this.choice4.length; cc4++) {
          var marknum4 = this.markers.findIndex(
            (e) => e.id == this.choice4[cc4].title
          );

          this.markers[
            marknum4
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc4 + 1}`;
        }
      } else if (this.num3 === 5) {
        chonum = this.choice5.findIndex((e) => e.title == i.title);
        chonum2 = this.markers5.findIndex((e) => e.id == i.title);
        list = this.choice5.splice(chonum, 1);

        this.choice5.splice(chonum + 1, 0, list[0]);

        list2 = this.markers5.splice(chonum2, 1);
        this.markers5.splice(chonum2 - 1, 0, list2[0]);

        for (var cc5 = 0; cc5 < this.choice2.length; cc5++) {
          var marknum5 = this.markers.findIndex(
            (e) => e.id == this.choice5[cc5].title
          );

          this.markers[
            marknum5
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc5 + 1}`;
        }
      } else if (this.num3 === 6) {
        chonum = this.choice6.findIndex((e) => e.title == i.title);
        chonum2 = this.markers6.findIndex((e) => e.id == i.title);
        list = this.choice6.splice(chonum, 1);

        this.choice6.splice(chonum + 1, 0, list[0]);

        list2 = this.markers6.splice(chonum2, 1);
        this.markers6.splice(chonum2 + 1, 0, list2[0]);
        for (var cc6 = 0; cc6 < this.choice6.length; cc6++) {
          var marknum6 = this.markers.findIndex(
            (e) => e.id == this.choice2[cc6].title
          );

          this.markers[
            marknum6
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc6 + 1}`;
        }
      } else if (this.num3 === 7) {
        chonum = this.choice7.findIndex((e) => e.title == i.title);
        chonum2 = this.markers7.findIndex((e) => e.id == i.title);
        list = this.choice7.splice(chonum, 1);

        this.choice7.splice(chonum + 1, 0, list[0]);

        list2 = this.markers7.splice(chonum2, 1);
        this.markers7.splice(chonum2 + 1, 0, list2[0]);
        for (var cc7 = 0; cc7 < this.choice7.length; cc7++) {
          var marknum7 = this.markers.findIndex(
            (e) => e.id == this.choice7[cc7].title
          );

          this.markers[
            marknum7
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc7 + 1}`;
        }
      } else if (this.num3 === 8) {
        chonum = this.choice8.findIndex((e) => e.title == i.title);
        chonum2 = this.markers8.findIndex((e) => e.id == i.title);
        list = this.choice8.splice(chonum, 1);

        this.choice8.splice(chonum + 1, 0, list[0]);

        list2 = this.markers8.splice(chonum2, 1);
        this.markers8.splice(chonum2 + 1, 0, list2[0]);
        for (var cc8 = 0; cc8 < this.choice8.length; cc8++) {
          var marknum8 = this.markers.findIndex(
            (e) => e.id == this.choice8[cc8].title
          );

          this.markers[
            marknum8
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc8 + 1}`;
        }
      } else if (this.num3 === 9) {
        chonum = this.choice9.findIndex((e) => e.title == i.title);
        chonum2 = this.markers9.findIndex((e) => e.id == i.title);
        list = this.choice9.splice(chonum, 1);

        this.choice9.splice(chonum + 1, 0, list[0]);
        list2 = this.markers9.splice(chonum2, 1);
        this.markers9.splice(chonum2 + 1, 0, list2[0]);
        for (var cc9 = 0; cc9 < this.choice9.length; cc9++) {
          var marknum9 = this.markers.findIndex(
            (e) => e.id == this.choice9[cc9].title
          );

          this.markers[
            marknum9
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc9 + 1}`;
        }
      } else if (this.num3 === 10) {
        chonum = this.choice10.findIndex((e) => e.title == i.title);
        chonum2 = this.markers10.findIndex((e) => e.id == i.title);
        list = this.choice10.splice(chonum, 1);

        this.choice10.splice(chonum + 1, 0, list[0]);

        list2 = this.markers10.splice(chonum2, 1);
        this.markers10.splice(chonum2 + 1, 0, list2[0]);
        for (var cc10 = 0; cc10 < this.choice10.length; cc10++) {
          var marknum10 = this.markers.findIndex(
            (e) => e.id == this.choice10[cc10].title
          );

          this.markers[
            marknum10
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc10 + 1}`;
        }
      }
      this.componentKey += 1;
    },
    async listup(i) {
      for (var vv = 0; vv < this.loadfirst.length; vv++) {
        var marknum1 = this.markers.findIndex((e) => e.id == this.loadtext[vv]);
        console.log(marknum1);
        this.markers.splice(marknum1, 1);
      }
      console.log(this.markers);
      await this.pathnone();

      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];
      this.loadtexton = false;

      let chonum;
      let chonum2;
      let list;
      let list2;
      if (this.num3 === 1) {
        chonum = this.choice1.findIndex((e) => e.title == i.title);
        chonum2 = this.markers1.findIndex((e) => e.id == i.title);

        list = this.choice1.splice(chonum, 1);

        this.choice1.splice(chonum - 1, 0, list[0]);

        list2 = this.markers1.splice(chonum2, 1);
        this.markers1.splice(chonum2 - 1, 0, list2[0]);

        for (var cc = 0; cc < this.choice1.length; cc++) {
          var marknum = this.markers.findIndex(
            (e) => e.id == this.choice1[cc].title
          );

          this.markers[
            marknum
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc + 1}`;
        }

        console.log(this.markers);
        console.log(this.markers1);
      } else if (this.num3 === 2) {
        chonum = this.choice2.findIndex((e) => e.title == i.title);
        chonum2 = this.markers2.findIndex((e) => e.id == i.title);
        list = this.choice2.splice(chonum, 1);

        this.choice2.splice(chonum - 1, 0, list[0]);

        list2 = this.markers2.splice(chonum2, 1);
        this.markers2.splice(chonum2 - 1, 0, list2[0]);

        for (var cc2 = 0; cc2 < this.choice2.length; cc2++) {
          console.log(this.choice2[cc2].title);
          var marknum2 = this.markers.findIndex(
            (e) => e.id == this.choice2[cc2].title
          );

          this.markers[
            marknum2
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc2 + 1}`;
        }
      } else if (this.num3 === 3) {
        chonum = this.choice3.findIndex((e) => e.title == i.title);
        chonum2 = this.markers3.findIndex((e) => e.id == i.title);
        list = this.choice3.splice(chonum, 1);

        this.choice3.splice(chonum - 1, 0, list[0]);

        list2 = this.markers3.splice(chonum2, 1);
        this.markers3.splice(chonum2 - 1, 0, list2[0]);

        for (var cc3 = 0; cc3 < this.choice3.length; cc3++) {
          var marknum3 = this.markers.findIndex(
            (e) => e.id == this.choice3[cc3].title
          );

          this.markers[
            marknum3
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc3 + 1}`;
        }
      } else if (this.num3 === 4) {
        chonum = this.choice4.findIndex((e) => e.title == i.title);
        chonum2 = this.markers4.findIndex((e) => e.id == i.title);
        list = this.choice4.splice(chonum, 1);

        this.choice4.splice(chonum - 1, 0, list[0]);

        list2 = this.markers4.splice(chonum2, 1);
        this.markers4.splice(chonum2 - 1, 0, list2[0]);

        for (var cc4 = 0; cc4 < this.choice4.length; cc4++) {
          var marknum4 = this.markers.findIndex(
            (e) => e.id == this.choice4[cc4].title
          );

          this.markers[
            marknum4
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc4 + 1}`;
        }
      } else if (this.num3 === 5) {
        chonum = this.choice5.findIndex((e) => e.title == i.title);
        chonum2 = this.markers5.findIndex((e) => e.id == i.title);
        list = this.choice5.splice(chonum, 1);

        this.choice5.splice(chonum - 1, 0, list[0]);

        list2 = this.markers5.splice(chonum2, 1);
        this.markers5.splice(chonum2 - 1, 0, list2[0]);
        for (var cc5 = 0; cc5 < this.choice2.length; cc5++) {
          var marknum5 = this.markers.findIndex(
            (e) => e.id == this.choice5[cc5].title
          );

          this.markers[
            marknum5
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc5 + 1}`;
        }
      } else if (this.num3 === 6) {
        chonum = this.choice6.findIndex((e) => e.title == i.title);
        chonum2 = this.markers6.findIndex((e) => e.id == i.title);
        list = this.choice6.splice(chonum, 1);

        this.choice6.splice(chonum - 1, 0, list[0]);

        list2 = this.markers6.splice(chonum2, 1);
        this.markers6.splice(chonum2 - 1, 0, list2[0]);
        for (var cc6 = 0; cc6 < this.choice6.length; cc6++) {
          var marknum6 = this.markers.findIndex(
            (e) => e.id == this.choice2[cc6].title
          );

          this.markers[
            marknum6
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc6 + 1}`;
        }
      } else if (this.num3 === 7) {
        chonum = this.choice7.findIndex((e) => e.title == i.title);
        chonum2 = this.markers7.findIndex((e) => e.id == i.title);
        list = this.choice7.splice(chonum, 1);

        this.choice7.splice(chonum - 1, 0, list[0]);

        list2 = this.markers7.splice(chonum2, 1);
        this.markers7.splice(chonum2 - 1, 0, list2[0]);
        for (var cc7 = 0; cc7 < this.choice7.length; cc7++) {
          var marknum7 = this.markers.findIndex(
            (e) => e.id == this.choice7[cc7].title
          );

          this.markers[
            marknum7
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc7 + 1}`;
        }
      } else if (this.num3 === 8) {
        chonum = this.choice8.findIndex((e) => e.title == i.title);
        chonum2 = this.markers8.findIndex((e) => e.id == i.title);
        list = this.choice8.splice(chonum, 1);

        this.choice8.splice(chonum - 1, 0, list[0]);

        list2 = this.markers8.splice(chonum2, 1);
        this.markers8.splice(chonum2 - 1, 0, list2[0]);
        for (var cc8 = 0; cc8 < this.choice8.length; cc8++) {
          var marknum8 = this.markers.findIndex(
            (e) => e.id == this.choice8[cc8].title
          );

          this.markers[
            marknum8
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc8 + 1}`;
        }
      } else if (this.num3 === 9) {
        chonum = this.choice9.findIndex((e) => e.title == i.title);
        chonum2 = this.markers9.findIndex((e) => e.id == i.title);
        list = this.choice9.splice(chonum, 1);

        this.choice9.splice(chonum - 1, 0, list[0]);

        list2 = this.markers9.splice(chonum2, 1);
        this.markers9.splice(chonum2 - 1, 0, list2[0]);
        for (var cc9 = 0; cc9 < this.choice9.length; cc9++) {
          var marknum9 = this.markers.findIndex(
            (e) => e.id == this.choice9[cc9].title
          );

          this.markers[
            marknum9
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc9 + 1}`;
        }
      } else if (this.num3 === 10) {
        chonum = this.choice10.findIndex((e) => e.title == i.title);
        chonum2 = this.markers10.findIndex((e) => e.id == i.title);
        list = this.choice10.splice(chonum, 1);

        this.choice10.splice(chonum - 1, 0, list[0]);

        list2 = this.markers10.splice(chonum2, 1);
        this.markers10.splice(chonum2 - 1, 0, list2[0]);
        for (var cc10 = 0; cc10 < this.choice10.length; cc10++) {
          var marknum10 = this.markers.findIndex(
            (e) => e.id == this.choice10[cc10].title
          );

          this.markers[
            marknum10
          ].icon = `http://127.0.0.1:8080/REST/travel/image${cc10 + 1}`;
        }
      }
      this.componentKey += 1;
    },
    async allview() {
      this.nltext2css = "nltext3";
      this.lastleft_bthcss = "lastleft_bth";
      this.newleft0 = "on";
      this.newleft1 = "off";
      this.markers = [];
      await this.savemarker3();
    },
    async onetwomarker() {
      if (this.num3 === 1) {
        for (var nm = 0; nm < this.markers1.length; nm++) {
          this.markers1[nm].icon = `http://127.0.0.1:8080/REST/travel/image${
            nm + 1
          }`;
        }
      } else if (this.num3 === 2) {
        for (var aaa = 0; aaa < this.markers2.length; aaa++) {
          this.markers2[aaa].icon = `http://127.0.0.1:8080/REST/travel/image${
            aaa + 1
          }`;
        }
      } else if (this.num3 === 3) {
        for (var bbb = 0; bbb < this.markers3.length; bbb++) {
          this.markers3[bbb].icon = `http://127.0.0.1:8080/REST/travel/image${
            bbb + 1
          }`;
        }
      } else if (this.num3 === 4) {
        for (var ccc = 0; ccc < this.markers4.length; ccc++) {
          this.markers4[ccc].icon = `http://127.0.0.1:8080/REST/travel/image${
            ccc + 1
          }`;
        }
      } else if (this.num3 === 5) {
        for (var ddd = 0; ddd < this.markers5.length; ddd++) {
          this.markers5[ddd].icon = `http://127.0.0.1:8080/REST/travel/image${
            ddd + 1
          }`;
        }
      } else if (this.num3 === 6) {
        for (var fff = 0; fff < this.markers6.length; fff++) {
          this.markers6[fff].icon = `http://127.0.0.1:8080/REST/travel/image${
            fff + 1
          }`;
        }
      } else if (this.num3 === 7) {
        for (var ggg = 0; ggg < this.markers7.length; ggg++) {
          this.markers7[ggg].icon = `http://127.0.0.1:8080/REST/travel/image${
            ggg + 1
          }`;
        }
      } else if (this.num3 === 8) {
        for (var hhh = 0; hhh < this.markers8.length; hhh++) {
          this.markers8[hhh].icon = `http://127.0.0.1:8080/REST/travel/image${
            hhh + 1
          }`;
        }
      } else if (this.num3 === 9) {
        for (var jjj = 0; jjj < this.markers9.length; jjj++) {
          this.markers9[jjj].icon = `http://127.0.0.1:8080/REST/travel/image${
            jjj + 1
          }`;
        }
      } else if (this.num3 === 10) {
        for (var kkk = 0; kkk < this.markers10.length; kkk++) {
          this.markers10[kkk].icon = `http://127.0.0.1:8080/REST/travel/image${
            kkk + 1
          }`;
        }
      }
    },
    async handledatego(i) {
      if (i === 0) {
        console.log(this.choice1);
        const wait = (timeToDelay) =>
          new Promise((resolve) => setTimeout(resolve, timeToDelay));
        for (let date1 = 0; date1 < this.choice1.length - 1; date1++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice1[date1 + 1].xlocation
          }&endY=${
            this.choice1[date1 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice1[date1].xlocation
          }&startY=${this.choice1[date1].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice1[date1].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice1[date1].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
          await wait(300);
        }
        console.log(this.choice1);

        // 버튼 색상
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth1";
        // ==
        // marker 표시

        this.markers = [];
        for (var nm = 0; nm < this.markers1.length; nm++) {
          this.markers1[nm].icon = `http://127.0.0.1:8080/REST/travel/image${
            nm + 1
          }`;
        }
        for (var nm1 = 0; nm1 < this.markers1.length; nm1++) {
          this.markers.push(this.markers1[nm1]);
        }
      } else if (i === 1) {
        console.log(this.choice1);
        for (var date2 = 0; date2 < this.choice2.length - 1; date2++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice2[date2 + 1].xlocation
          }&endY=${
            this.choice2[date2 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice2[date2].xlocation
          }&startY=${this.choice2[date2].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice2[date2].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice2[date2].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        console.log(this.choice2);
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth2";

        this.markers = [];
        for (var aaa = 0; aaa < this.markers2.length; aaa++) {
          this.markers2[aaa].icon = `http://127.0.0.1:8080/REST/travel/image${
            aaa + 1
          }`;
        }
        for (var nw1 = 0; nw1 < this.markers2.length; nw1++) {
          this.markers.push(this.markers2[nw1]);
        }
      } else if (i === 2) {
        for (var date3 = 0; date3 < this.choice3.length - 1; date3++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice3[date3 + 1].xlocation
          }&endY=${
            this.choice3[date3 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice3[date3].xlocation
          }&startY=${this.choice3[date3].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice3[date3].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice3[date3].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth3";
        this.markers = [];
        for (var bbb = 0; bbb < this.markers3.length; bbb++) {
          this.markers3[bbb].icon = `http://127.0.0.1:8080/REST/travel/image${
            bbb + 1
          }`;
        }
        for (var bbb1 = 0; bbb1 < this.markers3.length; bbb1++) {
          this.markers.push(this.markers3[bbb1]);
        }
      } else if (i === 3) {
        for (var date4 = 0; date4 < this.choice4.length - 1; date4++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice4[date4 + 1].xlocation
          }&endY=${
            this.choice4[date4 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice4[date4].xlocation
          }&startY=${this.choice4[date4].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice4[date4].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice4[date4].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth4";
        this.markers = [];
        for (var ccc = 0; ccc < this.markers4.length; ccc++) {
          this.markers4[ccc].icon = `http://127.0.0.1:8080/REST/travel/image${
            ccc + 1
          }`;
        }
        for (var ccc1 = 0; ccc1 < this.markers4.length; ccc1++) {
          this.markers.push(this.markers4[ccc1]);
        }
      } else if (i === 4) {
        for (var date5 = 0; date5 < this.choice5.length - 1; date5++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice5[date5 + 1].xlocation
          }&endY=${
            this.choice5[date5 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice5[date5].xlocation
          }&startY=${this.choice5[date5].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice5[date5].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice5[date5].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth5";
        for (var ddd = 0; ddd < this.markers5.length; ddd++) {
          this.markers5[ddd].icon = `http://127.0.0.1:8080/REST/travel/image${
            ddd + 1
          }`;
        }
        for (var ddd1 = 0; ddd1 < this.markers5.length; ddd1++) {
          this.markers.push(this.markers5[ddd1]);
        }
      } else if (i === 5) {
        for (var date6 = 0; date6 < this.choice6.length - 1; date6++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice6[date6 + 1].xlocation
          }&endY=${
            this.choice6[date6 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice6[date6].xlocation
          }&startY=${this.choice6[date6].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice6[date6].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice6[date6].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth6";
        for (var fff = 0; fff < this.markers6.length; fff++) {
          this.markers6[fff].icon = `http://127.0.0.1:8080/REST/travel/image${
            fff + 1
          }`;
        }
        for (var fff1 = 0; fff1 < this.markers6.length; fff1++) {
          this.markers.push(this.markers6[fff1]);
        }
      } else if (i === 6) {
        for (var date7 = 0; date7 < this.choice7.length - 1; date7++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice7[date7 + 1].xlocation
          }&endY=${
            this.choice7[date7 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice7[date7].xlocation
          }&startY=${this.choice7[date7].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice7[date7].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice7[date7].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth7";
        for (var ggg = 0; ggg < this.markers7.length; ggg++) {
          this.markers7[ggg].icon = `http://127.0.0.1:8080/REST/travel/image${
            ggg + 1
          }`;
        }
        for (var ggg1 = 0; ggg1 < this.markers7.length; ggg1++) {
          this.markers.push(this.markers7[ggg1]);
        }
      } else if (i === 7) {
        for (var date8 = 0; date8 < this.choice8.length - 1; date8++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice8[date8 + 1].xlocation
          }&endY=${
            this.choice8[date8 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice8[date8].xlocation
          }&startY=${this.choice8[date8].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice8[date8].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice8[date8].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth8";
        for (var hhh = 0; hhh < this.markers8.length; hhh++) {
          this.markers8[hhh].icon = `http://127.0.0.1:8080/REST/travel/image${
            hhh + 1
          }`;
        }
        for (var hhh1 = 0; hhh1 < this.markers8.length; hhh1++) {
          this.markers.push(this.markers8[hhh1]);
        }
      } else if (i === 8) {
        for (var date9 = 0; date9 < this.choice9.length - 1; date9++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice9[date9 + 1].xlocation
          }&endY=${
            this.choice9[date9 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice9[date9].xlocation
          }&startY=${this.choice9[date9].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice9[date9].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice9[date9].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth9";
        for (var jjj = 0; jjj < this.markers9.length; jjj++) {
          this.markers9[jjj].icon = `http://127.0.0.1:8080/REST/travel/image${
            jjj + 1
          }`;
        }
        for (var jjj1 = 0; jjj1 < this.markers9.length; jjj1++) {
          this.markers.push(this.markers9[jjj1]);
        }
      } else if (i === 9) {
        for (var date10 = 0; date10 < this.choice10.length - 1; date10++) {
          const url = `https://apis.openapi.sk.com/tmap/routes?version=1&speed=10&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
            this.choice10[date10 + 1].xlocation
          }&endY=${
            this.choice10[date10 + 1].ylocation
          }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
            this.choice10[date10].xlocation
          }&startY=${this.choice10[date10].ylocation}`;
          const headers = { "Content-type": "application/json" };

          const response = await axios.get(url, { headers });
          console.log(response.data.features[0].properties.totalDistance);
          console.log(response.data.features[0].properties.totalTime);

          this.choice10[date10].totalDistance =
            response.data.features[0].properties.totalDistance + "m";
          this.choice10[date10].totalTime =
            parseInt(response.data.features[0].properties.totalTime / 60) +
            "분";
        }
        this.nltext2css = "nltext2";
        this.lastleft_bthcss = "lastleft_bth10";
        for (var kkk = 0; kkk < this.markers10.length; kkk++) {
          this.markers10[kkk].icon = `http://127.0.0.1:8080/REST/travel/image${
            kkk + 1
          }`;
        }
        for (var kkk1 = 0; kkk1 < this.markers10.length; kkk1++) {
          this.markers.push(this.markers10[kkk1]);
        }
      }

      this.newleft1 = i;
      this.newleft0 = "off";
    },
    async lastaction() {
      if (this.token === null) {
        alert("로그인후 이용가능한 서비스입니다");
        return;
      }
      if (this.num3 === 1) {
        if (this.choice1.length === 0) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 2) {
        if (this.choice1.length === 0 || this.choice2.length === 0) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 3) {
        if (
          this.choice1.length === 0 ||
          this.choice2.length === 0 ||
          this.choice3.length === 0
        ) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 4) {
        if (
          this.choice1.length === 0 ||
          this.choice2.length === 0 ||
          this.choice3.length === 0 ||
          this.choice4.length === 0
        ) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 5) {
        if (
          this.choice1.length === 0 ||
          this.choice2.length === 0 ||
          this.choice3.length === 0 ||
          this.choice4.length === 0 ||
          this.choice5.length === 0
        ) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 6) {
        if (
          this.choice1.length === 0 ||
          this.choice2.length === 0 ||
          this.choice3.length === 0 ||
          this.choice4.length === 0 ||
          this.choice5.length === 0 ||
          this.choice6.length === 0
        ) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 7) {
        if (
          this.choice1.length === 0 ||
          this.choice2.length === 0 ||
          this.choice3.length === 0 ||
          this.choice4.length === 0 ||
          this.choice5.length === 0 ||
          this.choice6.length === 0 ||
          this.choice7.length === 0
        ) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 8) {
        if (
          this.choice1.length === 0 ||
          this.choice2.length === 0 ||
          this.choice3.length === 0 ||
          this.choice4.length === 0 ||
          this.choice5.length === 0 ||
          this.choice6.length === 0 ||
          this.choice7.length === 0 ||
          this.choice8.length === 0
        ) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 9) {
        if (
          this.choice1.length === 0 ||
          this.choice2.length === 0 ||
          this.choice3.length === 0 ||
          this.choice4.length === 0 ||
          this.choice5.length === 0 ||
          this.choice6.length === 0 ||
          this.choice7.length === 0 ||
          this.choice8.length === 0 ||
          this.choice9.length === 0
        ) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      if (this.num3 === 10) {
        if (
          this.choice1.length === 0 ||
          this.choice2.length === 0 ||
          this.choice3.length === 0 ||
          this.choice4.length === 0 ||
          this.choice5.length === 0 ||
          this.choice6.length === 0 ||
          this.choice7.length === 0 ||
          this.choice8.length === 0 ||
          this.choice9.length === 0 ||
          this.choice10.length === 0
        ) {
          alert("여행일정에 최소 1개 이상의 여행지를 추가해주세요");
          return;
        }
      }
      this.nltext2css = "nltext3";
      this.markers = [];
      await this.savemarker3();

      await this.betweendate();
      this.lastac = true;
      this.rightcss = "right3";
      this.centercss = "center3";
      this.newleft = "on";
      this.newleft0 = "on";
    },
    // 여행일차 변경시 선택된 마커 변경
    numchagnelist() {
      if (this.num3 === 1) {
        for (var ii = 0; ii < this.markers1.length; ii++) {
          var marknum5 = this.markers.findIndex(
            (e) => e.id == this.markers1[ii].id
          );
          this.markers[marknum5].icon = this.markers1[ii].icon;
        }
      } else if (this.num3 === 2) {
        for (var ii2 = 0; ii2 < this.markers2.length; ii2++) {
          var marknum6 = this.markers.findIndex(
            (e) => e.id == this.markers2[ii2].id
          );
          this.markers[marknum6].icon = this.markers2[ii2].icon;
        }
      } else if (this.num3 === 3) {
        for (var ii3 = 0; ii3 < this.markers3.length; ii3++) {
          var marknum7 = this.markers.findIndex(
            (e) => e.id == this.markers3[ii3].id
          );
          this.markers[marknum7].icon = this.markers3[ii3].icon;
        }
      } else if (this.num3 === 4) {
        for (var ii4 = 0; ii4 < this.markers4.length; ii4++) {
          var marknum8 = this.markers.findIndex(
            (e) => e.id == this.markers4[ii4].id
          );
          this.markers[marknum8].icon = this.markers4[ii4].icon;
        }
      } else if (this.num3 === 5) {
        for (var ii5 = 0; ii5 < this.markers5.length; ii5++) {
          var marknum9 = this.markers.findIndex(
            (e) => e.id == this.markers5[ii5].id
          );
          this.markers[marknum9].icon = this.markers5[ii5].icon;
        }
      } else if (this.num3 === 6) {
        for (var ii6 = 0; ii6 < this.markers6.length; ii6++) {
          var marknum10 = this.markers.findIndex(
            (e) => e.id == this.markers6[ii6].id
          );
          this.markers[marknum10].icon = this.markers6[ii6].icon;
        }
      } else if (this.num3 === 7) {
        for (var ii7 = 0; ii7 < this.markers7.length; ii7++) {
          var marknum11 = this.markers.findIndex(
            (e) => e.id == this.markers7[ii7].id
          );
          this.markers[marknum11].icon = this.markers7[ii7].icon;
        }
      } else if (this.num3 === 6) {
        for (var ii8 = 0; ii8 < this.markers8.length; ii8++) {
          var marknum12 = this.markers.findIndex(
            (e) => e.id == this.markers6[ii8].id
          );
          this.markers[marknum12].icon = this.markers8[ii8].icon;
        }
      } else if (this.num3 === 6) {
        for (var ii9 = 0; ii9 < this.markers9.length; ii9++) {
          var marknum13 = this.markers.findIndex(
            (e) => e.id == this.markers9[ii9].id
          );
          this.markers[marknum13].icon = this.markers9[ii9].icon;
        }
      } else if (this.num3 === 10) {
        for (var ii10 = 0; ii10 < this.markers10.length; ii10++) {
          var marknum14 = this.markers.findIndex(
            (e) => e.id == this.markers10[ii10].id
          );
          this.markers[marknum14].icon = this.markers10[ii10].icon;
        }
      }
    },
    async numnegative() {
      for (var vv = 0; vv < this.loadfirst.length; vv++) {
        var marknum1 = this.markers.findIndex((e) => e.id == this.loadtext[vv]);
        this.markers.splice(marknum1, 1);
      }

      this.num3 -= 1;
      this.loadtexton = false;
      await this.pathnone();
      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];
      this.loadtexton = false;
      for (var vv1 = 0; vv1 < this.markers.length; vv1++) {
        if (this.right === 1) {
          this.markers[vv1].icon = "https://ifh.cc/g/ugSmCT.png";
        } else if (this.right === 2) {
          this.markers[vv1].icon = "https://ifh.cc/g/Xg70rK.png";
        } else if (this.right === 3) {
          this.markers[vv1].icon = "https://ifh.cc/g/PSvrrN.png";
        }
      }
      await this.onetwomarker();
      await this.numchagnelist();
    },
    async numplus() {
      for (var vv1 = 0; vv1 < this.loadfirst.length; vv1++) {
        var marknum1 = this.markers.findIndex(
          (e) => e.id == this.loadtext[vv1]
        );
        this.markers.splice(marknum1, 1);
      }
      this.num3 += 1;
      this.loadtexton = false;
      await this.pathnone();
      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];

      for (var vv = 0; vv < this.markers.length; vv++) {
        if (this.right === 1) {
          this.markers[vv].icon = "https://ifh.cc/g/ugSmCT.png";
        } else if (this.right === 2) {
          this.markers[vv].icon = "https://ifh.cc/g/Xg70rK.png";
        } else if (this.right === 3) {
          this.markers[vv].icon = "https://ifh.cc/g/PSvrrN.png";
        }
      }
      await this.onetwomarker();
      await this.numchagnelist();
    },
    async rightrefresh() {
      console.log(sessionStorage.getItem("TOKEN"));
      // 오른쪽 상세창
      const url1 = `/REST/travel/select?size=200&page=1&title=&contentTypeId=${this.contenttypeid}&areaCode=${this.areacode}`;
      let headers;
      if (sessionStorage.getItem("TOKEN") === null) {
        headers = { "Content-type": "application/json" };
      } else {
        headers = { "Content-type": "application/json", token: this.token };
      }
      console.log(headers);
      const response1 = await axios.get(url1, { headers });
      console.log(response1.data.list);
      this.busanlist10 = response1.data.list;
      console.log(this.busanlist10);
      await this.selectdeletelist();
    },
    handlefull() {
      this.rightcss = "right2";
      this.centercss = "center2";
      this.rightc = "on";
      this.listmapcss = "listmap1";
    },
    handlefull2() {
      this.rightcss = "right1";
      this.centercss = "center1";
      this.rightc = "off";
      this.listmapcss = "listmap";
    },

    async locationchange() {
      await this.replacerefresh();
    },
    replacerefresh() {
      if (this.$route.query.locationkor === "서울") {
        this.center.lat = 37.549824070293155;
        this.center.lng = 126.9852119711522;
        this.zoom = 14;
        this.key += 1;
        this.areacode = 1;
      }
      if (this.$route.query.locationkor === "부산") {
        this.center.lat = 35.1563960364172;
        this.center.lng = 129.05290996776543;
        this.zoom = 13;
        this.areacode = 6;
      }
      if (this.$route.query.locationkor === "대구") {
        this.center.lat = 35.828005238339074;
        this.center.lng = 128.56567195613573;
        this.zoom = 12;
        this.areacode = 4;
      }
      if (this.$route.query.locationkor === "인천") {
        this.center.lat = 37.460431911450016;
        this.center.lng = 126.63023780388498;
        this.zoom = 12;
        this.areacode = 2;
      }
      if (this.$route.query.locationkor === "광주") {
        this.center.lat = 35.15523093137521;
        this.center.lng = 126.83460715205861;
        this.zoom = 14;
        this.areacode = 5;
      }
      if (this.$route.query.locationkor === "대전") {
        this.center.lat = 36.33921817956586;
        this.center.lng = 127.39410278706835;
        this.zoom = 13;
        this.areacode = 3;
      }
      if (this.$route.query.locationkor === "울산") {
        this.center.lat = 35.5457310316843;
        this.center.lng = 129.2560979752397;
        this.zoom = 14;
        this.areacode = 7;
      }
      if (this.$route.query.locationkor === "제주도") {
        this.center.lat = 33.37627377623203;
        this.center.lng = 126.56056736909964;
        this.zoom = 11.1;
        this.areacode = 39;
      }
    },
    async delalllist() {},
    async listpush(i) {
      console.log(i);
      if (this.choice1.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice2.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice3.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice4.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice5.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice6.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice7.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice8.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice9.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      } else if (this.choice10.length > 11) {
        alert("일일 여행지 선택은 12개를 초과할수 없습니다");
        return;
      }
      console.log(this.choice1);
      // ==========================================================
      if (this.dtm === false) {
        await this.showmarker();
      }
      if (this.num3 === 1) {
        this.markers1.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice1.length + 1
          }`,
        });
      } else if (this.num3 === 2) {
        this.markers2.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice2.length + 1
          }`,
        });
      } else if (this.num3 === 3) {
        this.markers3.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice3.length + 1
          }`,
        });
      } else if (this.num3 === 4) {
        this.markers4.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice4.length + 1
          }`,
        });
      } else if (this.num3 === 5) {
        this.markers5.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice5.length + 1
          }`,
        });
      } else if (this.num3 === 6) {
        this.markers6.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice6.length + 1
          }`,
        });
      } else if (this.num3 === 7) {
        this.markers7.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice7.length + 1
          }`,
        });
      } else if (this.num3 === 8) {
        this.markers8.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice8.length + 1
          }`,
        });
      } else if (this.num3 === 9) {
        this.markers9.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice9.length + 1
          }`,
        });
      } else if (this.num3 === 10) {
        this.markers10.push({
          id: i.title,
          position: {
            lat: Number(i.ylocation), //위도   36
            lng: Number(i.xlocation), // 경도   129
          },
          icon: `http://127.0.0.1:8080/REST/travel/image${
            this.choice10.length + 1
          }`,
        });
      }

      // ==========================================================

      var marknum = this.markers.findIndex((e) => e.id == i.title);
      if (this.num3 === 1) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice1.length + 1
        }`;
      } else if (this.num3 === 2) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice2.length + 1
        }`;
      } else if (this.num3 === 3) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice3.length + 1
        }`;
      } else if (this.num3 === 4) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice4.length + 1
        }`;
      } else if (this.num3 === 5) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice5.length + 1
        }`;
      } else if (this.num10 === 6) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice6.length + 1
        }`;
      } else if (this.num3 === 7) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice7.length + 1
        }`;
      } else if (this.num3 === 8) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice8.length + 1
        }`;
      } else if (this.num3 === 9) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice9.length + 1
        }`;
      } else if (this.num3 === 10) {
        this.markers[marknum].icon = `http://127.0.0.1:8080/REST/travel/image${
          this.choice10.length + 1
        }`;
      }
      //https://ifh.cc/g/q7v7ZO.png

      this.busanlist10 = [];

      if (this.num3 === 1) {
        this.choice1.push(i);
      } else if (this.num3 === 2) {
        this.choice2.push(i);
      } else if (this.num3 === 3) {
        this.choice3.push(i);
      } else if (this.num3 === 4) {
        this.choice4.push(i);
      } else if (this.num3 === 5) {
        this.choice5.push(i);
      } else if (this.num3 === 6) {
        this.choice6.push(i);
      } else if (this.num3 === 7) {
        this.choice7.push(i);
      } else if (this.num3 === 8) {
        this.choice8.push(i);
      } else if (this.num3 === 9) {
        this.choice9.push(i);
      } else if (this.num3 === 10) {
        this.choice10.push(i);
      }

      // =====================================
      //한개 선택후 오른쪽 list 변경

      //const url1 = `/REST/travel/distance?areaCode=6&Cnt=100&contentTypeId=12&kilometer=5&pageNo=1&xmap=${i.mapx}&ymap=${i.mapy}`;
      const url1 = `/REST/travel/distance?areaCode=${this.areacode}&size=100&contentTypeId=${this.contenttypeid}&kilometer=5&page=1&xmap=${i.xlocation}&ymap=${i.ylocation}`;
      const headers1 = {};
      const response1 = await axios.get(url1, { headers1 });

      this.busanlist10 = response1.data.distanceList;
      await this.selectdeletelist();
      // =====================================

      // 자동차 경로 REST api
      //await this.loadcar();
    },

    async loadcar() {
      this.path1 = [];

      let url;
      if (this.num3 === 1) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice1[Number(this.endnum)].xlocation
        }&endY=${
          this.choice1[Number(this.endnum)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice1[Number(this.startnum)].xlocation
        }&startY=${this.choice1[Number(this.startnum)].ylocation}`;
      } else if (this.num3 === 2) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice2[Number(this.endnum2)].xlocation
        }&endY=${
          this.choice2[Number(this.endnum2)].ylocaion
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice2[Number(this.startnum2)].xlocation
        }&startY=${this.choice2[Number(this.startnum2)].ylocaion}`;
      } else if (this.num3 === 3) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice3[Number(this.endnum3)].xlocation
        }&endY=${
          this.choice3[Number(this.endnum3)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice3[Number(this.startnum3)].xlocation
        }&startY=${this.choice3[Number(this.startnum3)].ylocaion}`;
      } else if (this.num3 === 4) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice4[Number(this.endnum4)].xlocation
        }&endY=${
          this.choice4[Number(this.endnum4)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice4[Number(this.startnum4)].xlocation
        }&startY=${this.choice4[Number(this.startnum4)].ylocation}`;
      } else if (this.num3 === 5) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice5[Number(this.endnum5)].xlocation
        }&endY=${
          this.choice5[Number(this.endnum5)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice5[Number(this.startnum5)].xlocation
        }&startY=${this.choice5[Number(this.startnum5)].ylocation}`;
      } else if (this.num3 === 6) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice6[Number(this.endnum6)].xlocation
        }&endY=${
          this.choice6[Number(this.endnum6)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice6[Number(this.startnum6)].xlocation
        }&startY=${this.choice6[Number(this.startnum6)].ylocation}`;
      } else if (this.num3 === 7) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice7[Number(this.endnum7)].xlocation
        }&endY=${
          this.choice7[Number(this.endnum7)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice7[Number(this.startnum7)].xlocation
        }&startY=${this.choice7[Number(this.startnum7)].ylocation}`;
      } else if (this.num3 === 8) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice8[Number(this.endnum8)].xlocation
        }&endY=${
          this.choice8[Number(this.endnum8)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice8[Number(this.startnum8)].xlocation
        }&startY=${this.choice8[Number(this.startnum8)].ylocation}`;
      } else if (this.num3 === 9) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice9[Number(this.endnum9)].xlocation
        }&endY=${
          this.choice9[Number(this.endnum9)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice9[Number(this.startnum9)].xlocation
        }&startY=${this.choice9[Number(this.startnum9)].ylocation}`;
      } else if (this.num3 === 10) {
        url = `https://apis.openapi.sk.com/tmap/routes?version=1&callback=function&appKey=l7xx39d08d83d78244e9b28ddca092eaaa55&roadType=32&directionOption=0&endX=${
          this.choice10[Number(this.endnum10)].xlocation
        }&endY=${
          this.choice10[Number(this.endnum10)].ylocation
        }&reqCoordType=WGS84GEO&endRpFlag=G&startX=${
          this.choice10[Number(this.startnum10)].xlocation
        }&startY=${this.choice10[Number(this.startnum10)].ylocation}`;
      }
      const headers = {};
      const response = await axios.get(url, { headers });

      for (var e = 1; e < response.data.features.length; e++) {
        if (response.data.features[e].geometry.coordinates.length === 2) {
          if (response.data.features[e].geometry.coordinates[0].length === 2) {
            console.log("asd");
          } else {
            this.middleload.push(
              response.data.features[e].geometry.coordinates
            );
          }
        } else {
          for (
            var q = 0;
            q < response.data.features[e].geometry.coordinates.length;
            q++
          ) {
            this.middleload.push(
              response.data.features[e].geometry.coordinates[q]
            );
          }
        }
      }

      for (var a = 0; a < this.middleload.length; a++) {
        if (this.num3 === 1) {
          this.path1.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 2) {
          this.path2.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 3) {
          this.path3.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 4) {
          this.path4.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 5) {
          this.path5.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 6) {
          this.path6.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 7) {
          this.path7.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 8) {
          this.path8.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 9) {
          this.path9.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        } else if (this.num3 === 10) {
          this.path10.push({
            lat: Number(this.middleload[a][1]),
            lng: Number(this.middleload[a][0]),
          });
        }
      }
      if (this.num3 === 1) {
        this.startnum += 1;
        this.endnum += 1;
        this.middleload = [];
      } else if (this.num3 === 2) {
        this.startnum2 += 1;
        this.endnum2 += 1;
        this.middleload = [];
      } else if (this.num3 === 3) {
        this.startnum3 += 1;
        this.endnum3 += 1;
        this.middleload = [];
      } else if (this.num3 === 4) {
        this.startnum4 += 1;
        this.endnum4 += 1;
        this.middleload = [];
      } else if (this.num3 === 5) {
        this.startnum5 += 1;
        this.endnum5 += 1;
        this.middleload = [];
      } else if (this.num3 === 6) {
        this.startnum6 += 1;
        this.endnum6 += 1;
        this.middleload = [];
      } else if (this.num3 === 7) {
        this.startnum7 += 1;
        this.endnum7 += 1;
        this.middleload = [];
      } else if (this.num3 === 8) {
        this.startnum8 += 1;
        this.endnum8 += 1;
        this.middleload = [];
      } else if (this.num3 === 9) {
        this.startnum9 += 1;
        this.endnum9 += 1;
        this.middleload = [];
      } else if (this.num3 === 10) {
        this.startnum10 += 1;
        this.endnum10 += 1;
        this.middleload = [];
      }

      // 강제  렌더링

      this.componentKey += 1;
    },
    async openinfo(i) {
      const url = `/REST/travel/selectone?contentId=${i.code}`;
      const headers = { "Content-type": "application/json" };

      const response = await axios.get(url, { headers });
      this.dialoglist = response.data.TD;

      const url1 = `/REST/travel/good/state?contentid=${i.code}`;
      const headers1 = {
        "Content-type": "application/json",
        token: this.token,
      };
      const data = {};

      const response1 = await axios.post(url1, data, { headers: headers1 });
      console.log(response1);
      this.heart = response1.data.goodresult;

      this.dialogVisible1 = true;
    },
    async outMarker1() {
      this.openedMarkerID = null;
    },
    async openMarker1(i) {
      this.openedMarkerID = null;

      this.openedMarkerID = i.title;
      this.center = { lat: Number(i.ylocation), lng: Number(i.xlocation) };
      this.zoom = 18;
    },
    openMarker(id) {
      this.openedMarkerID = id;
    },

    async handleright() {
      this.loadtexton = false;
      await this.pathnone();
      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];
      this.contenttypeid = "12";
      this.right = 1;
      this.btncolor3 = "noneactive";
      this.btncolor2 = "noneactive";
      this.btncolor = "active";
      this.busanlist10 = [];
      await this.onetwomarker();
      await this.right1();
    },
    async right1() {
      const url1 = `/REST/travel/select?size=100&page=1&title=&contentTypeId=12&areaCode=${this.areacode}`;
      let headers;
      if (sessionStorage.getItem("TOKEN") === null) {
        headers = { "Content-type": "application/json" };
      } else {
        headers = { "Content-type": "application/json", token: this.token };
      }

      const response1 = await axios.get(url1, { headers });

      this.busanlist10 = response1.data.list;
      // 선택된리스트 제거
      await this.selectdeletelist();
      //====================
      this.markers = [];

      for (var i = 0; i < this.busanlist10.length; i++) {
        this.markers.push({
          id: this.busanlist10[i].title,
          position: {
            lat: Number(this.busanlist10[i].ylocation),
            lng: Number(this.busanlist10[i].xlocation),
          },
          icon: "https://ifh.cc/g/ugSmCT.png",
        });
      }
      await this.savemarker2();
    },
    async right2() {
      console.log(this.choice1);
      console.log(this.markers1);
      const url1 = `/REST/travel/select?size=100&page=1&title=&contentTypeId=32&areaCode=${this.areacode}`;
      let headers;
      if (sessionStorage.getItem("TOKEN") === null) {
        headers = { "Content-type": "application/json" };
      } else {
        headers = { "Content-type": "application/json", token: this.token };
      }

      const response1 = await axios.get(url1, { headers });

      this.busanlist10 = response1.data.list;
      await this.selectdeletelist();
      this.busanlist = response1.data.list;
      // const url2 = `/REST/travel/select?size=100&page=1&title=&contentTypeId=32&areaCode=${this.areacode}`;
      // const headers = { "Content-type": "application/json" };

      // const response = await axios.get(url2, { headers });
      // console.log(response);

      // this.busanlist = response.data.list;

      this.markers = [];

      for (var i = 0; i < this.busanlist10.length; i++) {
        this.markers.push({
          id: this.busanlist10[i].title,
          position: {
            lat: Number(this.busanlist10[i].ylocation),
            lng: Number(this.busanlist10[i].xlocation),
          },
          icon: "https://ifh.cc/g/Xg70rK.png",
        });
      }
      await this.savemarker2();
    },
    async right3() {
      const url1 = `/REST/travel/select?size=100&page=1&title=&contentTypeId=39&areaCode=${this.areacode}`;
      let headers;
      if (sessionStorage.getItem("TOKEN") === null) {
        headers = { "Content-type": "application/json" };
      } else {
        headers = { "Content-type": "application/json", token: this.token };
      }

      const response1 = await axios.get(url1, { headers });

      this.busanlist10 = response1.data.list;
      await this.selectdeletelist();
      this.markers = [];

      for (var i = 0; i < this.busanlist10.length; i++) {
        this.markers.push({
          id: this.busanlist10[i].title,
          position: {
            lat: Number(this.busanlist10[i].ylocation),
            lng: Number(this.busanlist10[i].xlocation),
          },
          icon: "https://ifh.cc/g/PSvrrN.png",
        });
      }
      await this.savemarker2();
    },
    savemarker2() {
      if (this.num3 === 1) {
        // 기존 마커 제거
        for (var vv1 = 0; vv1 < this.markers1.length; vv1++) {
          var marknum1 = this.markers.findIndex(
            (e) => e.id == this.markers1[vv1].id
          );

          this.markers.splice(marknum1, 1);
        }

        // 새 마커 추가
        for (var num1 = 0; num1 < this.markers1.length; num1++) {
          this.markers.push(this.markers1[num1]);
        }
      } else if (this.num3 === 2) {
        for (var vv2 = 0; vv2 < this.markers2.length; vv2++) {
          var marknum2 = this.markers.findIndex(
            (e) => e.id == this.markers2[vv2].id
          );
          this.markers.splice(marknum2, 1);
        }
        for (var num2 = 0; num2 < this.markers2.length; num2++) {
          this.markers.push(this.markers2[num2]);
        }
      } else if (this.num3 === 3) {
        for (var vv3 = 0; vv3 < this.markers2.length; vv3++) {
          var marknum3 = this.markers.findIndex(
            (e) => e.id == this.markers3[vv3].id
          );

          this.markers.splice(marknum3, 1);
        }
        for (var num3 = 0; num3 < this.markers3.length; num3++) {
          this.markers.push(this.markers3[num3]);
        }
      } else if (this.num3 === 4) {
        for (var vv4 = 0; vv4 < this.markers4.length; vv4++) {
          var marknum4 = this.markers.findIndex(
            (e) => e.id == this.markers4[vv4].id
          );

          this.markers.splice(marknum4, 1);
        }
        for (var num4 = 0; num4 < this.markers4.length; num4++) {
          this.markers.push(this.markers4[num4]);
        }
      } else if (this.num3 === 5) {
        for (var vv5 = 0; vv5 < this.markers5.length; vv5++) {
          var marknum5 = this.markers.findIndex(
            (e) => e.id == this.markers5[vv5].id
          );

          this.markers.splice(marknum5, 1);
        }
        for (var num5 = 0; num5 < this.markers5.length; num5++) {
          this.markers.push(this.markers5[num5]);
        }
      } else if (this.num3 === 6) {
        for (var vv6 = 0; vv6 < this.markers6.length; vv6++) {
          var marknum6 = this.markers.findIndex(
            (e) => e.id == this.markers6[vv6].id
          );

          this.markers.splice(marknum6, 1);
        }
        for (var num6 = 0; num4 < this.markers6.length; num6++) {
          this.markers.push(this.markers6[num6]);
        }
      } else if (this.num3 === 7) {
        for (var vv7 = 0; vv7 < this.markers7.length; vv7++) {
          var marknum7 = this.markers.findIndex(
            (e) => e.id == this.markers7[vv7].id
          );

          this.markers.splice(marknum7, 1);
        }
        for (var num7 = 0; num7 < this.markers7.length; num7++) {
          this.markers.push(this.markers7[num7]);
        }
      } else if (this.num3 === 8) {
        for (var vv8 = 0; vv8 < this.markers8.length; vv8++) {
          var marknum8 = this.markers.findIndex(
            (e) => e.id == this.markers8[vv8].id
          );

          this.markers.splice(marknum8, 1);
        }
        for (var num8 = 0; num8 < this.markers8.length; num8++) {
          this.markers.push(this.markers8[num8]);
        }
      } else if (this.num3 === 9) {
        for (var vv9 = 0; vv9 < this.markers9.length; vv9++) {
          var marknum9 = this.markers.findIndex(
            (e) => e.id == this.markers9[vv9].id
          );

          this.markers.splice(marknum9, 1);
        }
        for (var num9 = 0; num9 < this.markers9.length; num9++) {
          this.markers.push(this.markers9[num9]);
        }
      } else if (this.num3 === 10) {
        for (var vv10 = 0; vv10 < this.markers10.length; vv10++) {
          var marknum10 = this.markers.findIndex(
            (e) => e.id == this.markers10[vv10].id
          );

          this.markers.splice(marknum10, 1);
        }
        for (var num10 = 0; num10 < this.markers10.length; num10++) {
          this.markers.push(this.markers10[num10]);
        }
      }
    },
    savemarker3() {
      // 새 마커 추가
      for (var num1 = 0; num1 < this.markers1.length; num1++) {
        this.markers1[num1].icon = `http://127.0.0.1:8080/REST/travel/image1`;
        this.markers.push(this.markers1[num1]);
      }
      for (var num2 = 0; num2 < this.markers2.length; num2++) {
        this.markers2[num2].icon = `http://127.0.0.1:8080/REST/travel/image2`;
        this.markers.push(this.markers2[num2]);
      }

      for (var num3 = 0; num3 < this.markers3.length; num3++) {
        this.markers3[num3].icon = `http://127.0.0.1:8080/REST/travel/image3`;
        this.markers.push(this.markers3[num3]);
      }

      for (var num4 = 0; num4 < this.markers4.length; num4++) {
        this.markers4[num4].icon = `http://127.0.0.1:8080/REST/travel/image4`;
        this.markers.push(this.markers4[num4]);
      }

      for (var num5 = 0; num5 < this.markers5.length; num5++) {
        this.markers5[num5].icon = `http://127.0.0.1:8080/REST/travel/image5`;
        this.markers.push(this.markers5[num5]);
      }

      for (var num6 = 0; num6 < this.markers6.length; num6++) {
        this.markers6[num6].icon = `http://127.0.0.1:8080/REST/travel/image6`;
        this.markers.push(this.markers6[num6]);
      }

      for (var num7 = 0; num7 < this.markers7.length; num7++) {
        this.markers7[num7].icon = `http://127.0.0.1:8080/REST/travel/image7`;
        this.markers.push(this.markers7[num7]);
      }

      for (var num8 = 0; num8 < this.markers8.length; num8++) {
        this.markers8[num8].icon = `http://127.0.0.1:8080/REST/travel/image8`;
        this.markers.push(this.markers8[num8]);
      }

      for (var num9 = 0; num9 < this.markers9.length; num9++) {
        this.markers9[num9].icon = `http://127.0.0.1:8080/REST/travel/image9`;
        this.markers.push(this.markers9[num9]);
      }

      for (var num10 = 0; num10 < this.markers10.length; num10++) {
        this.markers10[
          num10
        ].icon = `http://127.0.0.1:8080/REST/travel/image10`;
        this.markers.push(this.markers10[num10]);
      }
    },
    async selectdeletelist() {
      // 선택된리스트 제거
      for (var vv1 = 0; vv1 < this.choice1.length; vv1++) {
        var marknum1 = this.busanlist10.findIndex(
          (e) => e.title == this.choice1[vv1].title
        );

        this.busanlist10.splice(marknum1, 1);
      }
      for (var vv2 = 0; vv2 < this.choice2.length; vv2++) {
        var marknum2 = this.busanlist10.findIndex(
          (e) => e.title == this.choice2[vv2].title
        );

        this.busanlist10.splice(marknum2, 1);
      }
      for (var vv3 = 0; vv2 < this.choice3.length; vv3++) {
        var marknum3 = this.busanlist10.findIndex(
          (e) => e.title == this.choice3[vv3].title
        );

        this.busanlist10.splice(marknum3, 1);
      }
      for (var vv4 = 0; vv4 < this.choice4.length; vv4++) {
        var marknum4 = this.busanlist10.findIndex(
          (e) => e.title == this.choice4[vv4].title
        );

        this.busanlist10.splice(marknum4, 1);
      }
      for (var vv5 = 0; vv5 < this.choice5.length; vv5++) {
        var marknum5 = this.busanlist10.findIndex(
          (e) => e.title == this.choice5[vv5].title
        );

        this.busanlist10.splice(marknum5, 1);
      }
      for (var vv6 = 0; vv6 < this.choice6.length; vv6++) {
        var marknum6 = this.busanlist10.findIndex(
          (e) => e.title == this.choice6[vv6].title
        );

        this.busanlist10.splice(marknum6, 1);
      }
      for (var vv7 = 0; vv7 < this.choice7.length; vv7++) {
        var marknum7 = this.busanlist10.findIndex(
          (e) => e.title == this.choice7[vv7].title
        );

        this.busanlist10.splice(marknum7, 1);
      }
      for (var vv8 = 0; vv8 < this.choice8.length; vv8++) {
        var marknum8 = this.busanlist10.findIndex(
          (e) => e.title == this.choice8[vv8].title
        );

        this.busanlist10.splice(marknum8, 1);
      }
      for (var vv9 = 0; vv9 < this.choice9.length; vv9++) {
        var marknum9 = this.busanlist10.findIndex(
          (e) => e.title == this.choice9[vv9].title
        );

        this.busanlist10.splice(marknum9, 1);
      }
      for (var vv10 = 0; vv10 < this.choice10.length; vv10++) {
        var marknum10 = this.busanlist10.findIndex(
          (e) => e.title == this.choice10[vv10].title
        );

        this.busanlist10.splice(marknum10, 1);
      }
    },
    async handleright2() {
      this.loadtexton = false;
      await this.pathnone();
      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];
      this.contenttypeid = "32";
      this.right = 2;
      this.btncolor2 = "active";
      this.btncolor = "noneactive";
      this.btncolor3 = "noneactive";
      this.busanlist10 = [];
      this.busanlist = [];
      await this.right2();
    },
    async handleright3() {
      this.loadtexton = false;
      await this.pathnone();
      this.middleload = [];
      this.loadfirst = [];
      this.loadtext = [];
      this.contenttypeid = "39";
      this.right = 3;
      this.btncolor2 = "noneactive";
      this.btncolor = "noneactive";
      this.btncolor3 = "active";
      this.busanlist10 = [];
      await this.right3();
    },
    pathnone() {
      this.path1 = [];
      this.path2 = [];
      this.path3 = [];
      this.path4 = [];
      this.path5 = [];
      this.path6 = [];
      this.path7 = [];
      this.path8 = [];
      this.path9 = [];
      this.path10 = [];
    },
  },
};
</script>
<style>
.el-input-number {
  width: 23px;
}
.el-input__inner {
  border: none;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.el-dialog__header {
  display: none;
}
.el-dialog__body {
  padding: unset;
}
</style>
<style scoped src="../assets/css/search_scope.css">
</style>