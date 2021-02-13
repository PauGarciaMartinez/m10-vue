<!-- TEMPLATE -->
<template>

  <template v-if="showModal">
    <Modal>
      <template v-slot:header>
        <h1>{{ title }}</h1>
      </template>

      <template v-slot:body>
        <p class="subtitle">{{ subtitle }}</p>
        <input type="number" class="converter" v-model.number="input">
        <p v-if="input !== ''">{{ convertCurrency }}</p>
      </template>
      
      <template v-slot:footer>
        <button @click="toggleShowModal" class="modal-btn">Close</button>
      </template>
    </Modal>
  </template>

  <template v-else>
    <div class="open-container">
      <img src="./assets/money.jpg" class="money">
      <h2>{{ alternativeTitle }}</h2>
      <button @click="toggleShowModal" class="modal-btn">Open</button>
    </div>
  </template>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/app.js"></script>

<!-- STYLES -->
<style src="./styles/css/app.css"></style>
