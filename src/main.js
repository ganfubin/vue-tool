/**
 * @Description: 入口文件
 * @author ganfubin 1209711358@qq.com
 * @date 18/9/23
*/

import prototype from '../utils/prototype'
import filter from '../utils/filter'
import directive from '../utils/directive'
import utils from '../utils/utils'
import head from '../mixin/head'



const install = function(Vue) {

    Object.keys(prototype).forEach(keys => {
        Vue.prototype[keys] = prototype[keys]
    });

    Object.keys(utils).forEach(keys => {
        Vue.prototype[`$${keys}`] = utils[keys]
    });

	Vue.use(filter);

	Vue.use(directive);

    Vue.use(head);
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





