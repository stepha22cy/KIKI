function magicMatrices(matrix){
    let isMagic=true;
    for(let i=0;i<matrix.length-1;i++){
        let sumOfRowOne=matrix[i].reduce((a,b)=>a+b,0);
        let sumRowTwo=matrix[i+1].reduce((a,b)=>a+b,0);
        let sumColOne=0;
        let sumColTwo=0;
        for(let j=0;j<matrix.length;j++){
            sumColOne+=matrix[i][j];
            sumColTwo+=matrix[i+1][j];
        
        }
        if(sumColOne!==sumColTwo||sumOfRowOne!==sumRowTwo){
            isMagic=false;
        }
    }
return isMagic;

}
console.log(([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]]
   ))