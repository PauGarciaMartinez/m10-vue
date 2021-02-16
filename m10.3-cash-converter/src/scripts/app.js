import Modal from "./../components/Modal.vue"

export default {
  name: 'App',
  data() {
    return {
      title: "Currency Converter",
      subtitle: "EUR to USD",
      alternativeTitle: "You have closed the modal",
      input: "",
      input2: "",
      showModal: true
    }
  },
  methods: {
    toggleShowModal() {
      this.showModal = !this.showModal
    }
  },
  components: {
    Modal
  }
}