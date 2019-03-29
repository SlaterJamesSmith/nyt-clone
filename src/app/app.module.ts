import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DailyMenuComponent } from './daily-menu/daily-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DailyMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
