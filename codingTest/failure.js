function solution(N, stages) {
    var answer = [];
	  let failArr=[];
    stages.sort();
    let j=stages.length;	//분모
    let point=0;	//스테이지 개수
	  let i=0;
	  for(let u=1; u<=N; u++){
		    for(let i=0; i<stages.length; i++){
			      if(stages[i]==u){
				       point+=1;
			      }
	     	}
		    failArr.push({s : u, f : point/j});
	     	j-=point;
		    point=0;	
		
		    let fw="f";
		
		    failArr.sort(function(a,b){
		       return b[fw]-a[fw];
		    })
	  }
	
	for(i=0; i<N; i++){
		answer.push(failArr[i].s);
	}
	
  return answer;
}
