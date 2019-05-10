var sname = "jack";
function fnAdd(a,b){
	return a + b;
}


//可以一次性输出多个模块
export { sname , fnAdd as add };
