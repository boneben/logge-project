import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { AboutComponent } from './about/about.component';
import { AspenComponent } from './productpage/logs/aspen/aspen.component';
import { AspenxlComponent } from './productpage/logs/aspenxl/aspenxl.component';
import { BirchComponent } from './productpage/logs/birch/birch.component';
import { BirchxlComponent } from './productpage/logs/birchxl/birchxl.component';
import { OakComponent } from './productpage/logs/oak/oak.component';
import { OakxlComponent } from './productpage/logs/oakxl/oakxl.component';
import { PineComponent } from './productpage/logs/pine/pine.component';
import { PinexlComponent } from './productpage/logs/pinexl/pinexl.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'productpage', component: ProductpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'aspen', component: AspenComponent },
  { path: 'aspenxl', component: AspenxlComponent },
  { path: 'birch', component: BirchComponent },
  { path: 'birchxl', component: BirchxlComponent },
  { path: 'oak', component: OakComponent },
  { path: 'oakxl', component: OakxlComponent },
  { path: 'pine', component: PineComponent },
  { path: 'pinexl', component: PinexlComponent },
  { path: 'profile', component:ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
