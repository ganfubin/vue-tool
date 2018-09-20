
import prototype from '../utils/prototype'
import filter from '../utils/filter'
import directive from '../utils/directive'

const install = function(Vue) {

    Object.keys(prototype).forEach(keys => {
        Vue.prototype[keys] = prototype[keys]
    });

	Vue.use(filter);

	Vue.use(directive)
};

// 通过外链的形式
if(typeof window !== "undefined" && window.Vue){
	install(window.Vue);
}

// 通过组件引入的方式
export default {
	version: '1.0.0',
	install
}





