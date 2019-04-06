import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DailyMenuComponent } from './daily-menu/daily-menu.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// extra import from Angular/Firebase documentation
import { environment } from '../environments/environment';
//end

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DailyMenuComponent
  ],
  imports: [
    BrowserModule
// extra import from Angular/Firebase documentation
    AngularFireModule.initializeApp(environment.firebase)
// end
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
