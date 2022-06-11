<template>
  <q-layout>
    <q-page-container class="q-pa-md">
      <div class="row q-mt-md">
        <div class="col-8">
          <q-input rounded outlined v-model="text" label="Procure" />
        </div>
        <div class="col">
          <q-btn
            class="glossy q-ml-sm"
            round
            color="deep-orange"
            icon="search"
            size=""
            style="height: 55px; width: 55px"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>Resultados:</h5>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style></style>
