export default {
  name: "Modal",
  data() {
    return {
      rate: 1.2123,
      input2: ""
    }
  },
  props: ["sendInput"],
  methods: {
    validate(value) {
      this.input2 = value
    },
    currencyEUR() {
      return this.input2.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
      })
    },
    currencyUSD() {
      const usdRate = this.input2 * this.rate
      return usdRate.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      }) 
    },
  },
  computed: {
    convertCurrency() {
      return `${this.currencyEUR()} = ${this.currencyUSD()}`
    }
  }
}