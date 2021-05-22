function solution(n, arr1, arr2) {
    var answer = [];
    let wordmap='';
	
    for(let i=0; i<n; i++){
		arr1[i] = arr1[i].toString(2);
		arr2[i] = arr2[i].toString(2);
		
		
		if(arr1[i].length<n){
			while(arr1[i].length<n){
				arr1[i]="0" + arr1[i];
			}
		}
		
		if(arr2[i].length<n){
			while(arr2[i].length<n){
				arr2[i]="0" + arr2[i];
			}
		}
		console.log(arr1[i] + " " +arr2[i]);
		for(let j=0; j<n; j++){
			
			if(arr1[i][j]==0 && arr2[i][j]==0){
				wordmap = wordmap + " ";
			}
			else
				wordmap = wordmap + "#";
		}
		answer.push(wordmap);
		wordmap='';
    }
    return answer;
}
