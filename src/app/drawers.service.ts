import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DrawersService {
  constructor() { }

  private DrawerSubject = new Subject<any>();
  DrawerSubject$ = this.DrawerSubject.asObservable();

  private TransSubject = new Subject<any>();
  TransSubject$ = this.TransSubject.asObservable();
  openDrawer() {
    this.DrawerSubject.next();
  }
  transition(){
    this.TransSubject.next();
  }
}
