<!-- TEMPLATE -->
<template>
  <Modal>
    <template v-slot:header>
      <h1>{{ title }}</h1>
    </template>

    <template v-slot:body>
      <p class="subtitle">{{ subtitle }}</p>
      <input type="text" class="converter" v-model="input">
      <p>{{ convertCurrency }}</p>
    </template>
    
    <template v-slot:footer>
      <button class="close-btn">Close</button>
    </template>
  </Modal>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/app.js"></script>

<!-- STYLES -->
<style src="./styles/css/app.css"></style>
