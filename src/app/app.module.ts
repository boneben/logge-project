import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FeaturesComponent } from './home/features/features.component';
import { ProductsComponent } from './home/products/products.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FeaturesComponent,
    ProductsComponent,
    ReviewsComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ProductpageComponent,
    CheckoutComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
