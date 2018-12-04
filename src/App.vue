<template>
  <div id="app">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'" />
        below
      </p>
      <ElButton size="small">
        el-button
      </ElButton>
      <VcHeader />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import VcHeader from 'vc-header';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    VcHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
