import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BannerComponent } from './pages/banner/banner.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SocialComponent } from './pages/social/social.component';
import { FooterComponent } from './shared/footer/footer.component';

import { InfoService } from './services/info.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    PortfolioComponent,
    ContactComponent,
    SocialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
