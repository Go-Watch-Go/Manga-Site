<template>
   <carousel :items-to-show="1">
    <slide v-for="slide in dataArray" :key="slide">
        <div class="carousel__item">
          <img :src="slide.img" alt="#" class="bannerBg">
          <div class="row contentContainer">
              <div class="col-9 col-md-8 contentTitle">
                <h2 class="contentName py-2">{{ slide.name }}</h2>
                <p class="overviewText pt-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nesciunt consequuntur culpa. Quod doloribus ipsum ut ea aspernatur, libero vitae amet culpa ducimus dolore cumque dolorem dignissimos vero minima officiis?
                </p>
              </div>

              <!-- Miniposter Container  -->
              <div class="col-3 col-md-4 miniPosterContainer bg-danger">
                <img
                    class="miniPoster"
                    src="#"
                    alt="Mini Poster"
                />
              </div>
            
          </div>
        </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination/>
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

  display: flex;
  /* justify-content: center; */
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  /* transform: scale(1.5); */
  background-color: #08eb69;
  /* color:red; */
}

.bannerBg {
  padding: 0;
  margin: 0;
  width: 105%;
  height: 500px;
  position: relative;
  /* -webkit-backdrop-filter: blur(25px) !important; */
  /* backdrop-filter: blur(25px) !important; */
  background-position: center center !important;
  background-size: contain !important;
  filter: opacity(70%);
  z-index: 0 !important;
}

.bannerBg::after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(15, 15, 15, 0.5);
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1 !important;
}

.contentContainer {
  /* background-color: red; */
  width:80%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}

.contentTitle {
  text-align: justify;
  z-index: 2 !important;
  color: #fff;
  /* margin:left; */
}

.contentName{
  font-weight: bold;
  text-shadow: 5px 5px 5px #000;
}

.overviewText{
  font-size: 19px;
}

.miniPosterContainer {
  /* width: 10rem; */
  height: 14rem;

  border-radius: 15px;

  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  /* margin-left: 6rem !important; */
  /* margin-right: -8rem !important; */
}

.miniPoster {
  width: 10rem;
  height: 100%;
  border-radius: 15px;
}

/* For Banner Responsive Section  */
@media (max-width: 600px) {
  .bannerContainer {
    margin-top: 4.3rem;
  }
  .bannerBg {
    max-width: 100%;
   
    object-fit: fill;
    background-size: cover !important;
  }

  .contentContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: red; */

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .contentTitle {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .contentName {
    margin-bottom: 1rem;
  }

  .overviewText {
    font-size: 15px;
  }

  .miniPosterContainer {
    display: none !important;
  }

  .miniPoster {
    display: none !important;
  }
}

@media (min-width: 601px) and (max-width: 1080px) {
  .overviewText {
    font-size: 14px;
  }

  .contentContainer {
    position: absolute;
    top: 40%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .contentTitle {
    /* margin-left: 5rem !important; */
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .miniPosterContainer {
    /* margin-right: 3rem; */
    transform: scale(0.85);
  }
}  

</style>