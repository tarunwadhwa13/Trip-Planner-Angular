import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//My imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SetRequirementsComponent } from './components/set-requirements/set-requirements.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SetRequirementsComponent,
    CarouselComponent,
    CheckoutComponent,
    LoginComponent,
    SearchComponent
    
  ],

  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
