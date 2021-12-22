<template>
    <div >
         <h3>일별 박스 오피스</h3>
        <table border="1">
            <thead >
                <tr>
                    
                    <th>랭킹</th>
                    <th>이름</th>
                    <th>개봉일</th>
                    
                </tr>
            </thead>

            <tbody>
                <tr v-for="tmp in items" v-bind:key="tmp">
                    
                    <td>{{ tmp.rank   }}</td>
                    <td>{{ tmp.movieNm }}</td>
                    <td>{{ tmp.openDt }}</td>
                  
                </tr>



            </tbody>
        </table>

    </div>
</template>

<script>
    // 백엔드에서 값 받기
    import axios from 'axios';
    export default {
        created(){
            this.handleData();

        },
        data(){
            return{
                items : [],
             
            }

        },

        methods:{
            async handleData(){
                const url = "http://ihongss.com/json/exam21.json";
                const headers = {'Content-type':'application/json'};
                const response = await axios.get(url, headers);

                console.log(response)
                console.log(response.data.boxOfficeResult.dailyBoxOfficeList)

                if(response.status ===200){
                    this.items = response.data.boxOfficeResult.dailyBoxOfficeList;
                    
                    
                    
                }
                
            }


        }


        
    }
        
    
</script>


<style scoped>

</style>