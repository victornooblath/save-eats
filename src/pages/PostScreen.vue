<template>
  <q-card class="items-strech" style="">
    <q-bar class="bg-deep-orange text-white">
      Nova Postagem
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>
    <q-card-section class="items-strech q-pt-none">
      <q-form @submit="onSubmit">
        <div class="row">
          <div class="col">
            <q-input
              type="text"
              v-model="prod.name"
              label="Nome do Produto"
              color="deep-orange"
              :rules="[(val) => !!val || '* Este campo é obrigatório']"
            />
            <q-input
              type="text"
              v-model="prod.description"
              label="Descrição"
              color="deep-orange"
              :rules="[(val) => !!val || '* Este campo é obrigatório']"
            />
          </div>
        </div>
        <div class="row">
          <p class="col-lg q-mb-xs">Preço:</p>
        </div>
        <div class="row">
          <div class="col q-mr-md">
            <q-input
              type="number"
              v-model="prod.oldPrice"
              label="De"
              color="deep-orange"
              :rules="[(val) => !!val || '* Este campo é obrigatório']"
            />
          </div>
          <div class="col">
            <q-input
              type="number"
              v-model="prod.newPrice"
              label="Por"
              color="deep-orange"
              :rules="[(val) => !!val || '* Este campo é obrigatório']"
            />
          </div>
        </div>
        <div class="row">
          <p class="col-lg q-mb-xs">Localização:</p>
        </div>
        <div class="row">
          <div class="col-sm q-mr-md">
            <q-btn class="glossy q-mt-sm" color="deep-orange" icon="room" />
          </div>
          <div class="col">
            <q-input
              type="text"
              v-model="prod.location"
              label="Nome do Estabelecimento"
              color="deep-orange"
              :rules="[(val) => !!val || '* Este campo é obrigatório']"
            />
          </div>
        </div>
        <div class="row">
          <p class="col-lg q-mb-xs">Foto do produto</p>
        </div>
        <div class="row">
          <div class="col">
            <q-file
              color="deep-orange"
              v-model="prod.files"
              max-files="3"
              accept=".jpg, image/*"
              filled
              multiple
              counter
              use-chips
              :rules="[(val) => !!val || '* Este campo é obrigatório']"
            >
              <template v-slot:prepend>
                <q-icon name="add_a_photo" color="deep-orange" size="md" />
              </template>
            </q-file>
          </div>
        </div>
        <div class="row">
          <p class="col-lg q-mb-xs q-mt-sm">Categorias:</p>
        </div>
        <div class="row">
          <div class="col">
            <q-select
              label="Selecione a(s) categoria(s)"
              transition-show="scale"
              transition-hide="scale"
              outlined
              v-model="prod.category"
              :options="prodOptions"
              multiple
              color="deep-orange"
              :rules="[(val) => !!val || '* Este campo é obrigatório']"
            />
          </div>
        </div>
        <div style="text-align: center">
          <q-btn
            class="q-px-lg q-mt-0px"
            color="deep-orange"
            rounded
            glossy
            :loading="loading"
            label="Publicar"
            type="submit"
            size="lg"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { mapState } from "vuex";
export default {
  data() {
    return {
      prod: {
        name: "",
        description: "",
        oldPrice: "",
        newPrice: "",
        location: "",
        files: null,
        category: null,
        time: null,
      },
      dialog: false,
      loading: false,
      prodOptions: [
        "Hortifruti",
        "Higiene Pessoal",
        "Limpeza",
        "Bebidas",
        "Outros",
      ],
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.user.id,
    }),
  },
  methods: {
    async onSubmit() {
      const images = [];
      this.loading = true;
      this.prod.files.forEach(async (file, index) => {
        const storageRef = ref(this.$storage, `posts/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        images.push(url);
        if (index === this.prod.files.length - 1) setPost();
      });

      const setPost = async () => {
        this.prod.time = serverTimestamp();
        console.log(images);
        const cloneProd = { ...this.prod, images, userId: this.userId };
        delete cloneProd.files;
        const docRef = await addDoc(
          collection(this.$db, "products"),
          cloneProd
        );
        console.log(docRef);
        if (!!docRef.id) {
          this.$q.notify({
            message: "Post criado com sucesso",
            type: "positive",
            position: "top",
          });
        } else
          this.$q.notify({
            message: "Erro ao criar post",
            type: "negative",
            position: "top",
          });
        this.loading = false;
        this.$router.back();
      };
    },
  },
};
</script>
