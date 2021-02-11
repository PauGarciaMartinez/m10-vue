export default {
    name: "Child",
    data() {
        return {
            items: [
                { id: 1, number: 0 },
                { id: 2, number: 0 },
                { id: 3, number: 0 }
            ],
        }
    },
    props: ["name"]
}