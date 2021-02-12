import Modal from "./../components/Modal.vue"

export default {
    name: 'App',
    data() {
      return {
        title: "Currency Converter",
        subtitle: "EUR to USD",
        input: "",
        output: "",
        rate: 1.2123,
        regex: /^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/
      }
    },
    methods: {
      currencyEUR() {
        return this.input.toLocaleString("es-SP", {
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
      }
    },
    computed: {
      convertCurrency() {
        return this.output = `${this.currencyEUR()}  =  ${this.currencyUSD()}`
      }
    },
    components: {
      Modal
    }
  }