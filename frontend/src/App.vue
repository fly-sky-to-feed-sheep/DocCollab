<template>
  <div id="app">
    <!-- 使用 <router-view> 来展示匹配到的路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 不需要再这里引入 UserLogin 组件，因为它会作为路由的一部分被引入
export default {
  name: 'App',
  // 不需要注册 UserLogin 组件
}
</script>

<style scoped>
/* 你的样式代码 */
</style>
