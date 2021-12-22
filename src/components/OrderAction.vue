


<script>
    import { ElMessageBox, ElMessage  } from 'element-plus'
    // 이쪽 컴포넌트로 와서 주문처리 후 다시 다른 페이지로 이동
    // 화면이 없음!!
    export default {
        
        created(){
            console.log(this.$route.params.code);
            console.log(this.$route.params.count);


            ElMessageBox.alert('결제가 완료 되었습니다.', 'Title', {
                confirmButtonText: 'OK',
                callback: (action) => {
                    ElMessage({
                     type: 'success',
                     message: `어렵다 ㅠㅠ`,
                    })
                    console.log(action);
                    this.$router.push({path:'/shop'});
                },
            });
            //결제처리
            // alert('결제 되었습니다.');

            // 쇼핑몰 메인으로 이동
            // this.$router.push({path:'/shop'});
        }
        
    }
</script>

