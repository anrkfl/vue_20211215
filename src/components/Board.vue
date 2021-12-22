<template>
    <div >
        <h3>게시판</h3>

        <table border="1">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>연락처</th>
                    <th>이메일</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                    <td>{{ (idx+1)   }}</td>
                    <td>{{  tmp.id   }}</td>
                    <td>{{  tmp.name }}</td>
                    <td>{{  tmp.tel  }}</td>
                    <td v-text="tmp.email"></td>
                </tr>
            </tbody>
        </table>

        <div>
            <label v-for="tmp in pages" v-bind:key="tmp">
                <button @click="handleBoard(tmp)">{{ tmp }}</button>
            </label>
        </div>


        <br />
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

        // 생명주기(자동으로 호출되는 역할)
        created(){
            // 백엔드에서 필요한 데이터를 받는경우
            console.log('1. created');
            this.handleBoard(1);// 메소드 호출
        },
        mounted(){
            // 화면의 변화를 주기위해
            console.log('2. mounted');
        },


        //상태변수(state)
        data(){
            return{
                pages : 12,
                items : [],
            }
        },

        // 호출되어지는 함수, 매소드. 기능
        methods : {
            handleBoard(page){
                
                console.log('handleBoard 메소드',page);

                //백엔드에서 데이터를 받음
                //state변수 items에 데이터를 넣음
                this.items = [
                    {id:'a',name:'가',tel:page,email:'a@a.com'},
                    {id:'b',name:'나',tel:page,email:'b@a.com'},
                    {id:'c',name:'다',tel:page,email:'c@a.com'},
                ];
            }
        }
    }
</script>

<style scoped>


</style>