<template>
  <div id="app">  
    <BannerName></BannerName>
    //加一个key使得路由跳转时参数不同也可以立即（不刷新）得到期待的页面（而不是路劲变了，网页相关数据没有改变）
    <router-view :key="$route.fullPath"><HomePage></HomePage></router-view>
    <BottomName></BottomName>
  </div>
</template>

<script>
import BannerName from './components/Banner.vue'
import HomePage from './components/home/HomePage.vue'
import BottomName from './components/Bottom'

import { mapActions,mapState } from 'vuex'

export default {
  name: 'App',
  data(){
    return{
    }
  },
  methods: {
    ...mapActions('home', {addMessage:'addMessage'})
  },
  computed:{
    ...mapState('cart', ['shoppingCart'])
  },
  created() {
    this.addMessage()
  },
  components: {
    BannerName,
    HomePage,
    BottomName
  },
  watch:{
    shoppingCart:{
      immediate:true,
      deep:true,
      handler(val){
        sessionStorage.setItem('shoppingCart', JSON.stringify(val))
      }
    }
  },
  mounted(){

  }
}
</script>

<style>
li{
    list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body, html, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, header, menu, section, p, input, td, th, section{
  padding: 0;
  margin: 0;
}
a{
  cursor: pointer;
  text-decoration: none;
  color: #333;
  padding: 0;
  margin: 0;
}
</style>
