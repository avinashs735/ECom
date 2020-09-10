import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatBadgeModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

// import { CarouselModule } from 'ngx-owl-carousel-o';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BannerComponent} from './banner/banner.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { ItemListComponent } from './item-list/item-list.component';
import {ItemService} from './Shared-service/app.service';

  import { from } from 'rxjs';
import { ShopContainerComponent } from './shop-container/shop-container.component';
import { EventListResolver as EventListResolver1 } from './Shared-service/item.list.resolver.service';
import {
  eventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  EventSessionComponent,
  DurationPipe
} from './events/index';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CommunicationService } from './Shared-service/CommunicationService';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './cart/CartService/cart.service';
import {WishlistService} from './checkout/CheckoutService/wishlist.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    FeatureSectionComponent,
    ItemListComponent,
    ShopContainerComponent,

    eventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventSessionComponent,
    DurationPipe,
    BlogComponent,
    AboutComponent,
    ProfileComponent,
    UserComponent,
    ItemDetailsComponent,
    CartComponent,
    FavoritesComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatCarouselModule.forRoot(),
    Ng2CarouselamosModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
    // CarouselModule
  ],
  providers: [ ItemService,CartService,EventListResolver,EventListResolver1,
    EventService,EventRouteActivator,CommunicationService,
    WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
