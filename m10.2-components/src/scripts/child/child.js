export default {
    name: "Child",
    data() {
        return {
            items: [
                { name: "Item1", number: 0 },
                { name: "Item2", number: 0 },
                { name: "Item3", number: 0 }
            ],
        }
    },
    methods: {
        addMore() {
            return this.number = this.number++
        }
    }
}