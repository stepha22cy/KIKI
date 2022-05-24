function sortingNums(arr){
    let result=[];
    arr.sort((a,b)=>b-a);
   // console.log(arr)
    while(arr.length!==0){
        result.push(arr.pop());
        result.push(arr.shift())
    }
    return result;
  //  console.log(result)

}
sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])