import Child from "./../../components/Child.vue"

export default {
    name: "Parent",
    data() {
        return {
            message: "I am the parent"
        }
    },
    components: {
        Child
    }
}