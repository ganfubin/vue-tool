//扩展全局filter

let filter = {};
filter.install = (Vue) => {

	//保留两位小数
	Vue.filter('decimalFormat', function (numberStr) {
	  let type = typeof numberStr;
	  if (type === 'string') {
	    numberStr = numberStr.replace(/\,/g, "");
	  }
	  if (isNaN(numberStr) || numberStr === '' || type === 'undefined' || numberStr === null) {
	    return '--';
	  }
	  let number = parseFloat(numberStr);
	  if (typeof number === 'number') {
	    numberStr = number.toFixed(2);
	    numberStr = numberStr.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")
	  }
	  return numberStr;
	});

	/*
	 * 格式化金额
	 * */
	Vue.filter('amountFormat', function (numberStr) {
	  let type = typeof numberStr;
	  if (type === 'string') {
	    numberStr = numberStr.replace(/\,/g, "");
	  }
	  if (isNaN(numberStr) || numberStr === '' || type === 'undefined' || numberStr === null) {
	    return '--';
	  }
	  let number = parseFloat(numberStr);
	  if (typeof number === 'number') {
	    numberStr = number.toFixed(2);
	    numberStr = numberStr.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")
	  }
	  return numberStr;
	});

};

export default filter;