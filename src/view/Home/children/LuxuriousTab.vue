<template>
  <div class="LuxuriousTab">
    <SwiperBar></SwiperBar>
    <ul class="navLists">
      <li>
        <img src="http://mp5.jmstatic.com/mobile/card_material/item_44819_512_512-ipad2048_1459308366.jpg?t=1459308366&imageView2/2/w/160/q/90" alt="">
      </li>
      <li>
        <img src="http://mp5.jmstatic.com/mobile/card_material/item_44820_512_512-ipad2048_1459308381.jpg?t=1459308382&imageView2/2/w/160/q/90" alt="">
      </li>
      <li>
        <img src="http://mp5.jmstatic.com/mobile/card_material/item_44822_512_512-ipad2048_1458815156.jpg?t=1458815156&imageView2/2/w/160/q/90" alt="">
      </li>
      <li>
        <img src="http://mp5.jmstatic.com/mobile/card_material/item_44824_512_512-ipad2048_1458815202.jpg?t=1458815202&imageView2/2/w/160/q/90" alt="">
      </li>
    </ul>
    <div class="content">
      <div class="titleName p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>今日特惠</p>
      </div>
      <div class="conts">
        <img src="http://mp5.jmstatic.com/mobile/card_material/item_1654_2048_1024-ipad2048_1497286954.jpeg?imageView2/2/w/640/q/90" alt="">
      </div>
    </div>
    <div class="content">
      <div class="titleName p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>活动推荐</p>
      </div>
      <div class="conts">
        <img src="http://mp5.jmstatic.com/mobile/card_material/item_2835_2048_1024-ipad2048_1496663406.jpeg?imageView2/2/w/640/q/90" alt="">
      </div>
    </div>
    <div class="content">
      <div class="titleName p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>今日热销品牌</p>
      </div>
      <div class="conts">
        <ul class="floatImgs">
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_2048_1024-ipad2048_593b8c921c471.jpg?t=1497074834&imageView2/2/w/640/q/90" alt="">
          </li>
          <li class="towImg">
            <span>
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_593b8c9b78156.jpg?t=1497074843&imageView2/2/w/640/q/90" alt="">
            </span>
            <span>
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_593b8ccc11545.jpg?t=1497074892&imageView2/2/w/640/q/90" alt="">
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="titleName p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>精选活动</p>
      </div>
      <div class="conts">
        <ul class="luxuriousLists">
          <li v-for="i in Luxurious" class="LuxuriousItem">
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

import SwiperBar from "@/components/SwiperBar"

export default {
  name: 'LuxuriousTab',
  data () {
    return {

    }
  },
  components:{
    SwiperBar
  },
  methods: {
    getPageData () {
      var that=this;
      axios.get('/api/Luxurious')
      .then(function (res) {
        that.Luxurious=res.data.item_list;
        // console.log(that.Luxurious)
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
.LuxuriousTab{
  width:100%;
  background:#eee;
  margin-bottom:0.5rem;
  .navLists{
    display:-webkit-flex;
    margin-bottom:0.05rem;
    li{
      flex:1;
      img{
        display: block;
        width:100%;
      }
    }
    
  }
  .floatImgs{
    .towImg{
      display:-webkit-flex;
      span{
        display: inline-block;
        width:50%;
        img{
          display: block;
          width:100%;

        }
      }
    }
  }
  .content{
    margin-bottom:0.05rem;
    .titleName{
      text-align: center;
      position:relative;
      background:#fff;
      .titlePic{
        background:#fff;
        width:5%;
        position: absolute;
        left:25%;
        top:0.12rem;
        img{
          display:block;
          width:100%;
        }
      }
      p{
        font-size: 0.14rem;
      }
    }
    .conts{
      img{
        display: block;
        width:100%;
      }
    }
    .conts{
      background:#fff;
      .luxuriousLists{
        
        .LuxuriousItem{
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
        .LuxuriousItem>p:nth-child(2){
            width:100%;
            margin-bottom:0.5rem;
            img{
              display:block;
              width:100%;
            }
          }
        .LuxuriousItem>p:nth-child(1){
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
