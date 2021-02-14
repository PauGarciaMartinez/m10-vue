<!-- TEMPLATE -->

<template>
  <h1>Form <span>VUE</span>lidation</h1>
  <form>
    <label>Name</label>
    <input type="text" required v-model="name" :class="{invalid: nameError}" ref="name">
    <small v-if="name">{{ checkName }}</small>
    <small v-else-if="nameError">{{ nameError }}</small>

    <label>Mobile Number</label>
    <input type="number" required v-model="number" :class="{invalid: numberError}" ref="number">
    <small v-if="number">{{ checkNumber }}</small>
    <small v-else-if="numberError">{{ numberError }}</small>

    <label>Postal Code</label>
    <input type="number" required v-model="postcode" :class="{invalid: postcodeError}" ref="postcode">
    <small v-if="postcode">{{ checkPostcode }}</small>
    <small v-else-if="postcodeError">{{ postcodeError }}</small>

    <label>Email</label>
    <input type="email" required v-model="email" :class="{invalid: emailError}" ref="email">
    <small v-if="email">{{ checkEmail }}</small>
    <small v-else-if="emailError">{{ emailError }}</small>

    <label>Password</label>
    <input type="password" required v-model="password" :class="{invalid: passwordError}" ref="password">
    <small v-if="password">{{ checkPassword }}</small>
    <small v-else-if="passwordError">{{ passwordError }}</small>

    <label>Confirm Password</label>
    <input type="password" required v-model="passwordTwo" :class="{invalid: passwordTwoError}" ref="passwordTwo">
    <small v-if="passwordTwo">{{ checkPasswordTwo }}</small>
    <small v-else-if="passwordTwoError">{{ passwordTwoError }}</small>

    <button type="submit" @click.prevent="submitForm(), displayResults()">Submit</button>
  </form>

  <Validation v-if="isValid">
    <template v-slot:results>
      <p><span>Name:</span> {{ name }}</p>
      <p><span>Number:</span> {{ number }}</p>
      <p><span>Postcode:</span> {{ postcode }}</p>
      <p><span>Email:</span> {{ email }}</p>
      <p><span>Password:</span> {{ password }}</p>
    </template>
  </Validation>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/form.js"></script>

<!-- STYLE -->
<style src="./styles/css/form.css"></style>
