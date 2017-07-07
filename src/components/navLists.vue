<template>
  <div class="navLists" v-positionStatic>
  	<nav class="nav">
  		<router-link v-for="i in navData" class="navItem" :to="i.link+'/'+i.id" active-class="bot">{{i.name}}
      </router-link>
  	</nav>
  </div>
</template> 
<script>
export default {
  name: 'navLists',
  data () {
    return {
    }
  },
  props:["navData"],
  directives: {
    positionStatic: {
      bind (ele) {
        window.onscroll = function(){
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          if(scrollTop>ele.offsetTop){
            ele.className = 'navLists pos';
          }else{
            ele.className = 'navLists';
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pos{
  position: fixed;
  top:0;
  left:0;
  z-index: 100;
}
.navLists{
  width:100%;
  overflow-x:auto;
  border-bottom : 1px solid #eee;
  background:#fff;
  .nav{
    width : 100%;
    height : 100%;
    display:-webkit-box;
    .navItem{
      display:block;
      padding:0.1rem 0.15rem;
      color:#000;
      position:relative;
      font-size: 0.14rem;
      &.bot:after{
  	    content:"";
  	    display:block;
  	    width : 70%;
  	    height: 0.03rem;
  	    background:#fe4070;
  	    position:absolute;
  	    bottom:0;
  	    left:15%;
  	  }
    }
  }
}
</style>
