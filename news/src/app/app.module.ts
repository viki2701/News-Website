import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { HomeComponent } from './home/home.component';
import { ContentpageComponent } from './contentpage/contentpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainbodyComponent,
    HomeComponent,
    ContentpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
