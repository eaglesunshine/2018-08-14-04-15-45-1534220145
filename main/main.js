// Write your cade below:
module.exports = function main() {
	var a,b;
	if (arguments) {
		if(arguments.length<2)
			console.log("need more arguments!");
		else
		{
			a=arguments[0];
			b=arguments[1];
			c=a%b;
			onsole.log(c);
		}
	}
	else
		console.log("need more arguments!");
};
