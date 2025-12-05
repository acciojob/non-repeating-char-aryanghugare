function firstNonRepeatedChar(str) {
 // Write your code here
	let f = false ;
for(let i = 1 ; i < str.length-1 ; i++){
	if(str[i-1]!=str[i] && str[i+1]!=str[i]) {
		return str[i];
	}
}	

	if(!f) return null ;
} 
 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
