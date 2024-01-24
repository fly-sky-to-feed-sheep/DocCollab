<template>
  <div class="all">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
          <div>
              <label for="username">Username:</label>
              <input type="text" id="username" v-model="username">
          </div>
          <div>
              <label for="password">Password: </label>
              <input type="password" id="password" v-model="password">
          </div>
          <button type="submit">Login</button>
      </form>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const router = useRouter();
    const username = ref(''); // 使用 ref 来声明响应式变量
    const password = ref('');

    const handleLogin = async () => {
      try {
          const response = await axios.post('http://localhost:3000/api/login', { username: username.value, password: password.value });
          alert('Login successful! Token: ' + response.data.token);
          localStorage.setItem('user-token', response.data.token); // 存储token
          router.push({ name: 'HomePage' }); // 使用 router 实例进行跳转
      } catch (error) {
          alert('Login failed!');
      }
    };

    return {
      username,
      password,
      handleLogin
    };
  }
};
</script>



<style scoped>
    html, body {
        margin: 0; /* 移除边距 */
        padding: 0; /* 移除内边距 */
        height: 100%; /* 让 body 全屏 */
    }
    .all{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw; /* 视窗宽度的 100% */
        height: 100vh; /* 视窗高度的 100% */
        background-image: url('../assets/LoginPageBgp.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    label {
        margin-bottom: 10px;
    }

    input {
        padding: 5px;
        margin-bottom: 10px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }
</style>
