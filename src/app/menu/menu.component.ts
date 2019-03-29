import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
// export class MenuComponent implements OnInit {
export class MenuComponent {

  menu = [
    new MenuItem("World" , "https://www.nytimes.com/section/world"),
    new MenuItem("U.S." , "https://www.nytimes.com/section/us"),
    new MenuItem("Politics" , "https://www.nytimes.com/section/politics"),
    new MenuItem("N.Y." , "https://www.nytimes.com/section/ny"),
    new MenuItem("Business" , "https://www.nytimes.com/section/business"),
    new MenuItem("Opinion" , "https://www.nytimes.com/section/opinion"),
    new MenuItem("Tech" , "https://www.nytimes.com/section/tech"),
    new MenuItem("Science" , "https://www.nytimes.com/section/science"),
    new MenuItem("Health" , "https://www.nytimes.com/section/health"),
    new MenuItem("Sports" , "https://www.nytimes.com/section/sports"),
    new MenuItem("Arts" , "https://www.nytimes.com/section/arts"),
    new MenuItem("Books" , "https://www.nytimes.com/section/books"),
    new MenuItem("Style" , "https://www.nytimes.com/section/style"),
    new MenuItem("Food" , "https://www.nytimes.com/section/food"),
    new MenuItem("Travel" , "https://www.nytimes.com/section/travel"),
    new MenuItem("Magazine" , "https://www.nytimes.com/section/magazine"),
    new MenuItem("T Magazine" , "https://www.nytimes.com/section/t-magazine"),
    new MenuItem("Real Estate" , "https://www.nytimes.com/section/real-estate"),
    new MenuItem("Video" , "https://www.nytimes.com/section/video")
  ]

  // constructor(public name: string, public link: string) { }






  // ngOnInit() {
  // }

}
