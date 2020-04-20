import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import * as GlobalStrings from '../../strings.json';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {
  self_info: {name:string, extras:string[], paragraph: string} = {name: '', extras: [], paragraph: ''};
  quals;

  constructor(private titleService: Title) {
    this.typeit(this.self_info, 'name', GlobalStrings.my_name, 100)
    this.self_info.paragraph = GlobalStrings.paragraph.join(' ')
    this.self_info.extras = GlobalStrings.short_desc;
    this.quals = GlobalStrings.qualifications
    
   }

  ngOnInit(): void {
    this.titleService.setTitle( 'Jefferson Li - About me' );

  }
  async typeit(obj, key, str, speed, i = 0){
    if(str.length > i){
      obj[key] += str.charAt(i)
      await new Promise(resolve => setTimeout(()=>this.typeit(obj,key,str,speed, i + 1),
       str.charAt(i + 1) === ' ' || str.charAt(i + 1) === '.' ? speed * 3 : speed))
    }
  }

  f(){return 0}

}
