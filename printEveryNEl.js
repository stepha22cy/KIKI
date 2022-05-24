function printNEl(arr,n){
    n=Number(n);
    let newArr=[];
       for(let i=0;i<arr.length;i+=n){
       newArr.push(arr[i]);
       }
          return newArr;
       console.log(newArr.join('\n'));
    }
printNEl(['dsa',
'asd', 
'test', 
'tset'], 
2)