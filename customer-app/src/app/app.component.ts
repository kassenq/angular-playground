import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // component class
  // title: string;
  constructor() { }

  ngOnInit() {
    // We call a service that gets us the data
    // this.title = 'Hello World using Data Binding';
  }

}


// CLI command to create a new component:
// ng g component [name of component]
// adds 4 files: unit test file, HTML template, CSS file, and component code

// ng g c [name] -d
// dry run
