import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any;
  selectedProduct=new Product();
  constructor() {
    this.products=JSON.parse(localStorage.prod);
   }

  ngOnInit(): void {
  }
  bool="Add To Cart";
  // final=new Product();
  addToCart(id:Number){
    // this.selectedProduct=p;
    // console.log(p);
    // p.cart=!p.cart;
    var all = JSON.parse(localStorage.prod);
    var final=[];
    for(var i=0;i<all.length;i++ ){
      if(all[i].id!=id) final.push(all[i]);
      else{
        all[i].cart=!all[i].cart;
        console.log(all[i].cart);
        console.log(all[i].id);
        final.push(all[i])
        // tempProd : Product;
        // tempProd=product;
        // console.log(this.selectedProduct.cart);
        
      }
    }
    this.products=final;
    localStorage.removeItem("prod");
    localStorage.setItem("prod", JSON.stringify(final));
    // console.log(product.cart);
    // // product.cart=true;
    // this.selectedProduct = product;
    
  }

}
