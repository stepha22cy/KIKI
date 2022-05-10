function maxNumber(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let current=arr[i]
        let isMax=true;
    for(let j=i+1;j<arr.length;j++){
        let next=arr[j];
        if(current<=next){
            isMax=false;
            break;
        }
    }
    if(isMax){
        newArr.push(current)
    }
   
    }
    console.log(newArr.join(' '))

}
maxNumber([14, 24, 3, 19, 15, 17])