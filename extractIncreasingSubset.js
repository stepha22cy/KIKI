function extractIncreasingSubset(arr){
    let theBiggest=arr[0];
    let next=arr[1]
   arr= arr.reduced(theBiggest,next,0)
    console.log(arr)
   /* arr=arr.toString();
    let theBiggest=arr[0];
    //console.log(theBiggest)
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let curr=arr[i];
        if(curr>=theBiggest){
            newArr.push(curr);
            theBiggest=curr;
        }
    }*/
  //  return newArr;
  //  console.log(newArr)

}
extractIncreasingSubset([1,3,8,4,10,12,3,2, 24])