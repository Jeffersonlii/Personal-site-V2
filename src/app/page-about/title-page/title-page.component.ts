import { Component, OnInit } from '@angular/core';
import * as GlobalStrings from '../../../strings.json';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  self_info: {name:string, extras:string[]} = {name: '', extras: []};
  paragraph: string
  constructor() {
    this.paragraph = GlobalStrings.paragraph;
    this.self_info.name = GlobalStrings.my_name;
    this.self_info.extras = GlobalStrings.short_desc;
   }

  ngOnInit(): void {
  }

}
