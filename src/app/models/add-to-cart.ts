export class AddToCart {
    id: Number;
    name: string;
    description: string;
    quantity: Number;
    price: Number;
    constructor(id=0, name="x", description="Not Provided", quantity=0, price=0){
        this.id=id;
        this.description=description;
        this.name=name;
        this.quantity=quantity;
        this.price=price;
    }
}
