<template>
    <div >
        <h3>회원가입</h3>
       
        <el-form  label-width="120px">
            
            <el-row>
            <el-col :span="12">

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



            <el-form-item label="이메일">
                <el-row>
                    <el-col :span="6">  
                        <el-input v-model="useremail" ref="useremail"></el-input>
                    </el-col>
                    <el-col :span="1">@</el-col>
                    <el-col :span="8">
                        <el-select v-model="value">
                            <el-option v-for="item in options" 
                                    :key="item.value"
                                    :label="item.label"  
                                    :value="item.value" >
                            </el-option>
                        </el-select>  
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item>            
            <el-checkbox  v-model="chk1" label="약관동의" border></el-checkbox>
            </el-form-item>


            <el-form-item label="">                
                <el-button size="small" @click="handleLogin">회원가입</el-button>
                <el-button size="small" @click="handleLogin">로그인</el-button>
            </el-form-item>


        <!-- <div class="mydiv1">
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
        </div> -->

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
                options   : 
                [
                    {value: 'Option1', label: 'naver.com'},
                    {value: 'Option2', label: 'daum.com'},
                    {value: 'Option3', label: 'gmail.com'},                    
                ],
                //[{},{},{},{}]

                value:'선택하세요',
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
