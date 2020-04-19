import { Component, OnInit } from '@angular/core';
import * as GlobalStrings from '../../../strings.json';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  self_info: {name:string, extras:string[], paragraph: string} = {name: '', extras: [], paragraph: ''};

  constructor() {
    console.log(GlobalStrings.paragraph.join(' '))
    this.typeit(this.self_info, 'name', GlobalStrings.my_name, 100)
    this.self_info.paragraph = GlobalStrings.paragraph.join(' ')
    
    this.self_info.extras = GlobalStrings.short_desc;
   }

  ngOnInit(): void {}

  async typeit(obj, key, str, speed, i = 0){
    if(str.length > i){
      obj[key] += str.charAt(i)
      await new Promise(resolve => setTimeout(()=>this.typeit(obj,key,str,speed, i + 1),
       str.charAt(i + 1) === ' ' || str.charAt(i + 1) === '.' ? speed * 3 : speed))
    }
  }
}
