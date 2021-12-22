<template>
    <div >
        <h3>관리자 페이지 : 컴포넌트 이용</h3>

        <div>
            <input type="button" value="menu1" @click="changeMenu(1)"/>
            <input type="button" value="menu2" @click="changeMenu(2)"/>
            <input type="button" value="menu3" @click="changeMenu(3)"/>
            <input type="button" value="menu4" @click="changeMenu(4)"/>
            <input type="button" value="menu5" @click="changeMenu(5)"/>
        </div>

        <!-- <hr /> -->

        <!-- <div>
            <h5>v-if를 사용한 예제</h5>
            <menu-1 v-if="menu===1"></menu-1>
            <menu-2 v-if="menu===2"></menu-2>
            <menu-3 v-if="menu===3"></menu-3>
            <menu-4 v-if="menu===4"></menu-4>
        </div> -->
        <hr />

        <div>
            <!-- <h5>component 태그 사용 예제</h5> -->
            <component :is="currentComp"></component>

        </div>
        <hr />
        
        <!-- <div>
            <h5>component 추가/삭제</h5>
            <component v-for="item in compItems" v-bind:key="item" :is="item"></component>
            <input type="button" value="컴포넌트 추가" @click="handleComp(1)" />
            <input type="button" value="컴포넌트 삭제" @click="handleComp(2)" />

        </div> -->

    </div>

    
</template>

<script>
    import Menu1 from './admin/Menu1.vue';
    import Menu2 from './admin/Menu2.vue';
    import Menu3 from './admin/Menu3.vue';
    import Menu4 from './admin/Menu4.vue';
    import Menu5 from './admin/Menu5.vue';

    export default {
        // 컴포넌트 등록
        components:{
            Menu1,
            Menu2,
            Menu3,
            Menu4,
            Menu5,
        },

        // 상태변수
        data(){
            return{
                // menu        : 1,
                currentComp : 'menu-2',
                compList    : [null,'menu-1','menu-2','menu-3','menu-4','Menu-5'],
                // compItems   :['menu-3','menu-3','menu-3'],
            }
        },

        // 메소드
        methods:{
            changeMenu(no){
                // this.menu = no;
                this.currentComp = this.compList[no];                
            },
            
            // handleComp(no){
            //     if(no ===1){
            //         this.compItems.push('menu-3');
            //     }
            //     else if(no ===2){
            //         this.compItems.pop();
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>