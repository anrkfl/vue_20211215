<template>
    <div>
        <h3>Board1.vue</h3>
        <el-table :data="items" style="width: 100%; cursor:pointer; " size="mini"
            @row-click="rowclick" >
            <el-table-column prop="no" label="글번호" width="180" />
            <el-table-column prop="title" label="제목" width="180" />
            <el-table-column prop="writer" label="작성자" width="180" />
            <el-table-column prop="hit" label="조회수" width="180" />            
            <el-table-column prop="regdate" label="날짜" />
        </el-table>
        <el-pagination layout="prev, pager, next" @current-change="currentChange" :total="500">
        </el-pagination>

        
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
                page  : 1,
            }
        },
        methods:{
            rowclick(row){
                console.log("Board1.vue => rowclick " ,row);
                this.$router.push({
                    name  : 'Board1One',
                    query : {no : row.no}
                });
            },

            currentChange(page){
                console.log('Border1.vue => currentChange' ,page);
                this.page = page ;
                this.handleData();
            },


            async handleData() {
                const url = `http://ihongss.com/json/board.json?page=${this.page}`;
                const headers = {"Content-Type":"application/json"};

                const response = await axios.get(url, {headers:headers});
                //response.data => {ret: 'y', data: Array(10)}
                console.log(response);
                if(response.data.ret === 'y') {
                    this.items = response.data.data;
                }
            }
        }
    }
</script>

<style scoped>

</style>
