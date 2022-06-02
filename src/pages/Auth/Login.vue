<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <h1 @click="$router.push({ name: 'register' })">Register</h1>
      </q-card-section>
      <q-card-section>
        <q-form @submit="logIn">
          <q-input type="email" v-model="user.email" />
          <q-input type="password" v-model="user.password" />
          <q-btn :loading="loading" label="Submit" type="submit" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
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
    async logIn() {
      this.loading = true;
      try {
        const user = await signInWithEmailAndPassword(
          this.$auth,
          this.user.email,
          this.user.password
        );
        console.log(user);
        
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
        this.user.email = "";
        this.user.password = "";
        console.log(`Logged with ${this.user}`)
      }
    },
  },
};
</script>

