//게임 아이디 설정
function solution(new_id){
	console.log('초기 : '+new_id)
	new_id = step(new_id);
	new_id = step2(new_id);
	new_id = step3(new_id);
	new_id = step4(new_id);
	new_id = step5(new_id);
	new_id = step6(new_id);
	new_id = step7(new_id);
	return new_id;
}

function step(new_id){
	new_id=new_id.toLowerCase();
	console.log('1단계 : ' + new_id);
	return new_id;
}

function step2(new_id){
	new_id=new_id.replace(/[^\w-_.]+/g,'');
	console.log('2단계 : ' + new_id);
	return new_id;
}

function step3(new_id){
	new_id=new_id.replace(/[.]+/g, '.');
	console.log('3단계 : ' + new_id);
	return new_id;
}

function step4(new_id){
	new_id = new_id.replace(/[.]$/g, "");
	console.log("4.1단계 : "+new_id);
	new_id = new_id.replace(/^[.]/g, "");
	console.log("4.2단계 : "+new_id);
	return new_id;
}

function step5(new_id){
	if(new_id==""){
		new_id="a";
	}
	console.log("5단계 : " + new_id);
	return new_id;
}

function step6(new_id){
	new_id = new_id.substring(0,16);
	new_id = new_id.replace(/[.]$/, "");
	console.log("6단계 : " + new_id);
	return new_id;
}

function step7(new_id){
	while(new_id.length<=2){
		new_id = new_id + new_id.charAt(new_id.length-1);
	}
	console.log("7단계 : " + new_id)
}

function play(){
	let new_id = "z-+.^.";
	
	solution(new_id);
	
	new_id = "";
	solution(new_id);
	
}

play();
