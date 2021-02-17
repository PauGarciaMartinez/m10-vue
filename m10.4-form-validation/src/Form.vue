<!-- TEMPLATE -->

<template>
  <h1>Form <span>VUE</span>lidation</h1>
  <form>
    
    <Validation :inputName="name" :labelName="nameTitle" :id="'name'" @checkInput="validateInput">
      <input 
        type="text" 
        required 
        v-model="name"> 
    </Validation>
    
    <Validation :inputName="number" :labelName="numberTitle" :id="'number'"> 
      <input 
        type="number"
        required 
        v-model="number">
    </Validation> 
    
    <Validation :inputName="postcode" :labelName="postcodeTitle" :id="'postcode'">
      <input 
        type="number"
        required 
        v-model="postcode">
    </Validation>

    <Validation :inputName="email" :labelName="emailTitle" :id="'email'">
      <input 
        type="email" 
        required 
        v-model="email">
    </Validation>
    
    <Validation :inputName="password" :labelName="passwordTitle" :id="'password'">
      <input 
        type="password"
        required 
        v-model="password">
    </Validation>

    <Validation :inputName="passwordTwo" :labelName="passwordTwoTitle" :id="'passwordTwo'" :pass="password">
      <input 
        type="password"
        required 
        v-model="passwordTwo">
    </Validation>

    <button type="submit" @click.prevent="submitForm">Submit</button>

  </form>

  
  <!--<template v-if="displayResults">
      <p><span>Name:</span> {{ name }}</p>
      <p><span>Number:</span> {{ number }}</p>
      <p><span>Postcode:</span> {{ postcode }}</p>
      <p><span>Email:</span> {{ email }}</p>
      <p><span>Password:</span> {{ password }}</p>
    </template> -->
 
</template> 

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/form.js"></script>

<!-- STYLE -->
<style src="./styles/css/form.css"></style>