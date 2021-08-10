import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/home-service.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  product:any;
  selectedProduct:any;
  products:any;
  

  constructor()
  {
    // console.log(localStorage.getItem('prod'));
    // console.log(typeof(localStorage.getItem('prod')));
     this.products =JSON.parse(localStorage.prod);
    //  this.products=this.products;
    //  console.log(this.products);
  }

  ngOnInit(): void 
  {
  }
  public selectProduct(product:any)
  {
    this.selectedProduct=product;
  }
}
