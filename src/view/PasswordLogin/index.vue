<template>
  <div class="signInBox">
    <div class="header p">
      <router-link to="/My" class="left"><i></i></router-link>
      <p>登录</p>
      <router-link to="/SignIn" class="login"><i>注册</i></router-link>
    </div>
    <div class="tit">
      <span class="line"></span>
      <p>使用手机登录</p>
    </div>
    <div class="content">
      <div class="phone">
        <input type="phone" placeholder="请输入11位手机号">
      </div>
      <div class="password">
        <input type="password" placeholder="请输入6-16位登录密码">
      </div>
      <div class="account">
        <router-link to="/Login"><p class="accountLeft">使用手机短信码登录</p></router-link>
        <p class="accountRight">30天内自动登录</p>
      </div>
      <div class="signup">
        <button>登录</button>
      </div>
    </div>
  </div>
  
</template>

<script>



export default {
  name: 'SignIn',
  data () {
    return {
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.signInBox{
  width:100%;
  .header{
    text-align: center;
    border-bottom:0.01rem solid #eee;
    p{
      font-size: 0.18rem;
    }
    .left{
      background: url(https://secure1.jmstatic.com/static_passport/dist/20170419/touch/login_series/images/NavButtonBack_new.png) no-repeat left center;
      background-size:0.15rem 0.25rem;
      position: absolute;
      left: 0.1rem;
      top: 0.15rem;
      width: 0.15rem;
      height: 0.15rem;
    }
    .login{
      position: absolute;
      right: 0.15rem;
      top: 0.15rem;
      font-size: 0.14rem;
    }
  }
  .tit{
    position:relative;
    text-align: center;
    span{
      display:inline-block;
      height:0.01rem;
      width:60%;
      background:#eee;
      margin-top:0.3rem;
    }
    p{
      padding:0.05rem;
      position:absolute;
      top:45%;
      left:35%;
      background:#fff;
      font-size: 0.14rem;
      color:#999;
    }
  }
  .content{
    margin-top:0.3rem;
    .phone{
      text-align: center;
      input{
        width:70%;
        background:#efefef;
        border-radius: 0.2rem;
        padding:0.1rem 0.2rem;
        border:0;
        font-size: 0.14rem;
      }
    }
    .authCode{
      display:-webkit-flex;
      text-align: center;
      margin-top:0.2rem;
      margin-left:9%;
      input{
        width:45%;
        background:#efefef;
        border-radius: 0.2rem;
        padding:0.1rem 0.2rem;
        border:0;
        font-size: 0.14rem;
      }
      .btn{
        background: #ffffff;
        border: 0.01rem solid #feb2c5;
        color: #feb2c5;
        text-align: center;
        border-radius: 0.3rem;
        font-size:0.14rem;
        width:25%;
        margin-left:5%;
        font-weight: 600;
      }
    }
    .password{
      text-align: center;
      margin-top:0.2rem;
      input{
        width:70%;
        background:#efefef;
        border-radius: 0.2rem;
        padding:0.1rem 0.2rem;
        border:0;
        font-size: 0.14rem;
      }
    }
    .signup{
      text-align: center;
      margin-top:0.2rem;
      button{
        width:83%;
        border-radius: 0.2rem;
        padding:0.1rem 0.2rem;
        border:0;
        font-size: 0.14rem;
        background: #feb2c5!important;
        font-size: 0.14rem;
        color: #ffffff;
        font-weight: 600;
      }
    }
    .account{
      display:-webkit-flex;
      width:81%;
      margin-left:10%;
      margin-top:0.2rem;
      .accountLeft{
        color: #fe4070;
      }
      .accountRight{
        color: #999999;
        margin-left:25%;
      }
    }
  }
}
</style>
