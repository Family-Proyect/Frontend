import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    GalleryComponent,
    LoginComponent,
    CarouselComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
