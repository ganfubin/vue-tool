/**
 *  针对v2版本 https://github.com/ktquez/vue-head
 * @param Vue
 * @param options
 */


/**
 * 支持这五种常见的写法
 * @type {{title: ((title?)), meta: ((meta?)), link: ((link)), script: ((script)), style: ((style))}}
 * @private
 */

const _head = {
    /**
     * title 标题 String
     * @param title
     */
    title(title) {
        if (Object.prototype.toString.call(title) === '[object String]') {
            window.document.title = title;
        }
    },
    /**
     * meta Array
     * @param meta
     */
    meta(meta) {
        if (Object.prototype.toString.call(meta) === '[object Array]') {

        }

    },
    /**
     * link Array
     * @param link
     */
    link(link) {

    },
    /**
     * script Array
     * @param script
     */
    script(script) {

    },
    /**
     * style Array
     * @param style
     */
    style(style) {

    }
};

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

/**
 * dom 生成时的初始化方法
 */
const init = () => {
    let head = (typeof this.$option.head === 'function' ? this.$option.head.call(this) : this.$option.head);
    if (!head) return;
    Object.keys(head).forEach((key) => {
        let prop = head[key];
        prop && (_head[key].call(this, prop));
    })
};

/**
 * dom 销毁时方法
 */
const destroy = () => {
    let head = (typeof this.$option.head === 'function' ? this.$option.head.call(this) : this.$option.head);
    Object.keys(head).forEach((key) => {
        let prop = head[key];
        prop && (_head[key].call(this, getDataType(prop)));
    })
};

/**
 * 获取数据结构类型
 * @param data
 * @returns {*}
 */
const getDataType = (data = '') => {
    if (Object.prototype.toString.call(data) === '[object String]') {
        return ''
    } else if (Object.prototype.toString.call(data) === '[object Array]') {
        return []
    } else if (Object.prototype.toString.call(data) === '[object Object]') {
        return {}
    }
    return ''
};


export default vueHead;