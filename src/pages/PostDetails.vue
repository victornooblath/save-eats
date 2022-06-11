<template>
  <q-page class="q-pa-md">
    <div class="row">
      <h5 class="q-mb-xs q-mt-md">{{ postInfo.name }}</h5>
    </div>
    <div class="row">
      <div class="col">
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide
            v-for="(src, i) in postInfo.images"
            :key="i"
            :name="i"
            :img-src="src"
          />
        </q-carousel>
      </div>
    </div>
    <div class="row q-mt-sm">
      <div class="col-8">
        <h5 class="q-mt-xs q-mb-xs">Postado por: {{userEmail}}</h5>
        <div class="text-subtitle2">
          {{ postInfo.location }}
        </div>
      </div>
      <div class="col" align="right">
        <q-btn class="glossy q-mr-sm" round color="secondary" icon="thumb_up" />
        <q-btn class="glossy" round color="red" icon="thumb_down" />
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col">
        <p><b>comentarios:</b></p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { mapState } from "vuex";
export default {
  data() {
    return {
      postInfo: {},
      slide: 1,
    };
  },

  async created() {
    const docId = this.$route.query.id;
    const docRef = doc(this.$db, "products", docId);
    const docSnap = await getDoc(docRef);
    this.postInfo = docSnap.data();
    console.log(this.postInfo);
  },
  computed: {
    ...mapState({
      userEmail: (state) => state.user.email,
    }),
  },
};
</script>

<style></style>
