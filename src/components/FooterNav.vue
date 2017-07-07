<template>
  <div class="footerNav">
    <nav class="footerLists">
      <router-link to="/Home" class="footerItem" active-class="active">
        <p><img src="../images/f1.png" alt="" class="footIcon"></p>
        <span>首页</span>
      </router-link>
      <router-link to="/Team" class="footerItem" active-class="active">
        <p><img src="../images/f2.png" alt="" class="footIcon" /></p>
        <span>凑团</span>
      </router-link>
      <router-link to="/Car" class="footerItem" active-class="active">
        <p><img src="../images/f3.png" alt="" class="footIcon" /></p>
        <span>购物车</span>
      </router-link>
      <router-link to="/My" class="footerItem" active-class="active">
        <p><img src="../images/f4.png" alt="" class="footIcon" /></p>
        <span>我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'FooterNav',
  data () {
    return {

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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


</script>
