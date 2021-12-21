<template>
    <div>
        <h5>admin/Menu5.vue</h5>
        <el-table :data="items" size="mini" style="width: 100%">
            <el-table-column prop="userid" label="아이디" width="180" />
            <el-table-column prop="username" label="이름" width="180" />
            <el-table-column prop="userage" label="나이" />
            <el-table-column label="버튼">
                <!-- <slot name="default"></slot> -->
                <template #default="scope">                    
                    <el-button size="mini" type="info">수정</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">삭제</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="dialogVisible" title="삭제알림" width="30%">
            <span>정말 삭제 하시겠습니까?</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="handleDeleteAction()" >삭제</el-button>
                    <el-button @click="dialogVisible = false">취소</el-button>
                </span>
            </template>
        </el-dialog>


    </div>
</template>

<script>
    export default {
       
        created(){
            this.handleData();
        },

        data(){
            return {
                items         : [],
                dialogVisible : false,
                idx           : -1,  //삭제버튼 누를떄 임시로 보관되는 변수
            }
        },

        methods:{
            
            // 다이얼 로그 표시
            handleDelete(idx){
            console.log("Menu5.vue => handleDelete",idx);
            this.dialogVisible=true;
            this.idx = idx;
            
            },
            // 실제 삭제 수행시 삭제하는 idx를 알 수 없음.
            handleDeleteAction(){
            
            this.dialogVisible=true;
            // 백엔드로 아이디 값을 전달하면
            // 백엔드가 아이디값이 일치하는 항목 지우기

            // 데이터 삭제하기
            // 새로운 변수에 삭제하는 항목을 제외하고 복사
            // 새로운 변수 값을 items에 넣음
           
            let tmpItems = [];
            for(let i=0; i<this.items.length; i++){
                if(i !== this.idx){
                    tmpItems.push(this.items[i]);
                }
            }
            this.items = tmpItems;
            this.dialogVisible = false;

            // let arr = [];
            // arr.push({id:'a' ,name:'b'}); //배열에 추가
            // arr.pop() //배열에서 제거(뒤에서부터)
            // arr.splice(4,1);  // 배열에서 제거(위치, 개수)
            
                
            
            },
            // 백엔드로 부터 데이터 받음
            handleData(){
                this.items =[
                    {userid : 'a', username : 'A', userage:34},
                    {userid : 'b', username : 'B', userage:24},
                    {userid : 'c', username : 'C', userage:35},
                    {userid : 'd', username : 'D', userage:56},
                    {userid : 'e', username : 'E', userage:72},
                ]

            },


        }
        
    }
</script>

<style scoped>

</style>