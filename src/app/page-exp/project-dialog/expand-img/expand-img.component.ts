import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-expand-img',
  templateUrl: './expand-img.component.html',
  styleUrls: ['./expand-img.component.scss'],
})
export class ExpandImgComponent implements OnInit {
  @Input() imgurl: string = undefined;

  constructor(
    public dialogRef: MatDialogRef<ExpandImgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { img: string }
  ) {
    this.imgurl = data.img;
  }

  ngOnInit(): void {}
}
