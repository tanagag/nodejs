var User = require('./User')
function Teacher(name,age){
	User.apply(this,[name,age])
	this.name = name;
	this.age = age;
	this.talk = function(res){
		res.write(this.name+"开始讲课")
	}
}
module.exports = Teacher;