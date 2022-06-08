<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div style="text-align: center">
          <h5 style="color: #f35b04; margin-bottom: 0px">
            Bem vindo(a) ao Save Eats
          </h5>
          <span style="color: blue; margin-top: 0px"
            >Faça o login para ter acesso as mais novas promoções perto de
            você!</span
          >
        </div>
        <q-form @submit="logIn">
          <q-input
            label="Email"
            type="email"
            v-model="user.email"
            :rules="[(val) => !!val || '* Este campo é obrigatório']"
            color="orange"
          />
          <q-input
            label="Senha"
            type="password"
            v-model="user.password"
            :rules="[(val) => !!val || '* Este campo é obrigatório']"
            color="orange"
          />
          <div style="text-align: center; margin-top: 20px">
            <q-btn
              color="deep-orange"
              rounded
              glossy
              :loading="loading"
              label="Logar"
              type="submit"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <p style="text-align: center; margin-top: 10px">
      Não possui conta?<a @click="$router.push({ name: 'register' })">
        clique aqui!</a
      >
    </p>
  </q-page>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { mapMutations } from "vuex";
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
    ...mapMutations({
      setUserMutation: "user/setUser",
    }),

    async logIn() {
      this.loading = true;
      try {
        const {
          user: { uid, email },
        } = await signInWithEmailAndPassword(
          this.$auth,
          this.user.email,
          this.user.password
        );
        this.$q.notify({
          color: "secondary",
          message: `Bem vindo(a) de volta ${this.user.email} !`,
          icon: "thumb_up",
          position: "top",
        });
        this.setUserMutation({ uid, email });
        this.$q.localStorage.set("userId", uid);
        this.$router.push({ name: "home" });
      } catch (err) {
        console.error(err);
        this.$q.notify({
          color: "negative",
          message: `ERROR!: ${err.code}`,
          icon: "warning",
          position: "top",
        });
      } finally {
        this.loading = false;
        // this.user.email = "";
        // this.user.password = "";
        console.log(`Logged with ${this.user}`);
      }
    },
  },
};
</script>
