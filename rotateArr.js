function rotateArr(arr){
    let rotationNum=arr.pop();
    
    for(let i=0;i<rotationNum;i++){
        let curr=arr.pop();
        arr.unshift(curr);
    }
    console.log(arr.join(' '))
  

}
rotateArr(['1', '2', '3', '4', '2'])