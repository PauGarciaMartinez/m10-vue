<!-- TEMPLATE -->
<template>
  <Modal>
    <h1 v-slot:header>{{ title }}</h1>
    <div v-slot:body>
      <input type="text" id="converter"></input>
      <p></p>
    </div>
    <button v:slot:footer>Accept</button>

  </Modal>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/app.js"></script>

<!-- STYLES -->
<style src="./styles/css/app.css"></style>
