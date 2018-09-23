/**
 * @Description: utils函数
 * @author ganfubin 1209711358@qq.com
 * @date 18/9/23
*/


/**
 * 数组去重
 * @param uniqueArr
 * @returns {*}
 */
const unique = (uniqueArr) => {
    let resultArr = [];
    if (isArray(resultArr)) {
        uniqueArr.forEach((item) => {
            let findItem = resultArr.find(d => {
                return d === item
            });
            if (!findItem) {
                resultArr.push(item)
            }
        });
        return resultArr
    } else {
        return uniqueArr
    }
};


/**
 * 数组扁平化
 * @param flattenArr
 * @returns {Array}
 */
const flatten = (flattenArr) => {
    let resultArr = [];
    if (isArray(flattenArr)) {
        flattenArr.forEach((item, index) => {
            if(isArray(flattenArr[index])){
                //使用递归的方式
                resultArr = resultArr.push(...flatten(flattenArr[index]));
            }else {
                resultArr.push(item)
            }
        })
    } else {
        return resultArr
    }
};


/**
 * 判断是不是数组
 * @param arr
 * @returns {boolean}
 */
const isArray = (arr) => {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        return true
    } else {
        return false
    }
};


/**
 * 判断是否是对象
 * @param obj
 * @returns {boolean}
 */
const isObject = (obj) => {
    if (Object.prototype.toString.call(obj) === '[object object]') {
        return true
    } else {
        return false
    }
};

/**
 * 判断是否是空
 * @param value
 * @returns {boolean}
 */
const isEmpty = (value) => {
    if(isObject(value) && Object.keys(value).length > 0){
        return false
    }

    if(isArray(value) && value.length > 0){
        return false
    }

    if(value){
        return false
    }

    return true
};


export default {
    unique,
    flatten,
    isEmpty
}