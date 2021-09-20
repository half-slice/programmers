function solution(table, languages, preference) {
    var answer = '';
    let sort_table = sorting(table);
	let chart=[];
	let sum;
	
    for(let i=0; i<sort_table.length; i++){
		sum=0;
		for(let j=0; j<languages.length; j++){	
			if(sort_table[i].includes(languages[j])==true){
				sum = (6-sort_table[i].indexOf(languages[j]))*preference[j] + sum;
			}
			else
				sum=sum;
		}
		chart.push(sum);
	}	
	answer = bidding(chart,sort_table);
    return answer;
}

function sorting(table){
	for(let m=0; m<table.length; m++){
		table[m] = table[m].split(" ");
	}
	return table;
}

function bidding(chart,sort_table){
	let bid = Math.max.apply(null,chart);
	let b=[];
	for(let m=0; m<chart.length; m++){
		if(bid==chart[m]){
			b.push(sort_table[m][0]);
		}
	}
	b.sort();
	b=b[0];
	
	console.log(b);
	return b
}

function play(){
	let table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
	let languages = ["PYTHON", "C++", "SQL"];
	let preference = [7, 5, 5];
	solution(table, languages, preference);
}

play();
