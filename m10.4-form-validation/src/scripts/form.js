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
      numberRegex: /[0-9]/g,
      emailRegex: /([a-zñ\d.-]+)@([a-zñ\d.-]+)\.([a-z]{2,8})/gi,
      passwordRegex: /^(?=.*[ÑA-Z])(?=.*[0-9])(?=.{8,})/
    }
  },
  methods: {
    submitForm() {
      this.name.match(this.nameRegex) ? this.nameError = "" : 
        this.nameError = "Name must be between 6 and 13 letters"

      this.number.match(this.numberRegex) ? this.numberError = "" : 
        this.numberError = "Mobile Number must be only numbers"
      
      this.postcode.match(this.numberRegex) ? this.postcodeError = "" : 
        this.postcodeError = "Postcode must be only numbers"
      
      this.email.match(this.emailRegex) ? this.emailError = "" : 
        this.emailError = "Please introduce a valid email"
      
      this.password.match(this.passwordRegex) ? this.passwordError = "" : 
        this.passwordError = "Password must contain one cap, number and special character"
      
      this.passwordTwo !== this.password ? this.passwordTwoError = "" : 
        this.passwordTwoError = "Passwords don't match"
    }
  },
  computed: {
    dynamicVal() {
      this.name.match(this.nameRegex) ? this.nameError = "" : 
        this.nameError = "Name must be between 6 and 13 letters"
      return this.nameError
    }
  }
}