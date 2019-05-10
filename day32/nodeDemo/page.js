let userInfo = {
	sname : "jack",
	age : 17,
	tel : "132xxx",
	study : function(){
		return "上课学习中，不要睡觉";
	},
	eat :function(){
		return "该吃吃，该喝喝，该睡睡~~~喝喝";
	}
}

//模块暴露 
//一次性可以暴露多个属性和功能
module.exports = userInfo;

//每次暴漏一个属性或功能
/*exports.name = "小张";
exports.add = function(a,b){
	return a + b;
}*/
