<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import '@/static/css/common.css'

export default {
  name: 'app'
}
</script>

<style lang="less">
html,body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  box-sizing: border-box;
}
#app{
	box-sizing: border-box;
}
.p1{
  padding-top:0.1rem;
  padding-bottom:0.1rem;
}
.p{
  padding:0.1rem;
}
a{
	display:inline-block;
}
.footerNav{
  position:fixed;
  bottom:0;
  width:100%;
  background:#fff;
  border-top:0.01rem solid #eee;
  .footerLists{
    display: -webkit-flex;
    text-align: center;
    .footerItem{
      flex: 1;
      
      p{
        width:30%;
        padding-top:0.05rem;
        margin:auto;
        img{
          display:block;
          width:100%;
        }
      }
      span{
        display: inline-block;
        font-size: 0.12rem;
        margin-top:0.05rem;
      }
      &.active:after{
        content:"";
        display:block;
        color:#fe4070;
      }
    }
  }
}

</style>
