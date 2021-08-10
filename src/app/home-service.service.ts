import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService
 {
   
   products=
   [
     {id:101,Name:"iphone 8",description:"64 GB-Gold",Price:49999},
     {id:102,Name:"iphone 8+",description:"64 GB-Gold",Price:59999},
     {id:103,Name:"iphone 10",description:"64 GB-Gold",Price:69999},
   ]

  constructor() { 
    console.log(1111);
  }

  public getProducts():Array<{id:any,Name:any,description:any,Price:any}>
  {
    return this.products;
  }

    public createProduct(products:{id:any,Name:any,description:any,Price:any})
    {
      this.products.push(products);
    }
  }

