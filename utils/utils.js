//utils


/**
 * 数组去重
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

/*
 * 数组扁平化
 * */

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
 */

const isArray = (arr) => {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        return true
    } else {
        return false
    }
};

/**
 * 判断是不是对象
 */

const isObject = (obj) => {
    if (Object.prototype.toString.call(obj) === '[object object]') {
        return true
    } else {
        return false
    }
};

/**
 * todo 函数没有考虑完整
 * 判断是否为空
 * 可判断object array
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