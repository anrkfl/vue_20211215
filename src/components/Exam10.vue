<template>
    <div >
         <h3>Exam10 실습</h3>
        <table border="1">
            <thead >
                <tr>
                    <th>번호</th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>국어</th>
                    <th>영어</th>
                    <th>수학</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(tmp,idx) in items" v-bind:key="tmp">
                    <td>{{ (idx+1)  }}</td>
                    <td>{{ tmp.id   }}</td>
                    <td>{{ tmp.name }}</td>
                    <td>{{ tmp.age  }}</td>
                    <td>{{ tmp.score.kor  }}</td>
                    <td>{{ tmp.score.eng  }}</td>                    
                     <td v-text="tmp.score.math"></td>
                </tr>



            </tbody>
        </table>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created(){
            this.handleData();

        },
        data(){
            return{
                items : [],
                score : [],

            }

        },

        methods:{
            async handleData(){
                const url = "http://ihongss.com/json/exam10.json";
                const headers = {'Content-type':'application/json'};
                const response = await axios.get(url, headers);

                console.log(response)

                if(response.status ===200 && response.data.ret === 'y'){
                    this.items = response.data.data;
                    
                    console.log(this.items);
                    
                }
               

            }


        }


        
    }
</script>

<style scoped>

</style>