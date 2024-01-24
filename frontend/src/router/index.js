import { createRouter, createWebHistory } from 'vue-router';
import DocumentEditor from '../views/DocumentEditor.vue';
import HomePage from '../views/HomePage.vue';
import UserLogin from '../views/UserLogin.vue';

const routes = [
  { 
    path: '/',
    redirect: '/login'},
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/editor',
    name: 'DocumentEditor',
    component: DocumentEditor,
    meta: {
      requiresAuth: true  // 这个meta属性用来指示这个路由需要认证
    }
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  }
  // 可能还有其他路由...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 检查路由是否需要认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这里应该是你检查用户是否已登录的逻辑
    // 例如，检查一个在localStorage中的token
    if (!localStorage.getItem('user-token')) {  // 假设你在登录成功时将token存储在localStorage
      // 用户未登录，重定向到登录页面
      next({ name: 'UserLogin' });
    } else {
      // 用户已登录，允许访问
      next();
    }
  } else {
    // 路由不需要认证，直接允许访问
    next();
  }
});

export default router;
