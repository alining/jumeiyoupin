<template>
  <div class="homeBox">
    <div class="header p1">
      <div class="search">
        <input type="text" placeholder="搜索商品 分类 功效">
        <img src="../../images/search.png" alt="" class="iconSearch">
      </div>
      <div class="searchImg">
        <img src="../../images/searchImg.png" alt="">
      </div>
    </div>
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
  name: 'HomeIndex',
  data () {
    return {
      navData:[]
    }
  },
  components:{
    navLists,
    FooterNav
  },
  methods: {
    getPageData () {
      var that=this;
      axios.get('/api/homeNavData')
      .then(function (res) {
        that.navData=res.data.navData;
      })
      .catch(function (res) {
        console.log(res);
      });
    }
  },
  created () {
    this.getPageData();
  },
  watch: {
    "$route":"getPageData"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.homeBox{
  width:100%;
  .header{
    width:100%;
    display:-webkit-flex;
    position:relative;
    box-sizing: border-box;
    .search{
      width:100%;
      margin-left:0.2rem;
      position: relative;
      input{
        width:75%;
        border-radius:0.1rem;
        border:0;
        padding:0.05rem 0.1rem;
        background:#f5f5f5;
        text-align: center;
        font-size: 0.14rem;
      }
      .iconSearch{
        position:absolute;
        left:15%;
        top:18%;
        width:5%;
      }
    }
    .searchImg{
      width:13%;
      position:absolute;
      right:0;
      top:40%;
      img{
        display:block;
        width:50%;
      }
    }
  }
}
</style>
