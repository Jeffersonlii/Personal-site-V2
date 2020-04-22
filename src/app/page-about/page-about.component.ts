import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import * as GlobalStrings from '../../strings.json';
import { DrawersService } from '../drawers.service' 

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {
  self_info: {extras:string[], paragraph: string} = {extras: [], paragraph: ''};
  quals;

  constructor(private titleService: Title, private _drawersService: DrawersService) {
    this.self_info.paragraph = GlobalStrings.paragraph.join(' ')
    this.self_info.extras = GlobalStrings.short_desc;
    this.quals = GlobalStrings.qualifications
    
   }

  ngOnInit(): void {
    this.titleService.setTitle( 'Jefferson Li - About me' );

  }

  f(){return 0}
  emitDrawers(){
    this._drawersService.openDrawer();
  }
}
