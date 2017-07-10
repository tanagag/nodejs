/*
function fun2(res){
     res.write('我是fun2...');  
}
module.exports = fun2;//导出一个函数
*/

module.exports = {
	fun2:function(res){
		res.write('我是fun2...');  
	},
	fun3:function(res){
		res.write('我是fun3...');  
	}
}