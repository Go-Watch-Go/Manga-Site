import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/init";

let detailArray = ref([]);
let error = ref("");

let getDetail = () => {
  return { load, detailArray, error };
};

let load = async (data) => {
  try {
    let res = await getDocs(collection(db, data));
    detailArray.value = res.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (err) {
    console.log(err);
    error.value = err;
  }
};

export default getDetail;
