<!-- TEMPLATE -->
<template>
  <div class="backdrop">
    <div class="modal">
      <slot name="header"></slot>
      <slot name="body" v-bind="validate(sendInput)"></slot>
      <p v-if="input2 !== ''">{{ convertCurrency }}</p>
      <slot name="footer"></slot>
   </div>
  </div>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/modal.js"></script>

<!-- STYLES -->
<style src="./../styles/css/modal.css" scoped></style>