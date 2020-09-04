import { Component, OnInit, Input } from '@angular/core';
import * as GlobalStrings from './../../strings.json';
import { DrawersService } from './../drawers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  @Input() page: string;
  name;
  dropDownExpanded;

  redirMap: any = {
    [GlobalStrings['page-titles'][0]]: '/about',
    [GlobalStrings['page-titles'][1]]: '/exp',
    [GlobalStrings['page-titles'][2]]: '/',
  };
  other2Pages;
  constructor(private _drawersService: DrawersService, private router: Router) {
    this.name = GlobalStrings.my_name;
    this.dropDownExpanded = false;
  }

  ngOnInit(): void {
    this.other2Pages = GlobalStrings['page-titles']
      .filter((el) => el != this.page)
      .sort();
  }

  onclickNav() {
    this.dropDownExpanded = !this.dropDownExpanded;
  }

  transition(path) {
    this._drawersService.transition();
    setTimeout(() => {
      this.router.navigate([path]);
    }, 500);
  }
}
