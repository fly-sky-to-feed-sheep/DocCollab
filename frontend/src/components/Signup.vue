<template>
    <div>
      <h2>注册</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label>用户名:</label>
          <input v-model="username" type="text" placeholder="Enter username" required>
        </div>
        <div>
          <label>邮箱:</label>
          <input v-model="email" type="email" placeholder="Enter email" required>
        </div>
        <div>
          <label>密码:</label>
          <input v-model="password" type="password" placeholder="Password" required>
        </div>
        <button type="submit">注册</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.username,
              email: this.email,
              password: this.password,
            }),
          });
  
          const data = await response.json();
  
          if (!response.ok) {
            throw new Error(data.message || 'Failed to register');
          }
  
          this.$router.push('/login');
        } catch (error) {
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  