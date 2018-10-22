/**
 *  针对v2版本 https://github.com/ktquez/vue-head
 * @param Vue
 * @param options
 */
const vueHead = (Vue, options) => {
    Vue.mixin({
        mounted() {
            init.call(this);
        },
        beforeDestroy() {
            destroy.call(this);
        }
    });


};

const init = () => {
    let head = (typeof this.$option.head === 'function' ? this.$option.head.call(this) : this.$option.head);
    if(!head) return;
    Object.keys(head).forEach((key) => {

    })
};

const destroy = () => {

};

export default vueHead;