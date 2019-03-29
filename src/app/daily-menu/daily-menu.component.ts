import { Component, OnInit } from '@angular/core';
import { DailyMenuItem } from '../models/dailymenu.model';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './daily-menu.component.html',
  styleUrls: ['./daily-menu.component.css']
})
export class DailyMenuComponent {

  dailyMenu = [
    new DailyMenuItem("Listen to 'Still Processing': Us", "We dissect Jordan Peele's new psychological thriller", "../../assets/images/still-processing.jpg", "https://www.nytimes.com/2019/03/28/podcasts/still-processing-us-jordan-peele.html")
  ]

  // constructor() { }
  //
  // ngOnInit() {
  // }

}
