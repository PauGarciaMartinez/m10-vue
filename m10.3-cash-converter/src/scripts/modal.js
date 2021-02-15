export default {
  name: "Modal",
  data() {
    return {
      input: "",
      rate: 1.2123
    }
  },
  methods: {
    currencyEUR() {
      return this.input.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
      })
    },
    currencyUSD() {
      const usdRate = this.input * this.rate
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