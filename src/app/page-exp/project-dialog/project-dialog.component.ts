import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { ExpandImgComponent } from './expand-img/expand-img.component';
import * as GlobalStrings from '../../../strings.json';

export interface DialogData {
  project;
}
@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss'],
})
export class ProjectDialogComponent implements OnInit {
  project;
  globText;
  curPicIndex;
  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
  ) {
    this.project = { ...{ name: data.project.key }, ...data.project.value };
    this.globText = GlobalStrings['dialog'];
    this.curPicIndex = -1;
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  getImage() {
    if (this.curPicIndex >= this.project.modal_details.detail_pics.length) {
      return '';
    }
    this.curPicIndex += 1;
    return this.curPicIndex;
  }
  expandImg(img: string) {
    this.dialog.open(ExpandImgComponent, {
      width: '80vw',
      maxHeight: '80vh',
      data: { img },
    });
  }
  f() {
    return 0;
  }
}
