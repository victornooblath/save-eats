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
          <h5
            class="col-lg q-mb-xs q-mt-sm"
            style="color: orange; text-align: center"
          >
            Categorias
          </h5>
          <div class="row category-container no-wrap">
            <div v-for="(item, i) in items" :key="i" class="category">
              <q-img :src="item.img" width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
      <h5
        class="col-lg q-mb-xs q-mt-sm"
        style="color: #ff5722; text-align: left; margin-top: 50px"
      >
        Feed
      </h5>
      <div class="row q-col-gutter-sm">
        <div class="col-12 q-mb-md" v-for="(post, i) in posts" :key="i">
          <q-card
            @click="
              $router.push({
                name: 'postDetails',
                query: { id: post.id },
              })
            "
            flat
            bordered
            class="my-card"
          >
            <q-card-section horizontal>
              <q-img class="col-5" :src="post.images[0]" :alt="post.name" />

              <q-card-section>
                <div class="text-h6">{{ post.name }}</div>
                <div class="text-subtitle2">
                  {{ post.location }}
                </div>
                <div class="text-subtitle2">
                  {{ getDate(post.time.toDate()) }}
                </div>
                <div class="text-subtitle2" style="color: #ff5722">
                  R$ {{ post.newPrice }}
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script>
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useDate } from "../../utils";
export default {
  name: "Home",
  data() {
    return {
      posts: [],
      slide: 1,
      items: [
        {
          img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async refresh(done) {
      const res = await this.getData();
      console.log(res);
      if (res) done();
    },
    async getData() {
      const orderRef = collection(this.$db, "products");
      const q = query(orderRef, orderBy("time", "desc"));
      const querySnapshot = await getDocs(q);
      console.log(q);
      this.posts = [];
      querySnapshot.forEach((doc) => {
        this.posts.push({ ...doc.data(), id: doc.id });
        // const currentTime = new Date(posts.time).toLocaleString();
        // console.log(currentTime);
      });
      console.log(this.posts);
      return true;
    },
    getDate(dateObj) {
      // const {date,month,year} = useDate.getDate(dateObj)
      // return `${date}/${month}/${year}`
      return dateObj.toLocaleDateString("pt-BR");
    },
  },
};
</script>
<style scoped>
.category {
  width: 180px;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 5px;
}
.category-container {
  width: 100%;
  overflow: auto;
  height: 100px;
}

.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
