function orders(product,num){
    
    let totalPrice=0;
        if(product==='coffee'){
       let price=1.50;
        totalPrice=num*price;
    
        }else if(product==='water'){
       let  price=1.00;
        totalPrice=num*price;

    
        }
        if(product=== 'coke'){
            price=1.40;
        totalPrice=num*price;
        
        }
        else if(product==='snacks'){
        price = 2.00;
        totalPrice=num*price;
    
        
        }
        
       // console.log(orderPrice.toFixed(2));
        console.log(totalPrice.toFixed(2));
    
}
orders("coffee", 2)