<template>
    <div class="container">
        <h3>회원가입</h3>
        <div class="mydiv1">
            <label class="lbl1">아이디</label>
            <input type="text"  placeholder="아이디" v-model="userid" ref="userid" />
            <input type="button" value="중복확인" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">암호</label>
            <input type="password" placeholder="암호" v-model="userpw" ref="userpw" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">암호확인</label>
            <input type="password" placeholder="암호확인" v-model="userpw1" ref="userpw1" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">이름</label>
            <input type="text" placeholder="이름" v-model="username" ref="username" />
        </div>

        
        <div class="mydiv1">
            <label class="lbl1">이메일</label>
            <input type="text" placeholder="이메일" v-model="useremail" ref="useremail" />
            <label>@</label>
            <select>
                <option>naver.com</option>
                <option>daum.net</option>
                <option>gmail.com</option>
            </select>
        </div>

        <div class="mydiv1">
            <label class="lbl1"></label>
            <input type="checkbox"  v-model="chk1" />
            <label>약관동의</label>
        </div>
        
        <div class="mydiv1">
            <label class="lbl1"></label>
            <input type="button" value="회원가입"  @click="handleLogin" />
            
            <router-link to="/login">
                <input type="button" value="로그인" />
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
        data(){
            return{
                userid    : '',
                userpw    : '',
                userpw1   : '',
                username  : '',
                useremail : '',
                chk1      : false,
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

</style>
