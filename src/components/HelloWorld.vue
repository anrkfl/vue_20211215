<template>
  <div class="container">
    <h3>메인</h3>

    
        <section >       
            <nav>
                <p>nav 영역</p> 
                <ul>                    
                    <li><router-link to="/login">로그인</router-link></li>
                    <li><router-link to="/join">회원가입</router-link></li>
                    <li><router-link to="/board">게시판</router-link></li>                    
                    <li><a href="boardwrite.html">게시판글쓰기</a></li>
                    <li><a href="form.html">Form 예제</a></li>
                    <li><a href="memberlist.html">회원목록</a></li>
                    <li><a href="ajax1.html">Iris목록</a></li>
                    <li><a href="ajax2.html">Titanic목록</a></li>
                    <li><a href="image.html">Image</a></li>
                    <li><a href="admin.html">Admin</a></li>
                    <li><a href="ex01.html">실습1</a></li>
                    <li><a href="ex02.html">실습2</a></li>
                    <li><a href="ex03.html">실습3</a></li>
                    <li><a href="storage.html">저장소</a></li>
                    <li><a href="storage1.html">저장소1</a></li>
                    <li><a href="dtable.html">데이터테이블</a></li>
                    <li><a href="chart.html">차트</a></li>
                </ul>
                   
            </nav>

            <article>
                <p>article 영역</p>
                <table border="1">
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>연락처</th>
                            <th>이메일</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>a</td>
                            <td>홍길동</td>
                            <td>010-0000-0000</td>
                            <td>ab@naver.com</td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>홍동길</td>
                            <td>010-0000-0000</td>
                            <td>ab@naver.com</td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>길홍동</td>
                            <td>010-0000-0000</td>
                            <td>ab@naver.com</td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>동길홍</td>
                            <td>010-0000-0000</td>
                            <td>ab@naver.com</td>
                        </tr>
                    </tbody>


                </table>


                
            </article>

            <aside>
                <p>aside 영역</p>                
            </aside>

        </section>       
    </div>
    

    
    
  
</template>

<script>
export default {
}
</script>


<style scoped> 

</style>
