function maxSequence(arr){
   let newArr=[];
    for(let i=0;i<arr.length;i++){
    let firstArr=[];

        for(let j=i;j<arr.length;j++){
        if(arr[i]===arr[j]){
            firstArr.push(arr[j]);
           
        }else{
            break;
        }
       if(firstArr.length>newArr.length){
          

            newArr=firstArr;
        
        }
    
    }
    }
    console.log(newArr.join(' '));
    

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])