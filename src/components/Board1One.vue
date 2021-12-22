<template>
    <div>
        <h4>게시판 상세 내용</h4>

        <el-row :gutter="20"  >
            <el-col :span="12">
                <el-image :src="this.items.img" />
            </el-col >
        
            
            <el-col :span="12">
                <p>조회수 : {{ items.hit }}</p>
                <p>글번호 : {{ items.no }}</p>
                <p>제목   : {{ items.title }}</p>
                <p>내용   : {{ items.content }}</p>
                <p>작성자 : {{ items.writer }}</p>
                <p>날짜   : {{ items.regdate }}</p>
            </el-col>
        </el-row>
        <router-link to="/board1">목록으로</router-link>
         





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
                no : this.$route.query.no,
                items : '',
            }
        },

        methods:{
            async handleData(){
                const url =`http://ihongss.com/json/boardone.json?no=${this.no}`;
                const headers = {"Content-Type":"application/json"};
                const response = await axios.get(url, {headers:headers});                
                console.log(response);
                if(response.data.ret === 'y') {
                    this.items = response.data.data;
                }
                
            }
        }        
    }
</script>

<style lang="scss" scoped>

</style>