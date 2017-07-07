<template>
  <div class="Tomorrow">
    <div v-for="i in contItems" class="contItem">
      <div v-for="m in i.image_url_set">
        <img :src="m[320]" alt="">
      </div>
      <div v-for="k in i.image_url_set.dx_image">
        <img :src="k[320]" alt="">
      </div>
      <div v-for="n in i.image_url_set.single" class="single">
        <img :src="n[320]" alt="" class="singleImgs">
      </div>
      <div v-if="i.name" class="texts">
        <p class="itemsTitle">{{i.name}}</p>
        <p class="itemsPrice">
          <b>￥<strong>{{i.jumei_price}}</strong></b>
          <s v-if="i.market_price!='-1'">￥{{i.market_price}}</s>
        </p>
        <p class="itemsPeople">
          <span>{{i.product_desc}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>


import axios from 'axios'

export default {
  name: 'Tomorrow',
  data () {
    return {
      contItems:[]
    }
  },
  components:{
  },
  methods: {
    getPageData () {
      var that=this;
      axios.get('/api/TomorrowLists')
      .then(function (res) {
        that.contItems=res.data.item_list;
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
.Tomorrow{
  width:100%;
  background:#eee;
  margin-bottom:0.55rem;
  .contItem{
    width:100%;
    margin-bottom:0.1rem;
    position:relative;
    img{
      display:block;
      width:100%;
    }
    .single{
      background:#fff;
      .singleImgs{
        width:35%;
      }
    }
    
    .texts{
      position:absolute;
      left:40%;
      top:0;
      margin-right:0.1rem;
      .itemsTitle{
        font-size: 0.14rem;
        margin-top:0.1rem;
      }
      .itemsPrice{
        color:#fe4070;
        font-weight: 500;
        b{
          font-size: 0.14rem;
          strong{
            font-size: 0.2rem;
          }
        }
        s{
          color:#ccc;
        }
      }
    }
  }
}
</style>
