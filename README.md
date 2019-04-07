## New York Times Page Clone
#### _Angular practice, homework as assigned by Epicodus, 3/29/19_

#### Slater Smith

### Description

Web application designed to mimic the New York Times homepage. Built as a practice project for front end development with Angular, building services, and project deployment in Firebase. This project's UI currently only consists of a few menu items built with Angular components utilizing model objects and Firebase to store menu calls to images, links, and text. This project will be updated for the purpose of ongoing coding practice by the creator, as its only current UI user specifications include responsiveness to viewport width and animated clickable content. Its current back end specification include services to transfer custom API data from Firebase, as well as Firebase deployment.

#### Program UI behavior specifications:
| Behavior | Input | Output |
| --------------------------- | ------------------- | ------------------- |
| If a user clicks on any menu link, they are redirected to an actual New York Times web page | User clicks on the word "Business" | User is sent to url at address "https://www.nytimes.com/section/business" |
| Page is responsive; when viewport size changes, content rearranges to fit within the new viewport size | User changes browser width from 1500px to 800px | content rearranges in proportion to the new browser width |
| Clickable elements are animated | User hovers cursor over article headline, picture, or article blurb | Article headline color changes from black to grey |


### Technologies and Resources

* Angular
* npm & Node
* Firebase data storage & live url deployment

### Setup Instructions

To view this project live through Firebase, visit https://nyt-clone-67b7e.firebaseapp.com/ , otherwise follow the steps listed below to clone and view through a 'localhost' server:

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
* Though functional, it only features two menus and very little content. A complete version of this project will look and function like an exact or near-exact clone of the New York Times homepage.
* A final version of this project will also utilize additional Firebase databases to store more information about articles
* A final version of this project will store images in firebase instead of links to images stored locally
* A final version of this project will successfully call weather API data to display current weather, mimicking the actual New York Times homepage

### License

*This software is licensed under the MIT license*
Copyright (c) 2019 **_Slater Smith_**
