// 扩展全局方法

let prototype = {};


prototype.$clone  = (obj) => {
    let objType = Object.prototype.toString.call(obj);
    if(objType === "[object Object]" || objType === "[object Array]"){
        let newObj= obj instanceof Array ? []:{};
        for(let i in obj){
            newObj[i] = typeof obj[i] == 'object' ?  this.$clone(obj[i]) : obj[i];
        }
        return newObj
    }else {
        console.log(`obj must be a Array or Object`);
    }
};

/**
 * @param phone 手机号码
 * @returns {boolean}
 */
prototype.$phoneValidate = function (phone) {
  phone = phone || '';
  let phoneReg = /^1\d{10}$/;
  return phoneReg.test(phone);
};

/**
 * @param email 邮箱
 * @returns {boolean}
 */
prototype.$emailValidate = function (email) {
  email = email || '';
  let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  return emailReg.test(email);
};

/**
 * @param idcard 身份证
 * @returns {boolean}
 */
prototype.$idcardValidate = function (idcard) {
  idcard = idcard || '';
  let idcardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return idcardReg.test(idcard);
};

/**
 * @param number 数字
 * @returns {boolean}
 */
prototype.$numberValidate = function (number) {
  number = number || '';
  let numberReg = /^[0-9]+.?[0-9]*$/;
  return numberReg.test(number);
};


export default prototype;