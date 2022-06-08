<template>
  <div>
    {{ JSON.stringify(postInfo) }}
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
export default {
  data() {
    return {
      postInfo: {},
    };
  },
  async created() {
    const docId = this.$route.query.id;
    const docRef = doc(this.$db, "products", docId);
    const docSnap = await getDoc(docRef);
    this.postInfo = docSnap.data();
  },
};
</script>

<style></style>
