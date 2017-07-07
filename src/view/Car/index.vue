<template>
  <div class="carBox">
    <div class="carCont">
      <div class="oops">
      </div>
      <div class="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
      <div class="go-stroll">去逛逛</div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>

import FooterNav from '@/components/FooterNav'

export default {
  name: 'CarIndex',
  data () {
    return {
     
    }
  },
  components:{
    FooterNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.carBox{
  width:100%;
  .carCont{
    .oops {
      width:0.8rem;
      height:0.8rem;
      background: url(../../images/no-card-oops.png) no-repeat center;
      background-size:100%;
      margin:auto;
      margin-top:50%;
    }
    .empty-cart {
      font-size: 0.12rem;
      color: #333;
      text-align: center;
      margin-top:0.1rem;
      color:#000;
    }
    .go-stroll{
      padding:0.05rem 0.2rem;
      width:20%;
      font-size:0.14rem;
      border-radius: 1.25rem;
      color: #fff;
      background: #fe4070;
      text-align: center;
      margin:auto;
      margin-top:0.1rem;
    }
  }
}
</style>
