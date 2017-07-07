<template>
  <ul class="shopLists">
    <li v-for="i in shopData" class="shopItem p">
      <p v-for="k in i.image_url_set">
        <img :src="k[320]" alt="">
      </p>
      <span class="offered">{{i.buyer_number_text}}</span>
      <p class="itemTitles">
        <span v-if="i.group_special_name" class="newPlace">{{i.group_special_name}}</span>
        <b>{{i.group_name_tag}}</b>{{i.short_name}}
      </p>
      <span class="price">{{i.jumei_price}}</span><s v-if="i.market_price">{{i.market_price}}</s>
      <p class="singlePrice">{{i.single_price}}</p>
      <span class="btn">去开团</span>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'shopLists',
  data () {
    return {
    }
  },
  components:{
  },
  props:["shopData"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.shopLists{
  width:100%;
  box-sizing: border-box;
  .shopItem{
    width:100%;
    box-sizing: border-box;
    position:relative;
    background:#fff;
    margin-bottom:0.05rem;
    p{
      width:100%;
      img{
        display:block;
        margin:auto;
      }
    }
    .offered{
      border:1px solid #ccc;
      background:#eee;
      padding:0.02rem 0.1rem 0.02rem 0.2rem;
      border-radius: 1rem;
      position:absolute;
      top:1.5rem;
      left:-0.15rem;
    }
    .itemTitles{
      font-size: 0.14rem;
      box-sizing: border-box;
      b{
        font-weight: 500;
        color:#fe4070;
      }
      .newPlace{
        background:#fe4070;
        color:#fff;
        border-radius:0.05rem;
        padding:0.04rem;
        font-size:0.12rem;
        font-weight:100;
      }
    }
    .price{
      display:inline-block;
      color:#fe4070;
      font-size:0.2rem;
      margin-top:0.05rem;
    }
    s{
      margin-left:0.05rem;
      color:#ccc;
    }
    .singlePrice{
      font-size: 0.12rem;
      color:#666;
    }
    .btn{
      background:#fe4070;
      border-radius: 1rem;
      font-size: 0.16rem;
      color:#fff;
      padding:0.05rem 0.2rem;
      font-weight: 100;
      position:absolute;
      right:0.2rem;
      bottom:0.1rem ;
    }
  }
}
  
</style>
