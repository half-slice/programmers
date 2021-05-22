function solution(n, t, m, p){
	var answer='';
	let num='';
	for(let i=0; i<=t*m; i++){
		num=num+i.toString(n);
	}
	p=p-1;
	while(p<num.length){
		answer=answer+num.charAt(p);
		p=p+m
		if(answer.length==t)
			break;
	}
	
	return answer.toUpperCase();	
}
