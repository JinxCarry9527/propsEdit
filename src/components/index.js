export default {
    watch: {
        msg() {
            this.click();
        },
        $route() {
            this.click();
        }
    },
    data() {
        return {
            msg: 'msg'
        }
    },
    methods: {
        click() {
            console.debug(123)
        }
    }
}