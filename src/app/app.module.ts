import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/admin/login/login.component';
import { DashboardComponent } from './components/authenticated/dashboard/dashboard.component';
import { AddProductComponent } from './components/authenticated/add-product/add-product.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemsComponent } from './components/shopping-cart/cart/cart-items/cart-items.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddNewStockComponent } from './components/add-new-stock/add-new-stock.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    LoginComponent,
    DashboardComponent,
    AddProductComponent,
    ProductListComponent,
    CartComponent,
    CartItemsComponent,
    RegistrationComponent,
    InventoryComponent,
    AddNewStockComponent,
    PlaceOrderComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "", pathMatch:"full", redirectTo:"/home" 
      },
      {
        path: 'home', component: ShoppingCartComponent
      },
      // {
      //   path: '/register', component: RegistrationComponent
      // }
      {
        path: 'placeOrder', component: PlaceOrderComponent
      },
      {
        path: "register", component: RegistrationComponent
      },
      {
        path: "inventory", component: InventoryComponent
      },
      {
        path: "add-new-stock", component: AddNewStockComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
