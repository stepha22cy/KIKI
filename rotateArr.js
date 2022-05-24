function rotateArr(arr,rotations){
    rotations=Number(rotations%arr.length);
        
    
    for(let i=0;i< rotations;i++){
        arr.unshift(arr.pop());
    }
   
console.log(arr.join(' '));



}
rotateArr(['1', 
'2', 
'3', 
'4'], 
2
)