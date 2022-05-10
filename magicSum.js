function magicSum(arr,num){

    for(let i=0;i<arr.length;i++){
        let curr=arr[i];
        for(let j=i+1;j<arr.length;j++){
            let next=arr[j];
            let sum=curr+next;
      
            if(sum===num){
                console.log(`${curr} ${next}`);
            }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23],8)