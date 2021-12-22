<template>
    <div >
        <h3>Admin</h3>
        <input type="button" @click="changeMenu(1)" value="물품등록" />
        <input type="button" @click="changeMenu(2)" value="물품관리" />
        <input type="button" @click="changeMenu(3)" value="회원관리" />        
        <hr />

        <div v-if="menu === 1">
            <h5>물품등록</h5>

            <input type="button" @click="addCount" value="항목추가" />
            <input type="button" @click="subCount" value="항목삭제" />

           

            <table>
                <tbody>
                    <tr v-for="tmp in count" v-bind:key="tmp">
                        <td>{{  tmp  }}</td>
                        <td><input type="text" v-model="code[tmp]" placeholder="물품코드" /></td>
                        <td><input type="text" v-model="name[tmp]" placeholder="물품명" /></td>
                        <td><input type="text" v-model="price[tmp]" placeholder="가격" /></td>
                        <td><input type="text" v-model="quantity[tmp]" placeholder="판매수량" /></td>
                    </tr>
                </tbody>

            </table>
        </div>        

        <div v-else-if="menu === 2">
            <h5>물품관리</h5>    

            <table>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>나이</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="tmp in items" v-bind:key="tmp">
                        <td><input type="text" v-model="tmp.id"/></td>
                        <td><input type="text" v-model="tmp.name"/></td>
                        <td><input type="text" v-model="tmp.age"/></td>
                    </tr>
                </tbody>
                
                
            </table>
            <input type="button" value="일괄수정" />          
        </div>

        <div v-else-if="menu === 3">
            <h5>회원관리</h5>            
        </div>


    </div>
</template>

<script>

    import axios from 'axios';
    export default {
        data() {
            return {
                menu     : 1,
                count    : 5,
                code     : [],
                name     : [],
                price    : [],
                quantity : [],

                items    : [],
            }
        },
        methods : {
            changeMenu(no) {
                this.menu = no;
                if(this.menu ===2){
                    this.handleItems();
                }
            },

            addCount() {
                //this.count = this.count + 1;
                this.count++; //수량 증가
                if(this.count > 10){
                    this.count = 10;
                }
            },

            subCount() {
                this.count--; //감소시킴
                if(this.count < 1){
                    this.count = 1;
                }
            },
            async handleItems(){
                const url = "http://ihongss.com/json/exam13.json";
                const headers = {'Content-type':'application/json'};
                const response = await axios.get(url, headers);   
                
                console.log(response);
                if(response.status ===200){
                    this.items = response.data.data;
                }

            }
        }
    }
</script>

<style scoped>

</style>