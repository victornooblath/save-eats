<template>
  <q-layout>
    <q-page-container>
      <q-list class="q-pa-sm" style="max-width: 350px">
        <q-item-label header>Seguindo</q-item-label>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Seguidor 1</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Prod:</span>
              Carne
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Local:</span>Lider doca
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 
						<p>1 min ago</p>
						<p style="color: #f35b04">R$10,99</p>
					</q-item-section>
        </q-item>

        <q-separator inset="item" />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Seguidor 2</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Prod:</span>
              Peixe
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Local:</span>Feirinha são bento
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 
						<p>4 min ago</p>
						<p style="color: #f35b04">R$15,59</p>
					</q-item-section>
        </q-item>

        <q-separator inset="item" />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Seguidor 3</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Prod:</span>
              Sabão veja
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Local:</span>Lider umarizal
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 
						<p>6 min ago</p>
						<p style="color: #f35b04">R$5,99</p>
					</q-item-section>
        </q-item>

        <q-separator inset="item" />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Seguidor 4</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Prod:</span>
              detergente veja
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Local:</span>Casa da Limpeza
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 
						<p>7 min ago</p>
						<p style="color: #f35b04">R$7,99</p>
					</q-item-section>
        </q-item>

        <q-separator inset="item" />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Seguidor 5</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Prod:</span>
              feijão preto
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Local:</span>Lider umarizal
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 
						<p>11 min ago</p>
						<p style="color: #f35b04">R$20,99</p>
					</q-item-section>
        </q-item>

        <q-separator inset="item" />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Seguidor 6</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Prod:</span>
              nota pra passar
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold" style="color: #f35b04">Local:</span>Unama
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 
						<p>10 min ago</p>
						<p style="color: #f35b04">6,0PTS</p>
					</q-item-section>
        </q-item>

        <q-separator inset="item" />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Seguidor 2</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Prod:</span>
              Carne
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Local:</span>
              Líder
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 1 min ago </q-item-section>
        </q-item>

        <q-separator inset="item" />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Amigo 1</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Prod:</span>
              Carne
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Local:</span>
              Líder
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 1 min ago </q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Linear Project</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">John</span>
              -- Can we schedule a call for tomorrow?
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 1 min ago </q-item-section>
        </q-item>
      </q-list>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
