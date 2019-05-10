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

//设置暴露
module.exports=userInfo;