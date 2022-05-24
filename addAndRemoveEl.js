function addAndRemoveEl(arr){
    let newArr=[];
let num=0;
    for(let i=0;i<arr.length;i++){
        num++;
        let currCommand=arr[i];
        if(currCommand==='add'){
            newArr.push(num);
        }else if(currCommand==='remove'){
            newArr.pop(i);
        }
    }
    if(newArr.length===0){
        console.log('Empty');
    }else{
       console.log(newArr.join('\n'));
    }
    

}
addAndRemoveEl(['add', 
'add', 
'add', 
'add']
)