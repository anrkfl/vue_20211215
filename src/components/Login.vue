<template>
    <div class="container">
        <h3>로그인</h3>


        
        <div class="mydiv1">
            <label class="lbl1">아이디</label>
            <input type="text" v-model="userid" ref="userid" placeholder="아이디" />     
        </div>
        
        <div class="mydiv1">
            <label class="lbl1">암호</label>
            <input type="password" v-model="userpw" ref="userpw" placeholder="암호" />
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
        </div>  

            

    </div>
</template>

<script>
    export default {
        // 메소드 == 함수 == 기능 구현
        methods : {
            handleLogin(){
                if(this.userid === ""){
                    alert('아이디를 입력하세요.');
                    this.$refs.userid.focus();
                    return false;
                }
                else if(this.userpw === ""){
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
                userid : '',
                userpw : '',
            }
        },

        // 상태변수의 변화를 감지
        watch : {
            userid : {
                handler(e) {
                    console.log('watch-userid', e);

                }
            },
            userpw : {
                handler(e) {
                    console.log('watch-userpw', e);

                }
            },
            
        },



        
              
    }
</script>

<style scoped>

@import '../assets/css/mystyle1.css';


</style>