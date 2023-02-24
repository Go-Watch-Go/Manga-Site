<template>
  <div class="firstrows px-4">
      <p class="animes">Webtoon</p>
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
.firstrows {
  margin-top: 10px;
}

.animes {
  font-family: Varela Round;
  color: var(--textFixed-color);
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
}


</style>

