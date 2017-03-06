<template>
  <div id="wrapper">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <i class="glyphicon glyphicon-time"></i>
            计划表
          </a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li :class="{active : $route.path == '/home'}"><router-link to="/home">首页</router-link></li>
            <li :class="{active : $route.path == '/time-entries' || $route.path == '/time-entries/log-time'}"><router-link to="/time-entries">计划列表</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  components: {
    Sidebar
  }
}
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
