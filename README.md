## New York Times Page Clone
#### _Angular practice, homework as assigned by Epicodus, 3/29/19_

#### Slater Smith

### Description

Design mimicking the New York Times homepage to practice front end development with Angular. This project is unfinished, currently only consisting of a few menu items built with Angular components utilizing model objects to store menu calls to images, links, and informational text.

#### Program behavior specifications:
| Behavior | Input | Output |
| --------------------------- | ------------------- | ------------------- |
| User enters a medical issue to receive a list of doctors in the Portland area that fit the search query. | User enters "psoriasis" | A list of doctors is returned |
| User enters a name to receive a list of doctors in the Portland area that fit the search query. | User enters "David" | A list of doctors including the name "David" is returned |
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients. | User inputs a value | If a list of doctors is returned, list their first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.|
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. | User enters a value | "There was an error processing your request: (error here). Please try again." |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. | User enters a value | "There are no doctors in your area that match your criteria at this time" |


### Technologies and Resources

* Angular

### Setup Instructions

1. Clone this repository to your desktop at https://github.com/SlaterJamesSmith/nyt-clone
2. Use a terminal of your choice to access the webpage and its files by inputting: "git clone {the above clone link}"
3. If homebrew is not yet installed on your Mac, install it by running the following command in your terminal: "$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
4. If you are not using a Mac, and homebrew is not yet installed, go to the node website and follow appropriate installer for your operating system at https://nodejs.org/en/download/
5. In terminal, navigate into project by entering "$ cd doctor-lookup" into your terminal
6. In terminal, enter "$ npm i" to install node package manager
7. Next, in terminal enter "$ npm run build" and then "$ npm run start" - a web browser should automatically open with input prompts
8. Follow the prompts to search for doctors based on symptom or doctor name
9. Refresh page to try again


### Roadmap & bugs
This application still needs work before it can be considered complete. It's functional on a basic level, but has the following issues:
* Though functional, front end logic is not dry. Some code may need to move to back end logic.
* For some reason, the DOM will not read follow up user inputs after the first API request is called. For example, when I tried to build out a "try again" button, or simply tried to rerun the application without first refreshing the page, the buttons did not work at all. This is an issue that needs to be addressed.

### License

*{This software is licensed under the MIT license}*
Copyright (c) 2019 **_{Slater Smith}_**








# AngularProject

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
