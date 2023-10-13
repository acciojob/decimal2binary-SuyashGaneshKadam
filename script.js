function toInteger(n){
  let str = n+ "";
  if(str.indexOf(".") == -1) return n;
  else return Number(str.slice(0, str.indexOf(".")));
}

function decimalToBinary(num) {
  //Write you code here
	let ans=[];
	while(num > 0){
		ans.unshift(toInteger(num%2));
		num = toInteger(num / 2);
	}
	return ans.join("").toString();
}

window.decimalToBinary = decimalToBinary;
