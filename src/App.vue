<template>
  <div>
    <div class="wrap">
      <div class="wrap_1">
        <div class="nav">
          <ul class="nav_in">
            <li>
              <h2><router-link to="/" class="logo">DS TRAVEL</router-link></h2>
            </li>
            <li>
              <input
                type="text"
                class="search"
                placeholder="도시나 상품을 검색해보세요"
              />
            </li>
          </ul>
          <ul class="nav_in_2">
            <li>
              <router-link to="/join" class="router">회원가입</router-link>
            </li>
            <li>
              <router-link to="/login" class="router">로그인</router-link>
            </li>
          </ul>
        </div>
        <div class="nav2">
          <ul>
            <li><router-link to="" class="router2">항공권</router-link></li>
            <li><router-link to="" class="router2">숙소</router-link></li>
            <li><router-link to="" class="router2">렌터카</router-link></li>
            <li>
              <router-link to="/search" class="router2">서치</router-link>
            </li>
            <li><router-link to="" class="router2">메뉴2</router-link></li>
            <li><router-link to="" class="router2">메뉴3</router-link></li>
            <li><router-link to="" class="router2">메뉴4</router-link></li>
            <li><router-link to="" class="router2">메뉴5</router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  text-decoration: none;
}
.wrap {
  border-bottom: 1px solid #ccc;
  height: auto;
  width: 100%;
}
.wrap_1 {
  width: 1080px;
  margin: 0 auto;
}
.nav {
  height: 72px;
  box-sizing: border-box;
  padding-top: 20px;
}
.nav_in li {
  float: left;
  list-style: none;
}
.nav_in_2 li {
  float: right;
  list-style: none;
  margin-left: 30px;
  padding: 5px 20px;
}
.nav_in_2 li:nth-child(1) {
  border: 1px solid #ccc;
  padding: 5px 25px;
}
.nav_in_2 li:nth-child(2) {
  font-weight: bold;
}
.router {
  text-decoration: none;
  color: black;
}
.search {
  padding: 13px 50px;
  background: #eee;
  outline: none;
  border: none;
  margin-left: 20px;
  border-radius: 10px;
}
.nav2 {
  height: 40px;
  margin-top: 20px;
}
.nav2 ul li {
  float: left;
  margin-right: 50px;
  list-style: none;
  font-weight: bold;
}
.router2 {
  text-decoration: none;
  color: black;
}
</style>
