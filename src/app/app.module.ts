import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FeaturesComponent } from './home/features/features.component';
import { ProductsComponent } from './home/products/products.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './home/contact/contact.component';
import { CartComponent } from './cart/cart.component';



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
    ProductPageComponent,
    CheckoutComponent,
    HomeComponent,
    ProfileComponent,
    ProductDetailComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CartComponent,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
