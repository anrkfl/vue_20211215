<template>
    <div class="container">
         
        <table border="1">
            <thead >
                <h3>생존자</h3>
                <tr>  
                    <!-- {name: 'ticket class', type: 'number'} -->
                    <th v-for="tmp in fields" v-bind:key="tmp">{{ tmp.name }}</th>
                </tr>
            </thead>

            <tbody>
                <!-- [3, 'female', 9, 1, 1, 15.2458, 'Cherbourg'] -->
                <tr v-for="tmp in sur" v-bind:key="tmp">                    
                    <td v-for="tmp1 in 7" v-bind:key="tmp1">{{ tmp[tmp1-1] }}</td>                    
                </tr>

                <!-- <h3>사망자</h3>        
                <tr v-for="tmp in notsur" v-bind:key="tmp">                    
                    <td v-for="tmp1 in 7" v-bind:key="tmp1">{{ tmp[tmp1-1] }}</td>                    
                </tr>                 -->
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
                    <td v-for="tmp1 in 7" v-bind:key="tmp1">{{ tmp[tmp1-1] }}</td>                    
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

                    console.log(this.fields);
                    console.log(this.sur);                   
                    console.log(this.notsur);                   
                }                
            }
        }
    }
        
    
</script>


<style scoped>

</style>