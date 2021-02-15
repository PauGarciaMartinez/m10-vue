<!-- TEMPLATE -->
<template>
  <div class="backdrop">
    <div class="modal">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <input type="number" class="converter" v-model.number="input"> 
      <p v-if="input !== ''">{{ convertCurrency }}</p>
      <slot name="footer"></slot>
   </div>
  </div>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/modal.js"></script>

<!-- STYLES -->
<style src="./../styles/css/modal.css" scoped></style>