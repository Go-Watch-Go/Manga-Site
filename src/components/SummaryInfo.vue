<template>
  <h1>Summary Info</h1>
  <h3>{{dat.title}}</h3>
</template>

<script>
import {ref} from "vue";
import {doc, getDoc} from 'firebase/firestore';
import db from '../firebase/init';
export default {
 setup(){
  let dat = ref('');
  let load = async()=>{
    let res = await getDoc(doc(db, 'detail','s3PElJbCG0QRs1V9hIxp'))

    if(res.exists()){
      // console.log(res.data());
      let storage = res.data();
      dat = storage;
      console.log(dat.arthur);
    }else{
      console.log("Sorry");
    }
  }
  load();
  
  return{load,dat}
 }
}
</script>

<style>

</style>