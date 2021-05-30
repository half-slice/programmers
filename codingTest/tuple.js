function solution(arr) {
    var answer = [];
	arr = arr.substring(1,arr.length-2).split('},')
		.map(str=>str.substring(1).split(',')
		.map(v=>Number(v)));
	
	arr=arr.sort((a,b)=>a.length-b.length);
	
	answer=arr.reduce((acc,cur)=>{
		let value = cur.filter(v => !acc.includes(v))[0];
		acc.push(value);
		return acc;
  },[]);
	
	
	console.log(arr);
  return answer;
	
}
