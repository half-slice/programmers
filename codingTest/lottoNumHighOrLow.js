// 로또번호 최고 최저 순위 맞추기 
function solution(lottos, win_nums) {
  let answer=[]
  
	let best_rank = best(lottos,win_nums);
	let worst_rank = worst(lottos,win_nums);
	
	answer.push(best_rank, worst_rank);
	console.log(answer);
}
// 6=1등 , 5=2등 , 4=3등 , 3=4등, 2=5등 1=6낙점 

function best(lottos,win_nums){
	let bp=0;
	let zp=lottos.filter(element => 0===element).length;
	for(let i=0; lottos.length>i; i++){
		if(win_nums.includes(lottos[i])==true){
			bp=bp+1;
		}
	}
	bp=bp+zp;
	console.log("bp"+bp);
	return leveltest(bp);
}

function worst(lottos,win_nums){
	let wp=0;
	for(let i=0; lottos.length>i; i++){
		if(win_nums.includes(lottos[i])==true){
			wp=wp+1;	
		}
	}
	console.log("wp"+wp);
	return leveltest(wp);
}

function leveltest(score){
	switch(score){
		case 6:
			return 1;
			break;
		case 5:
			return 2;
			break;
		case 4:
			return 3;
			break;
		case 3:
			return 4;
			break;
		case 2:
			return 5;
			break;
		default:
			return 6;
			break;
	}
}

function play(){
	let lottos, win_nums;
	lottos=[44, 1, 0, 0, 31, 25];
	win_nums=[31, 10, 45, 1, 6, 19];
	solution(lottos, win_nums);
	
	lottos=[0, 0, 0, 0, 0, 0]
	win_nums=[38, 19, 20, 40, 15, 25]	
	solution(lottos, win_nums);

	lottos=[45, 4, 35, 20, 3, 9]
	win_nums=[20, 9, 3, 45, 4, 35]	
	solution(lottos, win_nums);		
}
	
play();
