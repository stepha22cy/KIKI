function arrRotation(arr,numOfRotations){
    for(let i=0;i<numOfRotations;i++){
       let currNum= arr.shift()
        arr.push(currNum);
    }
    console.log(arr.join(' '))

}
arrRotation([51, 47, 32, 61, 21], 2)