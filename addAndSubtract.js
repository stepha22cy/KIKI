function addAndSubtract(arr){
    let oldSum=0;
    let newSum=0;
    let newArr=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i]%2!==0){
          newSum+=arr[i]-i;
          newArr.push(arr[i]-i);
          
        }
        else{
            newSum+=arr[i]+i;
            newArr.push(arr[i]+i);
        }
    }
        for(let i of arr){
        oldSum+=i;
        }
    
    console.log(newArr)
    console.log(oldSum);
    console.log(newSum);

}
addAndSubtract([5, 15, 23, 56, 35])