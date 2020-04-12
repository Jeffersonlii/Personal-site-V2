import { Component, OnInit } from '@angular/core';
import * as GlobalStrings from '../../strings.json';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {NavFooterSheetComponent} from './nav-footer-sheet/nav-footer-sheet.component'
@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent implements OnInit {
  footer_text_fun: string;
  footer_text_notfun: string;

  constructor(private _bottomSheet: MatBottomSheet) {
    this.footer_text_fun = GlobalStrings["footer text"].fun;
    this.footer_text_notfun = GlobalStrings["footer text"].notfun;
  }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(NavFooterSheetComponent);
  }  
  defKeyorder(){
    return 0;
  }
  
}