//引入其它配置文件模块  并重命名
requirejs.config({
	paths : {
		jquery : "jquery-1.11.3",
		mm : "myModule"
	}
})

//调用引入的模块功能  
requirejs( ["jquery","mm"],function($,mm){
	$("body").css("background","teal");
	console.log( mm.fnAdd(3,4) );
	console.log( mm.fnMax([13,34,23,1,4]) );
} )