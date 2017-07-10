function User(name,age){
	this.name = name;
	this.age = age;
	this.enter = function(){
		console.log(this.name+"走进教室")
	}
}
module.exports = User;