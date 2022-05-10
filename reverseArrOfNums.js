function reverseArrOfNums(num,arr){
    let newArr=[];
    for(let i=0;i<num;i++){
        newArr.push(arr[i]);
      //  console.log(newArr);
    }
        let output='';
    
        for(let i=newArr.length-1;i>=0;i--){
            output+=newArr[i]+' ';
            

        }
        console.log(output)
        
    

}
reverseArrOfNums(3, [10, 20, 30, 40, 50])