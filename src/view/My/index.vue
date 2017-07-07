<template>
  <div class="myBox">
    <div class="myHead">
      <div class="header p">
        <i class="left" @click="back()"></i>
        <p>我的聚美</p>
        <router-link to="/Home/index/1/Tody"><i class="home"></i></router-link>
      </div>
      <div class="noportrait"></div>
      <div class="operation">
        <router-link to="/SignIn"><a class="signup">注册</a></router-link>
        <div class="separator"></div>
        <router-link to="/Login"> <a class="login">登录</a></router-link>
      </div>
    </div>
    <div class="myOrder">
      <div class="orderTitle p">
        <p class="myLists"><i class="orderPic"></i>我的订单</p>
        <span class="myAllOrder">查看我的全部订单<i class="lookRight"></i></span>
      </div>
      <div class="block-content">
        <ul class="block-content-lists">
          <li class="block-item" href="/m/order/list?status=1">
            <i class="unpaid"></i>
            <span>待付款</span>
          </li>
          <li class="block-item" href="/m/order/list?status=2">
              <i class="unconfirm"></i>
              <span>待收货</span>
          </li>
          <li class="block-item" href="/m/order/list?status=3">
              <i class="uncomment"></i>
              <span>待评价</span>
          </li>
          <li class="block-item" href="/m/RMA/list">
              <i class="refund"></i>
              <span>退货/退款</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="myAssets">
      <div class="orderTitle p">
        <p class="myLists"><i class="assetsPic"></i>我的资产</p>
      </div>
      <div class="block-content">
        <ul class="block-content-lists">
          <li class="block-item" href="/m/order/list?status=1">
            <span>现金券</span>
          </li>
          <li class="block-item" href="/m/order/list?status=2">
              <span>红包</span>
          </li>
          <li class="block-item" href="/m/order/list?status=3">
              <span>聚美余额</span>
          </li>
          <li class="block-item" href="/m/RMA/list">
              <span>礼品卡</span>
          </li>
        </ul>
      </div>
    </div> 
    <div class="otherContent">
      <ul class="otherLists">
        <li class="list-item p" href="/m/RMA/service">
            <i class="list-item-icon rmaservice"></i>
            <span>售后服务</span>
            <i class="arrow-right"></i>
        </li>
        <li class="list-item p" href="/m/feedback/show_add">
            <i class="list-item-icon feedback"></i>
            <span>意见反馈</span>
            <i class="arrow-right"></i>
        </li>
        <li class="list-item p" href="/h/address/index">
            <i class="list-item-icon address"></i>
            <span>收货地址</span>
            <i class="arrow-right"></i>
        </li>
        <li class="list-item logout p" href="https://passport.jumei.com/i/mobile/logout?redirect=http%3A%2F%2Fi.jumei.com%2Fm%2Faccount%2Fmy">
            <i class="list-item-icon logout"></i>
            <span>退出登录</span>
            <i class="arrow-right"></i>
        </li>
        <li class="list-item p" href="tel: 400-123-8888">
            <i class="list-item-icon tel"></i>
            <span>400-123-8888</span>
            <i class="arrow-right"></i>
        </li>
      </ul>
    </div>
    <p class="hint">客服全天24小时在线，拨打前请记录您的UID 0    </p>
    <FooterNav></FooterNav>
  </div>
</template>

<script>

import FooterNav from '@/components/FooterNav'

