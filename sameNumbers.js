function sameNumbers(num) {
    num = String(num);
    let firstDigit = num[0];
    let isSame = true;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let curr = +num[i];
        sum += curr;
        if (curr != firstDigit) {
            isSame = false;

        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222)