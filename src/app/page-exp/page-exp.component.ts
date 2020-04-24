import { Component, OnInit } from '@angular/core';
import * as GlobalStrings from '../../strings.json';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { Title }     from '@angular/platform-browser';
import { DrawersService } from '../drawers.service' 

@Component({
  selector: 'app-page-exp',
  templateUrl: './page-exp.component.html',
  styleUrls: ['./page-exp.component.scss']
})
export class PageExpComponent implements OnInit {


  experiences: any;
  showJobs: boolean = true;
  showProjs: boolean = true;
  page;
  constructor( private _drawersService: DrawersService,
    private _snackBar: MatSnackBar, public dialog: MatDialog, private titleService: Title) {
    this.experiences = {...GlobalStrings.projects, ...GlobalStrings['work exp']}
    this.page = GlobalStrings["page-titles"][1]
  }
  ngOnInit(): void {
    this.titleService.setTitle( 'Jefferson Li - Experiences' );

  }
  filerExp(type: string, $event){
    switch (type) {
      case 'work':
        this.showJobs = $event.checked;
        if (this.showJobs){
          this.experiences = {...this.experiences, ...GlobalStrings['work exp']} 
        }
        else{
          Object.keys(GlobalStrings['work exp']).forEach(element => {
            delete this.experiences[element];
          });
        }
        break;
      default:
        this.showProjs =  $event.checked;
        if (this.showProjs){
          this.experiences = {...this.experiences, ...GlobalStrings['projects']} 
        }
        else{
          Object.keys(GlobalStrings['projects']).forEach(element => {
            delete this.experiences[element];
          });
        }
        break;
    }
    let message: string = "";
    if (this.showJobs === this.showProjs){
      message = this.showJobs ? GlobalStrings.toasts.both : GlobalStrings.toasts.none;
    }
    else{
      message = this.showJobs ? GlobalStrings.toasts.work : GlobalStrings.toasts.projects ;
    }
    if (message != ''){
      this._snackBar.open(message, 'Okay', {
        duration: 2000,
      });
    }
  }

  keyPipeSort(a ,b){
    const a_time = a.value.time.split("-")[0].trim();
    const b_time = b.value.time.split("-")[0].trim();
    
    return (new Date(b_time)).getTime() - (new Date(a_time)).getTime();
  }

  openDialog(project): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100vw',
      height: '100vh',

      data: {project: project}
    });
  }
  emitDrawers(){
    this._drawersService.openDrawer();
  }
}
