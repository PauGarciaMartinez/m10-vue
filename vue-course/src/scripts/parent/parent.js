import Child from "./../../components/Child.vue"

export default {
    name: "Parent",
    props: {
        msg: String
    },
    components: {
        Child
    }
}