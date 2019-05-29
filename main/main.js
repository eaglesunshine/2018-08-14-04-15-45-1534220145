// Write your cade below:
module.exports = function main() {
	var a,b;
	if (arguments) {
		if(arguments.length<2)
			console.log("need input more arguments!");
		else
		{
			a=arguments[0];
			b=arguments[1];
			c=a%b;
			return c;
		}
	}
	else
		console.log("need input more arguments!");
};
