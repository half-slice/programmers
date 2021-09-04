//keyPad 누르는 요령
function solution(numbers, hand) {
    var answer = '';
	
	let lefthand="*";
	let righthand="#";
	console.log("lefthand : " + lefthand);
	console.log("righthand : " + righthand);
	console.log("answer : " + answer);
	for(let i=0; i<numbers.length; i++){
		if(numbers[i]==1||numbers[i]==4||numbers[i]==7){
			answer=answer+"L";
			lefthand=numbers[i];
		}
		else if(numbers[i]==3||numbers[i]==6||numbers[i]==9){
			answer=answer+"R";
			righthand=numbers[i];
		}
		else if(numbers[i]==0||numbers[i]==2||numbers[i]==5||numbers[i]==8){
			let middlenumber = middle(lefthand,righthand,numbers[i],hand)
			lefthand=middlenumber[0];
			righthand = middlenumber[1];
			answer = answer + middlenumber[2];
		}
		
	}
	console.log("lefthand : " + lefthand);
	console.log("righthand : " + righthand);
	console.log("answer : " + answer);
    return answer;
}


function middle(l,r,m,hand){
	let keyPad=[[1,2,3],[4,5,6],[7,8,9],["*",0,"#"]];
	let l1,l2,r1,r2,m1,m2;
	for(let j=0; j<keyPad.length; j++){
		if(keyPad[j].indexOf(l)!=-1){
			l1=j;
			l2=keyPad[j].indexOf(l);
		}
		if(keyPad[j].indexOf(r)!=-1){
			r1=j;
			r2=keyPad[j].indexOf(r);
		}
		if(keyPad[j].indexOf(m)!=-1){
			m1=j;
			m2=keyPad[j].indexOf(m);
		}
	}
	
	let lm=Math.abs(l1-m1)+Math.abs(l2-m2);
	let rm=Math.abs(r1-m1)+Math.abs(r2-m2);
	
	if(lm<rm){
		l=m;
		return [l,r,"L"];
	}
	
	else if(lm>rm){
		r=m;
		return [l,r,"R"];
	}
	
	else if(lm=rm){
		if(hand=="left"){
			l=m;
			return [l,r,"L"];
		}
		else if(hand=="right"){
			r=m;
			return [l,r,"R"];
		}
	}
	
}	
	

function play(){
	let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
	let hand = "right";
	
	solution(numbers,hand);
}

play();
