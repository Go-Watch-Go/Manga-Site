<template>
   <carousel :items-to-show="1">
    <slide v-for="slide in dataArray" :key="slide">
        <div class="carousel__item">
          <img :src="slide.img" alt="">
        </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import getData from "../composable/getData"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup(){
      let { load, dataArray, error } = getData();

      load("banner");

      return {load,dataArray,error}
  }
}
</script>

<style>
.carousel__item {
  height: 500px;
  width: 100%;
  background-color: royalblue;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item img{
  width: 100%;
  height: inherit;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>