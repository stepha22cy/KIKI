function printNthEl(arr){
    let lastNum=+arr.pop();
    let resultArr=[];
    for(let i=0;i<arr.length;i+=lastNum){
        resultArr.push(arr[i]);
    }

    console.log(resultArr.join(' '))
}
printNthEl(['5', '20', '31', '4', '20', '2'])