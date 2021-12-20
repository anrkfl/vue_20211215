<template>
    <div>
        <h3>Comp Slot 예제</h3>
        <comp-3 :name="name">
            <template v-slot:left>                
                <p>왼쪽입니다.</p>
                <input type="button" value="name값이 asdf->defg" @click="handleName()"/>
            </template>

            <template #right>     
                <p>오른쪽입니다.</p>           
            </template>

            <template #center>
                <p>중간</p>
            </template>

        </comp-3>
    </div>
</template>

<script>
import Comp3 from './comp/Comp3.vue';
    export default {

        methods:{
            handleName(){
                this.name = 'defg';
            },

        },

        components:{
            Comp3
        },
        data(){
            return{
                name : 'asdf',
            }
        }
        
    }
</script>

<style scoped>

</style>