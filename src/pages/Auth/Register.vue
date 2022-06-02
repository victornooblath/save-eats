<template>
  <q-page padding>
    <q-card>
      <q-card-section class="align-items-center">
        <div style="text-align: center">
          <img src="~assets/grupo3.png" :ratio="1" />
          <h4 style="color: #f35b04; margin-bottom: 0px">olá!</h4>
          <span style="color: blue; margin-top: 0px"
            >Seja bem vindo ao Save Eats, o aplicativo que permite que você
            economize enquanto previne desperdício</span
          >
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input
            label="Email"
            type="email"
            v-model="user.email"
            :rules="[
              (val) => !!val || '* Este campo é obrigatório',
              isValidEmail,
            ]"
            color="orange"
            clearable
          />
          <q-input
            label="Senha"
            type="password"
            v-model="user.password"
            :rules="[
              (val) => !!val || '* Este campo é obrigatório',
              (val) =>
                val.length >= 6 ||
                '* A senha precisa conter no minimo 6 caracteres',
            ]"
            color="orange"
            clearable
          />
          <div style="text-align: center; margin-top: 20px">
            <q-btn
              color="deep-orange"
              rounded
              glossy
              :loading="loading"
              label="Cadastrar"
              type="submit"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <p style="text-align: center; margin-top: 10px">
      Ja possui conta?<a @click="$router.push({ name: 'login' })">
        clique aqui!</a
      >
    </p>
  </q-page>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Notify } from "quasar";

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
        Notify.create({
          color: "secondary",
          message: "Usuário Cadastrado!",
          icon: "thumb_up",
          position: "top",
        });
        console.log(uid);
      } catch (err) {
        console.error(err);
        Notify.create({
          color: "negative",
          message: `ERROR!: ${err.code}`,
          icon: "warning",
          position: "top",
        });
      } finally {
        this.loading = false;
        this.user.email = "";
        this.user.password = "";
      }
    },
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "E-mail inválido";
    },
  },
};
</script>
<style scoped></style>
