<template>
    <div class="container">
        <h3>게시판</h3>

        <table border="1">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>날짜</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>제목</td>
                    <td>가나다</td>
                    <td>24</td>
                    <td>2021/12/08</td>
                </tr>   

                <tr>
                    <td>2</td>
                    <td>제목</td>
                    <td>가나다</td>
                    <td>64</td>
                    <td>2021/12/08</td>
                </tr>    
                <tr>
                    <td>3</td>
                    <td>제목</td>
                    <td>가나다</td>
                    <td>64</td>
                    <td>2021/12/08</td>
                </tr> 
            </tbody>
        </table>
        <br />
        <hr />

        <div class="mydiv1">
            <label class="lbl1"></label>            
            <router-link to="/">
                <input type="button" value="매인으로" />
            </router-link>
            
            <br />
        </div>   

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


</style>