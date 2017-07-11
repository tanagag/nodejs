var	 optfile =	require("./optfile.js")
module.exports = {
	login:function(req,res){
		function recall(data){
			res.write(data);
			res.end('')
		}
		optfile.readfile('./views/login.html',recall)
		
	},
	register:function(req,res){
		function recall(data){
			res.write(data);
			res.end('')
		}
		optfile.readfile('./views/register.html',recall)
	}
}