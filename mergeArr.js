function mergeArr(arr1,arr2){
    newArr=[];
    for(let i=0;i<arr1.length;i++){
            if(i%2===0){
                
                newArr.push(+arr1[i]+ +arr2[i]);
            }else
            newArr.push(arr1[i]+arr2[i]);
    }
    console.log(newArr.join(' - '));

}
mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])