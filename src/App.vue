<template>
  <div>
    <div class="nav">
      <router-link to="/">메인</router-link>
      <router-link to="/login">로그인</router-link>
      <router-link to="/join">회원가입</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
</style>
