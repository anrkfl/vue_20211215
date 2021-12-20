<template>
    <div>
        <h3>CompProp 예제</h3>
        <comp-1 :num1="age" :str1="name" @addNum1="addNum1()"></comp-1>
        <hr />
        <comp-1 :num1="age+20" :str1="name+'aaa'"></comp-1>
        <hr />
        <comp-2 :n1="age1" :s1="name1" :k1="what" @subNum1="subNum2()"></comp-2>

    </div>
</template>

<script>
    import Comp1 from './comp/Comp1.vue';
    import Comp2 from './comp/Comp2.vue';
    export default {        
        methods:{            
            addNum1(){
                //this.age= this.age +1 ;
                this.age++;
            },
            subNum2(){
                this.age1--;
            }

        },
        components:{
            'comp-1' : Comp1,
            Comp2
        },

        data(){
            return{
                name  : '가나다',
                age   : 23,

                name1 : '나다라',
                age1  : 34,
                what  : '뭐하지?',
            }
        }        
    }
</script>

<style scoped>

</style>