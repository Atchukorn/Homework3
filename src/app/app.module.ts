import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TopcontentComponent } from './topcontent/topcontent.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';
import { MainComponent } from './main/main.component';
import { SubMainComponent } from './sub-main/sub-main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopcontentComponent,
    SearchComponent,
    LogoComponent,
    MainComponent,
    SubMainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
