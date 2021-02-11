<!-- TEMPLATE -->
<template>
  <Modal>
    <template v-slot:header>
      <h1>{{ title }}</h1>
    </template>
    <template v-slot:body>
      <input type="text" id="converter">
      <p></p>
    </template>
    <template v:slot:footer>
      <button>Close</button>
    </template>
    

  </Modal>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/app.js"></script>

<!-- STYLES -->
<style src="./styles/css/app.css"></style>
