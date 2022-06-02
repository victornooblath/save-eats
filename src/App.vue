<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { getDocs, collection } from "firebase/firestore";
export default {
  name: "App",
  async mounted() {
    const collectionRef = collection(this.$db, "cities");
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      console.log({ id: doc.id, data: doc.data() });
    });
  },
};
</script>
