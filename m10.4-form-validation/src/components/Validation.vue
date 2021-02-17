<!-- TEMPLATE -->

<template>
  <label>{{ labelName }}</label>
  <slot v-bind="validateInput(inputName, id, pass)" @keyup="checkInput"></slot>
  <small v-if="!isValid && input2 !== ''">{{ inputError }}</small>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/validation.js"></script>

<!-- STYLE -->
<style src="./../styles/css/validation.css"></style>
