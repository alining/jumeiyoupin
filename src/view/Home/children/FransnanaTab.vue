<template>
  <div class="FransnanaTab">
    <div class="content">
      <div class="titleName p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>特惠活动 任你挑选</p>
      </div>
      <div class="conts">
        <ul>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1496914023.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1496914774.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1495506401.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1492149634.jpg?imageView2/2/w/320/q/90" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="titleName p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>全球热销品牌</p>
      </div>
      <div class="conts">
        <ol>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1491470666.jpg?imageView2/2/w/160/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1491470648.jpg?imageView2/2/w/160/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1491967787.jpg?imageView2/2/w/160/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1491895923.jpg?imageView2/2/w/160/q/90" alt="">
          </li>
        </ol>
      </div>
    </div>
    <div class="content">
      <div class="banner">
        <img src="http://mp5.jmstatic.com/mobile/card_material/item_3027_2048_1024-ipad2048_1497060655.jpeg?imageView2/2/w/640/q/90" alt="">
      </div>
    </div>
    <div class="content">
      <div class="titleName p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>今日推荐专场</p>
      </div>
      <div class="conts">
        <ul>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1497000572.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1496656027.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1497014146.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1496977900.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1496892589.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1496925603.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="titleName p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>明日推荐专场</p>
      </div>
      <div class="conts">
        <ul>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5642_1024_1024-ipad2048_1497170478.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
          <li>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_5642_1024_1024-ipad2048_1496992519.jpeg?imageView2/2/w/320/q/90" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: 'FransnanaTab',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.FransnanaTab{
  width:100%;
  box-sizing: border-box;
  background:#eee;
  margin-bottom:0.5rem;
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
      ul{
        display:-webkit-flex;
        justify-content: space-around;
        flex-wrap: wrap;
        li{
          width:50%;
          img{
            display: block;
            width:100%;
          }
        }
      }
      ol{
        display:-webkit-flex;
        li{
          flex:1;
          img{
            display: block;
            width:100%;
          }
        }
      }
    }
    .banner{
      height:100%;
      img{
        display: block;
        width:100%;
      }
    }
    .activity {
      width:100%;
      nth-child(even){
        height:100%;
        img{
          display:block;
          width:100%;
        }
      }
      nth-child(odd){
        width:5%;
        img{
          display:block;
          width:100%;
        }
      }
    }
  }
}

</style>
