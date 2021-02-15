import Modal from "./../components/Modal.vue"

export default {
  name: 'App',
  data() {
    return {
      title: "Currency Converter",
      subtitle: "EUR to USD",
      alternativeTitle: "You have closed the modal",
      showModal: true
    }
  },
  methods: {
    toggleShowModal() {
      this.showModal = !this.showModal
      this.input = ""
    }
  },
  components: {
    Modal
  }
}