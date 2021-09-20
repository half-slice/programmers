function question(){
	let first_pick_win=0;
	let first_pick_lose=0;
	let change_pick_win=0;
	let change_pick_lose=0;
	//let door=['goat','goat','porche']; 이렇게는 다음에
	
	
	for(let i=0; i<1000000; i++){
		let answer = Math.floor(Math.random()*3+1);
		let pick = Math.floor(Math.random()*3+1);
		
		let another = Math.floor(Math.random()*3+1);
		while(another==answer||another==pick){
			another = Math.floor(Math.random()*3+1);
		}
		
		if(pick==answer)
			first_pick_win++;
		else
			first_pick_lose++;
		
		let change = Math.floor(Math.random()*3+1);
		while(change==pick||change==another){
			change=Math.floor(Math.random()*3+1);
		}
		
		if(change==answer)
			change_pick_win++;
		else
			change_pick_lose++
	}
	console.log("처음 택한것이 맞을 횟수" + first_pick_win);
	console.log("처음 택한것이 틀릴 횟수" + first_pick_lose);
	console.log("--------------------------------------");
	console.log("바꾼것이 맞을 횟수" + change_pick_win);
	console.log("바꾼것이 틀릴 횟수" + change_pick_lose);
}
function play(){
	question();
}

play();
