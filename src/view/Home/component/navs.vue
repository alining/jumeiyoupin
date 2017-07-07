<template>
  <div class="navsLists">
	<nav class="navs">
		<router-link v-for="i in navsData" class="navsItem" active-class="col" :to="i.link">{{i.name}}</router-link>
	</nav>
  </div>
</template>
<script>
export default {
  name: 'navs',
  data () {
    return {
      navsData:[
      	{
    			name:"今日10点上新",
          link:"/Home/index/1/Tody"
      	},
      	{
    			name:"明日10点预告",
          link:"/Home/index/1/Tomorrow"
      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.navsLists{
  width:100%;
  overflow-x:auto;
  border-bottom : 1px solid #eee;
  .navs{
    width : 100%;
    height : 100%;
    display:-webkit-box;
    .navsItem{
      flex:1;
      text-align: center;
      display:block;
      padding:0.1rem 0.15rem;
      color:#000;
      position:relative;
      font-size: 0.14rem;
      
    }
    &.col:after{
        content:"";
        display:block;
        color:#fe4070;
      }
  }
}
</style>
