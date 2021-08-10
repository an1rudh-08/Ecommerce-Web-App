import { Component, OnInit } from '@angular/core';
// import { type } from 'os';
import { Product } from 'src/app/models/product';
import { CartItemsComponent } from '../shopping-cart/cart/cart-items/cart-items.component';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  // var cartItems=[];
  // cartItems=[];
  cart:any;
  value:any;
  errorMsg:any;
  
  constructor() { 
  //  console.log(11);
  var cartItems=[];
   var products=JSON.parse(localStorage.prod);
   var total=0;
   for(var i=0;i<products.length;i++){
     if(products[i].cart==true){
       cartItems.push(products[i]);
       total+=products[i].price;
     }
   }
   this.cart=cartItems;
   this.value=total;
  }

  ngOnInit(): void {
    console.log(33);
  }

  placeOrder(){
    var products=JSON.parse(localStorage.prod);
    var final=[];
    var temp = new Product();
    this.errorMsg="no";
    for(var i=0;i<products.length;i++){
      
      temp=products[i];

      if(products[i].cart==true){
        if(temp.quantity<=0){
          this.errorMsg="Out Of Stock";
        }
        else{
          // console.log(typeof(temp.quantity));
          
         
          
        }
      }
      

    }
    if(this.errorMsg=="no"){
      this.errorMsg="order Placed";
      for(var i=0;i<products.length;i++){
        console.log(this.errorMsg);
        
        if(products[i].cart==true){
          products[i].cart=false;
          products[i].quantity = Number(products[i].quantity)-1;
        }
        
        final.push(products[i]);
      }
      // this.cart=[];
      localStorage.removeItem("prod");
      localStorage.setItem("prod", JSON.stringify(final));
      
    }
    
  }
}
