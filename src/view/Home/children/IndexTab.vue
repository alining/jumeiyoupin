<template>
  <div class="homePage">
    <navs></navs>
    <router-view></router-view>
  </div>
</template>

<script>
import navs from '../component/navs'


export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components:{
    navs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
