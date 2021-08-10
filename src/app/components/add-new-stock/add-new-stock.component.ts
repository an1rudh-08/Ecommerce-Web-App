import { Component, OnInit } from '@angular/core';
// import { HomeServiceService } from './home-service.service';
import { HomeServiceService } from 'src/app/home-service.service';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-new-stock',
  templateUrl: './add-new-stock.component.html',
  styleUrls: ['./add-new-stock.component.css']
})
export class AddNewStockComponent implements OnInit {
  // var p:any;
  // product:{id:any,Name:any,description:any, quantity:any, Price:any}={id:null,Name:"",description:"", quantity:"", Price:""}; 
  product = new Product();
  
  constructor(public homeService:HomeServiceService ) {
    console.log(1);
   }

  ngOnInit(): void {
    console.log(2);
  }
  createProduct()
  {
    // console.log(3);
    // console.log(this.product);
    // this.homeService.createProduct(this.product);
    // this.product={id:null,Name:"",description:"", quantity:"", Price:""};
    var oldp = JSON.parse(localStorage.prod);
    // console.log(this.product);
    var x=[];
    x.push(this.product);
    // console.log(x);
    // console.log(oldp.length);
    for(var i=0;i<oldp.length;i++ ){
      x.push(oldp[i]);
    }
    
    // console.log(x);
    
    localStorage.removeItem("prod");
    localStorage.setItem("prod",JSON.stringify(x));
  }

}
