import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, pageComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';

import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavFooterSheetComponent } from './nav-footer/nav-footer-sheet/nav-footer-sheet.component';
import { DatePipePipe } from './page-exp/date-pipe.pipe';
import { ProjectDialogComponent } from './page-exp/project-dialog/project-dialog.component';
import { PageNameComponent } from './page-name/page-name.component';


@NgModule({
  declarations: [
    AppComponent,
    pageComponents,
    NavFooterComponent,
    NavFooterSheetComponent,
    DatePipePipe,
    ProjectDialogComponent,
    PageNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSidenavModule,
  ],
  exports: [
    DatePipePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
