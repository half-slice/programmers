function solution(dartResult) {
  var answer = 0;
	let dr = dartResult.split("");
	let j=-1;
	let na=[];
	let text;
	console.log(dr);
	for(let i=0; i<dr.length; i++){
		
		if(isNaN(dr[i])==false){
			if(isNaN(dr[i+1])==false){
				dr[i] = dr[i] + dr[i+1];
				dr.splice(i+1,1);
			}
			j=j+1;
			na[j]=parseInt(dr[i]);
		}
		
		else if(dr[i]=="S"){
			na[j]=Math.pow(na[j],1);
		}
		else if(dr[i]=="D"){
			na[j]=Math.pow(na[j],2);
		}
		else if(dr[i]=="T"){
			na[j]=Math.pow(na[j],3);
		}
		
		switch(dr[i]){
			case "*":
				na[j-1]=na[j-1]*2;
				na[j]=na[j]*2;
				break;
				
			case "#":
				na[j]=na[j]*(-1);
				break;		
		}
	}
	answer = na[0] + na[1]+ na[2];
	
    return answer;
}
