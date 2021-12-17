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
      <router-link to="/iris">Iris</router-link>/
      <router-link to="/iris1">Iris1</router-link>/
      <router-link to="/exam10">Exam10</router-link>/
      <router-link to="/exam21">Exam21</router-link>/
      <router-link to="/admin">Admin</router-link>/
      <router-link to="/titanic">Titanic</router-link>/
      <router-link to="/table1">table1</router-link>/
      <router-link to="/table2">table2</router-link>/
      <router-link to="/table3">table3</router-link>/

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
