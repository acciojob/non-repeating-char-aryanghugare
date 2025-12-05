function firstNonRepeatedChar(str) {
 // Write your code here
	let f = false ;
	for(let i = 0 ; i < str.length ; i++){
		f = false ;
		let s = str[i]
		for(let j = 0 ; j < str.length ; j++){
			if(j!=i && str[j]==s) f = true ;
		}
		if(!f) return str[i];  
	}
	
return null ;
}  
 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
