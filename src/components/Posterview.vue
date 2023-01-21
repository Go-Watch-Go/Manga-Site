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
            <div class="bg-info cards mx-2" v-for="data in detailArray">
              <img :src="data.backdropImg" class="popularimgs" />
                <div class="popularinfo">
                  <p class="populartitle py-2">{{ data.title }}</p>
                  <div class="d-flex">
                    <p class="populargernes me-2" v-for="gerne in data.genre">{{ gerne }}</p>
                  </div>
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

  overflow: hidden;
}

.popularcontainers {
  width: 96vw;
  margin: auto;
  padding: 20px 0;
  /* background-color: red; */
  position: relative;

  overflow: hidden;
}

.popularcards {
  max-width: 100vw;
  margin: auto;
  padding: 10px 0;
  /* background-color: aqua; */

  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  /* display: grid;
  max-width: 100vw;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr)); */
  /* grid-template-columns: subgrid; */
}

.cards{
  width: 200px;
  height: 300px;
  background-color: none;
  border-radius: 15px;
  box-shadow: 0 0 5px #000;

  /* margin:auto; */

  position: relative;

  overflow: hidden;

  cursor: pointer;

  transition: all 0.4s ease;
}

.cards::after {
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(33, 33, 33, 0), rgba(15, 15, 15, 1));

  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;
}

.popularimgs {
  width: inherit;
  height: inherit;
}

.popularinfo {
  position: absolute;
  bottom: 0;
  left: 10px;

  color: white;

  z-index: 2;
}

.populargernes {
  font-family: "Varela Round", sans-serif;
  font-size: 12px;
  /* background-color: red; */
  color:var(--textFixed-color);
  font-weight: 400px;
}

.populartitle {
  font-size: 18px;
  margin: 0;
}

@media (hover: hover) {
  .cards:hover,
  .movcards:hover,
  .anicards:hover,
  .lastcards:hover,
  .singleMangaCard:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@media (hover: none) {
  .cards:hover,
  .movcards:hover,
  .anicards:hover,
  .lastcards:hover {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

</style>