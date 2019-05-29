// Write your cade below:
	const readline = require('readline');  
    const rl = readline.createInterface({  
        input: process.stdin,  
        output: process.stdout  
    });  
    var inputArr = [];  
    rl.on('line', function (input) {  
        inputArr = input.split(" ");  
        inputArr.forEach(function(item,index){  
            inputArr[index] = +item;// 转化为数字  
        });  
        // 下面就可以对数据进行处理......  
        console.log(inputArr[0]%inputArr[1]);  
        inputArr = [];// 清空数组  
        rl.close();  
    });  
      
    rl.on('close', function() {    
        process.exit(0);  
    });

