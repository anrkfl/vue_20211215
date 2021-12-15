<template>
  <div>    
    <h3 class="container">header</h3>
    <hr />


    <div>
      <router-link to="/">홈화면</router-link>/
      <router-link to="/login">로그인</router-link>/
      <router-link to="/join">회원가입</router-link>/
      <router-link to="/form">폼</router-link>/
      <router-link to="/board">게시판</router-link>/

    </div>
    <router-view></router-view>
    
    


    <hr />
    <h3 class="container">footer</h3>
  </div>
</template>




<script>

export default {
  
  }

</script>




<style>
@import './assets/css/mystyle1.css';


</style>
