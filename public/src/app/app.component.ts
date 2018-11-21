import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  constructor() {
    console.log('I HVAE BEEN CONSTRUCTED!!!!!!!');
  }
  ngOnInit() {
    this.title = 'Commerce Manager';
  }
}
