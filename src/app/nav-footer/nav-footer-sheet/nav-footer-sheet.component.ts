import { Component, OnInit, HostListener } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import * as GlobalStrings from '../../../strings.json';

@Component({
  selector: 'app-nav-footer-sheet',
  templateUrl: './nav-footer-sheet.component.html',
  styleUrls: ['./nav-footer-sheet.component.scss']
})
export class NavFooterSheetComponent implements OnInit {
  socials;
  expandResume: boolean = false;
  constructor(    
    private _bottomSheetRef: MatBottomSheetRef<NavFooterSheetComponent>) {
      this.socials = GlobalStrings.socials
      this.getScreenSize();

     }

  ngOnInit(): void {
  }
  defKeyorder(){
    return 0;
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.expandResume = window.innerWidth > 1200;
  }
}
