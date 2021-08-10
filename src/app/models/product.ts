import { NumberValueAccessor } from "@angular/forms";

export class Product {
    id: Number;
    name: string;
    description: string;
    quantity: Number;
    price: Number;
    imageurl:string;
    cart:false;

    constructor(id=0, name="x", description="Not Provided", quantity=0, price=0, imageurl="https://fdn.gsmarena.com/imgroot/news/20/09/top-10-us-smartphones-first-week-september/-1200w2/gsmarena_000.jpg"){
        this.id=id;
        this.description=description;
        this.name=name;
        this.quantity=quantity;
        this.price=price;
        this.imageurl=imageurl;
        this.cart=false;
    }

}
