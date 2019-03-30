## New York Times Page Clone
#### _Angular practice, homework as assigned by Epicodus, 3/29/19_

#### Slater Smith

### Description

Design mimicking the New York Times homepage to practice front end development with Angular. This project is unfinished, currently only consisting of a few menu items built with Angular components utilizing model objects to store menu calls to images, links, and text. This project is in progress; it's current UI specifications include responsiveness to viewport width and animated clickable content.

#### Program behavior specifications:
| Behavior | Input | Output |
| --------------------------- | ------------------- | ------------------- |
| If a user clicks on any menu link, and is redirected to an actual New York Times web page | User clicks on the word "Business" | User is sent to url at address "https://www.nytimes.com/section/business" |
| Page is responsive; when viewport size changes, content rearranges to fit within the new viewport size | User changes browser width from 1500px to 800px | content rearranges in proportion to the new browser width |
| Clickable elements are animated | User hovers cursor over article headline, picture, or article blurb | Article headline color changes from black to grey |


### Technologies and Resources

* Angular
* npm & Node

### Setup Instructions

1. Clone this repository to your desktop at https://github.com/SlaterJamesSmith/nyt-clone
2. Use a terminal of your choice to access the webpage and its files by inputting: "git clone {the above clone link}"
3. If homebrew is not yet installed on your Mac, install it by running the following command in your terminal: "$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
4. If you are not using a Mac, and homebrew is not yet installed, go to the node website and follow appropriate installer for your operating system at https://nodejs.org/en/download/
5. If typscript is not yet installed on your machine, run "$ npm install typescript -g" in your terminal.
6. To install the correct version of angular on your machine, run "$ npm install -g @angular/cli@1.6.5" in your terminal
7. If you receive the error "npm ERR! cb() never called!", you may need to update node with the command "$ brew upgrade node"
8. In your terminal, navigate from your desktop to your newly cloned directory by running the command "$ cd nyt-clone" in your terminal.
9. In the nyt-clone directory, run "ng build --prod" and then "$ ng serve" in your terminal.
10. Open application in your preferred web browser (for best performance, use Google Chrome) and navigate to the url "http://localhost:4200/"


### Roadmap & bugs
This application still needs work before it can be considered complete. It's functional on a basic level, but has the following issues:
* Though functional, it only features two menus and very little content.

### License

*{This software is licensed under the MIT license}*
Copyright (c) 2019 **_Slater Smith_**


<!-- # AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
