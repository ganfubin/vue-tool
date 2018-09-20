//扩展全局指令

let directive = {};

directive.install = (Vue) => {

	//获取焦点
	Vue.directive('focus',  {
        inserted (el) {
            el.focus()
        }
	})

	//...

}


export default directive