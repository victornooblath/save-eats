<template>
  <q-page class="q-px-lg q-py-lg">
    <q-pull-to-refresh @refresh="refresh">
      <div class="row">
        <div class="col-lg">
          <p class="" style="margin-bottom: 0px">{USER_LOCATION}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg">
          <p class="q-my-xs" style="font-size: 15px; margin-bottom: 10px">
            Tenha um otimo dia!{USER}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5 class="col-lg q-mb-xs q-mt-sm" style="color: orange">
            Categorias
          </h5>
        </div>
      </div>
      <div class="row q-col-gutter-sm">
        <div class="col-12" v-for="(post, i) in posts" :key="i">
          <q-card
            @click="
              $router.push({
                name: 'postDetails',
                query: { id: post.id },
              })
            "
          >
            <q-card-section>
              <q-img :src="post.images[0]" :alt="post.name" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
export default {
  name: "Home",
  data() {
    return {
      posts: [],
      slide: 1,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async refresh(done) {
      const res = await this.getData();
      console.log(res)
      if (res) done();
    },
    async getData() {
      const querySnapshot = await getDocs(collection(this.$db, "products"));
      querySnapshot.forEach((doc) => {
        this.posts.push({ ...doc.data(), id: doc.id });
      });
      return true;
    },
  },
};
</script>
