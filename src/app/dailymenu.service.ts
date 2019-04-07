import { Injectable } from '@angular/core';
import { DailyMenuItem } from './models/dailymenu.model';
import { DAILYMENU } from './mock-dailymenu';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DailymenuService {
  dailyMenu: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.dailyMenu = database.list('modules');
}

  getDailyMenu() {
    // return DAILYMENU;
    return this.dailyMenu;
  }

}
