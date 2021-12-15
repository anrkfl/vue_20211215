


import { createWebHistory, createRouter } from "vue-router";

//1. 컴포넌트 Helloworld
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import Join from '@/components/Join.vue';
import Form from '@/components/Form.vue';
import Board from '@/components/Board.vue';

// 2. url과 함께 사용할 컴포넌트 연결 
const routes = [
    // localhost:8080/
    { path:'/', name:"HelloWorld", component:HelloWorld },
    // localhost:8080/login
    { path:'/login', name:"Login", component:Login },
    // localhost:8080/join
    { path:'/join', name:"Join", component:Join },
    // localhost:8080/form
    { path:'/form', name:"Form", component:Form },

    { path:'/board', name:"Board", component:Board },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;