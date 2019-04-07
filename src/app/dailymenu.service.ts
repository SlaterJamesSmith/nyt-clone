import { Injectable } from '@angular/core';
import { DailyMenuItem } from './models/dailymenu.model';
import { DAILYMENU } from './mock-dailymenu';

@Injectable()
export class DailymenuService {

  constructor() { }

  getDailyMenu() {
    return DAILYMENU;
  }

}
