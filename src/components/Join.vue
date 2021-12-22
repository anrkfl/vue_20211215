<template>
    

    
    <div >
        <h3>회원가입</h3>
        
        <el-form  label-width="120px">

            
            
            <el-row :gutter="20"  >
            <el-col :span="18"  >

            <el-form-item label="아이디">
                <el-input v-model="userid" ref="userid"></el-input>
                <el-button size="small">중복확인</el-button>
            </el-form-item>

             <el-form-item label="암호">
                <el-input v-model="userpw" show-password ref="userpw"></el-input>
            </el-form-item>

            <el-form-item label="암호확인">
                <el-input v-model="userpw1" show-password ref="userpw1"></el-input>
            </el-form-item>

            <el-form-item label="이름">
                <el-input v-model="username" ref="username"></el-input>
            </el-form-item>


            </el-col>
            </el-row>



            
            <el-row >
                <el-col :span="14">
                    <el-form-item label="이메일">
                    <el-input v-model="useremail" ref="useremail"></el-input>
                    </el-form-item>
                </el-col>                    
                <el-col :span="4">
                    <el-select v-model="region" placeholder="선택하세요">
                        <el-option label="@naver.com" value="A"></el-option>
                        <el-option label="@daum.net" value="B"></el-option>
                        <el-option label="@gmail.com" value="C"></el-option>
                    </el-select>  
                </el-col>
            </el-row>
            

            <el-form-item>            
            <el-checkbox  v-model="chk1" label="약관동의" border></el-checkbox>
            </el-form-item>


            <el-form-item label="">                
                <el-button size="small" @click="handleLogin">회원가입</el-button>
                <el-button size="small" @click="handleLogin">로그인</el-button>
            </el-form-item>       

        </el-form>

        

    </div>

    
    
</template>

<script>

    export default {
        data(){
            return{
                userid    : '',
                userpw    : '',
                userpw1   : '',
                username  : '',
                useremail : '',
                chk1      : false,
                region: '',
            }
        },

        methods : {
            handleLogin(){
                if(this.userid === ""){
                    alert('아이디를 입력하세요.');
                    this.$refs.userid.focus();
                    return false;
                }
                if(this.userpw === ""){
                    alert('암호를 입력하세요.');
                    this.$refs.userpw.focus();
                    return false;
                }
                if(this.userpw1 !== this.userpw){
                    alert('암호가 일치하지 않습니다.');
                    this.$refs.userpw1.focus();
                    return false;
                }
                if(this.username === ""){
                    alert('이름을 입력하세요.');
                    this.$refs.username.focus();
                    return false;
                }
                if(this.useremail === ""){
                    alert('이메일을 입력하세요.');
                    this.$refs.useremail.focus();
                    return false;
                }
                if(this.chk1 === false){
                    alert('약관에 동의하세요.');
                    return false;
                }
                alert('회원가입 완료.');
            }
        },
    }
</script>

<style scoped>


.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
