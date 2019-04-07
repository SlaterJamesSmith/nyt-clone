import { Component, OnInit } from '@angular/core';
import { DailyMenuItem } from '../models/dailymenu.model';
import { Router } from '@angular/router';
import { DailymenuService } from '../dailymenu.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './daily-menu.component.html',
  styleUrls: ['./daily-menu.component.css'],
  providers: [DailymenuService]
})

export class DailyMenuComponent implements OnInit {
  // dailyMenu: DailyMenuItem[];
  dailyMenu: FirebaseListObservable<any[]>;

  // for some reason this works when the router is not part of the constructor, but does not otherwise
  constructor(private router: Router, private dailymenuService: DailymenuService) {}

  ngOnInit(){
    this.dailyMenu = this.dailymenuService.getDailyMenu();
  };

  printMenu() {
    // this.router.navigate(['dailyMenu', clickedAlbum.headline]);
  };


}
