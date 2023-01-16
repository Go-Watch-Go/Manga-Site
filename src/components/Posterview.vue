<template>
  <section class="popular ms-1">
      <div class="container-fluid">
        <div class="d-flex justify-content-between">
          <h4 class="sectiontitle">Manga</h4>
          <!-- router link -->
          <a href="#" class="seeall sectiontitle">See All</a>
        </div>

        <div class="popularcontainers cons">
          <div class="popularcards">
            <!-- Posters -->
            <div class="bg-info cards" v-for="data in detailArray">
              <img :src="data.backdropImg" class="popularimgs" />
                <div class="popularinfo">
                  <p class="populartitle">{{ data.title }}</p>
                  <p class="populargernes">AA</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import getDetail from "../composable/getDetail"
export default {
  setup(){
    let { load, detailArray, error } = getDetail();

    load("detail");

    return {load,detailArray,error}
  }

 

}
</script>

<style>
section {
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  padding: 0;
}

.sectiontitle {
  color: var(--title-color);
  /* background-color: #08eb69; */
  /* font-size: 20px; */
  margin-left: 25px;

  padding: 30px;
}

.popular {
  width: 100vw;
  height: 450px;
  /* background-color: red; */

  overflow: hidden;
}

.popularcontainers {
  /* background-color: aqua; */
  padding: 20px 0;
  position: relative;

  overflow: hidden;
}

.popularcards {
  /* background-color: rebeccapurple; */
  /* margin-left: 20px; */
  display: flex;
  /* width: 1560px; */

  transition: all 0.2s;
}

.cards{
  width: 200px;
  height: 300px;
  background-color: none;
  border-radius: 15px;
  box-shadow: 0 0 5px #000;

  margin: auto;

  position: relative;

  overflow: hidden;

  cursor: pointer;

  transition: all 0.4s ease;
}

.popularimgs,
.movieimgs,
.animeimgs {
  width: inherit;
  height: inherit;
}

.popularinfo,
.movieinfo,
.animeinfo,
.lastinfo {
  position: absolute;
  bottom: 0;
  left: 10px;

  color: white;

  z-index: 2;
}

.populargernes,
.moviegernes,
.animegernes {
  font-family: "Varela Round", sans-serif;
  font-size: 12px;
  color: var(--textFixed-color);
  font-weight: 400px;
}

.populartitle,
.movietitle,
.animetitle {
  font-size: 18px;
  margin: 0;
}
</style>