import Child from "./../components/Child.vue"

export default {
    name: "Parent",
    data(){
        return {
            message: "Parent component",
            name: "Item"
        }
    },
    components: {
        Child
    } 
}