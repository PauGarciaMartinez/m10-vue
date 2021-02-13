<!-- TEMPLATE -->

<template>
  <h1>Form <span>VUE</span>lidation</h1>
  <form>
    <label>Name</label>
    <input type="text" required v-model="name" :class="{invalid: nameError}">
    <small v-if="name">{{ dynamicVal }}</small>
    <label>Mobile Number</label>
    <input type="number" required v-model="number" :class="{invalid: numberError}">
    <small v-if="numberError">{{ numberError }}</small>
    <label>Postal Code</label>
    <input type="number" required v-model="postcode" :class="{invalid: postcodeError}">
    <small v-if="postcodeError">{{ postcodeError }}</small>
    <label>Email</label>
    <input type="email" required v-model="email" :class="{invalid: emailError}">
    <small v-if="emailError">{{ emailError }}</small>
    <label>Password</label>
    <input type="password" required v-model="password" :class="{invalid: passwordError}">
    <small v-if="passwordError">{{ passwordError }}</small>
    <label>Confirm Password</label>
    <input type="password" required v-model="passwordTwo" :class="{invalid: passwordTwoError}">
    <small v-if="passwordTwoError">{{ passwordTwoError }}</small>
    <button type="submit" @click.prevent="submitForm">Submit</button>
  </form>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/form.js"></script>

<!-- STYLE -->
<style src="./styles/css/form.css"></style>
