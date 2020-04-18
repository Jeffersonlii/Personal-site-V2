import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as GlobalStrings from '../../../strings.json';

export interface DialogData {
   project;
}
@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {
  project;
  closeText;
  curPicIndex;
  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.project = {...{'name': data.project.key}, ... data.project.value}
    console.log(this.project)
    this.closeText = GlobalStrings["dialog-close"]
    this.curPicIndex = -1;
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  getImage(){
    if(this.curPicIndex >= this.project.modal_details.detail_pics.length ){
      return '';
    }
    this.curPicIndex += 1
    return this.curPicIndex;
  }
}
