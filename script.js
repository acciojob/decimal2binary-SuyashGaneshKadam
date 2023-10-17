function decimalToBinary(num) {
  //Write you code here
	let ans=[];
	while(num > 0){
		ans.unshift(num%2);
		num = Math.floor(num / 2);
	}
	return ans.join("").toString();
}

window.decimalToBinary = decimalToBinary;
