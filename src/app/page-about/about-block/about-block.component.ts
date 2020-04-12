import { Component, OnInit } from '@angular/core';
import * as GlobalStrings from '../../../strings.json';

@Component({
  selector: 'app-about-block',
  templateUrl: './about-block.component.html',
  styleUrls: ['./about-block.component.scss']
})


export class AboutBlockComponent implements OnInit {
  quals;
  constructor( ) {
    this.quals = GlobalStrings.qualifications
    console.log(this.quals['Technical Skills'])
  } 
  

  ngOnInit(): void {
  }

  defKeyorder(){
    return 0;
  }
}
