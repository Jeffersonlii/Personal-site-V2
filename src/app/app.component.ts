import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawersService } from './drawers.service' 
import * as GlobalStrings from './../strings.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  @ViewChild('drawer', { static: true }) drawer: MatSidenav;
  @ViewChild('drawerEnd', { static: true }) drawerEnd: MatSidenav;
  title = 'Personal-site-V2';
  closeText;
  constructor(private _drawersService: DrawersService){
    this.closeText = GlobalStrings.dialog["dialog-close"];
    _drawersService.DrawerSubject$.subscribe(()=>{
      this.toggleDrawers()
    })
  }
  ngOnInit(){
    let vid:any = document.getElementById("music");
    vid.volume = 0.5;
  }
  toggleDrawers(){
    this.drawer.toggle();
    this.drawerEnd.toggle()
  }
}
