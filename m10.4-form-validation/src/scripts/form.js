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

      nameError: "",
      numberError: "",
      postcodeError: "",
      emailError: "", 
      passwordError: "",
      passwordTwoError: "",

      nameRegex: /[ña-z]{6,13}/gi,
      numberRegex: /[0-9]{5,9}/g,
      emailRegex: /([a-zñ\d.-]+)@([a-zñ\d.-]+)\.([a-z]{2,8})/gi,
      passwordRegex: /^(?=.*[ÑA-Z])(?=.*[0-9])(?=.{6,13})/g,

      isValid: false
    }
  },
  methods: {
    submitForm() {
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
    },
    displayResults() {
      this.isValid = false
      
      if (!this.$refs.name.classList.contains("invalid") && 
      !this.name == "" &&
      !this.$refs.number.classList.contains("invalid") && 
      !this.number == "" &&
      !this.$refs.postcode.classList.contains("invalid") && 
      !this.postcode == "" &&
      !this.$refs.email.classList.contains("invalid") && 
      !this.email == "" &&
      !this.$refs.password.classList.contains("invalid") && 
      !this.password == "" &&
      !this.$refs.passwordTwo.classList.contains("invalid") &&
      !this.passwordTwo == "") {

        this.isValid = true
      }
    }
  },
  computed: {
    checkName() {
      this.name.match(this.nameRegex) ? this.nameError = "" : 
        this.nameError = "Name must be between 6 and 13 letters"
      return this.nameError
    },
    checkNumber() {
      this.number.match(this.numberRegex) ? this.numberError = "" : 
        this.numberError = "Mobile Number must be between 5 and 9 numbers"
      return this.numberError
    },
    checkPostcode() {
      this.postcode.match(this.numberRegex) ? this.postcodeError = "" : 
        this.postcodeError = "Postcode must be between 5 and 9 numbers"
      return this.postcodeError
    },
    checkEmail() {
      this.email.match(this.emailRegex) ? this.emailError = "" : 
        this.emailError = "Please introduce a valid email"
      return this.emailError
    },
    checkPassword() {
      this.password.match(this.passwordRegex) ? this.passwordError = "" : 
        this.passwordError = "Password must contain one cap, number and special character"
      return this.passwordError
    },
    checkPasswordTwo() { 
      this.passwordTwo === this.password ? this.passwordTwoError = "" : 
        this.passwordTwoError = "Passwords don't match"
      return this.passwordTwoError
    }
  }
}