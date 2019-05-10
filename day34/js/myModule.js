define(function(){
	//模块暴露
	return {
		fnAdd : function(a,b){
			return a + b;
		},
		fnMax : function(arr){
			return Math.max.apply( null ,arr );
		}
	};
})

