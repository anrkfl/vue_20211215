<template>
    <div class="container">
        <h3>로그인</h3>

        <el-form  label-width="120px">

            <el-form-item label="아이디">
                <el-input size="small" v-model="member.userid" ref="userid"></el-input>
            </el-form-item>

            <el-form-item label="암호">
                <el-input size="small" v-model="member.userpw" ref="userpw" show-password></el-input>
            </el-form-item>

            <el-form-item label="">
                <el-button size="small" @click="handleLogin">로그인</el-button>
                <el-button size="small" @click="handleLogin">회원가입</el-button>
            </el-form-item>
        
            
            

        <!-- <div class="mydiv1">
            <label class="lbl1">아이디</label>
            <input type="text" v-model="member.userid" ref="userid" placeholder="아이디" />     
        </div>
        
        <div class="mydiv1">
            <label class="lbl1">암호</label>
            <input type="password" v-model="member.userpw" ref="userpw" placeholder="암호" />
        </div>

        <div class="mydiv1">
            <label class="lbl1"></label>
            <input type="button" value="로그인" @click="handleLogin" />
                
            <router-link to="/join">
                <input type="button" value="회원가입"/>        
            </router-link>
        </div>
         <hr />

        <div class="mydiv1">
            <label class="lbl1"></label>            
            <router-link to="/">
                <input type="button" value="매인으로" />
            </router-link>
            
            <br />
        </div>   -->
        </el-form>
            

    </div>
</template>

<script>
    export default {
        // 메소드 == 함수 == 기능 구현
        methods : {
            handleLogin(){
                if(this.member.userid === ""){
                    alert('아이디를 입력하세요.');
                    this.$refs.userid.focus();
                    return false;
                }
                else if(this.member.userpw === ""){
                    alert('암호를 입력하세요.');
                    this.$refs.userpw.focus();
                    return false;
                }
                alert('로그인');
            }
        },

        //상태(state 변수 성정)
        data(){
            return{
                member : {
                    userid : 'aaa',
                    userpw : 'bbb',
                }
            }
        },

        // 상태변수의 변화를 감지
        // watch : {
        //     userid : {
        //         handler(e) {
        //             console.log('watch-userid', e);

        //         }
        //     },
        //     userpw : {
        //         handler(e) {
        //             console.log('watch-userpw', e);

        //         }
        //     },
            
        // },



        
              
    }
</script>

<style scoped>

@import '../assets/css/mystyle1.css';


</style>