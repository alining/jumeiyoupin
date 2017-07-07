<template>
  <div class="shopBox">
    <div class="content">
      <shopLists :shopData="shopData"></shopLists>
    </div>
  </div>
</template>

<script>
import axios from "axios"

import shopLists from "@/view/Team/component/shopLists"
export default {
  name: 'recommendTab',
  data () {
    return {
      shopData:[]
    }
  },
  components:{
    shopLists
  },
  methods:{
    getPageData () {
      var that=this;
      axios.get('api/homeData')
      .then(function(res){
        that.shopData=res.data.data;
        console.log(that.shopData)
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
.shopBox{
  width:100%;
  box-sizing: border-box;
  background:#eee;
  margin-bottom:0.5rem;
  .content{
    width:100%;
    box-sizing: border-box;
    
  }
}
</style>
