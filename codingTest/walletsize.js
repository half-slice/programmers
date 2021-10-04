function solution(sizes){
  let answer = 0;
  let divide = sizedivide(sizes);
  let miniarr,maxarr,h,w;
  let sortsize = sizedivide(sizes);
  maxarr = sortsize[0];
  miniarr = sortsize[1];
  h= Math.max.apply(null,maxarr);
  w = Math.max.apply(null,miniarr);
  answer= h*w;

  console.log(answer);
  return answer;
}

function sizedivide(sizes){
  let mini=[];
  let max =[];
  for(let i=0; i<sizes.length; i++){
    if(sizes[i][0]>sizes[i][1]){
      max.push(sizes[i][0]);
      mini.push(sizes[i][1]);
    }
    else{
      max.push(sizes[i][1]);
      mini.push(sizes[i][0]);
    }
  }
  
  return [max,mini];
}
