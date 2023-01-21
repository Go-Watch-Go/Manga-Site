<template>

  

  <div class="summaryInfoContainer">
    <!-- img for backdrop image  -->
    <img v-bind:src="dat.backdropImg" alt="Background Image">
    <!-- Container for information facts  -->
    <div class="textContainer">
      <!-- Content Title  -->
      <h3>{{ dat.title }}</h3>

      <!-- Arthur/ Genre/ Readnow Btn  -->
      <div class="arthur_Genre_Btn_Container">
        <!-- Arthur name and Genre Container  -->
        <div>
          <p>{{ dat.arthur }}</p>
          <p>{{ dat.grene }}</p>
        </div>
        <!-- Read Now Button  -->
        <div>Btn</div>
      </div>
      <!-- Types, Release Date, Number of Chapters, Translator Container  -->
      <div class="releasedate_numofChapter_Translator_Container">
        <!-- Types/ Release Date/ Number of Chapters  -->
        <div>
          <p>{{ dat.type }}</p>
          <p>{{ dat.releasedate }}</p>
          <p>{{ dat.chapternumber }} <span> Chapters</span></p>
        </div>
        <!-- Translator  -->
        <div>
          <p>Translated by - <span>{{ dat.translator }}</span></p>
        </div>
      </div>
      <!-- Content Summary  -->
      <div class="summaryContainer">
        <p>{{ dat.summary }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase/init';
export default {
 setup(){
  let dat = ref([]);

  
  let load = async()=>{
    let res = await getDoc(doc(db, 'detail','s3PElJbCG0QRs1V9hIxp'))

    if(res.exists()){
      // console.log(res.data());
      let storage = res.data();
      console.log(storage.type);
      storage.type = storage.type.charAt(0).toUpperCase() + storage.type.slice(1);
      dat.value = storage;
      
      console.log(storage.type);
      
    }else{
      console.log("Sorry");
    }
  }
  load();
  // console.log(dat);
  // console.log(contentType.value);
  
  return{load,dat}
 }
}
</script>

<style>

</style>