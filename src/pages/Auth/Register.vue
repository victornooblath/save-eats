<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <h1 @click="$router.push({ name: 'login' })">Login</h1>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input type="email" v-model="user.email" />
          <q-input type="password" v-model="user.password" />
          <q-btn :loading="loading" label="Submit" type="submit" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async setUserDoc(userId) {
      const collectionRef = collection(this.$db, "users");
      const docRef = await addDoc(collectionRef, {
        email: this.user.email,
        id: userId,
      });
      console.log(docRef);
    },
    async onSubmit() {
      this.loading = true;
      try {
        const {
          user: { uid },
        } = await createUserWithEmailAndPassword(
          this.$auth,
          this.user.email,
          this.user.password
        );
        this.setUserDoc(uid);
        console.log(uid);
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
        this.user.email = "";
        this.user.password = "";
      }
    },
  },
};
</script>
