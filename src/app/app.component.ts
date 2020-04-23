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
  aboutmeText;
  expText;
  constructor(private _drawersService: DrawersService){
    this.closeText = GlobalStrings.dialog["dialog-close"];


    _drawersService.DrawerSubject$.subscribe(()=>{
      this.toggleDrawers()
    })
    _drawersService.TransSubject$.subscribe(()=>{
      console.log('got')
      this.transition()
    })
  }
  ngOnInit(){
    let vid:any = document.getElementById("music");
    vid.volume = 0.5;
  }
  toggleDrawers(){
    this.aboutmeText = GlobalStrings["page-titles"][0];
    this.expText = GlobalStrings["page-titles"][1];
    this.drawer.toggle();
    this.drawerEnd.toggle();
  }
  transition(){
    this.aboutmeText = this.expText = ''
    this.drawer.toggle();
    this.drawerEnd.toggle();
    setTimeout(()=>{
      this.drawer.toggle();
      this.drawerEnd.toggle();
    },500)
  }
}
