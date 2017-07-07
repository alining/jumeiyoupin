<template>
  <div class="swiper-container  my-swiper">
		<div class="swiper-wrapper">
		  <div class="swiper-slide"><img src="http://mp5.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1497076311.jpeg?imageView2/2/w/640/q/90"></div>
		  <div class="swiper-slide"><img src="http://mp5.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1497323138.jpeg?imageView2/2/w/640/q/90"></div>
		</div>
	  <div class="swiper-pagination"></div>	
  </div>
</template>
<script>
import Swiper from '@/lib/swiper/js/swiper.js'
import '@/lib/swiper/css/swiper.min.css'
export default {
  name:"SwiperBar",
  data () {
  	return {
  	  objSwiper:''	
  	}
  },
  mounted () {
    this.objSwiper = new Swiper(this.$el,{
      // autoplay: 1500,
      pagination: '.swiper-pagination',
      paginationClickable: true
    })	
  },
  updated () {
    this.objSwiper.update()
  }
}	
</script>
<style lang="less">
.my-swiper {
  width:100%;
}
.my-swiper .swiper-slide img{
  display:block;
  width : 100%;
}
.my-swiper .swiper-pagination{
  z-index:1000;
  position:absolute;
  right:0;
}
.my-swiper .swiper-pagination .swiper-pagination-bullet{
  background : #fff;
  -webkit-transtion:width 1s ease-out;
}
.my-swiper .swiper-pagination .swiper-pagination-bullet-active{
  background : #ed145b;
}
</style>