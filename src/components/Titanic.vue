<template>
    <div class="container">
         <h3>생존자</h3>
        <table border="1">
            <thead >
                <tr>                    
                    <th v-for="tmp in fields" v-bind:key="tmp">{{ tmp.name }}</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="tmp in sur" v-bind:key="tmp">                    
                    <td>{{ tmp[0] }}</td>                  
                    <td>{{ tmp[1] }}</td>
                    <td>{{ tmp[2] }}</td>
                    <td>{{ tmp[3] }}</td>
                    <td>{{ tmp[4] }}</td>
                    <td>{{ tmp[5] }}</td>
                    <td>{{ tmp[6] }}</td>
                </tr>
            </tbody>
        </table>

        

        <h3>사망자</h3>
        <table border="1">
            <thead >
                <tr>                    
                    <th v-for="tmp in fields" v-bind:key="tmp">{{ tmp.name }}</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="tmp in notsur" v-bind:key="tmp">                    
                    <td>{{ tmp[0] }}</td>                  
                    <td>{{ tmp[1] }}</td>
                    <td>{{ tmp[2] }}</td>
                    <td>{{ tmp[3] }}</td>
                    <td>{{ tmp[4] }}</td>
                    <td>{{ tmp[5] }}</td>
                    <td>{{ tmp[6] }}</td>
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
                fields : [],
                sur    : [],
                notsur : [],
             
            }

        },

        methods:{
            async handleData(){
                const url = "https://raw.githubusercontent.com/IBM/taxinomitis/master/resources/datasets/numbers/titanic.json";
                const headers = {'Content-type':'application/json'};
                const response = await axios.get(url, headers);

                console.log(response)
                console.log(response.data)

                if(response.status ===200){
                    this.fields = response.data.metadata.fields;
                    this.sur = response.data.data.survived;
                    this.notsur = response.data.data.did_not_survive;                    
                }
            }
        }
    }
        
    
</script>


<style scoped>

</style>