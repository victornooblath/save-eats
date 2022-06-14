<template>
  <q-page class="q-pa-md">
    <div class="row">
      <h5 class="q-mb-xs q-mt-md">{{ postInfo.name }}</h5>
    </div>
    <div class="row">
      <div class="col">
        <q-carousel animated v-model="slide" height="300px" arrows navigation infinite>
          <q-carousel-slide
            v-for="(src, i) in postInfo.images"
            :key="i"
            :name="i+1"
            :img-src="src"
          />
        </q-carousel>
      </div>
    </div>
    <div class="row q-mt-sm">
      <div class="col-8">
         <p class="q-mt-xs q-mb-xs"><q-icon size="md" name="account_box" color="deep-orange" />Postado por: {{this.user.email}}</p>
        <div class="text-subtitle2">
          <q-icon size="md" name="pin_drop" color="deep-orange"/>
          {{ postInfo.location }}
        </div>
      </div>
      <div class="col" align="right">
        <q-btn class="glossy q-mr-sm" round color="secondary" icon="thumb_up" />
        <q-btn class="glossy" round color="red" icon="thumb_down" />
      </div>
    </div>
    <div class="row">
      <div class="col q-mt-sm" style="font-size: 20px">
        De: <span style="text-decoration: line-through;">R${{postInfo.oldPrice}}</span>
      </div>
      <div class="col q-mt-sm" style="font-size: 20px">
        Por: R${{postInfo.newPrice}}
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col " style="font-size: 20px">
        <p>Descrição: {{postInfo.description}}</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { mapState } from "vuex";
export default {
  data() {
    return {
      postInfo: {},
      slide: 1,
      user: {
        email: ""
      },
    };
  },

  async created() {
    const docId = this.$route.query.id;
    const docRef = doc(this.$db, "products", docId);
    const docSnap = await getDoc(docRef);
    this.postInfo = docSnap.data();
    this.getUser()
  },
  methods: {
    async getUser() {
      const q = query(
        collection(this.$db, "users"),
        where("id", "==", this.postInfo.userId)
      );
      console.log(q);
      const querySnapshot = await getDocs(q);
      const user = { email: null, uid: null };
      querySnapshot.forEach((doc) => {
        user.email = doc.data().email;
        user.uid = doc.data().id;
        this.user.email = user.email
      });
    },
  },
  
  computed: {
    ...mapState({
      userEmail: (state) => state.user.email,
    }),
  },
};
</script>

<style></style>
