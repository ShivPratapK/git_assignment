let num = 13
let prime = 'Yes';
if(num<=1){
	console.log('No')
}
else{
	for(let i = 2;i<=Math.sqrt(num);i++){
		if(num%i===0){
			prime = 'No'
			break;
		}
	}
	console.log(prime)
}
"_____________________________________________________"
let str = "racecar"
let palindrome = true
let start = 0
let end = str.length-1
while(start<=end){
	if(str[start] !== str[end]){
		palindrome = false;
		break
		}
		start++
		end--
}
console.log(palindrome)