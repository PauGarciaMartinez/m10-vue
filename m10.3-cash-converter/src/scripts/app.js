import Modal from "./../components/Modal.vue"

export default {
    name: 'App',
    data() {
      return {
        title: "Currency Converter",
        subtitle: "EUR to USD",
        alternativeTitle: "You have closed the modal",
        input: "",
        output: "",
        rate: 1.2123,
        showModal: true
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
      toggleShowModal() {
        this.showModal = !this.showModal
        this.input = ""
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