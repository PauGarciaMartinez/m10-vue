export default {
  name: "Validation",
  props: ["inputName", "labelName", "id", "pass"],
  emits: ["checkInput"],
  data() {
    return {
      input2: "",
      inputError: "",
      isValid: false,

      nameRegex: /[ña-z]{6,13}/gi,
      numberRegex: /[0-9]{5,9}/g,
      emailRegex: /([a-zñ\d.-]+)@([a-zñ\d.-]+)\.([a-z]{2,8})/gi,
      passwordRegex: /^(?=.*[ÑA-Z])(?=.*[0-9])(?=.{6,13})/g
    }
  },
  methods: {
    validateInput(inputName, id, pass) {
      this.input2 = inputName

      if (id === "name") {
        if (this.input2.match(this.nameRegex)) {
          this.isValid = true
        } else {
          this.inputError = "Name must be between 6 and 13 letters"
          this.isValid = false
        }
      }
      if (id === "number") {
        if (this.input2.match(this.numberRegex)) {
          this.isValid = true
        } else {
          this.inputError = "Mobile Number must be between 5 and 9 numbers"
          this.isValid = false
        }
      }
      if (id === "postcode") {
        if (this.input2.match(this.numberRegex)) {
          this.isValid = true
        } else {
          this.inputError = "Postcode must be between 5 and 9 numbers"
          this.isValid = false
        }
      }
      if (id === "email") {
        if (this.input2.match(this.emailRegex)) {
          this.isValid = true
        } else {
          this.inputError = "Please introduce a valid email"
          this.isValid = false
        }
      }
      if (id === "password") {
        if (this.input2.match(this.passwordRegex)) {
          this.isValid = true
        } else {
          this.inputError = "Password must contain one cap, number and special character"
          this.isValid = false
        }
      }
      if (id === "passwordTwo") {
        console.log(this.input2)
        console.log("pass:",pass)
        if (this.input2 === pass) {
          this.isValid = true
        } else {
          this.inputError = "Passwords don't match"
          this.isValid = false
        }
      }
    },
    checkInput() {
      this.$emit("checkInput", this.isValid)
    }
  }
}