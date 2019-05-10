requirejs.config({
	paths : {
		jquery : "jquery-1.11.3",
		vd : "validate"
	}
})

requirejs( ["vd" , "jquery"],function(vd,$){
	//验证实现 ： 
	$("form").submit(function(){
		if( flagName && flagPwd ){
			return true;
		}
		
		return false;
	})
	
	//用户名
	let flagName = null;
	$("#uname").blur(function(){
		if( vd.checkName( $(this).val() ) ){
			flagName = true;
			$("#s1").html( "ok" );
		}else{
			$("#s1").html( "请写入正确的手机号" );
			flagName = false;
		}
	})
	
	//密码 
	let flagPwd = null;
	$("#upwd").blur(function(){
		if( vd.checkPwd( $(this).val() ) ){
			flagPwd = true;
			$("#s2").html( "ok" );
		}else{
			$("#s2").html( "至少六位" );
			flagPwd = false;
		}
	})
} )
