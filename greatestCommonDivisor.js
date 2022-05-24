function gcd_two_numbers(x, y) {
    /*if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}*/
/*while(x!==y){
  if(x>y){
    x-=y;

  }else{
    y-=x;
  }
}
console.log(x);
  */
    for (let i = Math.min(x,y); i >=1; i--){
      if (x % i === 0 && y % i === 0){
          console.log(i)
          break
      
  }
}
  
  //console.log(gcd_two_numbers(15,5));
  //console.log(gcd_two_numbers(2154,458));
}
gcd_two_numbers(15,5)
gcd_two_numbers(2154,458);