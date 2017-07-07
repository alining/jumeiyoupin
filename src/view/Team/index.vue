<template>
  <div class="teamBox">
    <navLists :navData="navData"></navLists>
    <router-view></router-view>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import axios from "axios"

import navLists from '@/components/navLists'  

import FooterNav from '@/components/FooterNav'

export default {
  name: 'TeamIndex',
  data () {
    return {
      navData:[]
    }
  },
  components:{
    navLists,
    FooterNav
  },
  methods:{
    getPageData () {
      var that=this;
      axios.get('api/teamNavData')
      .then(function(res){
        that.navData=res.data.navData;
      })
      .catch(function(res){
        console.log(res)
      })
    }
  },
  created(){
    this.getPageData()
  },
  watch:{
    "$toute":"getPageData"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.teamBox{
  width:100%;
  }
</style>
