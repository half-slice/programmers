solution(board, moves) { 
    var answer = 0;
    let bucket=[];
    let i;
    let j=0;
    let z=0;
    
    while(z<moves.length){
        j=moves[z]-1;
        i=0;
        if(board[i][j]!=0){
            bucket.push(board[i][j]);
			board[i][j]=0;
        }
        
        else if(board[i][j]==0){
            for(i; i<board.length; i++){    
                if(board[i][j]!=0){
                    bucket.push(board[i][j]);
					board[i][j]=0;
                    break;
                }
            }
        }
        console.log(bucket, z);

		if(bucket.length>1){
    		if(bucket[bucket.length-2]==bucket[bucket.length-1]){
        		bucket.splice(bucket.length-2,2);
           		answer = answer+2;
        	}
    	}

        z++;
    }
    
    
    return answer;
}
