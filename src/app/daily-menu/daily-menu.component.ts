import { Component, OnInit } from '@angular/core';
import { DailyMenuItem } from '../models/dailymenu.model';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './daily-menu.component.html',
  styleUrls: ['./daily-menu.component.css']
})
export class DailyMenuComponent {

  dailyMenu = [
    new DailyMenuItem("Your Friday Evening Briefing", "Here's what you need to know at the end of the day.", "../../assets/images/evening.jpg", "https://www.nytimes.com/2019/03/29/briefing/mueller-report-brexit-ncaa.html"),
    new DailyMenuItem("Listen to 'Still Processing': Us", "We dissect Jordan Peele's new psychological thriller", "../../assets/images/still-processing.jpg", "https://www.nytimes.com/2019/03/28/podcasts/still-processing-us-jordan-peele.html"),
    new DailyMenuItem("Listen to 'The Argument'", "Opinion columnists debate: Who botched the Mueller report?", "../../assets/images/argument.png", "https://www.nytimes.com/2019/03/29/briefing/mueller-report-brexit-ncaa.html")
  ]

  dailyMenuFirbaseModel = [
    new DailyMenuItem("Your Friday Evening Briefing", "Here's what you need to know at the end of the day.", "../../assets/images/evening.jpg", "https://www.nytimes.com/2019/03/29/briefing/mueller-report-brexit-ncaa.html"),
    new DailyMenuItem("Listen to 'Still Processing': Us", "We dissect Jordan Peele's new psychological thriller", "../../assets/images/still-processing.jpg", "https://www.nytimes.com/2019/03/28/podcasts/still-processing-us-jordan-peele.html"),
    new DailyMenuItem("Listen to 'The Argument'", "Opinion columnists debate: Who botched the Mueller report?", "../../assets/images/argument.png", "https://www.nytimes.com/2019/03/29/briefing/mueller-report-brexit-ncaa.html")
  ]

  // constructor() { }
  //
  // ngOnInit() {
  // }

}
