import { Component, OnInit, Input } from '@angular/core';
import * as GlobalStrings from './../../strings.json';
import { DrawersService } from './../drawers.service' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  @Input() page: string; 
  name;
  constructor(private _drawersService: DrawersService, private router: Router) {
    this.name = GlobalStrings.my_name;
   }

  ngOnInit(): void {
  }
  transition(){
    this._drawersService.transition();
    setTimeout(() => {
      this.router.navigate(['/'])
    }
    , 500);
  }

}
