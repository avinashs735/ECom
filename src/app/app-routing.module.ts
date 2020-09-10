import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopContainerComponent } from './shop-container/shop-container.component';
import { eventListComponent } from './events/events-list-component';
import { EventListResolver } from './events/shared/event-list-resolver-service';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogComponent } from './blog/blog.component';



const routes: Routes = [

  {path: 'Home', component: ShopContainerComponent},
  {path: 'Product/:id', component: ItemDetailsComponent},
  {path: 'Product/:category/:id', component: ItemDetailsComponent},
  {path: 'checkout/cart', component: CartComponent},
  {path: 'wishlist', component: CheckoutComponent},
  {path: 'blog', component: BlogComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
