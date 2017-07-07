<template>
  <div class="FreeBar">
    <nav class="FreeBarLists p1">
      <!-- <router-link v-for="i in FreeBarLists" class="ListsItem" :to="/Home"> -->
        <dl v-for="i in FreeBarLists">
          <dt>
            <img :src="i.img" alt="">
          </dt>
          <dd>{{i.name}}</dd>
        </dl>  
      <!-- </router-link> -->
    </nav>
    <div class="content">
      <div class="title p1">
        <div class="titlePic"><img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt=""></div>
        <p>今日团购,每天10点上新</p>
      </div>
      <div class="conts">
         <!-- <router-link v-for="i in FreeBarLists" class="ListsItem" :to="/Home"> -->
          <dl v-for="n in contsData" class="contsItems p">
            <dt>
              <img :src="n.img" alt="">
              <img src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" alt="" class="tipLogo">
            </dt>
            
            <dd>
              <p class="tit">{{n.tit}}</p>
              <p class="price">
                <b>￥<strong>{{n.now_price}}</strong></b>
                <s v-if="n.before_price">￥{{n.before_price}}</s>
              </p>
            </dd>
          </dl>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: 'FreeTab',
  data () {
    return {
      FreeBarLists:[
        {
          img:"//mp1.jmstatic.com/c_zoom,w_51,q_70/mobile/other/detail_page_guarantee/interantion_shipping.png",
          name:"海外直供"
        },
        {
          img:"//mp1.jmstatic.com/c_zoom,w_51,q_70/mobile/other/detail_page_guarantee/genuine_guarantee.png",
          name:"原装正品"
        },
        {
          img:"//mp1.jmstatic.com/c_zoom,w_51,q_70/mobile/other/detail_page_guarantee/global_delivery.png",
          name:"极速到货"
        },
        {
          img:"//mp1.jmstatic.com/c_zoom,w_51,q_70/mobile/other/detail_page_guarantee/return_guarantee_7.png",
          name:"轻松退货"
        }
      ],
      contsData:[]
    }
  },
  methods: {
    getPageData () {
      var that=this;
      axios.get('/api/contsData')
      .then(function (res) {
        that.contsData=res.data.contsData;
        console.log(that.contsData)
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

.FreeBar{
  width:100%;
  background:#eee;
  margin-bottom:0.5rem;
  .FreeBarLists{
    width : 100%;
    display:-webkit-flex;
    background:#fff;
    margin-bottom:0.05rem;
    .ListsItem,dl{
      flex:1;
      text-align: center;
      position:relative;
      dt{
        width:50%;
        margin:auto;
        img{
          display:block;
          width:100%;
        }
      }

      dd{
        font-size: 0.12rem;
        margin-top:0.1rem;
      }
    }
  }
  .content{
    background:#fff;
    .title{
      text-align: center;
      position:relative;
      .titlePic{
        width:5%;
        position: absolute;
        left:20%;
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
      width:100%;
      .contsItems{
        display:-webkit-flex;
        dt{
          width:60%;
          position:relative;
          img{
            display: block;
            width:100%;
          }
          .tipLogo{
            display:block;
            width:40%;
            position:absolute;
            top:0;
            left:0;
          }
        }
        dd{
          margin-left:0.1rem;
          .tit{
            font-size: 0.14rem;
            word-wrap: nowrap;
            text-overflow: ellipsis;
          }
          .price{
            color:#fe4070;
            margin-top:0.1rem;
            b{
              font-weight: 500;
              strong{
                font-size: 0.2rem;
                font-weight: 500;
              }
            }
            s{
              color:#ccc;
              margin-left:0.05rem;
            }
          }
        }
      }
    }
  }
}
</style>
