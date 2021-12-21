<template>
  <div>    
    <el-container>
      <el-header>
        <el-menu :default-active="defaultActive"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect">

            
            <el-menu-item index="100">홈</el-menu-item>
            <el-menu-item index="200">로그인</el-menu-item>
            <el-menu-item index="300">회원가입</el-menu-item>
            <el-menu-item index="400">마이페이지</el-menu-item>

            <!-- <el-sub-menu index="2">
              <template #title>Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

              <el-menu-item index="3" disabled>Info</el-menu-item>
              <el-menu-item index="4">Orders</el-menu-item> -->
            
            </el-menu>
                
          

      </el-header>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>



        <!-- <h3 class="container">header</h3>
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
          <router-link to="/compprop">compprop</router-link>/
          <router-link to="/admin1">Admin1</router-link>/
          <router-link to="/compslot">CompSlot</router-link>/

        </div>
        
        
        


        <hr />
        <h3 class="container">footer</h3> -->
  </div>
</template>




<script>

export default {
  data(){
    return{
      defaultActive:'1',
    }
  },
  methods: {
    handleSelect(idx){
      console.log('App.vue -> handleSelect',idx)
       if(idx ==='100'){
        this.$router.push({path:'/'})
      }
      if(idx ==='200'){
        this.$router.push({path:'/login'})
      }
      if(idx ==='300'){
        this.$router.push({path:'/join'})
      }
      if(idx ==='400'){
        this.$router.push({path:'/mypage'})
      }


      
    }
  }
  
  }

</script>




<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  height:700px
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}


</style>
