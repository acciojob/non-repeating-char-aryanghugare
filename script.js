function firstNonRepeatedChar(str) {
 // Write your code here
	let f = false ;
for(let i = 0 ; i < str.length ; i++){
	if(i==0 && str.length>1) {
		if(str[0]!=str[1]) return str[0];
	}
	if(i==str.length-1){
		if(str[i]!=str[i-1]) return str[i];
	}
	if( (i>0 && str[i-1]!=str[i])  && (i<str.length-1 && str[i+1]!=str[i])) {
		return str[i];  
	}  
}	
	
 
	if(!f) return null ;
}  
 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
