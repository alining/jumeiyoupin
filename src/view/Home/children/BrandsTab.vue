<template>
  <div class="BrandsTab">
    <div class="content">
      <div class="conts">
        <ul class="brandsLists">
          <li v-for="i in brands" class="brandsItem">
            <p v-for="k in i.image_url_set">
              <img :src="k[320]" alt="">
            </p>
            <span class="rebate">{{i.discount_string}}</span>
            <p class="title">{{i.title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: 'BrandsTab',
  data () {
    return {

    }
  },
  components:{
  },
  methods: {
    getPageData () {
      var that=this;
      axios.get('/api/brands')
      .then(function (res) {
        that.brands=res.data.item_list;
        console.log(that.brands)
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
.BrandsTab{
  width:100%;
  background:#eee;
  margin-bottom:0.5rem;
  .content{
    margin-bottom:0.05rem;
    .conts{
      background:#fff;
      .brandsLists{
        .brandsItem{
          position:relative;
          .rebate{
            color:#fff;
            background:#000;
            position:absolute;
            bottom:0.1rem;
          }
          .title{
            position:absolute;
            bottom:-0.3rem;
            font-size: 0.14rem;
            left:0.2rem;
          }
        } 
        .brandsItem>p:nth-child(2){
            width:100%;
            margin-bottom:0.5rem;
            img{
              display:block;
              width:100%;
            }
          }
        .brandsItem>p:nth-child(1){
          padding-top:0.1rem;
          padding-bottom:0.1rem;
          margin-right:0.1rem;
          width:20%;
          position:absolute;
          right:0;
          bottom:-0.5rem;
          img{
            display:block;
            width:100%;
          }
        }
      }
    }
  }
}

</style>
