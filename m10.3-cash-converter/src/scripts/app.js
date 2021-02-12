import Modal from "./../components/Modal.vue"

export default {
    name: 'App',
    data() {
      return {
        title: "Currency Converter",
        subtitle: "EUR to USD",
        input: "",
        output: ""
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
        return this.input.toLocaleString( "en-US", {
          style: "currency",
          currency: "USD"
        })
      }
    },
    computed: {
      convertCurrency() {
        return this.output = `${this.currencyEUR()} = ${this.currencyUSD()}`
      }
    },
    components: {
      Modal
    }
  }