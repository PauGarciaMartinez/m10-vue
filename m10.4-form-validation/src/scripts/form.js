import Validation from "./../components/Validation.vue"

export default {
  name: 'Form',
  components: { Validation },
  data() {
    return {
      name: "",
      number: "",
      postcode: "",
      email: "",
      password: "",
      passwordTwo: "",

      nameTitle: "Name",
      numberTitle: "Mobile Number",
      postcodeTitle: "Postal Code",
      emailTitle: "Email",
      passwordTitle: "Password",
      passwordTwoTitle: "Confirm your password",

      isValid: false
    }
  },
  methods: {
/*     submitForm() {
      this.name.match(this.nameRegex) ? this.nameError = "" : 
        this.nameError = "Name must be between 6 and 13 letters"
    
      this.number.match(this.numberRegex) ? this.numberError = "" : 
        this.numberError = "Mobile Number must be between 5 and 9 numbers"
      
      this.postcode.match(this.numberRegex) ? this.postcodeError = "" : 
        this.postcodeError = "Postcode must be between 5 and 9 numbers"
      
      this.email.match(this.emailRegex) ? this.emailError = "" : 
        this.emailError = "Please introduce a valid email"
      
      this.password.match(this.passwordRegex) ? this.passwordError = "" : 
        this.passwordError = "Password must contain one cap, number and special character"
    
      this.passwordTwo !== this.password ? this.passwordTwoError = "" : 
        this.passwordTwoError = "Passwords don't match"
    }, */
    validateInput(isValid) {
      this.isValid = isValid
      console.log(this.isValid)
    }
  }
}