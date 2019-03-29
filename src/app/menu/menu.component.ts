import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
// export class MenuComponent implements OnInit {
export class MenuComponent {
  world = "<li href='https://www.nytimes.com/section/world'>World</li>"
  us = "<li>U.S.</li>"
  politics = "<li>Politics</li>"
  ny = "<li>N.Y.</li>"
  business = "<li>Business</li>"
  opinion = "<li>Opinion</li>"
  tech = "<li>Tech</li>"
  science = "<li>Science</li>"
  health = "<li>Health</li>"
  sports = "<li>Sports</li>"
  arts = "<li>Arts</li>"
  books = "<li>Books</li>"
  style = "<li>Style</li>"
  food = "<li>Food</li>"
  travel = "<li>Travel</li>"
  magazine = "<li>Magazine</li>"
  tmagazine = "<li>T magazine</li>"
  realestate = "<li>Real Estate</li>"
  video = "<li>Video</li>"

  // constructor() { }

  // ngOnInit() {
  // }

}
