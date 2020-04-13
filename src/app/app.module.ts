import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule, pageComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { TitlePageComponent } from './page-about/title-page/title-page.component';
import { AboutBlockComponent } from './page-about/about-block/about-block.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavFooterSheetComponent } from './nav-footer/nav-footer-sheet/nav-footer-sheet.component';
import { ProjectBoxesComponent } from './page-exp/project-boxes/project-boxes.component';
import { DatePipePipe } from './page-exp/date-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    TitlePageComponent,
    pageComponents,
    AboutBlockComponent,
    NavFooterComponent,
    NavFooterSheetComponent,
    ProjectBoxesComponent,
    DatePipePipe
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
  ],
  exports: [
    DatePipePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
