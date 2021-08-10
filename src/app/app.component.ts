import { Component } from '@angular/core';
import { HomeServiceService } from './home-service.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app1';
  // log(x) {console.log(x);}
  products= [
  new Product(1001,"iphone 800","64 GB-Gold",1, 49999),
  new Product(1002,"iphone 8+","64 GB-Gold",20, 59999),
  new Product(1003,"iphone 10","64 GB-Gold",30, 9999),
];

constructor()
  {
    
    console.log(2222);
  //  localStorage.removeItem("prod");
    if(!localStorage.prod) localStorage.setItem('prod',JSON.stringify( this.products));
    else{
      var oldp = JSON.parse(localStorage.prod);
      var x=[];
      for(var i=0;i<oldp.length;i++ ){
        x.push(oldp[i]);
        console.log(oldp[i].quantity);
      }
      localStorage.removeItem("prod");
      localStorage.setItem("prod",JSON.stringify(x));
    }
    
    // console.log(localStorage.getItem('prod'))

  }



}
