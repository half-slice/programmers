var answer = '';
	
	var replaceAt = function(input, index, character){
    return input.substr(0, index) + character + input.substr(index+character.length);
	}
	
	for(let i=0; i<s.length; i++){
		let a=s.charCodeAt(i);
		if(a==32){
			continue;
		}
	
		for(let j=0; j<n; j++){
			a=a+1;
			if(a==91){
				a=65;
			}
			if(a==123){
				a=97;
			}
			s=replaceAt(s,i,String.fromCharCode(a));
		}	
	}
	answer=s;
  return answer;
