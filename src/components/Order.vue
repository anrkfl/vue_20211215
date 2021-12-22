<template>
    <div>
        <h3>Order</h3>
        <el-row :gutter="20"  style="margin-top:30px">
            <el-col :span="12">
                <el-image :src="item.img" />
            </el-col >
            
            <el-col :span="12">
                <p>물품명 : {{ item.name }}</p>
                <p>가격 : {{ item.price }}</p>
                <p>현제 수량 : {{ item.qty }}</p>

                
                <el-input-number v-model="num" :min="1" :max="item.qty" />
                

                <!-- <el-select v-model="value" placeholder="수량을 선택 하세요">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select> -->


                <!-- <el-select  placeholder="수량" style="width: 110px">
                    <el-option v-for="tmp in this.item.qty" :key="tmp" value="1">{{tmp}}
                    </el-option>
                </el-select> -->

                


                <el-button type="primary" @click="handleOrderAction" >주문하기</el-button>

            </el-col >
        </el-row>







    </div>
</template>

<script>
    export default {

        created(){
            this.handleData();
        },
        data(){
            return{
                
                num :1,
                // query로 전달되는 값은 string
                code: Number(this.$route.query.icode),
                key : this.$route.params.key,
                item : null,


                // options   : [
                //     {value: 'Option1', label: '1'},
                //     {value: 'Option2', label: '5'},
                //     {value: 'Option3', label: '10'},                    
                // ],
                // value:'',
                
            }
        },

        methods:{

            handleOrderAction(){
                this.$router.push({
                    name   : 'OrderAction',
                    params : {
                        code : this.item.code,
                        count: this.num
                    }
                });
            },

            // Countqty() {
            //     for(let i=1;i<this.qty;i++){

            //     }
            // },

            handleData(){                
                this.item = {                    
                    code  : this.code,       
                    name  : '사과' + this.code,
                    price : 1000 + this.code,
                    qty   : 1000 - this.code,
                    img   : 'https://picsum.photos/500/300?image='+(this.code)

                }

            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>