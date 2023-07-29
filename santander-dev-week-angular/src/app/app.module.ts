import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { LogoWhiteComponent } from 'src/assets/svgs/logo-white/logo-white.component';
import { BellIconComponent } from 'src/assets/svgs/bell-icon/bell-icon.component';
import { MoneyIconComponent } from 'src/assets/svgs/money-icon/money-icon-component';
import { SearchLogoComponent } from 'src/assets/svgs/search-icon/search-icon.component';
import { UserIconComponent } from 'src/assets/svgs/user-icon/user-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardBoxComponent,
    CarouselItemsComponent,
    AmountBoxComponent,
    LogoWhiteComponent,
    BellIconComponent,
    MoneyIconComponent,
    SearchLogoComponent,
    UserIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
