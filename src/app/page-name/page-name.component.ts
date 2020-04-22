import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as GlobalStrings from '../../strings.json';
import { DrawersService } from '../drawers.service' 
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-page-name',
  templateUrl: './page-name.component.html',
  styleUrls: ['./page-name.component.scss']
})
export class PageNameComponent implements OnInit {
  @Output() openDrawers = new EventEmitter<boolean>();
  name = {name: ''};
  constructor( private _drawersService: DrawersService, private titleService: Title) {}

  ngOnInit(): void {
    setTimeout(()=>this.typeit(this.name, 'name', GlobalStrings.my_name, 100),600)
    this.titleService.setTitle( 'Jefferson Li' );

  }
  async typeit(obj, key, str, speed, i = 0){
    if(str.length > i){
      obj[key] += str.charAt(i)
      await new Promise(resolve => setTimeout(()=>this.typeit(obj,key,str,speed, i + 1),
       str.charAt(i + 1) === ' ' || str.charAt(i + 1) === '.' ? speed * 3 : speed))
    }
  }

  emitDrawers(){
    this._drawersService.openDrawer();
  }
}