export default {
  name: 'MyIndex',
  data () {
    return {
    }
  },
  components:{
    FooterNav
  },
  methods:{
    back (){
      history.go(-1)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.myBox{
  width:100%;
  background:#eee;
  margin-bottom:0.5rem;
  .myHead{
    box-sizing: border-box;
    height: 158px;
    background-image: linear-gradient(-204deg,#FD465F 0,#FC5E9F 100%);
    margin-bottom:0.1rem;
    .header{
      display:-webkit-flex;
      p{
        color:#fff;
        font-size: 0.14rem;
        font-weight: 100;
        margin:auto;
      }
      .left{
        background: url(https://secure1.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/back_white_bg.png) no-repeat left center;
        background-size:0.25rem 0.25rem;
        position: absolute;
        left: 0;
        top: 0;
        width: 0.38rem;
        height: 0.38rem;
      }
      .home{
        position: absolute;
        right: 0;
        top: 0;
        width: 0.38rem;
        height: 0.38rem;
        background: url(https://secure1.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/home_white_bg.png) no-repeat center center;
        background-size:0.25rem 0.25rem;
      }
    }
    .noportrait{
      background-image: url(https://secure3.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/noportrait.png);
      width: 60px;
      height: 60px;
      background-size: 60px;
      margin: auto;
      margin-top:0.1rem;
    }
    .operation {
      padding:0.1rem;
      width: 2rem;
      margin: auto;
      display: flex;
      a{
        color: #fff;
        font-size:0.16rem;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        width:0.95rem;
        cursor: auto;
      }
      .separator {
        background: #fff;
        width:0.01rem;
        display: inline-block;
        height:0.15rem;
        margin-top:0.05rem;
      }
    }
  }
  .myOrder{
    width:100%;
    background:#fff;
    box-sizing: border-box;
    margin-bottom:0.1rem;
    .orderTitle{
      display:-webkit-flex;
      justify-content: space-between;
      border-bottom:0.01rem solid #eee;
      .myLists{
        color:#000;
        .orderPic{
          width:0.2rem;
          height:0.2rem;
          background-image: url(https://secure3.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/myorder.png);
          background-size:0.2rem 0.2rem;
          display: inline-block;
          vertical-align: middle;
          margin-right:0.1rem;
        }
      }
      .myAllOrder{
        color:#999;
        font-size: 100;
        .lookRight{
          background-image: url(https://secure3.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/advance_bg.png);
          background-size: 0.2rem;
          display: inline-block;
          vertical-align: middle;
          width: 0.2rem;
          height: 0.2rem;
        }
      }
    }
    .block-content{
      width:100%;
      box-sizing: border-box;
      .block-content-lists{
        display:-webkit-flex;
        padding-bottom:0.1rem;
        .block-item {
          flex:1;
          text-align: center;
          display: inline-block;
          text-decoration: none;
          font-size: 0.12rem;
          color: #666;
          i{
            display: block;
            width: 0.24rem;
            height: 0.24rem;
            margin: 0.05rem auto;
            background-size: 0.24rem;
          }
          .unpaid{
            background-image: url(https://secure3.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/unpaid.png);
          }
          .unconfirm {
            background-image: url(https://secure3.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/unconfirm.png);
          }
          .uncomment {
            background-image: url(https://secure3.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/uncomment.png);
          }
          .refund {
            background-image: url(https://secure3.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/refund.png);
          }
        }
      }
    }
  }
  .myAssets{
    width:100%;
    background:#fff;
    box-sizing: border-box;
    margin-bottom:0.1rem;
    .orderTitle{
      display:-webkit-flex;
      justify-content: space-between;
      border-bottom:0.01rem solid #eee;
      .myLists{
        color:#000;
        .assetsPic{
          width:0.2rem;
          height:0.2rem;
          background-image: url(https://secure0.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/myfund.png);
          background-size:0.2rem 0.2rem;
          display: inline-block;
          vertical-align: middle;
          margin-right:0.1rem;
        }
      }
    }
    .block-content{
      width:100%;
      box-sizing: border-box;
      .block-content-lists{
        display:-webkit-flex;
        margin-top:0.1rem;
        padding-bottom:0.1rem;
        .block-item {
          flex:1;
          text-align: center;
          display: inline-block;
          text-decoration: none;
          font-size: 0.12rem;
          color: #666;
        }
      }
    }
  }
  .otherContent{
    width:100%;
    background:#fff;
    .otherLists{
      width:100%;
      box-sizing: border-box;
      .list-item{
        color: #333;
        border-bottom: 1px solid #eaeaea;
        span{
          margin-left:0.1rem;
        }
        .arrow-right {
          float: right;
          background-image: url(https://secure0.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/advance_bg.png);
          background-size: 0.2rem;
          display: inline-block;
          vertical-align: middle;
          width: 0.2rem;
          height: 0.2rem;
        }
        i.list-item-icon {
          display: inline-block;
          vertical-align: middle;
          width: 0.2rem;
          height: 0.2rem;
          background-size: 0.2rem;
        }
        .rmaservice {
          background-image: url(https://secure0.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/rmaservice.png);
        }
        .feedback {
          background-image: url(https://secure0.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/feedback.png);
        }
        .address {
          background-image: url(https://secure0.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/address.png);
        }
        .logout {
          background-image: url(https://secure0.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/logout.png);
        }
        .tel {
          background-image: url(https://secure0.jmstatic.com/static_account/dist/v1.0.10220/images/mobile_usercenter/myjumei/tel.png);
        }
      }
    }
  }
  .hint{
    color: #999;
    font-size: 0.12rem;
    text-align: center;
    margin-top:0.15rem;
    padding-bottom:0.15rem;
  }
}
</style>
